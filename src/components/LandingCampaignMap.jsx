import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { landingCampaignBranches } from '../data/landingCampaignData';
import {
  motionDuration,
  motionEase,
  motionSpring,
  motionSpringSoft,
  sequenceDelay
} from '../motion';

const MotionAnchor = motion.a;
const MotionArticle = motion.article;
const MotionButton = motion.button;
const MotionDiv = motion.div;
const MotionHeader = motion.header;
const MotionSection = motion.section;

const rocketColors = {
  shell: '#edf1ec',
  shellShadow: '#9fb3b7',
  red: '#ef482f',
  redShadow: '#b92f28',
  teal: '#278fa3',
  glass: '#39c6dc',
  glassRim: '#d98a20',
  flame: '#f06423',
  flameCore: '#ffd447'
};

const rocketBodyProfile = [
  new THREE.Vector2(0.13, -0.5),
  new THREE.Vector2(0.19, -0.36),
  new THREE.Vector2(0.235, -0.05),
  new THREE.Vector2(0.225, 0.16),
  new THREE.Vector2(0.18, 0.36),
  new THREE.Vector2(0.11, 0.5)
];

const navigationTargets = [
  {
    id: 'experience',
    routeId: 'left',
    eyebrow: '01 — Experience',
    label: 'Professional work',
    description: 'Internships, research, and work with real teams.',
    color: '#2563eb',
    branchIds: ['experience']
  },
  {
    id: 'directory',
    routeId: 'right',
    eyebrow: '02 — Education & projects',
    label: 'Learning and building',
    description: 'Academic work, independent projects, and experiments.',
    color: '#2563eb',
    branchIds: ['education', 'projects']
  }
];

