import React, { useEffect, useRef, useState, useCallback } from 'react';
import { btn as btnStyle } from '../theme';

// ── All objects displayed in the galaxy view ──────────────────────────────────
const GALAXY_OBJECTS = [
  // ─ Projects (left region) ─
  { id: 'p1', name: 'Project Alpha',   type: 'planet',     color: '#4b7bec', category: 'project',    x: 0.10, y: 0.27 },
  { id: 'p2', name: 'Project Beta',    type: 'star',       color: '#ff8a65', category: 'project',    x: 0.24, y: 0.62 },
  { id: 'p3', name: 'Project Gamma',   type: 'moon',       color: '#26c6da', category: 'project',    x: 0.07, y: 0.46 },
  { id: 'p4', name: 'Project Delta',   type: 'planet',     color: '#ab47bc', category: 'project',    x: 0.17, y: 0.76 },
  { id: 'p5', name: 'Project Epsilon', type: 'star',       color: '#66bb6a', category: 'project',    x: 0.33, y: 0.34 },
  { id: 'p6', name: 'Project Zeta',    type: 'moon',       color: '#ffa726', category: 'project',    x: 0.28, y: 0.66 },
  // ─ Career (center / prominent) ─
  { id: 'ncr',      name: 'NCR Voyix', type: 'career',     color: '#4b7bff', category: 'career',     x: 0.43, y: 0.38 },
  { id: 'novae',    name: 'Novae',     type: 'career',     color: '#2ec4b6', category: 'career',     x: 0.53, y: 0.57 },
  { id: 'adobe',    name: 'Adobe',     type: 'career',     color: '#8b5cf6', category: 'career',     x: 0.60, y: 0.37 },
  { id: 'research', name: 'Research',  type: 'career',     color: '#1fb6d4', category: 'career',     x: 0.48, y: 0.68 },
  // ─ Experiences (right region) ─
  { id: 'e1', name: 'Experience I',   type: 'planet',     color: '#ef5350', category: 'experience', x: 0.74, y: 0.29 },
  { id: 'e2', name: 'Experience II',  type: 'star',       color: '#7e57c2', category: 'experience', x: 0.86, y: 0.57 },
  { id: 'e3', name: 'Experience III', type: 'moon',       color: '#26a69a', category: 'experience', x: 0.91, y: 0.40 },
  { id: 'e4', name: 'Experience IV',  type: 'planet',     color: '#ec407a', category: 'experience', x: 0.79, y: 0.70 },
  { id: 'e5', name: 'Experience V',   type: 'star',       color: '#42a5f5', category: 'experience', x: 0.66, y: 0.23 },
];

// ── Pre-generate starfield (module-level = stable) ────────────────────────────
const STARS = Array.from({ length: 960 }, () => ({
  x: Math.random(),
  y: Math.random(),
  r: 0.25 + Math.random() * 1.6,
  alpha: 0.12 + Math.random() * 0.72,
  color: Math.random() > 0.82 ? '#99bbff' : '#ffffff',
  twinkle: 0.3 + Math.random() * 2.8,
  phase: Math.random() * Math.PI * 2,
}));

// ── Canvas draw helpers ───────────────────────────────────────────────────────
function hexAlpha(hex, a) {
  // Append 2-digit hex alpha to a 6-char hex color string
  return hex + Math.round(a * 255).toString(16).padStart(2, '0');
}

