// // // // ============================================
// // // // FILE: src/components/CrystalBackground.jsx
// // // // ============================================
// // // import { useEffect, useRef } from 'react';
// // // import * as THREE from 'three';
// // // import { createCrystalGeometry } from '../utils/crystalGeometry';
// // // import { createStarTexture } from '../utils/textureUtils';

// // // function CrystalBackground() {
// // //   const mountRef = useRef(null);
// // //   const sceneRef = useRef(null);

// // //   useEffect(() => {
// // //     if (!mountRef.current) return;

// // //     // ✅ Prevent double-initialization (StrictMode safe)
// // //     if (mountRef.current.childNodes.length > 0) {
// // //       return;
// // //     }

// // //     const scene = new THREE.Scene();
// // //     scene.background = new THREE.Color(0x000510);
// // //     scene.fog = new THREE.FogExp2(0x000510, 0.015);
// // //     sceneRef.current = scene;
    
// // //     const camera = new THREE.PerspectiveCamera(
// // //       75,
// // //       window.innerWidth / window.innerHeight,
// // //       0.1,
// // //       1000
// // //     );
// // //     camera.position.z = 10;

// // //     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // //     mountRef.current.appendChild(renderer.domElement);

// // //     // Lights
// // //     const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
// // //     scene.add(ambientLight);

// // //     const pointLight1 = new THREE.PointLight(0x6699ff, 1.5, 80);
// // //     pointLight1.position.set(15, 15, 15);
// // //     scene.add(pointLight1);

// // //     const pointLight2 = new THREE.PointLight(0xaaccff, 1.5, 80);
// // //     pointLight2.position.set(-15, -15, 15);
// // //     scene.add(pointLight2);

// // //     const pointLight3 = new THREE.PointLight(0x99bbff, 1.5, 80);
// // //     pointLight3.position.set(0, 15, -15);
// // //     scene.add(pointLight3);

// // //     // Create crystal structure
// // //     const structureGroup = new THREE.Group();
// // //     scene.add(structureGroup);

// // //     const starTexture = createStarTexture();
// // //     const { atoms, edges } = createCrystalGeometry(structureGroup, starTexture);

// // //     // Interaction state
// // //     let isDragging = false;
// // //     let previousMousePosition = { x: 0, y: 0 };
// // //     const targetRotation = { x: 0, y: 0 };

// // //     // Mouse/touch handlers
// // //     function onMouseDown(e) {
// // //       isDragging = true;
// // //       previousMousePosition = { x: e.clientX, y: e.clientY };
// // //     }

// // //     function onMouseMove(e) {
// // //       if (isDragging) {
// // //         const deltaX = e.clientX - previousMousePosition.x;
// // //         const deltaY = e.clientY - previousMousePosition.y;
// // //         targetRotation.y += deltaX * 0.005;
// // //         targetRotation.x += deltaY * 0.005;
// // //         previousMousePosition = { x: e.clientX, y: e.clientY };
// // //       }
// // //     }

// // //     function onMouseUp() {
// // //       isDragging = false;
// // //     }

// // //     function onWheel(e) {
// // //       camera.position.z += e.deltaY * 0.01;
// // //       camera.position.z = Math.max(7, Math.min(25, camera.position.z));
// // //     }

// // //     let touchStartDistance = 0;
    
// // //     function onTouchStart(e) {
// // //       if (e.touches.length === 2) {
// // //         const dx = e.touches[0].clientX - e.touches[1].clientX;
// // //         const dy = e.touches[0].clientY - e.touches[1].clientY;
// // //         touchStartDistance = Math.sqrt(dx * dx + dy * dy);
// // //       } else if (e.touches.length === 1) {
// // //         isDragging = true;
// // //         previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
// // //       }
// // //     }

// // //     function onTouchMove(e) {
// // //       if (e.touches.length === 2) {
// // //         const dx = e.touches[0].clientX - e.touches[1].clientX;
// // //         const dy = e.touches[0].clientY - e.touches[1].clientY;
// // //         const distance = Math.sqrt(dx * dx + dy * dy);
// // //         const delta = distance - touchStartDistance;
// // //         camera.position.z -= delta * 0.01;
// // //         camera.position.z = Math.max(7, Math.min(25, camera.position.z));
// // //         touchStartDistance = distance;
// // //       } else if (e.touches.length === 1 && isDragging) {
// // //         const deltaX = e.touches[0].clientX - previousMousePosition.x;
// // //         const deltaY = e.touches[0].clientY - previousMousePosition.y;
// // //         targetRotation.y += deltaX * 0.005;
// // //         targetRotation.x += deltaY * 0.005;
// // //         previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
// // //       }
// // //     }

