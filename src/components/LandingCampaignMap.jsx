import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import * as THREE from 'three';
import { landingCampaignBranches } from '../data/landingCampaignData';

const MotionDiv = motion.div;

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

function RocketNavigator({ activeRouteId }) {
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
    const destination = activeRouteId ? 0.72 : 0.18 + Math.sin(clock.elapsedTime * 0.65) * 0.045;
    const progress = THREE.MathUtils.clamp(destination, 0.08, 0.94);
    const point = curve.getPointAt(progress);
    const next = curve.getPointAt((progress + 0.01) % 1);
    rocketRef.current.position.lerp(point, 0.085);
    rocketRef.current.lookAt(next);
    rocketRef.current.rotation.z += Math.PI / 2;
    rocketRef.current.position.y += Math.sin(clock.elapsedTime * 3.1) * 0.035;

    if (flameRef.current) {
      const pulse = 1 + Math.sin(clock.elapsedTime * 18) * 0.2;
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

function CampaignPathScene({ activeRouteId }) {
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
      {Object.entries(routeDefinitions).map(([id, route]) => {
        const active = activeRouteId === id;
        return (
          <group key={id}>
            <RouteLine route={route} active={active} />
          </group>
        );
      })}
      <RocketNavigator activeRouteId={activeRouteId} />
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

function ProjectFlipCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [summary, setSummary] = useState(item.summary);
  const [isLoading, setIsLoading] = useState(Boolean(item.readmeUrl));

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
    <article
      className={`project-flip-card ${flipped ? 'project-flip-card--flipped' : ''}`}
    >
      <button
        type="button"
        className="project-flip-card-toggle"
        aria-expanded={flipped}
        aria-label={`${flipped ? 'Hide' : 'Show'} README summary for ${item.name}`}
        onClick={() => setFlipped((value) => !value)}
      >
        <div className="project-flip-card-inner">
          <div className="project-flip-face project-flip-face--front" aria-hidden={flipped}>
            <span>Project</span>
            <strong>{item.name}</strong>
            <small>{item.skills.join(' · ')}</small>
            <em>Click for README</em>
          </div>
          <div className="project-flip-face project-flip-face--back" aria-hidden={!flipped}>
            <span>README</span>
            <p>{isLoading ? 'Loading project README…' : summary}</p>
            <em>Click card to return</em>
          </div>
        </div>
      </button>
      <a
        className="project-flip-card-link"
        href={item.repoUrl}
        target="_blank"
        rel="noreferrer"
        tabIndex={flipped ? 0 : -1}
        aria-hidden={!flipped}
      >
        View repository ↗
      </a>
    </article>
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
            {branch.id === 'projects' ? (
              <div className="project-card-grid">
                {branch.nodes.map((item) => <ProjectFlipCard key={item.id} item={item} />)}
              </div>
            ) : <div className="campaign-mission-path">
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
            </div>}
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
      <CampaignPathScene activeRouteId={activeRouteId} />

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
