import React from 'react';

const Skills = () => {
  // Your 10 logo paths - update if your folder is different!
  const logos = [
    "/logos/react.png",
    "/logos/tailwind.png",
    "/logos/nodejs.png",
    // "/logos/mongodb.png",
    "/logos/figma.png",
    "/logos/git.png",
    "/logos/vscode.png",
    "/logos/javascript.png",
    "/logos/html.png",
    // "/logos/css.png"
  ];

  return (
    <>
      {/* Tailwind CSS Keyframes (Add this in your global CSS or <style> tag) */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-left {
          animation: slide-left 25s linear infinite;
        }

        .slider-container:hover .animate-slide-left {
          animation-play-state: paused;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-bleu via-purple-900/20 to-black">
        <div className="max-w-5xl w-full">
          {/* Section Title */}
          <div className="section-title flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <h2 className="text-3xl md:text-3xl font-bold text-white text-center whitespace-nowrap">
                 “ Skills & Technologies ”
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Designer Card */}
            <div className="group bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Designer
                </h3>
                <i className="bx bx-laptop text-lg text-gray-400 group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110"></i>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Passionate about crafting pixel-perfect UIs with <strong>Figma</strong>, <strong>Adobe XD</strong>, and modern CSS. I turn ideas into stunning, responsive designs.
              </p>
            </div>

            {/* Developer Card */}
            <div className="group bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Developer
                </h3>
                <i className="bx bx-code-block text-lg text-gray-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110"></i>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Full-stack wizard with <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Tailwind</strong>. I build fast, scalable apps that users love.
              </p>
            </div>
          </div>

          {/* Infinite Logo Slider */}
          <div className="slider-container overflow-hidden bg-black/30 backdrop-blur-md rounded-3xl py-10 border border-purple-500/20 shadow-2xl">
            {/* <div className="slider-track flex gap-12 animate-slide-left"> */}

            <div className="slider-track flex gap-16 md:gap-24 lg:gap-30 animate-slide-left">
              {/* First Set */}
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="slider-item flex-shrink-0 group/logo"
                >
                  <img
                    src={logo}
                    alt={`Tech logo ${i + 1}`}
                    className="w-20 h-20 rounded-2xl object-contain bg-white/10 p-4 border-2 border-purple-500/30 shadow-lg 
                               transition-all duration-300 group-hover/logo:scale-125 group-hover/logo:border-purple-400 
                               hover:shadow-purple-500/50"
                  />
                </div>
              ))}

              {/* Duplicate Set for Seamless Loop */}
              {logos.map((logo, i) => (
                <div
                  key={i + 10}
                  className="slider-item flex-shrink-0 group/logo"
                >
                  <img
                    src={logo}
                    alt={`Tech logo duplicate ${i + 1}`}
                    className="w-20 h-20 rounded-2xl object-contain bg-white/10 p-4 border-2 border-purple-500/30 shadow-lg 
                               transition-all duration-300 group-hover/logo:scale-125 group-hover/logo:border-purple-400 
                               hover:shadow-purple-500/50"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;