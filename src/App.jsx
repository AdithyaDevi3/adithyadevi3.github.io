
// // // // // // import React from 'react';
// // // // // // import CrystallineIcosahedron from './components/CrystallineIcosahedron';
// // // // // // import './App.css';

// // // // // // function App() {
// // // // // //   return (
// // // // // //     <div className="App">
// // // // // //       <CrystallineIcosahedron />
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;


// // // // // // ============================================
// // // // // // FILE: src/App.jsx
// // // // // // ============================================
// // // // // import React, { useState } from 'react';
// // // // // import CrystalBackground from './components/CrystalBackground';
// // // // // import Header from './components/Header';
// // // // // import Navigation from './components/Navigation';
// // // // // import SocialLinks from './components/SocialLinks';
// // // // // import HomePage from './pages/HomePage';
// // // // // import AboutPage from './pages/AboutPage';
// // // // // import ContactPage from './pages/ContactPage';

// // // // // export default function App() {
// // // // //   const [route, setRoute] = useState('home');

// // // // //   return (
// // // // //     <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      
      
// // // // //       <div className="relative z-10">
// // // // //         <Header />
// // // // //         <div className="pointer-events-auto">
// // // // //           {route === 'home' && <HomePage />}
// // // // //           {route === 'about' && <AboutPage />}
// // // // //           {route === 'contact' && <ContactPage />}
// // // // //         </div>
// // // // //         <CrystalBackground />
// // // // //         <Navigation route={route} setRoute={setRoute} />
// // // // //         <SocialLinks />
        
        
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // ============================================
// // // // // FILE: src/App.jsx
// // // // // ============================================
// // // // import React, { useState } from 'react';
// // // // import CrystalBackground from './components/CrystalBackground';
// // // // import Header from './components/Header';
// // // // import Navigation from './components/Navigation';
// // // // import SocialLinks from './components/SocialLinks';
// // // // import HomePage from './pages/HomePage';
// // // // import AboutPage from './pages/AboutPage';
// // // // import ContactPage from './pages/ContactPage';

// // // // export default function App() {
// // // //   const [route, setRoute] = useState('home');

// // // //   return (
// // // //     <div className="relative w-full min-h-screen bg-black overflow-hidden">
      
// // // //       {/* === Background Layer === */}
// // // //       <div className="fixed inset-0 z-0">
// // // //         <CrystalBackground />
// // // //       </div>

// // // //       {/* === Foreground UI Layer === */}
// // // //       <div className="relative z-10 flex flex-col min-h-screen">
// // // //         <Header />
        
// // // //         <main className="flex-grow pointer-events-auto">
// // // //           {route === 'home' && <HomePage />}
// // // //           {route === 'about' && <AboutPage />}
// // // //           {route === 'contact' && <ContactPage />}
// // // //         </main>

// // // //         <Navigation route={route} setRoute={setRoute} />
// // // //         <SocialLinks />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // // ============================================
// // // // FILE: src/App.jsx
// // // // ============================================
// // // import React, { useState } from 'react';
// // // import CrystalBackground from './components/CrystalBackground';
// // // import Header from './components/Header';
// // // import Navigation from './components/Navigation';
// // // import SocialLinks from './components/SocialLinks';
// // // import HomePage from './pages/HomePage';
// // // import AboutPage from './pages/AboutPage';
// // // import ContactPage from './pages/ContactPage';

// // // export default function App() {
// // //   const [route, setRoute] = useState('home');

// // //   return (
// // //     <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
// // //       <CrystalBackground />
      
// // //       <div className="relative z-10">
// // //         <Header />
// // //         <Navigation route={route} setRoute={setRoute} />
// // //         <SocialLinks />
        
// // //         <div className="pointer-events-auto">
// // //           {route === 'home' && <HomePage />}
// // //           {route === 'about' && <AboutPage />}
// // //           {route === 'contact' && <ContactPage />}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useState } from 'react';
// // import CrystalBackground from './components/CrystalBackground';
// // import Header from './components/Header';
// // import Navigation from './components/Navigation';
// // import SocialLinks from './components/SocialLinks';
// // import HomePage from './pages/HomePage';
// // import AboutPage from './pages/AboutPage';
// // import ContactPage from './pages/ContactPage';