function RocketNavigator({ reduceMotion }) {
  const rocketRef = useRef(null);
  const flameRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const pointerWorldRef = useRef(new THREE.Vector3());
  const pointerDirectionRef = useRef(new THREE.Vector3());
  const targetRef = useRef(new THREE.Vector3(0, -0.35, 0.55));

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return;
      pointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      pointerRef.current.active = true;
    };
    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('blur', handlePointerLeave);
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', handlePointerLeave);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  useFrame(({ camera, clock }, delta) => {
    if (!rocketRef.current) return;
    const pointer = pointerRef.current;
    const target = targetRef.current;

    if (pointer.active) {
      const pointerWorld = pointerWorldRef.current.set(pointer.x, pointer.y, 0.5).unproject(camera);
      const direction = pointerDirectionRef.current.copy(pointerWorld).sub(camera.position).normalize();
      const distance = (0.55 - camera.position.z) / direction.z;
      target.copy(camera.position).addScaledVector(direction, distance);
      target.x = THREE.MathUtils.clamp(target.x, -4.7, 4.7);
      target.y = THREE.MathUtils.clamp(target.y, -2.65, 2.75);
      target.z = 0.55;
    } else {
      target.set(
        reduceMotion ? 0 : Math.sin(clock.elapsedTime * 0.55) * 0.45,
        -0.35 + (reduceMotion ? 0 : Math.cos(clock.elapsedTime * 0.7) * 0.12),
        0.55
      );
    }

    const rocket = rocketRef.current;
    const previousX = rocket.position.x;
    const previousY = rocket.position.y;
    const followSpeed = reduceMotion ? 12 : 7;
    rocket.position.x = THREE.MathUtils.damp(rocket.position.x, target.x, followSpeed, delta);
    rocket.position.y = THREE.MathUtils.damp(rocket.position.y, target.y, followSpeed, delta);
    rocket.position.z = THREE.MathUtils.damp(rocket.position.z, target.z, followSpeed, delta);

    const velocityX = rocket.position.x - previousX;
    const velocityY = rocket.position.y - previousY;
    if (Math.abs(velocityX) + Math.abs(velocityY) > 0.0001) {
      const desiredRotation = Math.atan2(velocityY, velocityX);
      const angleDelta = Math.atan2(
        Math.sin(desiredRotation - rocket.rotation.z),
        Math.cos(desiredRotation - rocket.rotation.z)
      );
      rocket.rotation.z += angleDelta * (1 - Math.exp(-10 * delta));
    }

    if (flameRef.current) {
      const pulse = reduceMotion ? 1 : 1 + Math.sin(clock.elapsedTime * 16) * 0.12;
      flameRef.current.scale.set(0.88 * pulse, 1.1 + pulse * 0.12, 0.88 * pulse);
    }
  });

  return (
    <group ref={rocketRef} position={[0, -0.35, 0.55]} scale={0.64}>
      <mesh rotation={[0, 0, -Math.PI / 2]} position={[0.54, 0, 0]}>
        <coneGeometry args={[0.22, 0.5, 32]} />
        <meshStandardMaterial color={rocketColors.red} roughness={0.36} metalness={0.12} />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 2]} position={[-0.08, 0, 0]} scale={[1, 1, 0.9]}>
        <latheGeometry args={[rocketBodyProfile, 48]} />
        <meshStandardMaterial color={rocketColors.shell} roughness={0.42} metalness={0.08} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0.25, 0, 0]}>
        <cylinderGeometry args={[0.19, 0.205, 0.09, 32]} />
        <meshStandardMaterial color={rocketColors.shellShadow} roughness={0.42} metalness={0.16} />
      </mesh>
      <mesh position={[0.08, 0, 0.225]}>
        <circleGeometry args={[0.105, 32]} />
        <meshStandardMaterial color={rocketColors.glass} emissive={rocketColors.glass} emissiveIntensity={0.16} roughness={0.16} metalness={0.24} />
      </mesh>
      <mesh position={[0.08, 0, 0.23]}>
        <torusGeometry args={[0.112, 0.018, 12, 32]} />
        <meshStandardMaterial color={rocketColors.glassRim} roughness={0.34} metalness={0.28} />
      </mesh>
      <mesh position={[-0.43, 0.22, 0]} rotation={[0, 0, -0.62]}>
        <coneGeometry args={[0.12, 0.38, 3]} />
        <meshStandardMaterial color={rocketColors.red} roughness={0.4} metalness={0.08} />
      </mesh>
      <mesh position={[-0.43, -0.22, 0]} rotation={[0, 0, 0.62]}>
        <coneGeometry args={[0.12, 0.38, 3]} />
        <meshStandardMaterial color={rocketColors.redShadow} roughness={0.4} metalness={0.08} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.66, 0, 0]}>
        <cylinderGeometry args={[0.155, 0.105, 0.18, 24]} />
        <meshStandardMaterial color={rocketColors.teal} roughness={0.34} metalness={0.38} />
      </mesh>
      <mesh ref={flameRef} position={[-0.83, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.12, 0.38, 24]} />
        <meshBasicMaterial color={rocketColors.flame} transparent opacity={0.88} />
      </mesh>
      <mesh position={[-0.94, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.06, 0.24, 20]} />
        <meshBasicMaterial color={rocketColors.flameCore} transparent opacity={0.78} />
      </mesh>
    </group>
  );
}

