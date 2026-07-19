import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import * as THREE from 'three';
import { landingCampaignBranches } from '../data/landingCampaignData';

const MotionDiv = motion.div;

const routeDefinitions = {
  left: {
    color: '#cf765f',
    points: [
      [0, -1.2, 0.55],
      [-1.2, -1.34, -1.4],
      [-2.9, -0.66, -3.8],
      [-4.7, 0.16, -6.8]
    ]
  },
  right: {
    color: '#75a47f',
    points: [
      [0, -1.2, 0.55],
      [1.2, -1.32, -1.4],
      [3.1, -0.56, -3.8],
      [4.9, 0.22, -6.8]
    ]
  }
};

const navigationTargets = [
  {
    id: 'experience',
    routeId: 'left',
    eyebrow: 'Left Path',
    label: 'Experience',
    description: 'Internships, research, and real team work.',
    color: '#cf765f',
    branchIds: ['experience']
  },
  {
    id: 'directory',
    routeId: 'right',
    eyebrow: 'Right Path',
    label: 'Education + Projects',
    description: 'Academic path, builds, and experiments.',
    color: '#75a47f',
    branchIds: ['education', 'projects']
  }
];

function createCurve(points) {
  return new THREE.CatmullRomCurve3(points.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
}

function RouteLine({ route, active }) {
  const curve = useMemo(() => createCurve(route.points), [route.points]);
  const glowGeometry = useMemo(() => new THREE.TubeGeometry(curve, 96, 0.045, 10, false), [curve]);
  const coreGeometry = useMemo(() => new THREE.TubeGeometry(curve, 96, 0.014, 8, false), [curve]);

  return (
    <group>
      <mesh geometry={glowGeometry}>
        <meshBasicMaterial color={route.color} transparent opacity={active ? 0.28 : 0.14} />
      </mesh>
      <mesh geometry={coreGeometry}>
        <meshBasicMaterial color={route.color} transparent opacity={active ? 0.9 : 0.58} />
      </mesh>
    </group>
  );
}

function RocketNavigator({ activeRouteId, isWarping }) {
  const rocketRef = useRef(null);
  const flameRef = useRef(null);
  const curves = useMemo(() => ({
    left: createCurve(routeDefinitions.left.points),
    right: createCurve(routeDefinitions.right.points)
  }), []);

  useFrame(({ clock }) => {
    if (!rocketRef.current) return;
    const routeId = activeRouteId || (Math.sin(clock.elapsedTime * 0.5) > 0 ? 'right' : 'left');
    const curve = curves[routeId];
    const destination = isWarping ? 0.93 : activeRouteId ? 0.72 : 0.18 + Math.sin(clock.elapsedTime * 0.65) * 0.045;
    const progress = THREE.MathUtils.clamp(destination, 0.08, 0.94);
    const point = curve.getPointAt(progress);
    const next = curve.getPointAt((progress + 0.01) % 1);
    rocketRef.current.position.lerp(point, 0.085);
    rocketRef.current.lookAt(next);
    rocketRef.current.rotation.z += Math.PI / 2;
    rocketRef.current.position.y += Math.sin(clock.elapsedTime * 3.1) * 0.035;

    if (flameRef.current) {
      const pulse = 1 + Math.sin(clock.elapsedTime * (isWarping ? 28 : 18)) * 0.2;
      const thrust = isWarping ? 1.9 : 1;
      flameRef.current.scale.set(0.85 * pulse, thrust * (1.15 + pulse * 0.18), 0.85 * pulse);
    }
  });

  return (
    <group ref={rocketRef} scale={0.78}>
      <mesh rotation={[0, 0, -Math.PI / 2]} position={[0.34, 0, 0]}>
        <coneGeometry args={[0.24, 0.54, 32]} />
        <meshStandardMaterial color="#cf765f" emissive="#70372d" emissiveIntensity={0.2} roughness={0.34} metalness={0.12} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.22, 0.58, 12, 24]} />
        <meshStandardMaterial color="#e6e0d6" emissive="#5a6471" emissiveIntensity={0.08} roughness={0.38} metalness={0.2} />
      </mesh>
      <mesh position={[0.07, 0.23, 0.01]}>
        <sphereGeometry args={[0.095, 24, 24]} />
        <meshStandardMaterial color="#d7a85f" emissive="#79592d" emissiveIntensity={0.26} roughness={0.22} />
      </mesh>
      <mesh position={[-0.38, 0.2, 0]} rotation={[0, 0, -0.55]}>
        <coneGeometry args={[0.12, 0.34, 3]} />
        <meshStandardMaterial color="#668fbd" emissive="#2d4d70" emissiveIntensity={0.16} roughness={0.38} />
      </mesh>
      <mesh position={[-0.38, -0.2, 0]} rotation={[0, 0, 0.55]}>
        <coneGeometry args={[0.12, 0.34, 3]} />
        <meshStandardMaterial color="#668fbd" emissive="#2d4d70" emissiveIntensity={0.16} roughness={0.38} />
      </mesh>
      <mesh ref={flameRef} position={[-0.58, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.16, 0.46, 24]} />
        <meshBasicMaterial color="#d7a85f" transparent opacity={0.76} />
      </mesh>
      <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.09, 0.36, 20]} />
        <meshBasicMaterial color="#cf765f" transparent opacity={0.34} />
      </mesh>
    </group>
  );
}

