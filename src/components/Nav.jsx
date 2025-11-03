// // src/components/Nav.jsx
// import React from 'react';

// const Nav = ({ isDarkMode, activeSection, setActiveSection }) => {
//   // Helper – scroll to the element with the given id
//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//     setActiveSection(id);
//   };

//   return (
//     <nav
//       className={`
//         fixed top-0 w-full z-50 backdrop-blur-md border-b
//         transition-colors duration-500
//         ${isDarkMode
//           ? 'bg-[#0a0e1a]/50 border-purple-500/20'
//           : 'bg-white/50 border-gray-200'}
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//           YA
//         </div>

//         {/* Nav links */}
//         <div className="flex gap-8">
//           {['About', 'Skills', 'Projects', 'Contact'].map((item) => {
//             const id = item.toLowerCase();
//             return (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(id)}
//                 className={`
//                   transition-colors duration-300
//                   ${isDarkMode
//                     ? 'text-gray-300 hover:text-purple-400'
//                     : 'text-gray-700 hover:text-purple-600'}
//                   ${activeSection === id ? 'font-semibold underline underline-offset-4' : ''}
//                 `}
//               >
//                 {item}
//               </button>
//             );
//           })}
//         </div>

//         {/* Resume button */}
//         <a
//           className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg
//                      hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-white"
//           href="https://www.canva.com/design/DAGenPMFvGg/WzAD9CDYbrUop6gwgJwPbQ/view"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Resume
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Nav;









import React, { useState, useEffect } from 'react';