// // //     function onTouchEnd() {
// // //       isDragging = false;
// // //     }

// // //     renderer.domElement.addEventListener('mousedown', onMouseDown);
// // //     renderer.domElement.addEventListener('mousemove', onMouseMove);
// // //     renderer.domElement.addEventListener('mouseup', onMouseUp);
// // //     renderer.domElement.addEventListener('wheel', onWheel, { passive: true });
// // //     renderer.domElement.addEventListener('touchstart', onTouchStart);
// // //     renderer.domElement.addEventListener('touchmove', onTouchMove);
// // //     renderer.domElement.addEventListener('touchend', onTouchEnd);

// // //     // Animation
// // //     let animationProgress = 0;
// // //     const buildDuration = 40000;
// // //     const startTime = Date.now();
// // //     let time = 0;

// // //     function animate() {
// // //       requestAnimationFrame(animate);

// // //       const elapsed = Date.now() - startTime;
// // //       animationProgress = Math.min(elapsed / buildDuration, 1);
// // //       time += 0.016;

// // //       structureGroup.rotation.x += (targetRotation.x - structureGroup.rotation.x) * 0.05;
// // //       structureGroup.rotation.y += (targetRotation.y - structureGroup.rotation.y) * 0.05;

// // //       if (!isDragging) {
// // //         targetRotation.y += 0.002;
// // //       }

// // //       // Animate atoms
// // //       atoms.forEach((atom, index) => {
// // //         const normalizedIndex = index / atoms.length;
// // //         const atomProgress = Math.max(0, Math.min(1, (animationProgress - normalizedIndex * 0.5) * 2));
        
// // //         const scale = atomProgress * atom.targetScale;
// // //         atom.sprite.scale.set(scale, scale, scale);
        
// // //         const glimmer = Math.sin(time * atom.glimmerSpeed + atom.glimmerOffset) * 0.3 + 0.7;
// // //         atom.sprite.material.opacity = atomProgress * glimmer * 0.8;
        
// // //         const hue = (time * 0.05 + normalizedIndex * 0.3 + glimmer * 0.1) % 1;
// // //         const saturation = 0.4 + glimmer * 0.2;
// // //         const lightness = 0.85 + glimmer * 0.15;
// // //         atom.sprite.material.color.setHSL(hue, saturation, lightness);
// // //       });

// // //       // Animate edges
// // //       edges.forEach((edge, index) => {
// // //         const atom1Progress = edge.atom1.sprite.scale.x / edge.atom1.targetScale;
// // //         const atom2Progress = edge.atom2.sprite.scale.x / edge.atom2.targetScale;
// // //         const edgeProgress = Math.min(atom1Progress, atom2Progress);
        
// // //         const glimmer = Math.sin(time * edge.glimmerSpeed + edge.glimmerOffset) * 0.5 + 0.5;
// // //         edge.line.material.opacity = edgeProgress * edge.baseOpacity * glimmer;
        
// // //         const normalizedIndex = index / edges.length;
// // //         const hue = (time * 0.03 + normalizedIndex * 0.5 + glimmer * 0.15) % 1;
// // //         const saturation = 0.5 + glimmer * 0.3;
// // //         const lightness = 0.6 + glimmer * 0.2;
// // //         edge.line.material.color.setHSL(hue, saturation, lightness);
// // //       });

// // //       // Animate lights
// // //       pointLight1.position.x = Math.sin(time * 0.2) * 15;
// // //       pointLight1.position.z = Math.cos(time * 0.2) * 15;
// // //       pointLight2.position.x = Math.sin(time * 0.25 + Math.PI) * 15;
// // //       pointLight2.position.z = Math.cos(time * 0.25 + Math.PI) * 15;

// // //       renderer.render(scene, camera);
// // //     }

// // //     animate();

// // //     function handleResize() {
// // //       camera.aspect = window.innerWidth / window.innerHeight;
// // //       camera.updateProjectionMatrix();
// // //       renderer.setSize(window.innerWidth, window.innerHeight);
// // //     }
// // //     window.addEventListener('resize', handleResize);