// // export default function App() {
// //   const [route, setRoute] = useState('home');

// //   return (
// //     <div className="relative w-full h-screen bg-black overflow-hidden">
// //       <CrystalBackground />
      
// //       <div className="relative z-10 h-full">
// //         <Header />
// //         <Navigation route={route} setRoute={setRoute} />
// //         <SocialLinks />
        
// //         <div className="pointer-events-auto h-full">
// //           {route === 'home' && <HomePage />}
// //           {route === 'about' && <AboutPage />}
// //           {route === 'contact' && <ContactPage />}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// // Utility: Create star texture
// function createStarTexture() {
//   const canvas = document.createElement('canvas');
//   canvas.width = 64;
//   canvas.height = 64;
//   const ctx = canvas.getContext('2d');
  
//   const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
//   gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
//   gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
//   gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
//   gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, 64, 64);
  
//   const texture = new THREE.Texture(canvas);
//   texture.needsUpdate = true;
//   return texture;
// }

// // Utility: Create crystal geometry
// function createCrystalGeometry(structureGroup, starTexture) {
//   const atoms = [];
//   const edges = [];
//   const radius = 5;

//   const phi = (1 + Math.sqrt(5)) / 2;
//   const icosahedronVertices = [
//     [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
//     [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
//     [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]
//   ].map(v => {
//     const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
//     return new THREE.Vector3(v[0]/len * radius, v[1]/len * radius, v[2]/len * radius);
//   });

//   const edgeVertices = [];
//   const icosahedronEdges = [
//     [0,1],[0,4],[0,5],[0,8],[0,9],
//     [1,6],[1,7],[1,8],[1,9],
//     [2,3],[2,4],[2,5],[2,10],[2,11],
//     [3,6],[3,7],[3,10],[3,11],
//     [4,5],[4,8],[4,10],
//     [5,9],[5,11],
//     [6,7],[6,8],[6,10],
//     [7,9],[7,11],
//     [8,10],[9,11]
//   ];

//   icosahedronVertices.forEach(vertex => {
//     edgeVertices.push(vertex.clone());
//   });

//   const pointsPerEdge = 8;
//   icosahedronEdges.forEach(([i, j]) => {
//     const v1 = icosahedronVertices[i];
//     const v2 = icosahedronVertices[j];
    
//     for (let k = 1; k < pointsPerEdge; k++) {
//       const t = k / pointsPerEdge;
//       const edgePoint = new THREE.Vector3().lerpVectors(v1, v2, t);
//       edgeVertices.push(edgePoint);
//     }
//   });

//   const geometry = new THREE.IcosahedronGeometry(radius, 0);
//   const positions = geometry.attributes.position;
//   for (let i = 0; i < positions.count; i += 3) {
//     const v1 = new THREE.Vector3(positions.getX(i), positions.getY(i), positions.getZ(i));
//     const v2 = new THREE.Vector3(positions.getX(i+1), positions.getY(i+1), positions.getZ(i+1));
//     const v3 = new THREE.Vector3(positions.getX(i+2), positions.getY(i+2), positions.getZ(i+2));
    
//     const center = new THREE.Vector3().add(v1).add(v2).add(v3).divideScalar(3);
//     edgeVertices.push(center);
    
//     for (let j = 0; j < 3; j++) {
//       const midpoint = new THREE.Vector3().lerpVectors(center, [v1, v2, v3][j], 0.5);
//       edgeVertices.push(midpoint);
//     }
//   }

//   edgeVertices.forEach((pos) => {
//     const spriteMaterial = new THREE.SpriteMaterial({
//       map: starTexture,
//       color: new THREE.Color(0xccddff),
//       transparent: true,
//       opacity: 0,
//       blending: THREE.AdditiveBlending
//     });

//     const sprite = new THREE.Sprite(spriteMaterial);
//     sprite.position.copy(pos);
//     sprite.scale.set(0, 0, 0);
    
