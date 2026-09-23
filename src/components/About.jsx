import React from 'react';
import { useLanguage } from '../i18n';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="section-title flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <h2 className="text-3xl font-bold text-white">  “ {t.about.title} ” </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        <div className="about-content backdrop-blur-md bg-gray-900/30 p-8 rounded-2xl border border-purple-500/20 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            {t.about.p1}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {t.about.p2}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {t.about.p3}
          </p>

          <div className="pt-6 border-t border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">{t.about.personality}</h3>
            <div className="flex flex-wrap gap-3">
              {t.about.traits.map((trait) => (
                <span key={trait} className="trait-badge px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 italic text-sm ">
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