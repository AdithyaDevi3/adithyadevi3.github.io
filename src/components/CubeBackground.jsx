import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import createStarTexture from '../utils/textureUtils.js';

function CubeBackground() {
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
    const mountEl = mountRef.current;
    mountEl.appendChild(renderer.domElement);

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

    // Create dense cube lattice structure from bottom up
    const structureGroup = new THREE.Group();
    scene.add(structureGroup);

    const starTexture = createStarTexture();
    
    // Build a dense 3D lattice grid (will create ~1000-8000 nodes depending on resolution)
    const gridResolution = 15; // nodes per edge, adjust for more/fewer nodes
    const cubeSize = 6;
    const spacing = cubeSize / (gridResolution - 1);
    
    // Generate all lattice points (bottom up)
    const atoms = [];
    const latticeMap = {};
    
    for (let z = 0; z < gridResolution; z++) {
      for (let y = 0; y < gridResolution; y++) {
        for (let x = 0; x < gridResolution; x++) {
          // Map grid coordinates to world coordinates
          const worldX = -cubeSize / 2 + x * spacing;
          const worldY = -cubeSize / 2 + y * spacing;
          const worldZ = -cubeSize / 2 + z * spacing;
          
          const pos = new THREE.Vector3(worldX, worldY, worldZ);
          
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

          const targetScale = 0.1 + Math.random() * 0.06;

          structureGroup.add(sprite);
          
          const atomData = {
            sprite,
            targetScale,
            glimmerOffset: Math.random() * Math.PI * 2,
            glimmerSpeed: 0.8 + Math.random() * 1.2,
            position: pos.clone(),
            gridX: x,
            gridY: y,
            gridZ: z
          };
          
          atoms.push(atomData);
          latticeMap[`${x},${y},${z}`] = atomData;
        }
      }
    }
    
    // Create edges connecting adjacent lattice points (create a dense web)
    const edgeLines = [];
    const edgeThreshold = 1.5; // only connect neighbors within this distance
    
    atoms.forEach((atom) => {
      const { gridX, gridY, gridZ, position: pos1 } = atom;
      
      // Connect to immediate neighbors (6-connectivity: up, down, left, right, forward, back)
      const neighbors = [
        [gridX + 1, gridY, gridZ],
        [gridX, gridY + 1, gridZ],
        [gridX, gridY, gridZ + 1]
      ];
      
      neighbors.forEach(([nx, ny, nz]) => {
        if (nx < gridResolution && ny < gridResolution && nz < gridResolution) {
          const neighborKey = `${nx},${ny},${nz}`;
          const neighborAtom = latticeMap[neighborKey];
          
          if (neighborAtom) {
            const pos2 = neighborAtom.position;
            const dist = pos1.distanceTo(pos2);
            
            if (dist <= edgeThreshold) {
              const points = [pos1, pos2];
              const geometry = new THREE.BufferGeometry().setFromPoints(points);

              const material = new THREE.LineBasicMaterial({
                color: new THREE.Color(0x88aadd),
                transparent: true,
                opacity: 0,
                blending: THREE.AdditiveBlending
              });

              const line = new THREE.Line(geometry, material);
              structureGroup.add(line);

              edgeLines.push({
                line,
                atom1: atom,
                atom2: neighborAtom,
                glimmerOffset: Math.random() * Math.PI * 2,
                glimmerSpeed: 0.5 + Math.random() * 1.0,
                baseOpacity: 0.08 + Math.random() * 0.1
              });
            }
          }
        }
      });
    });

    // Interaction state
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
      targetRotation.y += (e.deltaX || e.deltaY) * 0.0008;
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
    const buildDuration = 5000; // shorter build for quicker reveal
    const startTime = Date.now();
    let time = 0;
    
    // Pre-calculate normalized indices for performance
    const atomNormalizedIndices = atoms.map((_, i) => i / atoms.length);
    const edgeNormalizedIndices = edgeLines.map((_, i) => i / edgeLines.length);

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

      // Animate atoms with multi-wave glimmer - optimized
      atoms.forEach((atom, index) => {
        const normalizedIndex = atomNormalizedIndices[index];
        // Staggered build-in animation: each node animates in sequentially
        const buildProgress = Math.max(0, Math.min(1, (animationProgress - normalizedIndex * 0.3) / 0.7));
        const scale = buildProgress * atom.targetScale;
        atom.sprite.scale.set(scale, scale, scale);

        // Multi-wave glimmer
        const glimmer = Math.sin(time * atom.glimmerSpeed + atom.glimmerOffset) * 0.3 + 0.7;
        atom.sprite.material.opacity = buildProgress * glimmer * 0.95;

        // Multiple color waves (only calculate when visible)
        if (buildProgress > 0.01) {
          const wave1 = Math.sin(time * 0.08 + normalizedIndex * 0.6) * 0.3;
          const wave2 = Math.sin(time * 0.12 + normalizedIndex * 1.2 + Math.PI) * 0.3;
          const wave3 = Math.sin(time * 0.05 + normalizedIndex * 0.4 + Math.PI * 0.5) * 0.2;
          const hue = (wave1 + wave2 + wave3 + glimmer * 0.4) % 1;
          const saturation = 0.4 + glimmer * 0.45;
          const lightness = 0.55 + glimmer * 0.4;
          atom.sprite.material.color.setHSL(hue, saturation, lightness);
        }
      });

      // Animate edges - optimized
      edgeLines.forEach((edge, index) => {
        const atom1Progress = edge.atom1.sprite.scale.x / edge.atom1.targetScale;
        const atom2Progress = edge.atom2.sprite.scale.x / edge.atom2.targetScale;
        const edgeProgress = Math.min(atom1Progress, atom2Progress);

        const glimmer = Math.sin(time * edge.glimmerSpeed + edge.glimmerOffset) * 0.6 + 0.6;
        edge.line.material.opacity = Math.min(1, edgeProgress * edge.baseOpacity * glimmer);

        // Only update color if visible
        if (edgeProgress > 0.01) {
          const normalizedIndex = edgeNormalizedIndices[index];
          const wave1 = Math.sin(time * 0.06 + normalizedIndex * 0.7) * 0.3;
          const wave2 = Math.sin(time * 0.1 + normalizedIndex * 1.4 + Math.PI) * 0.3;
          const wave3 = Math.sin(time * 0.04 + normalizedIndex * 0.3 + Math.PI * 0.5) * 0.2;
          const hue = (wave1 + wave2 + wave3 + glimmer * 0.2) % 1;
          const saturation = 0.5 + glimmer * 0.35;
          const lightness = 0.5 + glimmer * 0.3;
          edge.line.material.color.setHSL(hue, saturation, lightness);
        }
      });

      // Animate lights (less frequently if needed)
      if (time % 0.1 < 0.016) {
        pointLight1.position.x = Math.sin(time * 0.2) * 15;
        pointLight1.position.z = Math.cos(time * 0.2) * 15;
        pointLight2.position.x = Math.sin(time * 0.25 + Math.PI) * 15;
        pointLight2.position.z = Math.cos(time * 0.25 + Math.PI) * 15;
      }

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
      if (mountEl && renderer.domElement.parentNode) {
        mountEl.removeChild(renderer.domElement);
      }
      starTexture.dispose();
      atoms.forEach(atom => atom.sprite.material.dispose());
      edgeLines.forEach(edge => {
        edge.line.geometry.dispose();
        edge.line.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-auto" />;
}

export default CubeBackground;