const Nav = ({
  isDarkMode,
  activeSection,
  setActiveSection,
  toggleTheme,
  isPlaying,
  isMuted,
  toggleAudio,
  toggleMute
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
    setIsSidebarOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${isScrolled
            ? isDarkMode
              ? 'bg-[#1a1d29]/95 backdrop-blur-lg shadow-lg shadow-black/20'
              : 'bg-white/95 backdrop-blur-lg shadow-lg shadow-gray-200/50'
            : isDarkMode
              ? 'bg-transparent'
              : 'bg-transparent'
          }
        `}
      > */}

      <nav
        className={`
        fixed top-0 w-full z-50 backdrop-blur-md border-b
        transition-colors duration-500
        ${isDarkMode
            ? 'bg-[#0a0e1a]/50 border-purple-500/20'
            : 'bg-white/50 border-gray-200'}
      `}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Section */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-3 group cursor-pointer">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                YA
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`
                      relative px-4 py-2 rounded-lg font-medium text-sm
                      transition-all duration-300 group
                      ${isDarkMode
                        ? isActive
                          ? 'text-white bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                        : isActive
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.name}
                    {isActive && (
                      <span className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full
                        ${isDarkMode
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                          : 'bg-gradient-to-r from-purple-600 to-blue-600'}
                      `} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-2">
              {/* Audio Controls - Desktop Only */}
              <div className="hidden md:flex items-center gap-2 mr-2">
                <button
                  onClick={toggleAudio}
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    ${isDarkMode
                      ? 'text-gray-400 hover:bg-gray-500/10 hover:text-purple-300'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-purple-700'
                    }
                  `}
                  title={isPlaying ? 'Pause Music' : 'Play Music'}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    ${isDarkMode
                      ? 'text-gray-400 hover:bg-blue-500/10 hover:text-blue-300'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                    }
                  `}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={toggleTheme}
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    ${isDarkMode
                      ? 'text-gray-400 hover:bg-gray-500/10 hover:text-yellow-300'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-yellow-700'
                    }
                  `}
                  title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >

                  {isDarkMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}

                </button>
              </div>

              {/* Resume Button */}

              <div className="flex items-center gap-4 w-full max-w-2xl">
                <a
                  href="https://www.canva.com/design/DAGenPMFvGg/WzAD9CDYbrUop6gwgJwPbQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-2.5
                              bg-transparent font-semibold text-sm 
                              rounded-lg border-2 transition-all duration-300
                              hover:translate-x-2 shadow-md backdrop-blur-sm
                            ${isDarkMode
                      ? 'text-white border-white/20 hover:bg-gray-500/10 hover:border-white/40 hover:shadow-purple-800/50'
                      : 'text-gray-800 border-gray-300/50 hover:bg-gray-200/40 hover:border-gray-300 hover:shadow-purple-600/40'
                    }
                            `}
                  aria-label="Download Resume" >
                  <span>Resume</span>
                  <i className="bi bi-arrow-right text-lg"></i>
                </a>
              </div>



              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className={`
                  md:hidden p-2 rounded-lg transition-colors duration-300
                  ${isDarkMode
                    ? 'text-gray-300 hover:bg-white/10'
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Full Page Menu */}
      {isSidebarOpen && (
        <div
          // className={`
          //   fixed inset-0 z-50 md:hidden
          //   ${isDarkMode ? 'bg-[#0a0e1a]' : 'bg-white'}
          //   overflow-y-auto
          // `}

className={`
        fixed top-0 w-full z-50 backdrop-blur-md border-b
        transition-colors duration-500
        ${isDarkMode
            ? 'bg-[#0a0e1a]/50 border-purple-500/20'
            : 'bg-white/50 border-gray-200'}
      `}

        >
          {/* Menu Content Container */}
          <div className="min-h-screen flex flex-col">
            {/* Header with Logo and Close */}
            <div className={`
              flex items-center justify-between p-6 border-b
              ${isDarkMode ? 'border-white/10' : 'border-gray-200'}
            `}>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  YA
                </div>
              </div>

              <button
                onClick={() => setIsSidebarOpen(false)}
                className={`
                  p-2 rounded-lg transition-colors
                  ${isDarkMode
                    ? 'text-gray-400 hover:bg-white/10'
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items - Centered */}
            <nav className="flex-1 flex flex-col justify-center items-center px-6 py-8 space-y-4 max-w-md mx-auto w-full">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`
                      w-30 flex items-center justify-center px-6 py-4 rounded-xl font-semibold text-sm
                      transition-all duration-300
                      ${isDarkMode
                        ? isActive
                          ? 'text-white border-2 bg-purple-500/10 border-purple-500/30 text-purple-300'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white border-2 border-transparent'
                        : isActive
                          ? 'text-gray-900 bg-purple-50 border-2 border-purple-300'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-2 border-transparent'
                      }
                    `}
                  >
                    {item.name}
                  </button>
                );
              })}


            </nav>

            {/* Footer */}
            <div className={` w-full flex justify-center gap-4 pt-4
              p-6 border-t
              ${isDarkMode ? 'border-white/10' : 'border-gray-200'}
            `}>

              {/* Audio Controls in Mobile Menu */}

              <button
                onClick={toggleAudio}
                className={`
    p-4 rounded-xl transition-all duration-300 border-2
    ${isDarkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-white border-2 border-transparent'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-2 border-transparent'
                  }
  `}
                title={isPlaying ? 'Pause Music' : 'Play Music'}
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                onClick={toggleMute}
                className={`
    p-4 rounded-xl transition-all duration-300 border-2
    ${isDarkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-white border-2 border-transparent'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-2 border-transparent'
                  }
  `}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>

              <button
                onClick={toggleTheme}
                className={`
    p-4 rounded-xl transition-all duration-300 border-2
    ${isDarkMode
                    ? 'text-gray-300 hover:bg-white/5 hover:text-white border-2 border-transparent'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-2 border-transparent'
                  }
  `}
                title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <a
                href="https://www.canva.com/design/DAGenPMFvGg/WzAD9CDYbrUop6gwgJwPbQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className={`
    flex items-center gap-3 
    px-4 py-2.5
    bg-transparent 
    font-semibold text-sm 
    rounded-lg
    border-2 
    transition-all duration-300
    hover:translate-x-2
    shadow-md 
    backdrop-blur-sm
    ${isDarkMode
                    ? 'text-white border-white/20 hover:bg-gray-500/10 hover:border-white/40 hover:shadow-purple-800/50'
                    : 'text-gray-800 border-gray-300/50 hover:bg-gray-200/40 hover:border-gray-300 hover:shadow-purple-600/40'
                  }
  `}
              >
                <span>Resume</span>
                <i className="bi bi-arrow-right text-lg"></i>
              </a>

            </div>




          </div>
        </div>
      )}
    </>
  );
};

export default Nav;