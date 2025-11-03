import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Shapes = ({ scene }) => {
  const shapesRef = useRef([]);

  useEffect(() => {
    if (!scene) return;

    const shapes = [];

    // Torus
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.3
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 2, 0);
    scene.add(torus);
    shapes.push(torus);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(3, -2, 0);
    scene.add(sphere);
    shapes.push(sphere);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(0.6);
    const octaMaterial = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
      emissive: 0xec4899,
      emissiveIntensity: 0.3
    });
    const octa = new THREE.Mesh(octaGeometry, octaMaterial);
    octa.position.set(-2, -2, 0);
    scene.add(octa);
    shapes.push(octa);

    // Box
    const boxGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
      emissive: 0x10b981,
      emissiveIntensity: 0.3
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(2, 2, 0);
    scene.add(box);
    shapes.push(box);

    shapesRef.current = shapes;

    return () => {
      shapes.forEach(shape => {
        scene.remove(shape);
        shape.geometry.dispose();
        shape.material.dispose();
      });
    };
  }, [scene]);

  return shapesRef.current;
};

export default Shapes;