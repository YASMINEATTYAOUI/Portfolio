export const projects = [
  {
    id: 'eshop-back-office',
    title: { en: 'eShop Back Office', fr: 'eShop Back Office' },
    tech: ['Spring Boot', 'Spring Security', 'Angular', 'MySQL'],
    desc: {
      en: 'Ooredoo - PFE Internship 2024',
      fr: 'Ooredoo - Stage PFE 2024',
    },
    overview: {
      en: 'A comprehensive back-office management system built for Ooredoo during my final-year internship. It centralises e-commerce operations, giving operators a single, real-time view of inventory, orders and users. The system was built from scratch with a REST API on Spring Boot and a responsive Angular dashboard.',
      fr: "Un système complet de back-office développé pour Ooredoo durant mon stage de fin d'études. Il centralise les opérations e-commerce et offre aux opérateurs une vue unique et en temps réel du stock, des commandes et des utilisateurs. Le système a été construit de zéro avec une API REST sous Spring Boot et un tableau de bord Angular responsive.",
    },
    details: {
      en: 'A comprehensive back-office management system for e-commerce operations, featuring inventory management, order processing, and analytics dashboard. Built to run Ooredoo’s e-shop efficiently and securely, it caps thousands of daily transactions while keeping the experience fast and intuitive.',
      fr: "Un système complet de gestion de back-office pour les opérations e-commerce, avec gestion du stock, traitement des commandes et tableau de bord analytique. Conçu pour faire fonctionner l'e-shop d'Ooredoo efficacement et en toute sécurité, il gère des milliers de transactions quotidiennes tout en gardant une expérience rapide et intuitive.",
    },
    features: {
      en: [
        'Real-time inventory tracking',
        'Order management',
        'Analytics dashboard',
        'User role management',
        'Spring Security authentication',
      ],
      fr: [
        'Suivi du stock en temps réel',
        'Gestion des commandes',
        'Tableau de bord analytique',
        "Gestion des rôles utilisateurs",
        'Authentification Spring Security',
      ],
    },
    image: '/images/app-ooredoo.png',
    color: 'from-purple-500 to-pink-500',
    year: '2024',
    client: { en: 'Ooredoo Tunisia', fr: 'Ooredoo Tunisie' },
    role: { en: 'Full-Stack Developer', fr: 'Développeuse Full-Stack' },
    links: {
      github: 'https://github.com/yassmineattyaoui',
      live: null,
    },
  },
  {
    id: 'harmonia',
    title: { en: 'Harmonia', fr: 'Harmonia' },
    tech: ['JavaFX', 'Symfony', 'MySQL'],
    desc: {
      en: 'Civic issue reporting platform',
      fr: 'Gestion des signalements citoyens',
    },
    overview: {
      en: 'Harmonia is a civic engagement platform that lets citizens report local issues — from potholes to broken street lights — and follow their resolution in real time. The desktop client is built with JavaFX while a Symfony REST API handles persistence, authentication and notifications.',
      fr: "Harmonia est une plateforme d'engagement citoyen permettant aux habitants de signaler les problèmes locaux — des nids-de-poule aux lampadaires cassés — et de suivre leur résolution en temps réel. Le client desktop est développé avec JavaFX tandis qu'une API REST Symfony gère la persistance, l'authentification et les notifications.",
    },
    details: {
      en: 'Civic engagement platform enabling citizens to report issues and track their resolution in real-time. It creates a transparent channel between residents and local authorities, with status updates pushed the moment an issue moves forward.',
      fr: "Plateforme d'engagement citoyen permettant aux habitants de signaler des problèmes et de suivre leur résolution en temps réel. Elle crée un canal transparent entre les résidents et les autorités locales, avec des mises à jour de statut dès qu'un problème progresse.",
    },
    features: {
      en: [
        'Issue reporting system',
        'Real-time tracking',
        'Admin dashboard',
        'Notification system',
        'Status history per issue',
      ],
      fr: [
        'Système de signalement',
        'Suivi en temps réel',
        'Tableau de bord admin',
        'Système de notifications',
        "Historique de statut par problème",
      ],
    },
    image: '/images/app-harmonia.png',
    color: 'from-blue-500 to-cyan-500',
    year: '2023',
    client: { en: 'University project', fr: 'Projet universitaire' },
    role: { en: 'Full-Stack Developer', fr: 'Développeuse Full-Stack' },
    links: {
      github: 'https://github.com/yassmineattyaoui',
      live: null,
    },
  },
  {
    id: 'energym',
    title: { en: 'Energym', fr: 'Energym' },
    tech: ['FlutterFlow', 'Firebase'],
    desc: {
      en: 'Mobile gym management app',
      fr: 'Application mobile de salle de sport',
    },
    overview: {
      en: 'Energym is a mobile application for gym management: members can book classes, follow their workout plans and track their progress, while staff manage memberships and schedules. Built with FlutterFlow for the UI and Firebase for real-time data, authentication and cloud storage.',
      fr: "Energym est une application mobile de gestion de salle de sport : les adhérents peuvent réserver des cours, suivre leurs programmes d'entraînement et leur progression, tandis que le personnel gère les abonnements et les plannings. Développée avec FlutterFlow pour l'interface et Firebase pour les données en temps réel, l'authentification et le stockage cloud.",
    },
    details: {
      en: 'Mobile fitness application for gym management with workout tracking, membership management, and scheduling. Designed to be simple enough for any member to adopt, yet powerful enough for trainers to manage entire classes from their pocket.',
      fr: "Application mobile de fitness pour la gestion de salle de sport avec suivi des entraînements, gestion des abonnements et planification. Conçue pour être assez simple pour chaque adhérent, et assez puissante pour que les coachs gèrent des cours entiers depuis leur poche.",
    },
    features: {
      en: [
        'Workout tracking',
        'Class scheduling',
        'Membership management',
        'Progress analytics',
        'Real-time sync via Firebase',
      ],
      fr: [
        "Suivi des entraînements",
        'Planification des cours',
        'Gestion des abonnements',
        'Analyses de progression',
        'Synchronisation temps réel via Firebase',
      ],
    },
    image: '/images/app-energym.png',
    color: 'from-green-500 to-teal-500',
    year: '2023',
    client: { en: 'Mobile app project', fr: 'Projet application mobile' },
    role: { en: 'Mobile Developer', fr: 'Développeuse Mobile' },
    links: {
      github: 'https://github.com/yassmineattyaoui',
      live: null,
    },
  },
  {
    id: 'gestion-jardins-enfants',
    title: {
      en: "Kindergarten Management",
      fr: "Gestion Jardins d'Enfants",
    },
    tech: ['Spring Boot', 'Thymeleaf', 'PostgreSQL'],
    desc: {
      en: 'Web management application',
      fr: 'Application web de gestion',
    },
    overview: {
      en: 'A web application that digitises the daily life of kindergartens: attendance, activities, billing and parent communication in one place. Teachers, directors and parents each get a tailored dashboard, powered by a Spring Boot backend and server-rendered Thymeleaf templates backed by PostgreSQL.',
      fr: "Une application web qui numérise le quotidien des jardins d'enfants : présence, activités, facturation et communication avec les parents au même endroit. Enseignants, directeurs et parents disposent chacun d'un tableau de bord adapté, propulsé par un backend Spring Boot et des templates Thymeleaf rendus côté serveur sur PostgreSQL.",
    },
    details: {
      en: 'Comprehensive kindergarten management system for tracking student attendance, activities, and parent communication. It replaces scattered paper records with a clean digital workflow that saves staff hours every week.',
      fr: "Système complet de gestion de jardin d'enfants pour le suivi de la présence des enfants, des activités et de la communication avec les parents. Il remplace les registres papier dispersés par un flux de travail numérique propre qui fait gagner des heures chaque semaine.",
    },
    features: {
      en: [
        'Student management',
        'Attendance tracking',
        'Parent portal',
        'Activity scheduling',
        'Secure multi-role access',
      ],
      fr: [
        'Gestion des enfants',
        'Suivi de la présence',
        'Espace parents',
        'Planification des activités',
        'Accès multi-rôles sécurisé',
      ],
    },
    image: '/images/app-kidos.png',
    color: 'from-orange-500 to-red-500',
    year: '2023',
    client: { en: 'Web app project', fr: 'Projet application web' },
    role: { en: 'Back-End Developer', fr: 'Développeuse Back-End' },
    links: {
      github: 'https://github.com/yassmineattyaoui',
      live: null,
    },
  },
];

export const getProjectById = (id) =>
  projects.find((p) => p.id === id) || null;