import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: 'Welcome, I am',
      name: 'Yasmine Attyaoui',
      role: 'Full-Stack Developer',
      intro:
        'Computer engineering student passionate about full-stack development. I design and build performant solutions with rigor and proactivity. My collaborative and innovative mindset helps me optimize every project.',
    },
    about: {
      title: 'About Me',
      p1: "Computer engineering student at ESPRIT, passionate about full-stack development and building innovative solutions.",
      p2: "I recently completed my final-year internship at Ooredoo where I designed and developed an e-Shop back-office application using Spring Boot, Spring Security, Angular and MySQL.",
      p3: "I design and integrate performant solutions with rigor and proactivity. My collaborative and innovative mindset helps me optimize every project.",
      personality: 'Personality',
      traits: ['Creativity', 'Critical thinking', 'Leadership', 'Collaborative', 'Proactive'],
    },
    skills: {
      title: 'Skills & Technologies',
      designerTitle: 'Designer',
      designerText:
        'Passionate about crafting pixel-perfect UIs with Figma, Adobe XD, and modern CSS. I turn ideas into stunning, responsive designs.',
      devTitle: 'Developer',
      devText:
        'Full-stack wizard with React, Node.js, MongoDB, and Tailwind. I build fast, scalable apps that users love.',
    },
    projects: {
      title: 'My Projects',
      keyFeatures: 'Key Features',
      viewDetails: 'View Details',
      activeProject: 'Project',
      year: 'Year',
      role: 'Role',
      client: 'Client',
      overview: 'Overview',
      features: 'Key Features',
      stack: 'Tech Stack',
      backToProjects: 'Back to Projects',
      exploreMore: 'Explore more projects',
      projectNotFound: 'Project not found',
      projectNotFoundDesc: 'The project you are looking for does not exist.',
      backHome: 'Back to Home',
    },
    contact: {
      title: 'Contact Me',
      subtitle: "Have an idea, a project, or just want to say hello? My inbox is always open. I'll get back to you as soon as I can.",
      name: 'Your name',
      namePlaceholder: 'John Doe',
      email: 'Your email',
      emailPlaceholder: 'john@example.com',
      message: 'Your message',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
      sending: 'Sending...',
      sentTitle: 'Message ready!',
      sentDesc: 'Your email app should open in a moment. Thank you for reaching out!',
      sendAnother: 'Send another message',
      infoTitle: 'Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      location: 'Tunis, Tunisia',
      followMe: 'Follow me',
    },
    sound: {
      enable: 'Click to enable sounds.',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Designed & built with',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      resume: 'CV',
    },
    hero: {
      greeting: 'Bienvenue, je suis',
      name: 'Yasmine Attyaoui',
      role: 'Développeuse Full-Stack',
      intro:
        "Étudiante ingénieure en informatique passionnée par le développement full-stack. Je conçois et intègre des solutions performantes avec rigueur et proactivité. Mon esprit collaboratif et innovant me permet d'optimiser chaque projet.",
    },
    about: {
      title: 'À propos de moi',
      p1: "Étudiante ingénieure en informatique à l'ESPRIT, je suis passionnée par le développement full-stack et la création de solutions innovantes.",
      p2: "J'ai récemment effectué mon stage de fin d'études chez Ooredoo où j'ai conçu et développé une application de back-office e-Shop utilisant Spring Boot, Spring Security, Angular et MySQL.",
      p3: "Je conçois et intègre des solutions performantes avec rigueur et proactivité. Mon esprit collaboratif et innovant me permet d'optimiser chaque projet.",
      personality: 'Personnalité',
      traits: ['Créativité', 'Pensée critique', 'Leadership', 'Collaborative', 'Proactive'],
    },
    skills: {
      title: 'Compétences & Technologies',
      designerTitle: 'Designer',
      designerText:
        'Passionnée par la création d\'interfaces pixel-perfect avec Figma, Adobe XD et le CSS moderne. Je transforme les idées en designs époustouflants et responsives.',
      devTitle: 'Développeuse',
      devText:
        'Expert full-stack avec React, Node.js, MongoDB et Tailwind. Je construis des applications rapides et évolutives que les utilisateurs adorent.',
    },
    projects: {
      title: 'Mes projets',
      keyFeatures: 'Fonctionnalités clés',
      viewDetails: 'Voir les détails',
      activeProject: 'Projet',
      year: 'Année',
      role: 'Rôle',
      client: 'Client',
      overview: 'Aperçu',
      features: 'Fonctionnalités',
      stack: 'Technologies',
      backToProjects: 'Retour aux projets',
      exploreMore: 'Explorer plus de projets',
      projectNotFound: 'Projet introuvable',
      projectNotFoundDesc: "Le projet que vous recherchez n'existe pas.",
      backHome: 'Retour à l\'accueil',
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: "Vous avez une idée, un projet, ou simplement envie de dire bonjour ? Ma boîte mail est toujours ouverte. Je vous répondrai dès que possible.",
      name: 'Votre nom',
      namePlaceholder: 'Jean Dupont',
      email: 'Votre email',
      emailPlaceholder: 'jean@exemple.com',
      message: 'Votre message',
      messagePlaceholder: 'Parlez-moi de votre projet...',
      send: 'Envoyer le message',
      sending: 'Envoi...',
      sentTitle: 'Message prêt !',
      sentDesc: "Votre application mail devrait s'ouvrir dans un instant. Merci de me contacter !",
      sendAnother: 'Envoyer un autre message',
      infoTitle: 'Coordonnées',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation',
      location: 'Tunis, Tunisie',
      followMe: 'Suivez-moi',
    },
    sound: {
      enable: 'Cliquez pour activer le son.',
    },
    footer: {
      rights: 'Tous droits réservés.',
      madeWith: 'Conçu et développé avec',
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;