function drawBackground(ctx, W, H) {
  // Deep space base
  ctx.fillStyle = '#010208';
  ctx.fillRect(0, 0, W, H);

  // Milky Way galactic plane – layered horizontal bands
  const layers = [
    { cy: 0.50, ry: 0.20, alpha: 0.14, hue: '60,90,210' },
    { cy: 0.49, ry: 0.10, alpha: 0.18, hue: '80,110,230' },
    { cy: 0.50, ry: 0.05, alpha: 0.10, hue: '120,150,255' },
  ];
  layers.forEach(l => {
    const g = ctx.createLinearGradient(0, (l.cy - l.ry) * H, 0, (l.cy + l.ry) * H);
    g.addColorStop(0,   'transparent');
    g.addColorStop(0.5, `rgba(${l.hue},${l.alpha})`);
    g.addColorStop(1,   'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  });

  // Bright galactic core glow (slightly left of center)
  const core = ctx.createRadialGradient(W * 0.50, H * 0.49, 0, W * 0.50, H * 0.49, W * 0.28);
  core.addColorStop(0,   'rgba(100,140,255,0.20)');
  core.addColorStop(0.45,'rgba(60,90,200,0.07)');
  core.addColorStop(1,   'transparent');
  ctx.fillStyle = core;
  ctx.fillRect(0, 0, W, H);

  // Extra nebula wisps
  const wisps = [
    { x: 0.20, y: 0.45, rx: 0.18, ry: 0.06, c: '40,60,180', a: 0.06 },
    { x: 0.75, y: 0.52, rx: 0.22, ry: 0.07, c: '60,40,160', a: 0.05 },
    { x: 0.50, y: 0.47, rx: 0.12, ry: 0.04, c: '120,80,220', a: 0.04 },
  ];
  wisps.forEach(w => {
    ctx.save();
    ctx.translate(w.x * W, w.y * H);
    ctx.scale(1, w.ry / w.rx);
    const wg = ctx.createRadialGradient(0, 0, 0, 0, 0, w.rx * W);
    wg.addColorStop(0, `rgba(${w.c},${w.a + 0.06})`);
    wg.addColorStop(1, 'transparent');
    ctx.fillStyle = wg;
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(0, 0, w.rx * W, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawStars(ctx, W, H, t) {
  STARS.forEach(s => {
    const tw = 0.65 + 0.35 * Math.sin(t * s.twinkle + s.phase);
    ctx.globalAlpha = s.alpha * tw;
    ctx.fillStyle = s.color;
    ctx.beginPath();
    ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function drawObject(ctx, obj, W, H, hovered, t) {
  const x = obj.x * W;
  const y = obj.y * H;
  const baseR = obj.type === 'career' ? 18 : 14;
  const pulse = 1 + 0.06 * Math.sin(t * 1.2 + obj.x * 10);
  const scaleF = hovered ? 1.35 : pulse;
  const r = baseR * scaleF;

  // Outer glow halo
  const glowR = r * (hovered ? 4 : 3);
  const glow = ctx.createRadialGradient(x, y, 0, x, y, glowR);
  glow.addColorStop(0, hexAlpha(obj.color, hovered ? 0.5 : 0.28));
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, glowR, 0, Math.PI * 2);
  ctx.fill();

  // Body
  let bodyGrad;
  if (obj.type === 'planet' || obj.type === 'career') {
    bodyGrad = ctx.createRadialGradient(x - r * 0.28, y - r * 0.28, 0, x, y, r);
    bodyGrad.addColorStop(0, 'rgba(255,255,255,0.5)');
    bodyGrad.addColorStop(0.35, obj.color);
    bodyGrad.addColorStop(1, hexAlpha(obj.color, 0.6));
  } else if (obj.type === 'star') {
    bodyGrad = ctx.createRadialGradient(x, y, 0, x, y, r);
    bodyGrad.addColorStop(0, 'rgba(255,255,255,0.85)');
    bodyGrad.addColorStop(0.25, obj.color);
    bodyGrad.addColorStop(1, hexAlpha(obj.color, 0.4));
  } else {
    // moon – lit from upper-right
    bodyGrad = ctx.createRadialGradient(x + r * 0.22, y - r * 0.22, 0, x, y, r);
    bodyGrad.addColorStop(0, obj.color);
    bodyGrad.addColorStop(0.55, hexAlpha(obj.color, 0.7));
    bodyGrad.addColorStop(1, '#030914');
  }
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  // Ring for career objects
  if (obj.type === 'career') {
    ctx.save();
    ctx.strokeStyle = hexAlpha(obj.color, hovered ? 0.7 : 0.35);
    ctx.lineWidth = hovered ? 1.5 : 0.8;
    ctx.setLineDash([3, 5]);
    ctx.beginPath();
    ctx.arc(x, y, r + 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // Border
  ctx.strokeStyle = hexAlpha(obj.color, hovered ? 0.9 : 0.45);
  ctx.lineWidth = hovered ? 1.8 : 0.8;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();

  // Name label
  const labelY = y + r + 16;
  ctx.font = `${hovered ? 11 : 9}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = hovered ? '#ffffff' : 'rgba(190,225,255,0.6)';
  ctx.fillText(obj.name, x, labelY);

  // Category micro-label
  if (hovered) {
    ctx.font = '8px monospace';
    ctx.fillStyle = hexAlpha(obj.color, 0.65);
    ctx.fillText(obj.category, x, labelY + 13);
  }
}

function drawRegionLabels(ctx, W, H) {
  ctx.font = '10px monospace';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '0.2em';

  ctx.fillStyle = 'rgba(102,232,255,0.18)';
  ctx.fillText('← PROJECTS', W * 0.14, H * 0.12);
  ctx.fillText('EXPERIENCES →', W * 0.84, H * 0.12);
  ctx.fillText('CAREER', W * 0.50, H * 0.12);
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function GalaxyMilkyWay({ onClose, onObjectSelect }) {
  const canvasRef   = useRef(null);
  const rafRef      = useRef(null);
  const timeRef     = useRef(0);
  const hoveredRef  = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible]  = useState(false);

  // Fade-in on mount
  useEffect(() => { requestAnimationFrame(() => setVisible(true)); }, []);

  // Canvas resize
  useEffect(() => {
    function resize() {
      const c = canvasRef.current;
      if (!c) return;
      c.width  = window.innerWidth;
      c.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      const t = timeRef.current;

      drawBackground(ctx, W, H);
      drawStars(ctx, W, H, t);

      // Draw non-hovered objects first, then hovered on top
      GALAXY_OBJECTS.forEach(obj => {
        if (obj.id !== hoveredRef.current) drawObject(ctx, obj, W, H, false, t);
      });
      GALAXY_OBJECTS.forEach(obj => {
        if (obj.id === hoveredRef.current) drawObject(ctx, obj, W, H, true, t);
      });

      drawRegionLabels(ctx, W, H);

      timeRef.current += 0.016;
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Hit testing
  const handleMouseMove = useCallback(e => {
    const c = canvasRef.current;
    if (!c) return;
    const rect = c.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (c.width  / rect.width);
    const my = (e.clientY - rect.top)  * (c.height / rect.height);

    let found = null;
    for (const obj of GALAXY_OBJECTS) {
      const ox = obj.x * c.width;
      const oy = obj.y * c.height;
      const r  = (obj.type === 'career' ? 22 : 18) * 1.4; // generous hit area
      if (Math.hypot(mx - ox, my - oy) <= r) { found = obj.id; break; }
    }
    if (found !== hoveredRef.current) {
      hoveredRef.current = found;
      setHovered(found);
    }
  }, []);

  const handleClick = useCallback(e => {
    const c = canvasRef.current;
    if (!c) return;
    const rect = c.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (c.width  / rect.width);
    const my = (e.clientY - rect.top)  * (c.height / rect.height);

    for (const obj of GALAXY_OBJECTS) {
      const ox = obj.x * c.width;
      const oy = obj.y * c.height;
      const r  = (obj.type === 'career' ? 24 : 20) * 1.4;
      if (Math.hypot(mx - ox, my - oy) <= r) {
        onObjectSelect(obj);
        return;
      }
    }
  }, [onObjectSelect]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: '#010208',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.6s ease',
    }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          cursor: hovered ? 'pointer' : 'crosshair',
        }}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      />

      {/* Back button */}
      <button
        onClick={onClose}
        style={{
          ...btnStyle.base,
          position: 'fixed',
          top: 24,
          left: 24,
          zIndex: 210,
        }}
        onMouseEnter={e => btnStyle.hoverEnter(e.currentTarget)}
        onMouseLeave={e => btnStyle.hoverLeave(e.currentTarget)}
      >
        ← Back
      </button>

      {/* Title */}
      <div style={{
        position: 'fixed',
        top: 30,
        left: 0, right: 0,
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: 10,
        letterSpacing: '0.28em',
        color: 'rgba(102,232,255,0.35)',
        textTransform: 'uppercase',
        pointerEvents: 'none',
        zIndex: 210,
      }}>
        Milky Way · All Objects · Click to Explore
      </div>

      {/* Legend */}
      <div style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        zIndex: 210,
        pointerEvents: 'none',
      }}>
        {[
          { color: '#4b7bec', label: 'Project' },
          { color: '#ef5350', label: 'Experience' },
          { color: '#8b5cf6', label: 'Career' },
        ].map(l => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: l.color,
              boxShadow: `0 0 6px ${l.color}88`,
            }} />
            <span style={{
              fontSize: 9,
              fontFamily: 'monospace',
              letterSpacing: '0.1em',
              color: 'rgba(170,210,255,0.45)',
            }}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