function CampaignPathScene({ activeRouteId, isWarping }) {
  return (
    <Canvas
      className="campaign-map-canvas"
      camera={{ position: [0, 1.15, 6.8], fov: 56 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.65} />
      <pointLight position={[0, 2.2, 2]} intensity={1.9} color="#d7b98a" />
      <pointLight position={[3, 0.5, -3]} intensity={1} color="#75a47f" />
      {Object.entries(routeDefinitions).map(([id, route]) => {
        const active = activeRouteId === id;
        return (
          <group key={id}>
            <RouteLine route={route} active={active} />
          </group>
        );
      })}
      <RocketNavigator activeRouteId={activeRouteId} isWarping={isWarping} />
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

function LightSpeedTransition({ target }) {
  const streaks = useMemo(() => Array.from({ length: 64 }, (_, index) => ({
    id: index,
    top: 4 + Math.random() * 92,
    left: 6 + Math.random() * 88,
    delay: Math.random() * 0.22,
    length: 70 + Math.random() * 220,
    opacity: 0.28 + Math.random() * 0.54
  })), []);

  return (
    <MotionDiv
      className={`campaign-warp campaign-warp--${target.routeId}`}
      style={{ '--node-color': target.color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      aria-hidden="true"
    >
      <div className="campaign-warp-core" />
      {streaks.map((streak) => (
        <span
          key={streak.id}
          className="campaign-warp-streak"
          style={{
            '--streak-top': `${streak.top}%`,
            '--streak-left': `${streak.left}%`,
            '--streak-delay': `${streak.delay}s`,
            '--streak-length': `${streak.length}px`,
            '--streak-opacity': streak.opacity
          }}
        />
      ))}
    </MotionDiv>
  );
}

function CampaignTreeScreen({ target, branches, selectedNodeId, onBack, onSelectNode }) {
  return (
    <MotionDiv
      className={`campaign-tree-screen campaign-tree-screen--${target.routeId}`}
      style={{ '--node-color': target.color }}
      initial={{ opacity: 0, y: 34, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.985 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="campaign-tree-screen-stars" aria-hidden="true" />
      <header className="campaign-tree-screen-header">
        <button type="button" onClick={onBack}>Back to rocket</button>
        <span>{target.eyebrow}</span>
        <h2>{target.label}</h2>
        <p>{target.description}</p>
      </header>

      <div className="campaign-screen-map">
        {branches.map((branch, branchIndex) => (
          <section
            key={branch.id}
            className="campaign-screen-section"
            style={{ '--branch-color': branch.color, '--branch-index': branchIndex }}
          >
            <div className="campaign-screen-section-title">
              <span>{branch.label}</span>
            </div>
            <div className="campaign-mission-path">
              {branch.nodes.map((item, nodeIndex) => {
                const isSelected = selectedNodeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`campaign-mission-node ${isSelected ? 'campaign-mission-node--selected' : ''}`}
                    style={{ '--node-color': item.color, '--node-index': nodeIndex }}
                    onClick={() => onSelectNode(item, branch)}
                  >
                    <span className="campaign-mission-orbit" aria-hidden="true">
                      <span className="campaign-node-logo campaign-mission-logo">
                        {item.logo ? <img src={item.logo} alt="" /> : <FallbackLogo item={item} />}
                      </span>
                    </span>
                    <span className="campaign-mission-copy">
                      <strong>{item.name}</strong>
                      <span>{item.title}</span>
                      <small>{item.summary}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </MotionDiv>
  );
}

export default function LandingCampaignMap({ selectedNodeId, onSelectNode }) {
  const [activeRouteId, setActiveRouteId] = useState(null);
  const [activeTreeId, setActiveTreeId] = useState(null);
  const [viewState, setViewState] = useState('landing');
  const [transitionTarget, setTransitionTarget] = useState(null);
  const transitionTimerRef = useRef(null);
  const activeTarget = navigationTargets.find((target) => target.id === activeTreeId);
  const visibleTarget = activeTarget || transitionTarget;
  const visibleBranches = activeTarget
    ? landingCampaignBranches.filter((branch) => activeTarget.branchIds.includes(branch.id))
    : [];

  useEffect(() => () => {
    if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current);
  }, []);

  function selectTree(target) {
    if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current);
    setTransitionTarget(target);
    setActiveRouteId(target.routeId);
    setViewState('transition');
    transitionTimerRef.current = window.setTimeout(() => {
      setActiveTreeId(target.id);
      setViewState('tree');
    }, 850);
  }

  function returnToLanding() {
    if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current);
    setViewState('landing');
    setActiveTreeId(null);
    setTransitionTarget(null);
    setActiveRouteId(null);
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
      <CampaignPathScene activeRouteId={activeRouteId} isWarping={viewState === 'transition'} />

      {viewState !== 'tree' && <div className="campaign-horizon" aria-hidden="true" />}

      <AnimatePresence mode="wait">
        {viewState === 'landing' && (
          <MotionDiv
            key="gate"
            className="campaign-gate"
            aria-label="Choose a path"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.26 }}
          >
            {navigationTargets.map((target) => (
              <button
                key={target.id}
                type="button"
                className={`campaign-gate-card campaign-gate-card--${target.routeId}`}
                style={{ '--node-color': target.color }}
                onMouseEnter={() => setActiveRouteId(target.routeId)}
                onMouseLeave={() => setActiveRouteId(null)}
                onFocus={() => setActiveRouteId(target.routeId)}
                onBlur={() => setActiveRouteId(null)}
                onClick={() => selectTree(target)}
              >
                <span>{target.eyebrow}</span>
                <strong>{target.label}</strong>
                <small>{target.description}</small>
              </button>
            ))}
          </MotionDiv>
        )}

        {viewState === 'transition' && visibleTarget && (
          <LightSpeedTransition key="warp" target={visibleTarget} />
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