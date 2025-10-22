import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Crystalline Component
function CrystallineIcosahedron({ isBackground = false }) {
  const mountRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.02);
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4da6ff, 3, 60);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff4da6, 3, 60);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xa64dff, 3, 60);
    pointLight3.position.set(0, 10, -10);
    scene.add(pointLight3);

    const structureGroup = new THREE.Group();
    scene.add(structureGroup);

    const outerAtomCount = 1200;
    const innerAtomCount = 2000;
    const atoms = [];
    const radius = 4.5;

    const starTexture = createStarTexture();
    
    const outerGeometry = new THREE.IcosahedronGeometry(radius, 3);
    const outerPositions = outerGeometry.attributes.position;
    
    for (let i = 0; i < outerPositions.count && i < outerAtomCount; i++) {
      const x = outerPositions.getX(i);
      const y = outerPositions.getY(i);
      const z = outerPositions.getZ(i);

      const jitter = 0.1;
      const pos = new THREE.Vector3(
        x + (Math.random() - 0.5) * jitter,
        y + (Math.random() - 0.5) * jitter,
        z + (Math.random() - 0.5) * jitter
      );

      const hue = Math.random();
      const spriteMaterial = new THREE.SpriteMaterial({
        map: starTexture,
        color: new THREE.Color().setHSL(hue, 0.8, 0.7),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending
      });

      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(pos);
      sprite.scale.set(0, 0, 0);
      
      const targetScale = 0.18 + Math.random() * 0.15;
      
      structureGroup.add(sprite);
      atoms.push({
        sprite,
        targetScale,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.5 + Math.random() * 1.5,
        baseHue: hue,
        isOuter: true
      });
    }

    for (let i = 0; i < innerAtomCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      
      const r = radius * (0.3 + Math.random() * 0.6);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const hue = Math.random();
      const spriteMaterial = new THREE.SpriteMaterial({
        map: starTexture,
        color: new THREE.Color().setHSL(hue, 0.8, 0.6),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending
      });

      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(x, y, z);
      sprite.scale.set(0, 0, 0);
      
      const targetScale = 0.12 + Math.random() * 0.12;
      
      structureGroup.add(sprite);
      atoms.push({
        sprite,
        targetScale,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.5 + Math.random() * 1.5,
        baseHue: hue,
        isOuter: false
      });
    }

    const connectionCount = 5000;
    const connections = [];

    for (let i = 0; i < connectionCount; i++) {
      const atom1 = atoms[Math.floor(Math.random() * atoms.length)];
      const atom2 = atoms[Math.floor(Math.random() * atoms.length)];
      
      if (atom1 === atom2) continue;
      
      const distance = atom1.sprite.position.distanceTo(atom2.sprite.position);
      if (distance > 2.5) continue;
      
      const points = [atom1.sprite.position, atom2.sprite.position];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const baseHue = Math.random();
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color().setHSL(baseHue, 0.9, 0.6),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending
      });
      
      const line = new THREE.Line(geometry, material);
      structureGroup.add(line);
      
      connections.push({
        line,
        atom1,
        atom2,
        baseHue,
        glimmerOffset: Math.random() * Math.PI * 2,
        glimmerSpeed: 1 + Math.random() * 2
      });
    }

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    function onMouseDown(e) {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    }

    function onMouseMove(e) {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        
        targetRotationRef.current.y += deltaX * 0.005;
        targetRotationRef.current.x += deltaY * 0.005;
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    }

    function onMouseUp() {
      isDragging = false;
    }

    function onWheel(e) {
      e.preventDefault();
      camera.position.z += e.deltaY * 0.01;
      camera.position.z = Math.max(6, Math.min(20, camera.position.z));
    }

    let touchStartDistance = 0;
    
    function onTouchStart(e) {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchStartDistance = Math.sqrt(dx * dx + dy * dy);
      } else if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }

    function onTouchMove(e) {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delta = distance - touchStartDistance;
        camera.position.z -= delta * 0.01;
        camera.position.z = Math.max(6, Math.min(20, camera.position.z));
        touchStartDistance = distance;
      } else if (e.touches.length === 1 && isDragging) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        
        targetRotationRef.current.y += deltaX * 0.005;
        targetRotationRef.current.x += deltaY * 0.005;
        
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }

    function onTouchEnd() {
      isDragging = false;
    }

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
    renderer.domElement.addEventListener('touchstart', onTouchStart);
    renderer.domElement.addEventListener('touchmove', onTouchMove);
    renderer.domElement.addEventListener('touchend', onTouchEnd);

    let animationProgress = 0;
    const buildDuration = 40000;
    const startTime = Date.now();
    let time = 0;

    function animate() {
      requestAnimationFrame(animate);

      const elapsed = Date.now() - startTime;
      animationProgress = Math.min(elapsed / buildDuration, 1);
      setProgress(Math.floor(animationProgress * 100));
      time += 0.016;

      if (animationProgress >= 1 && !isComplete) {
        setIsComplete(true);
      }

      structureGroup.rotation.x += (targetRotationRef.current.x - structureGroup.rotation.x) * 0.05;
      structureGroup.rotation.y += (targetRotationRef.current.y - structureGroup.rotation.y) * 0.05;

      if (!isDragging) {
        targetRotationRef.current.y += 0.001;
      }

      atoms.forEach((atom, index) => {
        const normalizedIndex = index / atoms.length;
        const wave = Math.sin(normalizedIndex * Math.PI * 3 + animationProgress * Math.PI * 2);
        const atomProgress = Math.max(0, Math.min(1, (animationProgress - normalizedIndex * 0.7) * 1.5 + wave * 0.1));
        
        const scale = atomProgress * atom.targetScale;
        atom.sprite.scale.set(scale, scale, scale);
        
        const hueShift = Math.sin(time * 0.5 + atom.twinkleOffset) * 0.1;
        const newHue = (atom.baseHue + hueShift + time * 0.02) % 1;
        atom.sprite.material.color.setHSL(newHue, 0.8, atom.isOuter ? 0.7 : 0.6);
        atom.sprite.material.opacity = atomProgress * (0.7 + Math.sin(time * atom.twinkleSpeed + atom.twinkleOffset) * 0.3);
      });

      connections.forEach((conn, index) => {
        const connIndex = index / connections.length;
        const atom1Progress = conn.atom1.sprite.scale.x / conn.atom1.targetScale;
        const atom2Progress = conn.atom2.sprite.scale.x / conn.atom2.targetScale;
        const connProgress = Math.min(atom1Progress, atom2Progress);
        
        const glimmer = Math.sin(time * conn.glimmerSpeed + conn.glimmerOffset) * 0.5 + 0.5;
        const shimmer = Math.sin(time * conn.glimmerSpeed * 0.5 + connIndex * Math.PI * 2) * 0.3 + 0.7;
        
        conn.line.material.opacity = connProgress * glimmer * shimmer * 0.5;
        
        const hue = (conn.baseHue + time * 0.05 + glimmer * 0.2) % 1;
        const saturation = 0.8 + shimmer * 0.2;
        const lightness = 0.5 + glimmer * 0.2;
        conn.line.material.color.setHSL(hue, saturation, lightness);
      });

      pointLight1.position.x = Math.sin(time * 0.3) * 10;
      pointLight1.position.z = Math.cos(time * 0.3) * 10;
      pointLight2.position.x = Math.sin(time * 0.4 + Math.PI) * 10;
      pointLight2.position.z = Math.cos(time * 0.4 + Math.PI) * 10;

      renderer.render(scene, camera);
    }

    animate();

    function createStarTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.domElement.removeEventListener('touchstart', onTouchStart);
      renderer.domElement.removeEventListener('touchmove', onTouchMove);
      renderer.domElement.removeEventListener('touchend', onTouchEnd);
      mountRef.current?.removeChild(renderer.domElement);
      starTexture.dispose();
      atoms.forEach(atom => atom.sprite.material.dispose());
      connections.forEach(conn => {
        conn.line.geometry.dispose();
        conn.line.material.dispose();
      });
    };
  }, []);

  return (
    <div className={`${isBackground ? 'fixed inset-0' : 'relative'} w-full h-screen overflow-hidden bg-black`}>
      <div ref={mountRef} className="w-full h-full cursor-move" />
      
      {!isBackground && (
        <>
          <div className="absolute top-0 left-0 w-full p-8 pointer-events-none">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-3 tracking-wider">
                CRYSTALLINE GENESIS
              </h1>
              <p className="text-cyan-300 text-xl font-light">
                {isComplete ? 'Structure Complete — 3200 Atoms Unified' : 'Assembling cosmic structure...'}
              </p>
              
              {!isComplete && (
                <div className="mt-6 w-80">
                  <div className="bg-gray-900 bg-opacity-50 rounded-full h-1 overflow-hidden backdrop-blur-sm">
                    <div 
                      className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 h-full transition-all duration-300 shadow-lg shadow-purple-500/50"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-gray-300 text-sm mt-3 font-mono">{progress}% | {Math.floor((progress / 100) * 3200)} atoms materialized</p>
                </div>
              )}
            </div>
          </div>

          <div className="absolute top-8 right-8 text-right pointer-events-none">
            <div className="bg-black bg-opacity-40 backdrop-blur-sm px-4 py-3 rounded-lg border border-cyan-500/20">
              <p className="text-cyan-300 text-xs font-mono mb-1">🖱️ DRAG to rotate</p>
              <p className="text-cyan-300 text-xs font-mono mb-1">🔍 SCROLL to zoom</p>
              <p className="text-cyan-300 text-xs font-mono">👆 PINCH to zoom (mobile)</p>
            </div>
          </div>

          {isComplete && (
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-500/30">
                <p className="text-cyan-300 text-sm font-light tracking-wide">
                  ✦ Quantum lattice stabilized ✦
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Example Website Using the Crystal
export default function App() {
  const [view, setView] = useState('fullscreen'); // 'fullscreen', 'background', 'section'

  if (view === 'fullscreen') {
    return (
      <div className="relative">
        <CrystallineIcosahedron />
        <button 
          onClick={() => setView('background')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-colors z-10"
        >
          See Website Example
        </button>
      </div>
    );
  }

  if (view === 'background') {
    return (
      <div className="relative min-h-screen">
        <CrystallineIcosahedron isBackground={true} />
        
        <div className="relative z-10 min-h-screen text-white">
          <nav className="p-6 backdrop-blur-sm bg-black/30">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">CrystalTech</h1>
              <div className="space-x-6">
                <a href="#" className="hover:text-cyan-300 transition-colors">Home</a>
                <a href="#" className="hover:text-cyan-300 transition-colors">About</a>
                <a href="#" className="hover:text-cyan-300 transition-colors">Contact</a>
              </div>
            </div>
          </nav>

          <main className="max-w-4xl mx-auto px-6 py-20">
            <div className="backdrop-blur-md bg-black/40 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Welcome to the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience cutting-edge technology visualized through crystalline structures. 
                This is your content area where you can add any information, forms, or features 
                you need for your website.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">Feature One</h3>
                  <p className="text-gray-400">Amazing functionality that sets you apart.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">Feature Two</h3>
                  <p className="text-gray-400">Innovative solutions for modern problems.</p>
                </div>
                <div className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 p-6 rounded-xl border border-pink-500/20">
                  <h3 className="text-xl font-semibold mb-2 text-pink-300">Feature Three</h3>
                  <p className="text-gray-400">Seamless integration with your workflow.</p>
                </div>
              </div>
              <button 
                onClick={() => setView('fullscreen')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Back to Full Crystal View
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return null;
}