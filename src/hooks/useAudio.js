import { useState, useRef, useEffect } from 'react';

export const useAudio = (audioSrc) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(true);

  // Set audio source + load
  useEffect(() => {
    if (audioRef.current && audioSrc) {
      audioRef.current.src = audioSrc;
      audioRef.current.load(); // Critical!
    }
  }, [audioSrc]);

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

      // Clean up listeners
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };

    // Add multiple interaction types
    document.addEventListener('click', unlockAudio);
    document.addEventListener('keydown', unlockAudio);
    document.addEventListener('touchstart', unlockAudio); // Mobile!

    return () => {
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    };
  }, []); // Run once only!

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
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
    showSoundPrompt,
    toggleAudio,
    toggleMute,
  };
};