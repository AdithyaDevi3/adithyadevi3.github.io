import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { landingCampaignBranches } from '../data/landingCampaignData';
import {
  motionDuration,
  motionEase,
  motionSpring,
  motionSpringSoft,
  routeSignalProgress,
  routeSignalScale,
  sequenceDelay
} from '../motion';

const MotionAnchor = motion.a;
const MotionArticle = motion.article;
const MotionButton = motion.button;
const MotionDiv = motion.div;
const MotionHeader = motion.header;
const MotionSection = motion.section;

const routeDefinitions = {
  left: {
    color: '#2563eb',
    points: [
      [0, -1.2, 0.55],
      [-1.2, -1.34, -1.4],
      [-2.9, -0.66, -3.8],
      [-4.7, 0.16, -6.8]
    ]
  },
  right: {
    color: '#2563eb',
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

function createCurve(points) {
  return new THREE.CatmullRomCurve3(points.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
}

function RouteLine({ route, active, reduceMotion }) {
  const glowMaterialRef = useRef(null);
  const coreMaterialRef = useRef(null);
  const curve = useMemo(() => createCurve(route.points), [route.points]);
  const glowGeometry = useMemo(() => new THREE.TubeGeometry(curve, 96, 0.045, 10, false), [curve]);
  const coreGeometry = useMemo(() => new THREE.TubeGeometry(curve, 96, 0.014, 8, false), [curve]);

  useFrame(({ clock }, delta) => {
    const cadence = reduceMotion ? 0.62 : 0.62 + Math.sin(clock.elapsedTime * 1.35) * 0.12;
    if (glowMaterialRef.current) {
      const target = active ? 0.34 + cadence * 0.12 : 0.1 + cadence * 0.045;
      glowMaterialRef.current.opacity = THREE.MathUtils.damp(glowMaterialRef.current.opacity, target, 5, delta);
    }
    if (coreMaterialRef.current) {
      const target = active ? 0.88 + cadence * 0.1 : 0.42 + cadence * 0.08;
      coreMaterialRef.current.opacity = THREE.MathUtils.damp(coreMaterialRef.current.opacity, target, 7, delta);
    }
  });

  return (
    <group>
      <mesh geometry={glowGeometry}>
        <meshBasicMaterial ref={glowMaterialRef} color={route.color} transparent opacity={active ? 0.34 : 0.12} />
      </mesh>
      <mesh geometry={coreGeometry}>
        <meshBasicMaterial ref={coreMaterialRef} color={route.color} transparent opacity={active ? 0.92 : 0.5} />
      </mesh>
    </group>
  );
}

function RouteSignals({ route, active, routeIndex, reduceMotion }) {
  const curve = useMemo(() => createCurve(route.points), [route.points]);
  const signalRefs = useRef([]);
  const signals = useMemo(() => Array.from({ length: 4 }, (_, index) => ({
    offset: (index * 0.23 + routeIndex * 0.11) % 1,
    scale: 0.032 + index * 0.006
  })), [routeIndex]);

  useFrame(({ clock }) => {
    signalRefs.current.forEach((signal, index) => {
      if (!signal) return;
      const speed = active ? 0.105 : 0.036;
      const progress = routeSignalProgress(signals[index].offset, clock.elapsedTime, speed);
      const point = curve.getPointAt(progress);
      signal.position.copy(point);
      signal.scale.setScalar(routeSignalScale(signals[index].scale, clock.elapsedTime, index, active));
      signal.visible = active || index % 2 === 0;
    });
  });

  if (reduceMotion) return null;

  return signals.map((signal, index) => (
    <mesh
      key={`${routeIndex}-${signal.offset}`}
      ref={(node) => { signalRefs.current[index] = node; }}
      scale={signal.scale}
    >
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color={route.color} transparent opacity={active ? 0.92 : 0.38} />
    </mesh>
  ));
}

function NavigationCore({ activeRouteId, reduceMotion }) {
  const coreRef = useRef(null);
  const ringRef = useRef(null);

  useFrame(({ clock }, delta) => {
    if (coreRef.current) {
      const target = activeRouteId ? 1.28 : 1;
      const next = THREE.MathUtils.damp(coreRef.current.scale.x, target, 5, delta);
      coreRef.current.scale.setScalar(next + (reduceMotion ? 0 : Math.sin(clock.elapsedTime * 2.4) * 0.035));
      coreRef.current.rotation.z = reduceMotion ? 0 : clock.elapsedTime * 0.18;
    }
    if (ringRef.current) ringRef.current.rotation.z = reduceMotion ? 0 : -clock.elapsedTime * 0.11;
  });

  return (
    <group position={[0, -1.2, 0.55]}>
      <group ref={coreRef}>
        <mesh>
          <ringGeometry args={[0.12, 0.15, 32]} />
          <meshBasicMaterial color="#94a3b8" transparent opacity={0.65} side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={ringRef}>
          <ringGeometry args={[0.23, 0.238, 48, 1, 0, Math.PI * 1.52]} />
          <meshBasicMaterial color="#2563eb" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}

function RocketNavigator({ activeRouteId, reduceMotion }) {
  const rocketRef = useRef(null);
  const flameRef = useRef(null);
  const curves = useMemo(() => ({
    left: createCurve(routeDefinitions.left.points),
    right: createCurve(routeDefinitions.right.points)
  }), []);

  useFrame(({ clock }, delta) => {
    if (!rocketRef.current) return;
    const routeId = activeRouteId || (Math.sin(clock.elapsedTime * 0.5) > 0 ? 'right' : 'left');
    const curve = curves[routeId];
    const destination = activeRouteId ? 0.72 : 0.18 + Math.sin(clock.elapsedTime * 0.65) * 0.045;
    const progress = THREE.MathUtils.clamp(destination, 0.08, 0.94);
    const point = curve.getPointAt(progress);
    const next = curve.getPointAt((progress + 0.01) % 1);
    const follow = 1 - Math.exp(-5.8 * delta);
    rocketRef.current.position.lerp(point, follow);
    rocketRef.current.lookAt(next);
    rocketRef.current.rotation.z += Math.PI / 2 + (reduceMotion ? 0 : Math.sin(clock.elapsedTime * 1.2) * 0.018);
    rocketRef.current.position.y += reduceMotion ? 0 : Math.sin(clock.elapsedTime * 3.1) * 0.035;

    if (flameRef.current) {
      const pulse = reduceMotion ? 1 : 1 + Math.sin(clock.elapsedTime * 18) * 0.2;
      flameRef.current.scale.set(0.85 * pulse, 1.15 + pulse * 0.18, 0.85 * pulse);
    }
  });

  return (
    <group ref={rocketRef} scale={0.78}>
      <mesh rotation={[0, 0, -Math.PI / 2]} position={[0.52, 0, 0]}>
        <coneGeometry args={[0.235, 0.48, 32]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.36} metalness={0.28} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.08, 0, 0]}>
        <capsuleGeometry args={[0.22, 0.86, 12, 24]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.32} metalness={0.22} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} position={[0.28, 0, 0]}>
        <cylinderGeometry args={[0.232, 0.232, 0.1, 32]} />
        <meshStandardMaterial color="#d36a5f" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[0.1, 0.225, 0.11]}>
        <sphereGeometry args={[0.105, 24, 24]} />
        <meshStandardMaterial color="#0f3b66" emissive="#2563eb" emissiveIntensity={0.16} roughness={0.12} metalness={0.62} />
      </mesh>
      <mesh position={[-0.44, 0.24, 0]} rotation={[0, 0, -0.62]}>
        <coneGeometry args={[0.13, 0.42, 3]} />
        <meshStandardMaterial color="#d36a5f" roughness={0.42} metalness={0.16} />
      </mesh>
      <mesh position={[-0.44, -0.24, 0]} rotation={[0, 0, 0.62]}>
        <coneGeometry args={[0.13, 0.42, 3]} />
        <meshStandardMaterial color="#d36a5f" roughness={0.42} metalness={0.16} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.68, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.11, 0.18, 24]} />
        <meshStandardMaterial color="#475569" roughness={0.34} metalness={0.72} />
      </mesh>
      <mesh ref={flameRef} position={[-0.84, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.13, 0.42, 24]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.82} />
      </mesh>
      <mesh position={[-0.96, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.07, 0.28, 20]} />
        <meshBasicMaterial color="#fb7185" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function CampaignPathScene({ activeRouteId, reduceMotion }) {
  return (
    <Canvas
      className="campaign-map-canvas"
      camera={{ position: [0, 1.15, 6.8], fov: 56 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.82} />
      <pointLight position={[0, 2.2, 2]} intensity={2.15} color="#ffffff" />
      <pointLight position={[3, 0.5, -3]} intensity={1.25} color="#2563eb" />
      <NavigationCore activeRouteId={activeRouteId} reduceMotion={reduceMotion} />
      {Object.entries(routeDefinitions).map(([id, route], routeIndex) => {
        const active = activeRouteId === id;
        return (
          <group key={id}>
            <RouteLine route={route} active={active} reduceMotion={reduceMotion} />
            <RouteSignals route={route} active={active} routeIndex={routeIndex} reduceMotion={reduceMotion} />
          </group>
        );
      })}
      <RocketNavigator activeRouteId={activeRouteId} reduceMotion={reduceMotion} />
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

function InterfaceTelemetry({ activeRouteId, viewState }) {
  const status = viewState === 'tree'
    ? 'Directory synchronized'
    : activeRouteId
      ? `${activeRouteId} vector acquired`
      : 'Awaiting direction';

  return (
    <div className="interface-telemetry" aria-hidden="true">
      <div className="interface-telemetry-status">
        <span className="interface-telemetry-pulse" />
        <span>{status}</span>
      </div>
      <div className="interface-telemetry-axis">
        <span>01</span>
        <i />
        <span>02</span>
      </div>
      <div className="interface-telemetry-signature">ADI / PORTFOLIO SYSTEM</div>
    </div>
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
      .catch(() => setSummary(item.summary))
      .finally(() => setIsLoading(false));

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
                      <span>{item.title}</span>
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
  const [activeRouteId, setActiveRouteId] = useState(null);
  const [activeTreeId, setActiveTreeId] = useState(null);
  const [viewState, setViewState] = useState('landing');
  const reduceMotion = useReducedMotion();
  const activeTarget = navigationTargets.find((target) => target.id === activeTreeId);
  const visibleBranches = activeTarget
    ? landingCampaignBranches.filter((branch) => activeTarget.branchIds.includes(branch.id))
    : [];

  function selectTree(target) {
    setActiveRouteId(target.routeId);
    setActiveTreeId(target.id);
    setViewState('tree');
  }

  function returnToLanding() {
    setViewState('landing');
    setActiveTreeId(null);
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
      <CampaignPathScene activeRouteId={activeRouteId} reduceMotion={reduceMotion} />
      <InterfaceTelemetry activeRouteId={activeRouteId} viewState={viewState} />

      {viewState !== 'tree' && <div className="campaign-horizon" aria-hidden="true" />}

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
                onMouseEnter={() => setActiveRouteId(target.routeId)}
                onMouseLeave={() => setActiveRouteId(null)}
                onFocus={() => setActiveRouteId(target.routeId)}
                onBlur={() => setActiveRouteId(null)}
                onClick={() => selectTree(target)}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, rotateX: -5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                transition={{ ...motionSpringSoft, delay: reduceMotion ? 0 : sequenceDelay(index, 0.1, 0.18) }}
              >
                <i className="campaign-gate-scan" aria-hidden="true" />
                <span>{target.eyebrow}</span>
                <strong>{target.label}</strong>
                <small>{target.description}</small>
                <em>Open vector <b>↗</b></em>
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
