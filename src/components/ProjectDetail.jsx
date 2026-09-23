import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { projects, getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const project = getProjectById(id);
  const index = projects.findIndex((p) => p.id === id);
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index >= 0 && index < projects.length - 1 ? projects[index + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project
      ? `${project.title[language] || project.title.en} - Yasmine Attyaoui`
      : 'Yasmine Attyaoui';
  }, [id, language, project]);

  if (!project) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-32">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-white">{t.projects.projectNotFound}</h1>
          <p className="text-gray-400">{t.projects.projectNotFoundDesc}</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm hover:opacity-90 transition-all duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            {t.projects.backHome}
          </Link>
        </div>
      </section>
    );
  }

  const meta = [
    { label: t.projects.year, value: project.year },
    { label: t.projects.role, value: project.role[language] || project.role.en },
    { label: t.projects.client, value: project.client[language] || project.client.en },
  ];

  return (
    <div className="min-h-screen px-6 py-28 max-w-5xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="mb-10 inline-flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t.projects.backToProjects}
      </button>

      {/* Hero card */}
      <div className="backdrop-blur-md bg-gray-900/40 rounded-3xl border border-purple-500/20 p-8 md:p-12 mb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="h-60 lg:h-80 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden p-6">
            <img
              src={project.image}
              alt={project.title[language] || project.title.en}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {project.title[language] || project.title.en}
              </h1>
              <p className="text-purple-400">{project.desc[language] || project.desc.en}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{m.label}</p>
                  <p className="text-sm text-white font-medium">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-gray-800/60 border border-purple-500/30 text-purple-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white text-sm font-semibold hover:border-purple-400/60 hover:text-purple-300 transition-all duration-300"
                >
                  GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:opacity-90 transition-all duration-300"
                >
                  {language === 'fr' ? 'Voir le projet' : 'Live Demo'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l8 8m0 0V9m0 6h-6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L9 15" transform="translate(-1 -1)" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overview + Features */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 mb-10">
        <div className="backdrop-blur-md bg-gray-900/30 p-8 rounded-3xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4">{t.projects.overview}</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {project.overview[language] || project.overview.en}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {project.details[language] || project.details.en}
          </p>
        </div>

        <div className="backdrop-blur-md bg-gray-900/30 p-8 rounded-3xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4">{t.projects.features}</h2>
          <ul className="space-y-3">
            {(project.features[language] || project.features.en).map((f, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Prev / Next navigation */}
      {(prevProject || nextProject) && (
        <div className="flex gap-6 mb-10">
          {prevProject && (
            <button
              onClick={() => navigate(`/project/${prevProject.id}`)}
              className="flex-1 text-left backdrop-blur-md bg-gray-900/30 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {language === 'fr' ? 'Projet précédent' : 'Previous project'}
              </p>
              <div className="flex items-center gap-3 text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {prevProject.title[language] || prevProject.title.en}
              </div>
            </button>
          )}
          {nextProject && (
            <button
              onClick={() => navigate(`/project/${nextProject.id}`)}
              className="flex-1 text-right backdrop-blur-md bg-gray-900/30 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {language === 'fr' ? 'Projet suivant' : 'Next project'}
              </p>
              <div className="flex items-center justify-end gap-3 text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">
                {nextProject.title[language] || nextProject.title.en}
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          )}
        </div>
      )}

      {/* Explore more */}
      <div className="text-center">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border-2 border-purple-500/30 text-purple-300 font-semibold text-sm hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300"
        >
          {t.projects.exploreMore}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;