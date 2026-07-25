import React, { useState, useEffect, useRef } from 'react';

// ── Data ──────────────────────────────────────────────────────────────────────
const LEFT_ITEMS = [
  { id: 'p1', name: 'Project Alpha',   type: 'planet', color: '#4b7bec', category: 'project' },
  { id: 'p2', name: 'Project Beta',    type: 'star',   color: '#ff8a65', category: 'project' },
  { id: 'p3', name: 'Project Gamma',   type: 'moon',   color: '#26c6da', category: 'project' },
  { id: 'p4', name: 'Project Delta',   type: 'planet', color: '#ab47bc', category: 'project' },
  { id: 'p5', name: 'Project Epsilon', type: 'star',   color: '#66bb6a', category: 'project' },
  { id: 'p6', name: 'Project Zeta',    type: 'moon',   color: '#ffa726', category: 'project' },
];

const RIGHT_ITEMS = [
  { id: 'e1', name: 'Experience I',   type: 'planet', color: '#ef5350', category: 'experience' },
  { id: 'e2', name: 'Experience II',  type: 'star',   color: '#7e57c2', category: 'experience' },
  { id: 'e3', name: 'Experience III', type: 'moon',   color: '#26a69a', category: 'experience' },
  { id: 'e4', name: 'Experience IV',  type: 'planet', color: '#ec407a', category: 'experience' },
  { id: 'e5', name: 'Experience V',   type: 'star',   color: '#42a5f5', category: 'experience' },
];

// ── Visual helpers ────────────────────────────────────────────────────────────
function getObjectBg(type, color) {
  if (type === 'planet') {
    return `radial-gradient(circle at 35% 32%, rgba(255,255,255,0.25) 0%, ${color} 30%, ${color}99 60%, transparent 85%)`;
  }
  if (type === 'star') {
    return `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, ${color} 22%, ${color}99 50%, transparent 80%)`;
  }
  // moon — lit from one side, dark shadow on the other
  return `radial-gradient(circle at 62% 30%, ${color} 25%, ${color}aa 52%, #040912 68%)`;
}

// ── Ball: individual celestial object ─────────────────────────────────────────
function Ball({ item, size, onSelect }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 0',
        cursor: 'pointer',
        flexShrink: 0,
        pointerEvents: 'auto',
      }}
      onClick={e => { e.stopPropagation(); onSelect(item); }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Planet / star / moon circle */}
      <div style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: getObjectBg(item.type, item.color),
        border: `1px solid ${item.color}55`,
        boxShadow: hov
          ? `0 0 20px ${item.color}99, 0 0 40px ${item.color}44, inset 0 0 12px rgba(255,255,255,0.08)`
          : `0 0 10px ${item.color}44, inset 0 0 6px rgba(255,255,255,0.04)`,
        transform: hov ? 'scale(1.2)' : 'scale(1)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }} />

      {/* Type badge ring (tiny arc) */}
      {item.type === 'moon' && (
        <div style={{
          position: 'absolute',
          width: size + 8,
          height: size + 8,
          borderRadius: '50%',
          border: `1px dashed ${item.color}33`,
          pointerEvents: 'none',
          transform: 'translateY(-4px)',
        }} />
      )}

      {/* Label */}
      <span style={{
        marginTop: 5,
        fontSize: 9,
        fontFamily: 'monospace',
        letterSpacing: '0.04em',
        color: hov ? item.color : 'rgba(150, 205, 255, 0.45)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        maxWidth: size + 20,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        transition: 'color 0.25s',
        textShadow: hov ? `0 0 10px ${item.color}88` : 'none',
        pointerEvents: 'none',
      }}>
        {item.name}
      </span>
    </div>
  );
}