//     const targetScale = 0.15 + Math.random() * 0.08;
    
//     structureGroup.add(sprite);
//     atoms.push({
//       sprite,
//       targetScale,
//       glimmerOffset: Math.random() * Math.PI * 2,
//       glimmerSpeed: 0.8 + Math.random() * 1.2,
//       position: pos.clone()
//     });
//   });

//   for (let i = 0; i < atoms.length; i++) {
//     for (let j = i + 1; j < atoms.length; j++) {
//       const distance = atoms[i].position.distanceTo(atoms[j].position);
//       if (distance < 2.8) {
//         const points = [atoms[i].position, atoms[j].position];
//         const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
//         const material = new THREE.LineBasicMaterial({
//           color: new THREE.Color(0x88aadd),
//           transparent: true,
//           opacity: 0,
//           blending: THREE.AdditiveBlending
//         });
        
//         const line = new THREE.Line(geometry, material);
//         structureGroup.add(line);
        
//         edges.push({
//           line,
//           atom1: atoms[i],
//           atom2: atoms[j],
//           glimmerOffset: Math.random() * Math.PI * 2,
//           glimmerSpeed: 0.5 + Math.random() * 1.0,
//           baseOpacity: 0.15 + Math.random() * 0.15
//         });
//       }
//     }
//   }

//   return { atoms, edges };
// }

// // Component: Crystal Background
// function CrystalBackground() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000510);
//     scene.fog = new THREE.FogExp2(0x000510, 0.015);
    
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 10;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
//     scene.add(ambientLight);

//     const pointLight1 = new THREE.PointLight(0x6699ff, 1.5, 80);
//     pointLight1.position.set(15, 15, 15);
//     scene.add(pointLight1);

//     const pointLight2 = new THREE.PointLight(0xaaccff, 1.5, 80);
//     pointLight2.position.set(-15, -15, 15);
//     scene.add(pointLight2);

//     const pointLight3 = new THREE.PointLight(0x99bbff, 1.5, 80);
//     pointLight3.position.set(0, 15, -15);
//     scene.add(pointLight3);

//     const structureGroup = new THREE.Group();
//     scene.add(structureGroup);

//     const starTexture = createStarTexture();
//     const { atoms, edges } = createCrystalGeometry(structureGroup, starTexture);

//     let isDragging = false;
//     let previousMousePosition = { x: 0, y: 0 };
//     const targetRotation = { x: 0, y: 0 };

//     function onMouseDown(e) {
//       isDragging = true;
//       previousMousePosition = { x: e.clientX, y: e.clientY };
//     }

//     function onMouseMove(e) {
//       if (isDragging) {
//         const deltaX = e.clientX - previousMousePosition.x;
//         const deltaY = e.clientY - previousMousePosition.y;
//         targetRotation.y += deltaX * 0.005;
//         targetRotation.x += deltaY * 0.005;
//         previousMousePosition = { x: e.clientX, y: e.clientY };
//       }
//     }

//     function onMouseUp() {
//       isDragging = false;
//     }

//     function onWheel(e) {
//       camera.position.z += e.deltaY * 0.01;
//       camera.position.z = Math.max(7, Math.min(25, camera.position.z));
//     }

//     let touchStartDistance = 0;
    
//     function onTouchStart(e) {
//       if (e.touches.length === 2) {
//         const dx = e.touches[0].clientX - e.touches[1].clientX;
//         const dy = e.touches[0].clientY - e.touches[1].clientY;
//         touchStartDistance = Math.sqrt(dx * dx + dy * dy);
//       } else if (e.touches.length === 1) {
//         isDragging = true;
//         previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
//       }
//     }