// // //     // ✅ Full cleanup
// // //     return () => {
// // //       window.removeEventListener('resize', handleResize);
// // //       renderer.domElement.removeEventListener('mousedown', onMouseDown);
// // //       renderer.domElement.removeEventListener('mousemove', onMouseMove);
// // //       renderer.domElement.removeEventListener('mouseup', onMouseUp);
// // //       renderer.domElement.removeEventListener('wheel', onWheel);
// // //       renderer.domElement.removeEventListener('touchstart', onTouchStart);
// // //       renderer.domElement.removeEventListener('touchmove', onTouchMove);
// // //       renderer.domElement.removeEventListener('touchend', onTouchEnd);
      
// // //       if (mountRef.current?.contains(renderer.domElement)) {
// // //         mountRef.current.removeChild(renderer.domElement);
// // //       }

// // //       renderer.dispose();
// // //       starTexture.dispose();
// // //       atoms.forEach(atom => atom.sprite.material.dispose());
// // //       edges.forEach(edge => {
// // //         edge.line.geometry.dispose();
// // //         edge.line.material.dispose();
// // //       });
// // //     };
// // //   }, []);

// // //   return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-auto" />;
// // // }

// // // export default CrystalBackground;


// // // ============================================
// // // FILE: src/components/CrystalBackground.jsx
// // // ============================================
// // import { useEffect, useRef } from 'react';
// // import * as THREE from 'three';
// // import { createCrystalGeometry } from '../utils/crystalGeometry';
// // import { createStarTexture } from '../utils/textureUtils';

// // function CrystalBackground() {
// //   const mountRef = useRef(null);
// //   const sceneRef = useRef(null);

// //   useEffect(() => {
// //     if (!mountRef.current) return;

// //     const scene = new THREE.Scene();
// //     scene.background = new THREE.Color(0x000510);
// //     scene.fog = new THREE.FogExp2(0x000510, 0.015);
// //     sceneRef.current = scene;
    
// //     const camera = new THREE.PerspectiveCamera(
// //       75,
// //       window.innerWidth / window.innerHeight,
// //       0.1,
// //       1000
// //     );
// //     camera.position.z = 10;

// //     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     mountRef.current.appendChild(renderer.domElement);

// //     // Lights
// //     const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
// //     scene.add(ambientLight);

// //     const pointLight1 = new THREE.PointLight(0x6699ff, 1.5, 80);
// //     pointLight1.position.set(15, 15, 15);
// //     scene.add(pointLight1);

// //     const pointLight2 = new THREE.PointLight(0xaaccff, 1.5, 80);
// //     pointLight2.position.set(-15, -15, 15);
// //     scene.add(pointLight2);

// //     const pointLight3 = new THREE.PointLight(0x99bbff, 1.5, 80);
// //     pointLight3.position.set(0, 15, -15);
// //     scene.add(pointLight3);

// //     // Create crystal structure
// //     const structureGroup = new THREE.Group();
// //     scene.add(structureGroup);

// //     const starTexture = createStarTexture();
// //     const { atoms, edges } = createCrystalGeometry(structureGroup, starTexture);

// //     // Interaction state
// //     let isDragging = false;
// //     let previousMousePosition = { x: 0, y: 0 };
// //     const targetRotation = { x: 0, y: 0 };

// //     // Mouse/touch handlers
// //     function onMouseDown(e) {
// //       isDragging = true;
// //       previousMousePosition = { x: e.clientX, y: e.clientY };
// //     }

// //     function onMouseMove(e) {
// //       if (isDragging) {
// //         const deltaX = e.clientX - previousMousePosition.x;
// //         const deltaY = e.clientY - previousMousePosition.y;
// //         targetRotation.y += deltaX * 0.005;
// //         targetRotation.x += deltaY * 0.005;
// //         previousMousePosition = { x: e.clientX, y: e.clientY };
// //       }
// //     }

// //     function onMouseUp() {
// //       isDragging = false;
// //     }

// //     function onWheel(e) {
// //       camera.position.z += e.deltaY * 0.01;
// //       camera.position.z = Math.max(7, Math.min(25, camera.position.z));
// //     }

// //     let touchStartDistance = 0;
    
// //     function onTouchStart(e) {
// //       if (e.touches.length === 2) {
// //         const dx = e.touches[0].clientX - e.touches[1].clientX;
// //         const dy = e.touches[0].clientY - e.touches[1].clientY;
// //         touchStartDistance = Math.sqrt(dx * dx + dy * dy);
// //       } else if (e.touches.length === 1) {
// //         isDragging = true;
// //         previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
// //       }
// //     }

