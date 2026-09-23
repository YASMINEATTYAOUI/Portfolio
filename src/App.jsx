// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PortfolioScene from './components/PortfolioScene';
import Nav from './components/Nav';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import { useAudio } from './hooks/useAudio';
import { useLanguage } from './i18n';
import './index.css';

const App = () => {
  const { t } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const {
    audioRef,
    isPlaying,
    isMuted,
    showSoundPrompt,
    toggleAudio,
    toggleMute,
  } = useAudio();

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // -------------------------------------------------
  // Scroll to top when changing routes
  // -------------------------------------------------
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);

  // -------------------------------------------------
  // Document title
  // -------------------------------------------------
  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'Yasmine Attyaoui - Portfolio';
    }
  }, [location.pathname]);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      {/* ---------- GLOBAL ANIMATIONS & SOUND PROMPT ---------- */}
      <style>{`
        /* Scroll-in animations */
        .animate-in.section-title { animation: scaleIn 0.8s ease-out forwards; }
        .animate-in.skill-card   { animation: slideUp 0.8s ease-out forwards; }
        .animate-in.project-card { animation: scaleUp 0.9s cubic-bezier(0.68,-0.55,0.265,1.55) forwards; }
        .animate-in.about-content{ animation: slideRight 1s ease-out forwards; }
        .animate-in.trait-badge  { animation: popIn 0.5s cubic-bezier(0.68,-0.55,0.265,1.55) forwards; }

        @keyframes scaleIn    { from{opacity:0;transform:scale(.5)} to{opacity:1;transform:scale(1)} }
        @keyframes slideUp    { from{opacity:0;transform:translateY(60px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleUp    { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
        @keyframes slideRight { from{opacity:0;transform:translateX(-50px)} to{opacity:1;transform:translateX(0)} }
        @keyframes popIn      { from{opacity:0;transform:scale(0)} to{opacity:1;transform:scale(1)} }

        .section-title,.skill-card,.project-card,.about-content,.trait-badge { opacity: 0; }

        .skill-card:nth-child(1) { animation-delay: 0s; }
        .skill-card:nth-child(2) { animation-delay: .15s; }
        .skill-card:nth-child(3) { animation-delay: .3s; }
        .skill-card:nth-child(4) { animation-delay: .45s; }
        .skill-card:nth-child(5) { animation-delay: .6s; }
        .skill-card:nth-child(6) { animation-delay: .75s; }

        .project-card:nth-child(1) { animation-delay: 0s; }
        .project-card:nth-child(2) { animation-delay: .2s; }
        .project-card:nth-child(3) { animation-delay: .4s; }
        .project-card:nth-child(4) { animation-delay: .6s; }

        .trait-badge:nth-child(1) { animation-delay: .3s; }
        .trait-badge:nth-child(2) { animation-delay: .4s; }
        .trait-badge:nth-child(3) { animation-delay: .5s; }
        .trait-badge:nth-child(4) { animation-delay: .6s; }
        .trait-badge:nth-child(5) { animation-delay: .7s; }

        /* Sound prompt */
        .sound-prompt { animation: fadeInPulse 2s ease-in-out infinite; }
        @keyframes fadeInPulse { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        .sound-icon { animation: ripple 2s ease-out infinite; }
        @keyframes ripple {
        0% {
            box-shadow: 
            0 0 0 0   rgba(168, 85, 247, 0.6),   /* Purple with high opacity */
            0 0 0 10px rgba(168, 85, 247, 0.5), 
            0 0 0 20px rgba(168, 85, 247, 0.4);
          }
        100% {
            box-shadow: 
            0 0 0 10px rgba(168, 85, 247, 0.5), 
            0 0 0 20px rgba(168, 85, 247, 0.3), 
            0 0 0 40px rgba(168, 85, 247, 0);
        } 
}

.skills-video-box{
    position: absolute;
    right: 3%;
}

.skills-video{
    height: 900px;
    mix-blend-mode:lighten;
}


/* Skills section */
.skills-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.skills-box{
    width: 100%;
    height: 90vh;
    position: relative;
    display: flex;
    align-items: start;
    justify-content: center;
    mix-blend-mode:lighten;
    opacity: 0.7;
}

.skills-image{
    width: 70%;
    mix-blend-mode:difference;
}

.skills-box{
        height: 120vh;
        margin-right: 30px;
    }

    .skills-video-box{
    position: absolute;
    right: 3%;
}

.skills-video{
    height: 900px;
    mix-blend-mode:lighten;
}

          
      `}</style>

      {/* ---------- 3D BACKGROUND (full screen, behind) ---------- */}
      <PortfolioScene isDarkMode={isDarkMode} />

      {/* ---------- AUDIO ELEMENT ---------- */}
      <audio ref={audioRef} loop preload="auto" />

      {/* ---------- SOUND PROMPT MODAL ---------- */}
      {showSoundPrompt && (
        <div className="sound-prompt fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="sound-icon relative mx-auto w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            </div>
            <p className="text-white text-lg font-medium">{t.sound.enable}</p>
          </div>
        </div>
      )}

      {/* ---------- PAGE CONTENT (scrollable, semi-transparent) ---------- */}
      <div className={`relative w-full min-h-screen overflow-x-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0e1a]' : 'bg-gray-50'}`}>
        {/* Navigation */}
        <Nav
          isDarkMode={isDarkMode}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isPlaying={isPlaying}
          isMuted={isMuted}
          toggleTheme={toggleTheme}
          toggleAudio={toggleAudio}
          toggleMute={toggleMute}
        />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isDarkMode={isDarkMode}
                setActiveSection={setActiveSection}
              />
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        {/* Footer */}
        <footer
          className={`
            backdrop-blur-md border-t py-8 transition-colors duration-500
            ${isDarkMode
              ? 'bg-gray-900/50 border-purple-500/20 text-gray-400'
              : 'bg-white/50 border-gray-200 text-gray-600'}
          `}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p>© 2025 Yasmine Attyaoui. {t.footer.rights}</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;