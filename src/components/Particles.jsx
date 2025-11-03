import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Particles = ({ scene }) => {
  const particlesMeshRef = useRef(null);

  useEffect(() => {
    if (!scene) return;

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x9333ea,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMeshRef.current = particlesMesh;
    scene.add(particlesMesh);

    return () => {
      if (particlesMeshRef.current) {
        scene.remove(particlesMeshRef.current);
        particlesGeometry.dispose();
        particlesMaterial.dispose();
      }
    };
  }, [scene]);

  return particlesMeshRef.current;
};

export default Particles;