// //     function onTouchMove(e) {
// //       if (e.touches.length === 2) {
// //         const dx = e.touches[0].clientX - e.touches[1].clientX;
// //         const dy = e.touches[0].clientY - e.touches[1].clientY;
// //         const distance = Math.sqrt(dx * dx + dy * dy);
// //         const delta = distance - touchStartDistance;
// //         camera.position.z -= delta * 0.01;
// //         camera.position.z = Math.max(7, Math.min(25, camera.position.z));
// //         touchStartDistance = distance;
// //       } else if (e.touches.length === 1 && isDragging) {
// //         const deltaX = e.touches[0].clientX - previousMousePosition.x;
// //         const deltaY = e.touches[0].clientY - previousMousePosition.y;
// //         targetRotation.y += deltaX * 0.005;
// //         targetRotation.x += deltaY * 0.005;
// //         previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
// //       }
// //     }

// //     function onTouchEnd() {
// //       isDragging = false;
// //     }

// //     renderer.domElement.addEventListener('mousedown', onMouseDown);
// //     renderer.domElement.addEventListener('mousemove', onMouseMove);
// //     renderer.domElement.addEventListener('mouseup', onMouseUp);
// //     renderer.domElement.addEventListener('wheel', onWheel, { passive: true });
// //     renderer.domElement.addEventListener('touchstart', onTouchStart);
// //     renderer.domElement.addEventListener('touchmove', onTouchMove);
// //     renderer.domElement.addEventListener('touchend', onTouchEnd);

// //     // Animation
// //     let animationProgress = 0;
// //     const buildDuration = 40000;
// //     const startTime = Date.now();
// //     let time = 0;

// //     function animate() {
// //       requestAnimationFrame(animate);

// //       const elapsed = Date.now() - startTime;
// //       animationProgress = Math.min(elapsed / buildDuration, 1);
// //       time += 0.016;

// //       structureGroup.rotation.x += (targetRotation.x - structureGroup.rotation.x) * 0.05;
// //       structureGroup.rotation.y += (targetRotation.y - structureGroup.rotation.y) * 0.05;

// //       if (!isDragging) {
// //         targetRotation.y += 0.002;
// //       }

// //       // Animate atoms
// //       atoms.forEach((atom, index) => {
// //         const normalizedIndex = index / atoms.length;
// //         const atomProgress = Math.max(0, Math.min(1, (animationProgress - normalizedIndex * 0.5) * 2));
        
// //         const scale = atomProgress * atom.targetScale;
// //         atom.sprite.scale.set(scale, scale, scale);
        
// //         const glimmer = Math.sin(time * atom.glimmerSpeed + atom.glimmerOffset) * 0.3 + 0.7;
// //         atom.sprite.material.opacity = atomProgress * glimmer * 0.8;
        
// //         const hue = (time * 0.05 + normalizedIndex * 0.3 + glimmer * 0.1) % 1;
// //         const saturation = 0.4 + glimmer * 0.2;
// //         const lightness = 0.85 + glimmer * 0.15;
// //         atom.sprite.material.color.setHSL(hue, saturation, lightness);
// //       });

// //       // Animate edges
// //       edges.forEach((edge, index) => {
// //         const atom1Progress = edge.atom1.sprite.scale.x / edge.atom1.targetScale;
// //         const atom2Progress = edge.atom2.sprite.scale.x / edge.atom2.targetScale;
// //         const edgeProgress = Math.min(atom1Progress, atom2Progress);
        
// //         const glimmer = Math.sin(time * edge.glimmerSpeed + edge.glimmerOffset) * 0.5 + 0.5;
// //         edge.line.material.opacity = edgeProgress * edge.baseOpacity * glimmer;
        
// //         const normalizedIndex = index / edges.length;
// //         const hue = (time * 0.03 + normalizedIndex * 0.5 + glimmer * 0.15) % 1;
// //         const saturation = 0.5 + glimmer * 0.3;
// //         const lightness = 0.6 + glimmer * 0.2;
// //         edge.line.material.color.setHSL(hue, saturation, lightness);
// //       });

// //       // Animate lights
// //       pointLight1.position.x = Math.sin(time * 0.2) * 15;
// //       pointLight1.position.z = Math.cos(time * 0.2) * 15;
// //       pointLight2.position.x = Math.sin(time * 0.25 + Math.PI) * 15;
// //       pointLight2.position.z = Math.cos(time * 0.25 + Math.PI) * 15;