//     function onTouchMove(e) {
//       if (e.touches.length === 2) {
//         const dx = e.touches[0].clientX - e.touches[1].clientX;
//         const dy = e.touches[0].clientY - e.touches[1].clientY;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const delta = distance - touchStartDistance;
//         camera.position.z -= delta * 0.01;
//         camera.position.z = Math.max(7, Math.min(25, camera.position.z));
//         touchStartDistance = distance;
//       } else if (e.touches.length === 1 && isDragging) {
//         const deltaX = e.touches[0].clientX - previousMousePosition.x;
//         const deltaY = e.touches[0].clientY - previousMousePosition.y;
//         targetRotation.y += deltaX * 0.005;
//         targetRotation.x += deltaY * 0.005;
//         previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
//       }
//     }

//     function onTouchEnd() {
//       isDragging = false;
//     }

//     renderer.domElement.addEventListener('mousedown', onMouseDown);
//     renderer.domElement.addEventListener('mousemove', onMouseMove);
//     renderer.domElement.addEventListener('mouseup', onMouseUp);
//     renderer.domElement.addEventListener('wheel', onWheel, { passive: true });
//     renderer.domElement.addEventListener('touchstart', onTouchStart);
//     renderer.domElement.addEventListener('touchmove', onTouchMove);
//     renderer.domElement.addEventListener('touchend', onTouchEnd);

//     let animationProgress = 0;
//     const buildDuration = 40000;
//     const startTime = Date.now();
//     let time = 0;

//     function animate() {
//       requestAnimationFrame(animate);

//       const elapsed = Date.now() - startTime;
//       animationProgress = Math.min(elapsed / buildDuration, 1);
//       time += 0.016;

//       structureGroup.rotation.x += (targetRotation.x - structureGroup.rotation.x) * 0.05;
//       structureGroup.rotation.y += (targetRotation.y - structureGroup.rotation.y) * 0.05;

//       if (!isDragging) {
//         targetRotation.y += 0.002;
//       }

//       atoms.forEach((atom, index) => {
//         const normalizedIndex = index / atoms.length;
//         const atomProgress = Math.max(0, Math.min(1, (animationProgress - normalizedIndex * 0.5) * 2));
        
//         const scale = atomProgress * atom.targetScale;
//         atom.sprite.scale.set(scale, scale, scale);
        
//         const glimmer = Math.sin(time * atom.glimmerSpeed + atom.glimmerOffset) * 0.3 + 0.7;
//         atom.sprite.material.opacity = atomProgress * glimmer * 0.8;
        
//         const hue = (time * 0.05 + normalizedIndex * 0.3 + glimmer * 0.1) % 1;
//         const saturation = 0.4 + glimmer * 0.2;
//         const lightness = 0.85 + glimmer * 0.15;
//         atom.sprite.material.color.setHSL(hue, saturation, lightness);
//       });

//       edges.forEach((edge, index) => {
//         const atom1Progress = edge.atom1.sprite.scale.x / edge.atom1.targetScale;
//         const atom2Progress = edge.atom2.sprite.scale.x / edge.atom2.targetScale;
//         const edgeProgress = Math.min(atom1Progress, atom2Progress);
        
//         const glimmer = Math.sin(time * edge.glimmerSpeed + edge.glimmerOffset) * 0.5 + 0.5;
//         edge.line.material.opacity = edgeProgress * edge.baseOpacity * glimmer;
        
//         const normalizedIndex = index / edges.length;
//         const hue = (time * 0.03 + normalizedIndex * 0.5 + glimmer * 0.15) % 1;
//         const saturation = 0.5 + glimmer * 0.3;
//         const lightness = 0.6 + glimmer * 0.2;
//         edge.line.material.color.setHSL(hue, saturation, lightness);
//       });

//       pointLight1.position.x = Math.sin(time * 0.2) * 15;
//       pointLight1.position.z = Math.cos(time * 0.2) * 15;
//       pointLight2.position.x = Math.sin(time * 0.25 + Math.PI) * 15;
//       pointLight2.position.z = Math.cos(time * 0.25 + Math.PI) * 15;

//       renderer.render(scene, camera);
//     }

//     animate();

