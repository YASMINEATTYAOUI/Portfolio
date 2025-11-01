import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';


const Portfolio3D = () => {
  const mountRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0e1a, 5, 25);
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x7c3aed, 2, 100);
    pointLight1.position.set(-5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 2, 100);
    pointLight2.position.set(5, -5, 5);
    scene.add(pointLight2);

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x9333ea,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Floating geometric shapes
    const shapes = [];
    
    // Torus
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 2, -2);
    scene.add(torus);
    shapes.push(torus);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(3, -2, -3);
    scene.add(sphere);
    shapes.push(sphere);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(0.6);
    const octaMaterial = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const octa = new THREE.Mesh(octaGeometry, octaMaterial);
    octa.position.set(-2, -3, -2);
    scene.add(octa);
    shapes.push(octa);

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.03;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x = elapsedTime * 0.3 * (index + 1);
        shape.rotation.y = elapsedTime * 0.2 * (index + 1);
        shape.position.y += Math.sin(elapsedTime + index) * 0.001;
      });

      // Camera follow mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Light animation
      pointLight1.position.x = Math.sin(elapsedTime) * 5;
      pointLight2.position.x = Math.cos(elapsedTime) * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  const skills = [
    { title: 'Backend Development', icon: '⚙️', desc: 'Spring Boot, Symfony' },
    { title: 'Frontend Development', icon: '💻', desc: 'Angular, React' },
    { title: 'Mobile Development', icon: '📱', desc: 'Flutter, FlutterFlow' },
    { title: 'Database Management', icon: '🗄️', desc: 'MySQL, PostgreSQL, MongoDB' },
    { title: 'UI/UX Design', icon: '🎨', desc: 'Figma, Canva, Balsamiq' },
    { title: 'Version Control', icon: '🔧', desc: 'Git, GitHub' }
  ];

  const projects = [
    { 
      title: 'eShop Back Office', 
      tech: 'Spring Boot, Angular, MySQL',
      desc: 'Ooredoo - Stage PFE 2024',
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      title: 'Harmonia', 
      tech: 'JavaFX, Symfony, MySQL',
      desc: 'Gestion des signalements citoyens',
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      title: 'Energym', 
      tech: 'FlutterFlow, Firebase',
      desc: 'Application mobile de salle de sport',
      color: 'from-green-500 to-teal-500' 
    },
    { 
      title: 'Gestion Jardins d\'Enfants', 
      tech: 'Spring Boot, Thymeleaf, PostgreSQL',
      desc: 'Application web de gestion',
      color: 'from-orange-500 to-red-500' 
    }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#0a0e1a]">
      {/* Three.js Canvas */}
      <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0e1a]/50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            YA
          </div>
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300" href="https://www.canva.com/design/DAGenPMFvGg/WzAD9CDYbrUop6gwgJwPbQ/view?utm_content=DAGenPMFvGg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf7b6cf6ef8" target="_blank" rel="noopener noreferrer">
            Resume
          </button>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
          <div className="backdrop-blur-xl bg-gray-900/40 p-8 rounded-3xl border border-purple-500/30 shadow-2xl">
            <p className="text-purple-400 text-base mb-2">Bienvenu, je suis</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Yasmine Attyaoui
            </h1>
            <p className="text-xl text-blue-400 mb-6">Full-Stack Developer</p>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              Étudiante ingénieure en informatique passionnée par le développement full-stack. Je conçois et intègre des solutions performantes avec rigueur et proactivité. Mon esprit collaboratif et innovant me permet d'optimiser chaque projet.
            </p>
            <div className="flex gap-3">
              {[
                { name: 'GitHub', url: 'https://github.com/yassmineattyaoui', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                ) },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/yassmine-attyaoui', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ) },
                { name: 'Email', url: 'mailto:yasmineatt23@gmail.com', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ) },
                { name: 'Phone', url: 'tel:+21693721032', icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ) }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 text-gray-400 hover:text-purple-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-blue-600/30 border border-purple-400/40 shadow-2xl shadow-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
              <div className="absolute right-0 top-0 bottom-0 w-3/5 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img 
                    src="public/images/yas_avatar.png" 
                    alt="Yasmine Attyaoui"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          <div className="backdrop-blur-md bg-gray-900/30 p-8 rounded-2xl border border-purple-500/20 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Étudiante ingénieure en informatique à l'ESPRIT, je suis passionnée par le développement full-stack et la création de solutions innovantes. Mon expertise couvre aussi bien le développement web que mobile.
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
                  <span key={trait} className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <h2 className="text-4xl font-bold text-white">Mes Compétences</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-gray-900/30 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            <h2 className="text-4xl font-bold text-white">Mes Projets</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-gray-900/30 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 hover:scale-105 cursor-pointer"
              >
                <div className={`h-40 rounded-xl bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center`}>
                  <span className="text-6xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{project.tech}</p>
                <p className="text-gray-500 text-xs">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-gray-900/50 border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Yasmine Attyaoui. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio3D;