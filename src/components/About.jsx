import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="section-title flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        <div className="about-content backdrop-blur-md bg-gray-900/30 p-8 rounded-2xl border border-purple-500/20 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Étudiante ingénieure en informatique à l'ESPRIT, je suis passionnée par le développement full-stack et la création de solutions innovantes.
          </p>
          <p className="text-gray-300 leading-relaxed">
            J'ai récemment effectué mon stage de fin d'études chez Ooredoo où j'ai conçu et développé une application de back office e-Shop utilisant Spring Boot, Spring Security, Angular et MySQL.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Je conçois et intègre des solutions performantes avec rigueur et proactivité. Mon esprit collaboratif et innovant me permet d'optimiser chaque projet.
          </p>

          <div className="pt-6 border-t border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Personnalité</h3>
            <div className="flex flex-wrap gap-3">
              {['Créativité', 'Pensée critique', 'Leadership', 'Collaborative', 'Proactive'].map((trait) => (
                <span key={trait} className="trait-badge px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;