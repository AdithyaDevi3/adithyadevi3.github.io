import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import createCrystalGeometry from '../utils/crystalGeometry.js';
import createStarTexture from '../utils/textureUtils.js';
import { btn as btnStyle } from '../theme';

function CrystalBackground() {
  const mountRef = useRef(null);
  const [isFastForward, setIsFastForward] = useState(false);
  const speedMultiplierRef = useRef(0.5);
  const [buildComplete, setBuildComplete] = useState(false);
  const buildCompleteRef = useRef(false);
  const [glimmerActive, setGlimmerActive] = useState(false);
  const glimmerActiveRef = useRef(false);
  const glimmerBtnRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020611);
    scene.fog = new THREE.FogExp2(0x020611, 0.018);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.16;

    const mountEl = mountRef.current;
    mountEl.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x84bfff, 0.24);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x2f6fff, 2.2, 90, 2);
    pointLight1.position.set(14, 14, 14);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6a3dff, 1.8, 90, 2);
    pointLight2.position.set(-14, -12, 14);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x19c7b8, 1.4, 90, 2);
    pointLight3.position.set(0, 16, -12);
    scene.add(pointLight3);

    const structureGroup = new THREE.Group();
    scene.add(structureGroup);

    const starTexture = createStarTexture();
    const { atoms, edges } = createCrystalGeometry(structureGroup, starTexture);

    // Initialize edge animation states with two-phase timing
    edges.forEach((edge, index) => {
      let spawnOffset, duration;
      
      if (index < 20) {
        // First 20 edges: arrive by 10 seconds (slow, dramatic)
        const arrivalTime = (index / 20) * 10000;
        duration = 400 + Math.random() * 400; // 400-800ms
        spawnOffset = Math.max(0, arrivalTime - duration);
      } else {
        // Last 10 edges: arrive by 15 seconds (fast, subtle)
        const progressInSecondBatch = (index - 20) / 10;
        const arrivalTime = 10000 + progressInSecondBatch * 5000;
        duration = 200 + Math.random() * 300; // 200-500ms
        spawnOffset = Math.max(0, arrivalTime - duration);
      }
      
      edge.animationDuration = duration;
      edge.spawnOffset = spawnOffset;
      edge.startPosition = new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 40 - 20
      );
      edge.endPosition = new THREE.Vector3(
        (edge.atom1.position.x + edge.atom2.position.x) / 2,
        (edge.atom1.position.y + edge.atom2.position.y) / 2,
        (edge.atom1.position.z + edge.atom2.position.z) / 2
      );
      edge.line.material.opacity = 0;
    });

    atoms.forEach((atom) => {
      atom.energy = 0;
      atom.energyPulse = 0;
    });

    edges.forEach((edge) => {
      edge.energy = 0;
      edge.energyPulse = 0;
    });

    const particleCount = 4400;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleAlphas = new Float32Array(particleCount);
    const particleSizes = new Float32Array(particleCount);
    const trailPositions = new Float32Array(particleCount * 3);
    const trailColors = new Float32Array(particleCount * 3);
    const trailAlphas = new Float32Array(particleCount);
    const trailSizes = new Float32Array(particleCount);

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute('alpha', new THREE.BufferAttribute(particleAlphas, 1));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));

    const trailGeometry = new THREE.BufferGeometry();
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailGeometry.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));
    trailGeometry.setAttribute('alpha', new THREE.BufferAttribute(trailAlphas, 1));
    trailGeometry.setAttribute('size', new THREE.BufferAttribute(trailSizes, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: starTexture },
        uTime: { value: 0 }
      },
      vertexShader: `
        attribute float alpha;
        attribute float size;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vAlpha = alpha;
          vColor = color;
          gl_PointSize = size * 2.3 * (0.9 + 0.2 * sin(uTime * 2.0 + position.y * 0.6));
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uMap;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vec2 uv = gl_PointCoord;
          vec2 center = vec2(0.5);
          float dist = distance(uv, center);
          float glow = smoothstep(0.5, 0.0, dist);
          vec4 tex = texture2D(uMap, uv);
          gl_FragColor = vec4(vColor, vAlpha * glow * tex.r);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });

    const trailMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: starTexture },
        uTime: { value: 0 }
      },
      vertexShader: `
        attribute float alpha;
        attribute float size;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vAlpha = alpha;
          vColor = color;
          gl_PointSize = size * 1.5 * (0.9 + 0.1 * sin(uTime * 1.8 + position.y * 0.4));
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uMap;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vec2 uv = gl_PointCoord;
          vec2 center = vec2(0.5);
          float dist = distance(uv, center);
          float glow = smoothstep(0.55, 0.0, dist);
          vec4 tex = texture2D(uMap, uv);
          gl_FragColor = vec4(vColor, vAlpha * glow * tex.r * 0.7);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    const trailSystem = new THREE.Points(trailGeometry, trailMaterial);
    scene.add(particleSystem);
    scene.add(trailSystem);

    const particles = Array.from({ length: particleCount }, () => ({
      active: false,
      start: new THREE.Vector3(),
      control: new THREE.Vector3(),
      target: new THREE.Vector3(),
      progress: 0,
      duration: 0.85 + Math.random() * 0.55,
      phase: Math.random() * Math.PI * 2,
      color: new THREE.Color(),
      size: 0.018 + Math.random() * 0.016,
      alpha: 0,
      life: 0,
      trailPosition: new THREE.Vector3(),
      trailColor: new THREE.Color()
    }));

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    function onMouseDown(event) {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    }

    function onMouseMove(event) {
      if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        targetRotation.y += deltaX * 0.005;
        targetRotation.x += deltaY * 0.005;
        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    }

    function onMouseUp() {
      isDragging = false;
    }

    function onWheel(event) {
      camera.position.z += event.deltaY * 0.01;
      camera.position.z = Math.max(7, Math.min(25, camera.position.z));
      targetRotation.y += (event.deltaX || event.deltaY) * 0.0008;
    }

    let touchStartDistance = 0;

    function onTouchStart(event) {
      if (event.touches.length === 2) {
        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        touchStartDistance = Math.sqrt(dx * dx + dy * dy);
      } else if (event.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }
    }

    function onTouchMove(event) {
      if (event.touches.length === 2) {
        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delta = distance - touchStartDistance;
        camera.position.z -= delta * 0.01;
        camera.position.z = Math.max(7, Math.min(25, camera.position.z));
        touchStartDistance = distance;
      } else if (event.touches.length === 1 && isDragging) {
        const deltaX = event.touches[0].clientX - previousMousePosition.x;
        const deltaY = event.touches[0].clientY - previousMousePosition.y;
        targetRotation.y += deltaX * 0.005;
        targetRotation.x += deltaY * 0.005;
        previousMousePosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
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

    function screenToWorld(x, y, z = 0.8) {
      const vector = new THREE.Vector3(x, y, z);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      return camera.position.clone().add(dir.multiplyScalar(distance));
    }

    function sampleSourcePoint() {
      // Particles start VISIBLE on screen at random positions (aerial transportation effect)
      // They'll animate/fly toward crystal atoms/edges
      const randX = (Math.random() - 0.5) * 1.8;  // Random X across viewport
      const randY = (Math.random() - 0.5) * 1.6;  // Random Y across viewport
      const randZ = 0.5 + Math.random() * 0.8;    // Depth variation for layering
      
      return screenToWorld(randX, randY, randZ);
    }

    function selectTarget(buildProgress) {
      if (buildProgress < 0.18) {
        return atoms[Math.floor(Math.random() * Math.max(1, Math.round(atoms.length * 0.35)))].position.clone();
      }
      if (buildProgress < 0.5) {
        const edge = edges[Math.floor(Math.random() * edges.length)];
        const midpoint = new THREE.Vector3().lerpVectors(edge.atom1.position, edge.atom2.position, 0.45 + Math.random() * 0.12);
        return midpoint;
      }
      if (buildProgress < 0.8) {
        const targetAtom = atoms[Math.floor(Math.random() * atoms.length)];
        return targetAtom.position.clone();
      }
      const targetAtom = atoms[Math.floor(Math.random() * atoms.length)];
      return targetAtom.position.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15));
    }

    function spawnParticle(buildProgress) {
      const particle = particles.find((entry) => !entry.active);
      if (!particle) return;

      const start = sampleSourcePoint();
      const target = selectTarget(buildProgress);
      const orbit = new THREE.Vector3((Math.random() - 0.5) * 1.15, (Math.random() - 0.5) * 1.1, (Math.random() - 0.5) * 1.05);
      const control = new THREE.Vector3()
        .copy(start)
        .lerp(target, 0.56)
        .add(orbit)
        .add(new THREE.Vector3(0, 0, 2.15));

      particle.active = true;
      particle.start.copy(start);
      particle.control.copy(control);
      particle.target.copy(target);
      particle.progress = 0;
      particle.life = 0;
      particle.trailPosition.copy(start);
      particle.duration = 1.4 + Math.random() * 0.8;
      particle.phase = Math.random() * Math.PI * 2;
      const particlePalette = [
        new THREE.Color('#526174'),
        new THREE.Color('#6f7f91'),
        new THREE.Color('#8a7862'),
        new THREE.Color('#6f836f'),
        new THREE.Color('#7b6f8a'),
        new THREE.Color('#9a746a'),
        new THREE.Color('#78828b')
      ];
      particle.color.copy(particlePalette[Math.floor(Math.random() * particlePalette.length)]);
      particle.size = 0.018 + Math.random() * 0.015;
      particle.alpha = 0.12 + Math.random() * 0.18;
      particle.position = particle.start.clone();
    }

    const buildDuration = 15000;
    const buildTargetCount = 3500;
    let lastFrameTime = performance.now();
    let elapsed = 0;
    let time = 0;
    let spawned = 0;

    function animate() {
      requestAnimationFrame(animate);
      const now = performance.now();
      const frameDelta = Math.min(64, now - lastFrameTime);
      lastFrameTime = now;
      elapsed += frameDelta * speedMultiplierRef.current;
      time += 0.016;
      const buildProgress = Math.min(1, spawned / buildTargetCount);
      const densityCurve = 0.28 + 0.72 * (1 - Math.abs(buildProgress * 2 - 1));
      const arrivalRate = (elapsed / buildDuration) * buildTargetCount * (0.45 + densityCurve * 1.15);
      const newSpawnCount = Math.max(0, Math.floor(arrivalRate) - spawned);
      for (let i = 0; i < newSpawnCount; i += 1) {
        if (spawned < buildTargetCount) {
          spawnParticle(buildProgress);
          spawned += 1;
        }
      }

      structureGroup.rotation.x += (targetRotation.x - structureGroup.rotation.x) * 0.05;
      structureGroup.rotation.y += (targetRotation.y - structureGroup.rotation.y) * 0.05;
      if (!isDragging) {
        targetRotation.y += 0.0026;
      }

      const pulse = 1 + Math.sin(time * 1.2) * 0.01 + Math.sin(time * 2.3 + 0.7) * 0.006;
      structureGroup.scale.setScalar(pulse);

      pointLight1.position.x = Math.sin(time * 0.2) * 12;
      pointLight1.position.z = Math.cos(time * 0.2) * 12;
      pointLight2.position.x = Math.sin(time * 0.24 + Math.PI) * 12;
      pointLight2.position.z = Math.cos(time * 0.24 + Math.PI) * 12;
      pointLight3.position.y = 14 + Math.sin(time * 0.16) * 2;

      const glimmer = 0.45 + 0.55 * Math.sin(time * 0.4 + Math.PI * 0.5);

      const palette = [
        { hue: 0.605, saturation: 0.34, lightness: 0.33 },
        { hue: 0.586, saturation: 0.28, lightness: 0.42 },
        { hue: 0.113, saturation: 0.32, lightness: 0.48 },
        { hue: 0.092, saturation: 0.26, lightness: 0.39 },
        { hue: 0.347, saturation: 0.22, lightness: 0.38 },
        { hue: 0.389, saturation: 0.24, lightness: 0.34 },
        { hue: 0.736, saturation: 0.24, lightness: 0.37 },
        { hue: 0.972, saturation: 0.28, lightness: 0.36 },
        { hue: 0.056, saturation: 0.25, lightness: 0.42 },
        { hue: 0.556, saturation: 0.12, lightness: 0.68 },
      ];

      // Mark crystal build complete
      if (!buildCompleteRef.current && elapsed >= 15000) {
        buildCompleteRef.current = true;
        setBuildComplete(true);
      }

      const cycleDuration = 2600;
      const glistenInterval = 20000;        // glisten every 20s
      const glistenDuration = 4500;
      const blockPosition = elapsed % glistenInterval;
      const forceGlisten = glimmerActiveRef.current;
      const inGlisten = forceGlisten || blockPosition > (glistenInterval - glistenDuration);
      const rawGlistenT = forceGlisten ? 1 : (inGlisten
        ? (blockPosition - (glistenInterval - glistenDuration)) / glistenDuration
        : 0);
      const glistenFade = forceGlisten ? 1 : (rawGlistenT < 0.15
        ? rawGlistenT / 0.15
        : rawGlistenT > 0.85
          ? (1 - rawGlistenT) / 0.15
          : 1);

      // Update glimmer button color from animation loop
      if (glimmerBtnRef.current && buildCompleteRef.current) {
        const btnSpeed = forceGlisten ? 0.5 : 0.07;
        const btnElapsed = elapsed * btnSpeed;
        const btnIdx = Math.floor(btnElapsed / cycleDuration) % palette.length;
        const btnProg = (btnElapsed % cycleDuration) / cycleDuration;
        const bCur = palette[btnIdx], bNxt = palette[(btnIdx + 1) % palette.length];
        let bh1 = bCur.hue, bh2 = bNxt.hue;
        if (bh2 < bh1 && bh1 - bh2 > 0.5) bh2 += 1;
        else if (bh2 > bh1 && bh2 - bh1 > 0.5) bh1 += 1;
        const btnHue = ((bh1 * (1 - btnProg) + bh2 * btnProg) % 1) * 360;
        const btnL = forceGlisten ? 60 : 50;
        const btnS = forceGlisten ? 95 : 78;
        const glow = forceGlisten ? 8 + 5 * Math.sin(elapsed / 250) : 4 + 2 * Math.sin(elapsed / 700);
        const btnColor = `hsl(${btnHue.toFixed(0)}, ${btnS}%, ${btnL}%)`;
        const btnColorDim = `hsl(${btnHue.toFixed(0)}, ${btnS - 20}%, ${btnL - 15}%)`;
        glimmerBtnRef.current.style.color = btnColor;
        glimmerBtnRef.current.style.borderColor = btnColorDim;
        glimmerBtnRef.current.style.boxShadow = `0 0 ${glow.toFixed(1)}px ${btnColor}`;
        glimmerBtnRef.current.style.background = `rgba(${Math.round(btnHue/360*15)}, ${Math.round(12 + btnHue/360*8)}, 28, 0.75)`;
      }

      const getSpatialGradientColor = (position, atomIndex = 0) => {
        const waveProgress = (elapsed % cycleDuration) / cycleDuration;

        const colorIndex = Math.floor(elapsed / cycleDuration) % palette.length;
        const currentColor = palette[colorIndex];
        const nextColor = palette[(colorIndex + 1) % palette.length];

        const spatialComponent = (position.x * 0.4 + position.y * 0.3 + position.z * 0.3);
        const waveRange = 60;
        const wavePosition = -30 + waveProgress * waveRange;

        const transitionWidth = 12;
        const distance = spatialComponent - wavePosition;
        let colorTransition = Math.max(0, Math.min(1, (distance + transitionWidth) / (transitionWidth * 2)));
        colorTransition = colorTransition * colorTransition * (3 - 2 * colorTransition);

        let hue1 = currentColor.hue;
        let hue2 = nextColor.hue;
        if (hue2 < hue1 && (hue1 - hue2) > 0.5) hue2 += 1;
        else if (hue2 > hue1 && (hue2 - hue1) > 0.5) hue1 += 1;

        const hue = (hue1 * (1 - colorTransition) + hue2 * colorTransition) % 1;
        const saturation = Math.max(0.2, currentColor.saturation * (1 - colorTransition) + nextColor.saturation * colorTransition);
        const lightness = Math.max(0.20, Math.min(0.78, currentColor.lightness * (1 - colorTransition) + nextColor.lightness * colorTransition));
        const normalColor = { hue, saturation, lightness };

        if (!inGlisten || glistenFade === 0) return normalColor;

        // Glisten: each atom cycles the full palette rapidly at its own phase offset
        const glistenSpeed = 10;
        const phaseShift = atomIndex * 0.09; // stagger atoms so no two are the same color
        const gElapsed = elapsed * glistenSpeed + phaseShift * cycleDuration;
        const gIdx = Math.floor(gElapsed / cycleDuration) % palette.length;
        const gProg = (gElapsed % cycleDuration) / cycleDuration;
        const gCur = palette[gIdx];
        const gNxt = palette[(gIdx + 1) % palette.length];

        let gh1 = gCur.hue, gh2 = gNxt.hue;
        if (gh2 < gh1 && gh1 - gh2 > 0.5) gh2 += 1;
        else if (gh2 > gh1 && gh2 - gh1 > 0.5) gh1 += 1;

        const gHue = (gh1 * (1 - gProg) + gh2 * gProg) % 1;
        const gSat = Math.max(0.34, gCur.saturation * (1 - gProg) + gNxt.saturation * gProg);
        const gLight = Math.min(0.68, (gCur.lightness * (1 - gProg) + gNxt.lightness * gProg) + 0.12);

        // Blend normal → glisten by glistenFade
        return {
          hue: (normalColor.hue * (1 - glistenFade) + gHue * glistenFade + 1) % 1,
          saturation: normalColor.saturation * (1 - glistenFade) + gSat * glistenFade,
          lightness: normalColor.lightness * (1 - glistenFade) + gLight * glistenFade,
        };
      };

      atoms.forEach((atom, index) => {
        const normalizedIndex = index / atoms.length;
        const atomProgress = Math.max(0, Math.min(1, (buildProgress - normalizedIndex * 0.5) * 2));
        const scale = atomProgress * atom.targetScale;
        atom.sprite.scale.set(scale, scale, scale);
        atom.energy = Math.max(0, atom.energy - 0.018);
        atom.energyPulse = Math.max(0, atom.energyPulse - 0.035);

        const color = getSpatialGradientColor(atom.position, index);
        const opacityBoost = inGlisten ? 1 + glistenFade * 0.4 : 1; // brighter during glisten
        atom.sprite.material.opacity = atomProgress * (0.38 + glimmer * 0.34 + atom.energyPulse * 0.16 + 0.06 * Math.sin(time * 0.8 + index * 0.08)) * 0.96 * opacityBoost;
        atom.sprite.material.color.setHSL(color.hue, color.saturation, color.lightness + atom.energyPulse * 0.06);
      });

      edges.forEach((edge, index) => {
        const elapsedSinceStart = elapsed - edge.spawnOffset;
        
        if (elapsedSinceStart >= 0 && elapsedSinceStart < edge.animationDuration) {
          // Edge is currently animating
          const t = elapsedSinceStart / edge.animationDuration;
          const eased = t * t * (3 - 2 * t); // Smooth easing
          
          // Animate the line endpoints from start to end
          const startPos = edge.startPosition;
          const endPos = edge.atom1.position;
          const controlPos = edge.atom2.position;
          
          // Bezier curve interpolation
          const p0 = startPos;
          const p1 = controlPos;
          const p2 = endPos;
          
          const newStart = new THREE.Vector3()
            .copy(p0).multiplyScalar((1 - eased) * (1 - eased))
            .addScaledVector(p1, 2 * (1 - eased) * eased)
            .addScaledVector(p2, eased * eased);
          
          const newEnd = new THREE.Vector3()
            .copy(p1).multiplyScalar((1 - eased) * (1 - eased))
            .addScaledVector(p2, 2 * (1 - eased) * eased)
            .addScaledVector(controlPos, eased * eased);
          
          const positions = edge.line.geometry.attributes.position.array;
          positions[0] = newStart.x;
          positions[1] = newStart.y;
          positions[2] = newStart.z;
          positions[3] = newEnd.x;
          positions[4] = newEnd.y;
          positions[5] = newEnd.z;
          edge.line.geometry.attributes.position.needsUpdate = true;
          
          edge.line.material.opacity = eased * 0.8;
        } else if (elapsedSinceStart >= edge.animationDuration) {
          // Edge has arrived - snap to final position
          const positions = edge.line.geometry.attributes.position.array;
          positions[0] = edge.atom1.position.x;
          positions[1] = edge.atom1.position.y;
          positions[2] = edge.atom1.position.z;
          positions[3] = edge.atom2.position.x;
          positions[4] = edge.atom2.position.y;
          positions[5] = edge.atom2.position.z;
          edge.line.geometry.attributes.position.needsUpdate = true;
          edge.line.material.opacity = 0.8;
        }
        
        const midpoint = new THREE.Vector3().lerpVectors(edge.atom1.position, edge.atom2.position, 0.5);
        edge.energy = Math.max(0, edge.energy - 0.015);
        edge.energyPulse = Math.max(0, edge.energyPulse - 0.03);
        const color = getSpatialGradientColor(midpoint, index);
        edge.line.material.color.setHSL(color.hue, color.saturation, color.lightness + edge.energyPulse * 0.05);
      });
      trailMaterial.uniforms.uTime.value = time;

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
      atoms.forEach((atom) => atom.sprite.material.dispose());
      edges.forEach((edge) => {
        edge.line.geometry.dispose();
        edge.line.material.dispose();
      });
      particleGeometry.dispose();
      trailGeometry.dispose();
      particleMaterial.dispose();
      trailMaterial.dispose();
    };
  }, []);

  return (
    <>
      <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-auto" />

      {/* Speed toggle — always visible */}
      <button
        onClick={() => {
          setIsFastForward(!isFastForward);
          speedMultiplierRef.current = isFastForward ? 0.5 : 10;
        }}
        style={{
          ...btnStyle.base,
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 50,
          ...(isFastForward ? btnStyle.active : btnStyle.inactive),
        }}
        onMouseEnter={(e) => btnStyle.hoverEnter(e.currentTarget)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, isFastForward ? btnStyle.active : btnStyle.inactive)}
      >
        {isFastForward ? 'Normal Speed' : 'Speed Up'}
      </button>

      {/* Glimmer — appears after crystal is fully built */}
      {buildComplete && (
        <button
          ref={glimmerBtnRef}
          onClick={() => {
            const next = !glimmerActive;
            setGlimmerActive(next);
            glimmerActiveRef.current = next;
          }}
          style={{
            position: 'fixed',
            bottom: 24,
            left: 148,
            padding: '8px 16px',
            borderRadius: 6,
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '0.06em',
            cursor: 'pointer',
            border: '1px solid',
            backdropFilter: 'blur(8px)',
            zIndex: 50,
            transition: 'box-shadow 0.1s',
          }}
        >
          {glimmerActive ? 'Glimmering' : 'Glimmer'}
        </button>
      )}
    </>
  );
}

export default CrystalBackground;
