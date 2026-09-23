import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { projects } from '../data/projects';

const Projects = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const openProject = (id) => {
    navigate(`/project/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="section-title flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          <h2 className="text-3xl font-bold text-white">“ {t.projects.title} ”</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => openProject(project.id)}
              className="project-card group text-left backdrop-blur-md bg-gray-900/40 rounded-3xl border border-purple-500/20 p-6 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
            >
              <div className="h-44 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden mb-6 p-4">
                {typeof project.image === 'string' && project.image.startsWith('/') ? (
                  <img
                    src={project.image}
                    alt={project.title[language] || project.title.en}
                    className="max-w-full max-h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-6xl">{project.image}</span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-purple-300">
                {project.title[language] || project.title.en}
              </h3>
              <p className="text-purple-400 text-sm mb-4">
                {project.desc[language] || project.desc.en}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-gray-800/60 border border-purple-500/30 text-purple-300 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold">
                {t.projects.viewDetails}
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;