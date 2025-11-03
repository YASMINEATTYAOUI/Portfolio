import React from 'react';

const Skills = () => {

  return (
    <section className="skills-section py-20 px-6">
      <h1 className="section-title autoDisplay text-4xl md:text-5xl font-bold text-center mb-12 text-white">
        My Skills [Strength]
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="Designer group bg-[#1a1d29] backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Designer
              </h1>
              <i className="bx bx-laptop text-4xl text-gray-400 group-hover:text-purple-400 transition-colors"></i>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I have expertise in HTML, CSS, JavaScript, and design tools like Figma and Adobe XD. My strength lies in blending aesthetics with functionality to create seamless user experiences.
            </p>
          </div>

          <div className="coder group bg-[#1a1d29] backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Coder
              </h1>
              <i className="bx bx-code-block text-4xl text-gray-400 group-hover:text-purple-400 transition-colors"></i>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I'm skilled in HTML, CSS, JavaScript, and frameworks like React and Node.js. I also have experience with database management using MongoDB and MySQL.
            </p>
          </div>
        </div>

        {/* Infinite Left-Moving Avatar Slider */}
        <div className="slider-container overflow-hidden">
          <div className="slider-track animate-slide-left">
            {/* First set */}
            {[...Array(9)].map((_, i) => (
              <div key={i} className="slider-item">
                <img
                  src="/images/yas_avatar.png"
                  alt="Avatar"
                  className="w-20 h-20 rounded-full object-cover border-4 border-purple-500/30"
                />
              </div>
            ))}

            {/* Duplicate set for infinite loop */}
            {[...Array(9)].map((_, i) => (
              <div key={i + 9} className="slider-item">
                <img
                  src="/logos/angular.png"
                  alt="Avatar"
                  className="w-20 h-20 rounded-full object-cover border-4 border-purple-500/30"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Skills;