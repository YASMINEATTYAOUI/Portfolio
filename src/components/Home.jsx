import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = ({ isDarkMode, setActiveSection }) => {
  const location = useLocation();

  // -------------------------------------------------
  // Scroll-in animations
  // -------------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    setTimeout(() => {
      document
        .querySelectorAll(
          '.section-title, .skill-card, .project-card, .about-content, .trait-badge'
        )
        .forEach((el) => observer.observe(el));
    }, 500);

    return () => observer.disconnect();
  }, []);

  // -------------------------------------------------
  // Auto-highlight active section on scroll
  // -------------------------------------------------
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  // -------------------------------------------------
  // Scroll to a section when arriving from the detail page
  // -------------------------------------------------
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(target);
        }, 150);
      }
    }
    window.history.replaceState({}, document.title);
  }, [location.state, setActiveSection]);

  return (
    <>
      <section id="home"><Hero isDarkMode={isDarkMode} /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <Contact />
    </>
  );
};

export default Home;