//     function handleResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.domElement.removeEventListener('mousedown', onMouseDown);
//       renderer.domElement.removeEventListener('mousemove', onMouseMove);
//       renderer.domElement.removeEventListener('mouseup', onMouseUp);
//       renderer.domElement.removeEventListener('wheel', onWheel);
//       renderer.domElement.removeEventListener('touchstart', onTouchStart);
//       renderer.domElement.removeEventListener('touchmove', onTouchMove);
//       renderer.domElement.removeEventListener('touchend', onTouchEnd);
//       if (mountRef.current && renderer.domElement.parentNode) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       starTexture.dispose();
//       atoms.forEach(atom => atom.sprite.material.dispose());
//       edges.forEach(edge => {
//         edge.line.geometry.dispose();
//         edge.line.material.dispose();
//       });
//     };
//   }, []);

//   return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-auto" />;
// }

// // Component: Header
// function Header() {
//   return (
//     <div className="fixed top-0 left-0 p-6 md:p-8 z-50 pointer-events-none">
//       <div className="pointer-events-auto bg-black/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-cyan-500/20">
//         <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
//           Hi, I'm Adithya
//         </h1>
//       </div>
//     </div>
//   );
// }

// // Component: Navigation
// function Navigation({ route, setRoute }) {
//   return (
//     <div className="fixed top-0 right-0 p-6 md:p-8 z-50 pointer-events-none">
//       <div className="flex gap-3 pointer-events-auto">
//         <button
//           onClick={() => setRoute('home')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'home'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           Home
//         </button>
//         <button
//           onClick={() => setRoute('about')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'about'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           About
//         </button>
//         <button
//           onClick={() => setRoute('contact')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'contact'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           Contact
//         </button>
//       </div>
//     </div>
//   );
// }

// // Component: Social Links
// function SocialLinks() {
//   return (
//     <div className="fixed bottom-8 left-8 flex gap-4 z-50 pointer-events-auto">
//       <a
//         href="https://github.com/yourusername"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
//       >
//         GitHub
//       </a>
//       <a
//         href="https://linkedin.com/in/yourusername"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
//       >
//         LinkedIn
//       </a>
//       <a
//         href="mailto:your.email@example.com"
//         className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
//       >
//         Email
//       </a>
//     </div>
//   );
// }

// // Page: Home
// function HomePage() {
//   return (
//     <div className="h-full flex items-center justify-center px-8">
//       <div className="max-w-4xl text-center">
//         <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider">
//           Welcome
//         </h2>
//         <p className="text-cyan-300 text-xl md:text-2xl font-light leading-relaxed">
//           Explore the crystalline structure of my portfolio. Drag to rotate, scroll to zoom, and discover more about my work.
//         </p>
//       </div>
//     </div>
//   );
// }

// // Page: About
// function AboutPage() {
//   return (
//     <div className="h-full flex items-center justify-center px-8">
//       <div className="max-w-3xl bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20">
//         <h2 className="text-5xl font-bold text-white mb-6 tracking-wider">About Me</h2>
//         <div className="space-y-4 text-cyan-100 text-lg leading-relaxed">
//           <p>
//             I'm a passionate developer and creative technologist who loves building beautiful, interactive experiences.
//           </p>
//           <p>
//             My work combines technical expertise with artistic vision, creating projects that push the boundaries of what's possible on the web.
//           </p>
//           <p>
//             I specialize in 3D graphics, creative coding, and building immersive digital experiences that inspire and delight.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Page: Contact
// function ContactPage() {
//   return (
//     <div className="h-full flex items-center justify-center px-8">
//       <div className="max-w-3xl bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20">
//         <h2 className="text-5xl font-bold text-white mb-6 tracking-wider">Get In Touch</h2>
//         <div className="space-y-6 text-cyan-100 text-lg">
//           <p className="leading-relaxed">
//             I'm always excited to collaborate on interesting projects or discuss new opportunities. Feel free to reach out!
//           </p>
//           <div className="space-y-4 mt-8">
//             <a 
//               href="mailto:your.email@example.com" 
//               className="block text-cyan-300 hover:text-cyan-100 transition-colors text-xl"
//             >
//               📧 your.email@example.com
//             </a>
//             <p className="text-cyan-300 text-xl">
//               📍 Based in Your Location
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main App
// export default function App() {
//   const [route, setRoute] = useState('home');

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       <CrystalBackground />
      
