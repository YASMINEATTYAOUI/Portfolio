// src/components/PortfolioScene.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PortfolioScene = ({ isDarkMode }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef(null);
  const shapesRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // ---------- SCENE ----------
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Fog (matches page background)
    const fogColor = isDarkMode ? 0x0a0e1a : 0xe0e7ff;
    scene.fog = new THREE.Fog(fogColor, 12, 45);

    // ---------- CAMERA ----------
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    // ---------- RENDERER ----------
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // ---------- LIGHTS ----------
    scene.add(new THREE.AmbientLight(0xffffff, 1.5));
    const p1 = new THREE.PointLight(0x7c3aed, 30, 60); p1.position.set(-6, 6, 6); scene.add(p1);
    const p2 = new THREE.PointLight(0x3b82f6, 30, 60); p2.position.set(6, -6, 6); scene.add(p2);
    const p3 = new THREE.PointLight(0xec4899, 25, 60); p3.position.set(0, 6, -6); scene.add(p3);

    // ---------- PARTICLES ----------
    const pc = 1800;
    const pos = new Float32Array(pc * 3);
    for (let i = 0; i < pc * 3; i++) pos[i] = (Math.random() - 0.5) * 45;
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.07,
      color: 0xbbbbbb,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(geom, mat);
    scene.add(particles);
    particlesRef.current = particles;

    // ---------- SHAPES WITH GLOW ----------
    const shapes = [];

    const add = (geometry, color, pos) => {
      // GLOW LAYER (back)
      const glow = new THREE.Mesh(
        geometry.clone(),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.35,
          wireframe: true,
        })
      );
      glow.position.set(...pos);
      glow.scale.multiplyScalar(1.2);
      scene.add(glow);

      // SHARP LAYER (front)
      const sharp = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.95,
        })
      );
      sharp.position.set(...pos);
      scene.add(sharp);

      // Link and store
      shapes.push(sharp);
      sharp.userData.glow = glow;
    };

    add(new THREE.TorusGeometry(1.2, 0.3, 16, 100), 0x7c3aed, [-3.5, 2, 0]);
    add(new THREE.SphereGeometry(0.9, 32, 32), 0x3b82f6, [3.5, -2, 0]);
    add(new THREE.OctahedronGeometry(1), 0xec4899, [-2.5, -2.5, 0]);
    add(new THREE.BoxGeometry(1.3, 1.3, 1.3), 0x10b981, [2.5, 2.5, 0]);
    add(new THREE.IcosahedronGeometry(0.8), 0xfbbf24, [0, 0, 0]);

    shapesRef.current = shapes;

    // ---------- MOUSE ----------
    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouse);

    // ---------- ANIMATION ----------
    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y = t * 0.04;
        particlesRef.current.rotation.x = t * 0.02;
      }

      // Shapes + Glow
      shapesRef.current.forEach((s, i) => {
        s.rotation.x = t * 0.35 * (i + 1);
        s.rotation.y = t * 0.25 * (i + 1);
        s.position.y += Math.sin(t + i) * 0.0015;

        const glow = s.userData.glow;
        if (glow) {
          glow.rotation.copy(s.rotation);
          glow.position.copy(s.position);

          // Pulsing glow
          const pulse = 0.3 + 0.15 * Math.sin(t * 3 + i);
          glow.material.opacity = 0.3 + pulse;
          glow.scale.setScalar(1.15 + pulse * 0.2);
        }
      });

      // Camera parallax
      camera.position.x += (mx * 1.2 - camera.position.x) * 0.06;
      camera.position.y += (my * 1.2 - camera.position.y) * 0.06;
      camera.lookAt(0, 0, 0);

      // Moving lights
      p1.position.x = Math.sin(t) * 6;
      p2.position.x = Math.cos(t) * 6;
      p3.position.z = Math.sin(t * 0.6) * 6;

      renderer.render(scene, camera);
    };
    animate();

    // ---------- RESIZE ----------
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ---------- CLEANUP ----------
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);

      // Dispose particles
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        particlesRef.current.material.dispose();
        scene.remove(particlesRef.current);
      }

      // Dispose shapes + glow
      shapesRef.current.forEach(s => {
        s.geometry.dispose();
        s.material.dispose();
        scene.remove(s);
        if (s.userData.glow) {
          s.userData.glow.geometry.dispose();
          s.userData.glow.material.dispose();
          scene.remove(s.userData.glow);
        }
      });

      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isDarkMode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default PortfolioScene;