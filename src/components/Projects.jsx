import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'eShop Back Office',
      tech: ['Spring Boot', 'Angular', 'MySQL'],
      desc: 'Ooredoo - Stage PFE 2024',
      details:
        'A comprehensive back-office management system for e-commerce operations, featuring inventory management, order processing, and analytics dashboard.',
      features: [
        'Real-time inventory tracking',
        'Order management',
        'Analytics dashboard',
        'User role management',
      ],
      image: '/images/app-ooredoo.png',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Harmonia',
      tech: ['JavaFX', 'Symfony', 'MySQL'],
      desc: 'Gestion des signalements citoyens',
      details:
        'Civic engagement platform enabling citizens to report issues and track their resolution in real-time.',
      features: [
        'Issue reporting system',
        'Real-time tracking',
        'Admin dashboard',
        'Notification system',
      ],
      image: '/images/app-harmonia.png',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Energym',
      tech: ['FlutterFlow', 'Firebase'],
      desc: 'Application mobile de salle de sport',
      details:
        'Mobile fitness application for gym management with workout tracking, membership management, and scheduling.',
      features: [
        'Workout tracking',
        'Class scheduling',
        'Membership management',
        'Progress analytics',
      ],
      image: '/images/app-energym.png',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: "Gestion Jardins d'Enfants",
      tech: ['Spring Boot', 'Thymeleaf', 'PostgreSQL'],
      desc: 'Application web de gestion',
      details:
        'Comprehensive kindergarten management system for tracking student attendance, activities, and parent communication.',
      features: [
        'Student management',
        'Attendance tracking',
        'Parent portal',
        'Activity scheduling',
      ],
      image: '/images/app-kidos.png',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const currentProject = projects[activeProject];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="section-title flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          <h2 className="text-3xl font-bold text-white">“ My Projects ”</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="flex gap-8 items-start">
          {/* Numbered Navigation */}
          <div className="flex flex-col gap-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                  activeProject === i
                    ? 'bg-gradient-to-br from-purple-400 to-violet-600 text-white shadow-lg shadow-purple-500/50 scale-110'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700 hover:border-purple-500/30'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className="flex-1 backdrop-blur-md bg-gray-900/40 rounded-3xl border border-purple-500/20 p-8 min-h-[500px]">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Text */}
              <div className="space-y-6 lg:order-1 order-1">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentProject.title}
                  </h3>
                  <p className="text-purple-400 text-sm mb-4">
                    {currentProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 rounded-full bg-gray-800/60 border border-purple-500/30 text-purple-300 text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {currentProject.details}
                  </p>

                  <div>
                    <h4 className="text-white font-semibold mb-3 text-lg">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentProject.features.map((f, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-gray-400 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual – image or emoji */}
              <div
  className={`
    h-70 lg:h-80 
    rounded-2xl 
    flex items-center justify-center 
   
    lg:order-2 order-2 
    mt-8 lg:mt-0 
    overflow-hidden 
    p-4 
    transition-transform duration-300 
    hover:scale-105
  `}
>
  {typeof currentProject.image === 'string' && currentProject.image.startsWith('/') ? (
    // Real image
    <img
      src={currentProject.image}
      alt={currentProject.title}
      className="
        max-w-full max-h-full 
        object-contain 
        rounded-xl 
      "
    />
  ) : (
    // Emoji fallback
    <span className="text-8xl">{currentProject.image}</span>
  )}
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;