//       <div className="relative z-10 h-full">
//         <Header />
//         <Navigation route={route} setRoute={setRoute} />
//         <SocialLinks />
        
//         <div className="pointer-events-auto h-full">
//           {route === 'home' && <HomePage />}
//           {route === 'about' && <AboutPage />}
//           {route === 'contact' && <ContactPage />}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Utility: Create star texture
function createStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.6)');
  gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Utility: Create crystal geometry
function createCrystalGeometry(structureGroup, starTexture) {
  const atoms = [];
  const edges = [];
  const radius = 5;

  const phi = (1 + Math.sqrt(5)) / 2;
  const icosahedronVertices = [
    [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
    [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
    [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]
  ].map(v => {
    const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
    return new THREE.Vector3(v[0]/len * radius, v[1]/len * radius, v[2]/len * radius);
  });

  const edgeVertices = [];
  const icosahedronEdges = [
    [0,1],[0,4],[0,5],[0,8],[0,9],
    [1,6],[1,7],[1,8],[1,9],
    [2,3],[2,4],[2,5],[2,10],[2,11],
    [3,6],[3,7],[3,10],[3,11],
    [4,5],[4,8],[4,10],
    [5,9],[5,11],
    [6,7],[6,8],[6,10],
    [7,9],[7,11],
    [8,10],[9,11]
  ];

  icosahedronVertices.forEach(vertex => {
    edgeVertices.push(vertex.clone());
  });

  const pointsPerEdge = 8;
  icosahedronEdges.forEach(([i, j]) => {
    const v1 = icosahedronVertices[i];
    const v2 = icosahedronVertices[j];
    
    for (let k = 1; k < pointsPerEdge; k++) {
      const t = k / pointsPerEdge;
      const edgePoint = new THREE.Vector3().lerpVectors(v1, v2, t);
      edgeVertices.push(edgePoint);
    }
  });

  const geometry = new THREE.IcosahedronGeometry(radius, 0);
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i += 3) {
    const v1 = new THREE.Vector3(positions.getX(i), positions.getY(i), positions.getZ(i));
    const v2 = new THREE.Vector3(positions.getX(i+1), positions.getY(i+1), positions.getZ(i+1));
    const v3 = new THREE.Vector3(positions.getX(i+2), positions.getY(i+2), positions.getZ(i+2));
    
    const center = new THREE.Vector3().add(v1).add(v2).add(v3).divideScalar(3);
    edgeVertices.push(center);
    
    for (let j = 0; j < 3; j++) {
      const midpoint = new THREE.Vector3().lerpVectors(center, [v1, v2, v3][j], 0.5);
      edgeVertices.push(midpoint);
    }
  }

  edgeVertices.forEach((pos) => {
    const spriteMaterial = new THREE.SpriteMaterial({
      map: starTexture,
      color: new THREE.Color(0xccddff),
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });

    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.copy(pos);
    sprite.scale.set(0, 0, 0);
    
    const targetScale = 0.15 + Math.random() * 0.08;
    
    structureGroup.add(sprite);
    atoms.push({
      sprite,
      targetScale,
      glimmerOffset: Math.random() * Math.PI * 2,
      glimmerSpeed: 0.8 + Math.random() * 1.2,
      position: pos.clone()
    });
  });

  for (let i = 0; i < atoms.length; i++) {
    for (let j = i + 1; j < atoms.length; j++) {
      const distance = atoms[i].position.distanceTo(atoms[j].position);
      if (distance < 2.8) {
        const points = [atoms[i].position, atoms[j].position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color(0x88aadd),
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending
        });
        
        const line = new THREE.Line(geometry, material);
        structureGroup.add(line);
        
        edges.push({
          line,
          atom1: atoms[i],
          atom2: atoms[j],
          glimmerOffset: Math.random() * Math.PI * 2,
          glimmerSpeed: 0.5 + Math.random() * 1.0,
          baseOpacity: 0.15 + Math.random() * 0.15
        });
      }
    }
  }

  return { atoms, edges };
}

