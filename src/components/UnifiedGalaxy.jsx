import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function UnifiedGalaxy() {
  const containerRef = useRef(null);
  const speedMultiplierRef = useRef(0.5);
  const frameIdRef = useRef(null);

  const fastForwardToggle = () => {
    speedMultiplierRef.current = speedMultiplierRef.current === 0.5 ? 10 : 0.5;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020611);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.16;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const lights = [
      new THREE.PointLight(0x2f6fff, 85, 100),
      new THREE.PointLight(0x6a3dff, 75, 100),
      new THREE.PointLight(0x19c7b8, 60, 100)
    ];
    lights[0].position.set(25, 15, 20);
    lights[1].position.set(-20, -10, 15);
    lights[2].position.set(10, -20, 10);
    lights.forEach((light) => scene.add(light));

    const ambientLight = new THREE.AmbientLight(0x84bfff, 0.24);
    scene.add(ambientLight);

    // Fog
    scene.fog = new THREE.FogExp2(0x020611, 0.018);

    // Add a bright green test box
    const greenGeometry = new THREE.BoxGeometry(3, 3, 3);
    const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const greenBox = new THREE.Mesh(greenGeometry, greenMaterial);
    scene.add(greenBox);

    // TEST: Add a bright green box
    const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const testBox = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(testBox);

    // Animation loop
    const animationLoop = () => {
      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animationLoop);
    };

    frameIdRef.current = requestAnimationFrame(animationLoop);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      <button
        onClick={fastForwardToggle}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: '8px 14px',
          backgroundColor: 'rgba(102, 232, 255, 0.1)',
          border: '1px solid rgba(102, 232, 255, 0.3)',
          borderRadius: 6,
          color: '#66e8ff',
          fontFamily: 'monospace',
          fontSize: 12,
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 20,
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(4px)'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(102, 232, 255, 0.2)';
          e.target.style.borderColor = 'rgba(102, 232, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(102, 232, 255, 0.1)';
          e.target.style.borderColor = 'rgba(102, 232, 255, 0.3)';
        }}
      >
        ⚡ {speedMultiplierRef.current === 0.5 ? 'SPEED UP' : 'SLOW DOWN'}
      </button>
    </div>
  );
}

export default UnifiedGalaxy;