// ── Lane: scrolling vertical strip ────────────────────────────────────────────
function Lane({ items, speed, xLeft, size, onSelect }) {
  const wrapRef  = useRef(null);
  const yRef     = useRef(0);
  const rafRef   = useRef(null);
  const pauseRef = useRef(false);

  const ITEM_H = 84; // px allocated per item
  const totalH = items.length * ITEM_H;

  useEffect(() => {
    // Start at a random offset so the two tunnels don't look identical
    yRef.current = -(Math.random() * totalH);

    function tick() {
      if (!pauseRef.current) {
        yRef.current -= speed;
        if (yRef.current <= -totalH) yRef.current += totalH;
        if (wrapRef.current) {
          wrapRef.current.style.transform = `translateY(${yRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, totalH]);

  // Double items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        position: 'absolute',
        left: xLeft,
        top: 0,
        bottom: 0,
        width: size + 28,
        overflow: 'hidden',
        pointerEvents: 'auto',
      }}
      onMouseEnter={() => { pauseRef.current = true; }}
      onMouseLeave={() => { pauseRef.current = false; }}
    >
      <div
        ref={wrapRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: totalH * 2,
        }}
      >
        {doubled.map((item, i) => (
          <Ball
            key={`${item.id}-${i}`}
            item={item}
            size={size}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

// ── Tunnel background SVG (perspective lines + micro-stars) ───────────────────
function TunnelBackground({ side }) {
  // Pre-generate star positions (stable – useMemo would be ideal but module-level is fine)
  const stars = React.useMemo(() =>
    Array.from({ length: 28 }, () => ({
      cx: 5 + Math.random() * 90,
      cy: Math.random() * 100,
      r:  0.4 + Math.random() * 1.0,
      op: 0.15 + Math.random() * 0.45,
    })), []);

  const vpX = side === 'left' ? '100%' : '0%';

  return (
    <svg
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Perspective convergence lines from vanishing point */}
      {Array.from({ length: 10 }).map((_, i) => {
        const t = i / 9;
        const edgeX = side === 'left' ? '0%' : '100%';
        const edgeY = `${t * 100}%`;
        return (
          <line
            key={i}
            x1={vpX} y1="50%"
            x2={edgeX} y2={edgeY}
            stroke="rgba(66,130,255,0.07)"
            strokeWidth="0.8"
          />
        );
      })}
      {/* Micro star field */}
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={`${s.cx}%`}
          cy={`${s.cy}%`}
          r={s.r}
          fill="#aaccff"
          opacity={s.op}
        />
      ))}
    </svg>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function GalaxySideTunnel({ side, onObjectSelect }) {
  const items = side === 'left' ? LEFT_ITEMS : RIGHT_ITEMS;
  const label = side === 'left' ? 'PROJECTS' : 'EXPERIENCES';

  // Split into two lanes: even-index → inner (near center), odd-index → outer
  const laneInner = items.filter((_, i) => i % 2 === 0);
  const laneOuter = items.filter((_, i) => i % 2 === 1);

  // Lane x positions within the 200 px panel
  // "Inner" lane sits closer to the screen center for the depth illusion
  const innerX = side === 'left' ? 110 : 14;
  const outerX = side === 'left' ? 18  : 106;

  const panelBg = side === 'left'
    ? 'linear-gradient(to right, rgba(1,2,10,0.94) 50%, rgba(1,2,10,0.45) 82%, transparent 100%)'
    : 'linear-gradient(to left,  rgba(1,2,10,0.94) 50%, rgba(1,2,10,0.45) 82%, transparent 100%)';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        [side]: 0,
        width: 200,
        height: '100vh',
        zIndex: 15,
        overflow: 'hidden',
        background: panelBg,
        pointerEvents: 'none', // only children capture events
      }}
    >
      {/* Perspective lines + stars SVG */}
      <TunnelBackground side={side} />

      {/* Top gradient mask */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 110,
        background: 'linear-gradient(to bottom, rgba(1,2,10,1), transparent)',
        zIndex: 22, pointerEvents: 'none',
      }} />

      {/* Bottom gradient mask */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 110,
        background: 'linear-gradient(to top, rgba(1,2,10,1), transparent)',
        zIndex: 22, pointerEvents: 'none',
      }} />

      {/* Section label */}
      <div style={{
        position: 'absolute',
        top: 68,
        left: 0, right: 0,
        textAlign: 'center',
        fontSize: 9,
        fontFamily: 'monospace',
        letterSpacing: '0.22em',
        color: 'rgba(102,232,255,0.38)',
        zIndex: 26,
        pointerEvents: 'none',
      }}>
        {label}
      </div>

      {/* Divider line under label */}
      <div style={{
        position: 'absolute',
        top: 84,
        left: 20, right: 20,
        height: 1,
        background: 'linear-gradient(to right, transparent, rgba(102,232,255,0.15), transparent)',
        zIndex: 26, pointerEvents: 'none',
      }} />

      {/* Hover-to-pause hint */}
      <div style={{
        position: 'absolute',
        bottom: 118,
        left: 0, right: 0,
        textAlign: 'center',
        fontSize: 8,
        fontFamily: 'monospace',
        letterSpacing: '0.10em',
        color: 'rgba(102,232,255,0.18)',
        zIndex: 26, pointerEvents: 'none',
      }}>
        hover to pause · click to view
      </div>

      {/* Inner lane: closer, larger, faster */}
      <Lane
        items={laneInner}
        speed={0.32}
        xLeft={innerX}
        size={52}
        onSelect={onObjectSelect}
      />

      {/* Outer lane: farther, smaller, slower */}
      <Lane
        items={laneOuter}
        speed={0.20}
        xLeft={outerX}
        size={42}
        onSelect={onObjectSelect}
      />
    </div>
  );
}