// //       renderer.render(scene, camera);
// //     }

// //     animate();

// //     function handleResize() {
// //       camera.aspect = window.innerWidth / window.innerHeight;
// //       camera.updateProjectionMatrix();
// //       renderer.setSize(window.innerWidth, window.innerHeight);
// //     }
// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //       renderer.domElement.removeEventListener('mousedown', onMouseDown);
// //       renderer.domElement.removeEventListener('mousemove', onMouseMove);
// //       renderer.domElement.removeEventListener('mouseup', onMouseUp);
// //       renderer.domElement.removeEventListener('wheel', onWheel);
// //       renderer.domElement.removeEventListener('touchstart', onTouchStart);
// //       renderer.domElement.removeEventListener('touchmove', onTouchMove);
// //       renderer.domElement.removeEventListener('touchend', onTouchEnd);
// //       if (mountRef.current && renderer.domElement.parentNode) {
// //         mountRef.current.removeChild(renderer.domElement);
// //       }
// //       starTexture.dispose();
// //       atoms.forEach(atom => atom.sprite.material.dispose());
// //       edges.forEach(edge => {
// //         edge.line.geometry.dispose();
// //         edge.line.material.dispose();
// //       });
// //     };
// //   }, []);

// //   return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-auto" />;
// // }
// // export default CrystalBackground

// // ============================================
// // FILE: src/components/CrystalBackground.jsx
// // ============================================
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { createCrystalGeometry } from '../utils/crystalGeometry';
// import { createStarTexture } from '../utils/textureUtils';

// function CrystalBackground() {
//   const mountRef = useRef(null);
//   const sceneRef = useRef(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // ✅ Prevent duplicate renderers from being created in React Strict Mode
//     if (mountRef.current.childNodes.length > 0) return;

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000510);
//     scene.fog = new THREE.FogExp2(0x000510, 0.015);
//     sceneRef.current = scene;
    
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

//     // Lights
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

//     // Crystal structure
//     const structureGroup = new THREE.Group();
//     scene.add(structureGroup);

//     const starTexture = createStarTexture();
//     const { atoms, edges } = createCrystalGeometry(structureGroup, starTexture);

//     // Interaction state
//     let isDragging = false;
//     let previousMousePosition = { x: 0, y: 0 };
//     const targetRotation = { x: 0, y: 0 };

//     // Mouse handlers
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

//     // Touch handlers
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

//     // Animation
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

//       // Animate atoms
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

//       // Animate edges
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

//       // Animate lights
//       pointLight1.position.x = Math.sin(time * 0.2) * 15;
//       pointLight1.position.z = Math.cos(time * 0.2) * 15;
//       pointLight2.position.x = Math.sin(time * 0.25 + Math.PI) * 15;
//       pointLight2.position.z = Math.cos(time * 0.25 + Math.PI) * 15;

//       renderer.render(scene, camera);
//     }

//     animate();

//     // Resize handling
//     function handleResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.domElement.removeEventListener('mousedown', onMouseDown);
//       renderer.domElement.removeEventListener('mousemove', onMouseMove);
//       renderer.domElement.removeEventListener('mouseup', onMouseUp);
//       renderer.domElement.removeEventListener('wheel', onWheel);
//       renderer.domElement.removeEventListener('touchstart', onTouchStart);
//       renderer.domElement.removeEventListener('touchmove', onTouchMove);
//       renderer.domElement.removeEventListener('touchend', onTouchEnd);
//       if (mountRef.current?.contains(renderer.domElement)) {
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

//   return (
//     <div
//       ref={mountRef}
//       className="fixed inset-0 w-full h-full pointer-events-auto"
//     />
//   );
// }

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createCrystalGeometry } from '../utils/crystalGeometry';
import { createStarTexture } from '../utils/textureUtils';

function CrystalBackground() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000510);
    scene.fog = new THREE.FogExp2(0x000510, 0.015);
    sceneRef.current = scene;
    
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

    // Lights
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

    // Create crystal structure
    const structureGroup = new THREE.Group();
    scene.add(structureGroup);

    const starTexture = createStarTexture();
    const { atoms, edges } = createCrystalGeometry(structureGroup, starTexture);

    // Interaction state
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    // Mouse/touch handlers
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

    // Animation
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

      // Animate atoms
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

      // Animate edges
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

      // Animate lights
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

  return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-auto" />;
}
export default CrystalBackground;