// Component: Crystal Background
function CrystalBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000510);
    scene.fog = new THREE.FogExp2(0x000510, 0.015);
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6699ff, 1.5, 80);
    pointLight1.position.set(15, 15, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xaaccff, 1.5, 80);
    pointLight2.position.set(-15, -15, 15);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x99bbff, 1.5, 80);
    pointLight3.position.set(0, 15, -15);
    scene.add(pointLight3);

    const structureGroup = new THREE.Group();
    scene.add(structureGroup);

    const starTexture = createStarTexture();
    const { atoms, edges } = createCrystalGeometry(structureGroup, starTexture);

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    function onMouseDown(e) {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    }

    function onMouseMove(e) {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        targetRotation.y += deltaX * 0.005;
        targetRotation.x += deltaY * 0.005;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    }

    function onMouseUp() {
      isDragging = false;
    }

    function onWheel(e) {
      camera.position.z += e.deltaY * 0.01;
      camera.position.z = Math.max(7, Math.min(25, camera.position.z));
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
        camera.position.z = Math.max(7, Math.min(25, camera.position.z));
        touchStartDistance = distance;
      } else if (e.touches.length === 1 && isDragging) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        targetRotation.y += deltaX * 0.005;
        targetRotation.x += deltaY * 0.005;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }

    function onTouchEnd() {
      isDragging = false;
    }

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: true });
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
      time += 0.016;

      structureGroup.rotation.x += (targetRotation.x - structureGroup.rotation.x) * 0.05;
      structureGroup.rotation.y += (targetRotation.y - structureGroup.rotation.y) * 0.05;

      if (!isDragging) {
        targetRotation.y += 0.002;
      }

      atoms.forEach((atom, index) => {
        const normalizedIndex = index / atoms.length;
        const atomProgress = Math.max(0, Math.min(1, (animationProgress - normalizedIndex * 0.5) * 2));
        
        const scale = atomProgress * atom.targetScale;
        atom.sprite.scale.set(scale, scale, scale);
        
        const glimmer = Math.sin(time * atom.glimmerSpeed + atom.glimmerOffset) * 0.3 + 0.7;
        atom.sprite.material.opacity = atomProgress * glimmer * 0.8;
        
        const hue = (time * 0.05 + normalizedIndex * 0.3 + glimmer * 0.1) % 1;
        const saturation = 0.4 + glimmer * 0.2;
        const lightness = 0.85 + glimmer * 0.15;
        atom.sprite.material.color.setHSL(hue, saturation, lightness);
      });

      edges.forEach((edge, index) => {
        const atom1Progress = edge.atom1.sprite.scale.x / edge.atom1.targetScale;
        const atom2Progress = edge.atom2.sprite.scale.x / edge.atom2.targetScale;
        const edgeProgress = Math.min(atom1Progress, atom2Progress);
        
        const glimmer = Math.sin(time * edge.glimmerSpeed + edge.glimmerOffset) * 0.5 + 0.5;
        edge.line.material.opacity = edgeProgress * edge.baseOpacity * glimmer;
        
        const normalizedIndex = index / edges.length;
        const hue = (time * 0.03 + normalizedIndex * 0.5 + glimmer * 0.15) % 1;
        const saturation = 0.5 + glimmer * 0.3;
        const lightness = 0.6 + glimmer * 0.2;
        edge.line.material.color.setHSL(hue, saturation, lightness);
      });

      pointLight1.position.x = Math.sin(time * 0.2) * 15;
      pointLight1.position.z = Math.cos(time * 0.2) * 15;
      pointLight2.position.x = Math.sin(time * 0.25 + Math.PI) * 15;
      pointLight2.position.z = Math.cos(time * 0.25 + Math.PI) * 15;

      renderer.render(scene, camera);
    }

    animate();

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
      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement);
      }
      starTexture.dispose();
      atoms.forEach(atom => atom.sprite.material.dispose());
      edges.forEach(edge => {
        edge.line.geometry.dispose();
        edge.line.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-none" />;
}

// Component: Header
function Header() {
  return (
    <div className="fixed top-0 left-0 p-6 md:p-8 z-50 pointer-events-none">
      <div className="pointer-events-auto bg-black/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-cyan-500/20">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Hi, I'm Adithya
        </h1>
      </div>
    </div>
  );
}

// // Component: Navigation
// function Navigation({ route, setRoute }) {
//   return (
//     <div className="fixed top-0 right-0 p-6 md:p-8 z-50 pointer-events-none">
//       <div className="flex gap-3 pointer-events-auto">
//         <button
//           onClick={() => setRoute('home')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'home'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           Home
//         </button>
//         <button
//           onClick={() => setRoute('about')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'about'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           About
//         </button>
//         <button
//           onClick={() => setRoute('contact')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'contact'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           Contact
//         </button>
//       </div>
//     </div>
//   );
// }
// Component: Navigation
function Navigation() {
    const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div className="fixed top-0 right-0 p-6 md:p-8 z-50 pointer-events-none">
        <div className="flex gap-3 pointer-events-auto">
          <button
            onClick={() => scrollToSection('home')}
            className="px-4 py-2 rounded-lg font-medium transition-all bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30 backdrop-blur-sm hover:text-white"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-4 py-2 rounded-lg font-medium transition-all bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30 backdrop-blur-sm hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 rounded-lg font-medium transition-all bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30 backdrop-blur-sm hover:text-white"
          >
            Contact
          </button>
        </div>
      </div>
    );
  }