function CampaignPathScene({ reduceMotion }) {
  return (
    <Canvas
      className="campaign-map-canvas"
      camera={{ position: [0, 1.15, 6.8], fov: 56 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.82} />
      <pointLight position={[0, 2.2, 2]} intensity={2.15} color="#ffffff" />
      <pointLight position={[3, 0.5, -3]} intensity={1.05} color="#60a5fa" />
      <RocketNavigator reduceMotion={reduceMotion} />
    </Canvas>
  );
}

function FallbackLogo({ item }) {
  return (
    <span className="campaign-node-fallback" style={{ color: item.color }}>
      {item.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function readmeRawUrl(readmeUrl) {
  return readmeUrl
    ?.replace('https://github.com/', 'https://raw.githubusercontent.com/')
    .replace('/blob/', '/');
}

function readmeSummary(markdown, fallback) {
  const line = markdown
    .split('\n')
    .map((value) => value.trim())
    .find((value) => value.length > 36 && !value.startsWith('#') && !value.startsWith('![') && !value.startsWith('[') && !value.startsWith('```'));

  if (!line) return fallback;
  const plainText = line.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`>|]/g, '').trim();
  return plainText.length > 360 ? `${plainText.slice(0, 357)}...` : plainText;
}

function ProjectFlipCard({ item, index }) {
  const [flipped, setFlipped] = useState(false);
  const [summary, setSummary] = useState(item.summary);
  const [isLoading, setIsLoading] = useState(Boolean(item.readmeUrl));
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const controller = new AbortController();
    const url = readmeRawUrl(item.readmeUrl);
    if (!url) return undefined;

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('README request failed');
        return response.text();
      })
      .then((markdown) => setSummary(readmeSummary(markdown, item.summary)))
      .catch((error) => {
        if (error.name !== 'AbortError') setSummary(item.summary);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, [item.readmeUrl, item.summary]);

  return (
    <MotionArticle
      className={`project-flip-card ${flipped ? 'project-flip-card--flipped' : ''}`}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ ...motionSpringSoft, delay: reduceMotion ? 0 : sequenceDelay(index, 0.045, 0.12) }}
    >
      <MotionButton
        type="button"
        className="project-flip-card-toggle"
        aria-expanded={flipped}
        aria-label={`${flipped ? 'Hide' : 'Show'} README summary for ${item.name}`}
        onClick={() => setFlipped((value) => !value)}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      >
        <MotionDiv
          className="project-flip-card-inner"
          animate={{ rotateY: reduceMotion ? 0 : flipped ? 180 : 0 }}
          transition={reduceMotion ? { duration: 0.01 } : { ...motionSpring, stiffness: 190, damping: 24 }}
        >
          <div className="project-flip-face project-flip-face--front" aria-hidden={flipped}>
            <span>Project</span>
            <strong>{item.name}</strong>
            <small>{item.skills.join(' · ')}</small>
            <em><i className="project-card-signal" /> Explore README</em>
          </div>
          <div className="project-flip-face project-flip-face--back" aria-hidden={!flipped}>
            <span>README</span>
            <p>{isLoading ? 'Loading project README…' : summary}</p>
            <em>Click card to return</em>
          </div>
        </MotionDiv>
      </MotionButton>
      <MotionAnchor
        className="project-flip-card-link"
        href={item.repoUrl}
        target="_blank"
        rel="noreferrer"
        tabIndex={flipped ? 0 : -1}
        aria-hidden={!flipped}
        animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 5 }}
        whileHover={reduceMotion ? undefined : { x: 3 }}
        transition={{ duration: reduceMotion ? 0.01 : motionDuration.fast, ease: motionEase }}
      >
        View repository ↗
      </MotionAnchor>
    </MotionArticle>
  );
}

function CampaignTreeScreen({ target, branches, selectedNodeId, onBack, onSelectNode }) {
  const reduceMotion = useReducedMotion();
  const direction = target.routeId === 'left' ? -1 : 1;

  return (
    <MotionDiv
      className={`campaign-tree-screen campaign-tree-screen--${target.routeId}`}
      style={{ '--node-color': target.color }}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 52, scale: 0.985 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -28, scale: 0.99 }}
      transition={{ duration: reduceMotion ? 0.12 : motionDuration.slow, ease: motionEase }}
    >
      <div className="campaign-tree-screen-stars" aria-hidden="true" />
      <MotionHeader
        className="campaign-tree-screen-header"
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.065, delayChildren: 0.16 } }
        }}
      >
        <MotionButton
          type="button"
          onClick={onBack}
          variants={{ hidden: { opacity: 0, x: direction * 12 }, visible: { opacity: 1, x: 0 } }}
          whileHover={reduceMotion ? undefined : { x: -4 }}
          transition={motionSpring}
        >
          Back to rocket
        </MotionButton>
        <motion.span variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>{target.eyebrow}</motion.span>
        <motion.h2 variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>{target.label}</motion.h2>
        <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>{target.description}</motion.p>
      </MotionHeader>

      <div className="campaign-screen-map">
        {branches.map((branch, branchIndex) => (
          <MotionSection
            key={branch.id}
            className="campaign-screen-section"
            style={{ '--branch-color': branch.color, '--branch-index': branchIndex }}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSpringSoft, delay: reduceMotion ? 0 : sequenceDelay(branchIndex, 0.11, 0.22) }}
          >
            <div className="campaign-screen-section-title">
              <span>{branch.label}</span>
            </div>
            {branch.id === 'projects' ? (
              <div className="project-card-grid">
                {branch.nodes.map((item, itemIndex) => <ProjectFlipCard key={item.id} item={item} index={itemIndex} />)}
              </div>
            ) : <div className="campaign-mission-path">
              {branch.nodes.map((item, nodeIndex) => {
                const isSelected = selectedNodeId === item.id;
                return (
                  <MotionButton
                    key={item.id}
                    type="button"
                    className={`campaign-mission-node ${isSelected ? 'campaign-mission-node--selected' : ''}`}
                    style={{ '--node-color': item.color, '--node-index': nodeIndex }}
                    onClick={() => onSelectNode(item, branch)}
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={reduceMotion ? undefined : { x: direction * 6 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                    transition={{ ...motionSpringSoft, delay: reduceMotion ? 0 : sequenceDelay(nodeIndex, 0.055, 0.28) }}
                  >
                    <span className="campaign-mission-orbit" aria-hidden="true">
                      <span className="campaign-node-logo campaign-mission-logo">
                        {item.logo ? <img src={item.logo} alt="" /> : <FallbackLogo item={item} />}
                      </span>
                    </span>
                    <span className="campaign-mission-copy">
                      <strong>{item.name}</strong>
                      <span>{[item.title, item.location].filter(Boolean).join(' · ')}</span>
                      <small>{item.summary}</small>
                    </span>
                  </MotionButton>
                );
              })}
            </div>}
          </MotionSection>
        ))}
      </div>
    </MotionDiv>
  );
}

export default function LandingCampaignMap({ selectedNodeId, onSelectNode }) {
  const [activeTreeId, setActiveTreeId] = useState(null);
  const [viewState, setViewState] = useState('landing');
  const reduceMotion = useReducedMotion();
  const activeTarget = navigationTargets.find((target) => target.id === activeTreeId);
  const visibleBranches = activeTarget
    ? landingCampaignBranches.filter((branch) => activeTarget.branchIds.includes(branch.id))
    : [];

  function selectTree(target) {
    setActiveTreeId(target.id);
    setViewState('tree');
  }

  function returnToLanding() {
    setViewState('landing');
    setActiveTreeId(null);
  }

  function selectNode(item, branch) {
    onSelectNode({
      ...item,
      branchId: branch.id,
      branchLabel: branch.label,
      branchSide: branch.side
    });
  }

  return (
    <section className="campaign-map" aria-label="Interactive career campaign map">
      <CampaignPathScene reduceMotion={reduceMotion} />

      <AnimatePresence mode="wait" initial={false}>
        {viewState === 'landing' && (
          <MotionDiv
            key="gate"
            className="campaign-gate"
            aria-label="Choose a path"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0.12 : motionDuration.base, ease: motionEase }}
          >
            {navigationTargets.map((target, index) => (
              <MotionButton
                key={target.id}
                type="button"
                className={`campaign-gate-card campaign-gate-card--${target.routeId}`}
                style={{ '--node-color': target.color }}
                onClick={() => selectTree(target)}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                transition={{ ...motionSpringSoft, delay: reduceMotion ? 0 : sequenceDelay(index, 0.1, 0.18) }}
              >
                <span>{target.eyebrow}</span>
                <strong>{target.label}</strong>
                <small>{target.description}</small>
                <em>Explore <b>↗</b></em>
              </MotionButton>
            ))}
          </MotionDiv>
        )}

        {viewState === 'tree' && activeTarget && (
          <CampaignTreeScreen
            key={activeTarget.id}
            target={activeTarget}
            branches={visibleBranches}
            selectedNodeId={selectedNodeId}
            onBack={returnToLanding}
            onSelectNode={selectNode}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
