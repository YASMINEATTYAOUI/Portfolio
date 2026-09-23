import { useState, useRef, useEffect } from 'react';

const DEFAULT_SRC = '/music/background-music.wav';

export const useAudio = (audioSrc = DEFAULT_SRC) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Set audio source + load
  useEffect(() => {
    if (audioRef.current && audioSrc) {
      audioRef.current.src = audioSrc;
      audioRef.current.volume = 0.5;
      audioRef.current.preload = 'auto';
      audioRef.current.load();
      setHasError(false);
    }
  }, [audioSrc]);

  // Keep isPlaying state in sync with the element
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const sync = () => setIsPlaying(!el.paused && !el.ended);
    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    el.addEventListener('playing', sync);
    el.addEventListener('pause', sync);
    el.addEventListener('ended', sync);
    el.addEventListener('error', onError);

    return () => {
      el.removeEventListener('playing', sync);
      el.removeEventListener('pause', sync);
      el.removeEventListener('ended', sync);
      el.removeEventListener('error', onError);
    };
  }, [audioRef]);

  // First interaction: unlock audio + play
  useEffect(() => {
    let hasInteracted = false;

    const unlockAudio = () => {
      if (hasInteracted) return;
      hasInteracted = true;
      setShowSoundPrompt(false);

      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.warn('Play failed:', err);
          setIsPlaying(false);
        });
      }

      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };

    document.addEventListener('click', unlockAudio);
    document.addEventListener('keydown', unlockAudio);
    document.addEventListener('touchstart', unlockAudio);

    return () => {
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    const el = audioRef.current;
    if (!el.paused && !el.ended) {
      el.pause();
    } else {
      // Re-apply source if it failed to decode earlier
      if (el.src && !el.src.endsWith('background-music.wav')) {
        el.src = DEFAULT_SRC;
      }
      el.play().catch(() => {});
    }
    setIsPlaying(!(el.paused && !el.ended));
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return {
    audioRef,
    isPlaying,
    isMuted,
    hasError,
    showSoundPrompt,
    toggleAudio,
    toggleMute,
  };
};