// Component: Social Links
function SocialLinks() {
    return (
      <div className="fixed bottom-8 left-8 flex gap-4 z-50 pointer-events-auto">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
        >
          GitHub
        </a>
  
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
        >
          LinkedIn
        </a>
  
        <a
          href="mailto:your.email@example.com"
          className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
        >
          Email
        </a>
      </div>
    );
  }
  
// Page: Home
function HomePage() {
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider">
          Welcome
        </h2>
        <p className="text-cyan-300 text-xl md:text-2xl font-light leading-relaxed">
          Explore the crystalline structure of my portfolio. Drag to rotate, scroll to zoom, and discover more about my work.
        </p>
      </div>
    </div>
  );
}

// Page: About
function AboutPage() {
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-3xl bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20">
        <h2 className="text-5xl font-bold text-white mb-6 tracking-wider">About Me</h2>
        <div className="space-y-4 text-cyan-100 text-lg leading-relaxed">
          <p>
            I'm a passionate developer and creative technologist who loves building beautiful, interactive experiences.
          </p>
          <p>
            My work combines technical expertise with artistic vision, creating projects that push the boundaries of what's possible on the web.
          </p>
          <p>
            I specialize in 3D graphics, creative coding, and building immersive digital experiences that inspire and delight.
          </p>
        </div>
      </div>
    </div>
  );
}

// Page: Contact
function ContactPage() {
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-3xl bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20">
        <h2 className="text-5xl font-bold text-white mb-6 tracking-wider">Get In Touch</h2>
        <div className="space-y-6 text-cyan-100 text-lg">
          <p className="leading-relaxed">
            I'm always excited to collaborate on interesting projects or discuss new opportunities. Feel free to reach out!
          </p>
          <div className="space-y-4 mt-8">
            <a 
              href="mailto:your.email@example.com" 
              className="block text-cyan-300 hover:text-cyan-100 transition-colors text-xl"
            >
              📧 your.email@example.com
            </a>
            <p className="text-cyan-300 text-xl">
              📍 Based in Your Location
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <CrystalBackground />
      
      <div className="relative z-10 h-full">
        <Header />
        <Navigation route={route} setRoute={setRoute} />
        <SocialLinks />
        
        <div className="pointer-events-auto h-full">
          {route === 'home' && <HomePage />}
          {route === 'about' && <AboutPage />}
          {route === 'contact' && <ContactPage />}
        </div>
      </div>
    </div>
  );
}