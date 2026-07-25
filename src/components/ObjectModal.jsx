import React, { useEffect, useState } from 'react';

// ── Object visual matching the tunnel/galaxy style ─────────────────────────────
function ObjectVisual({ item }) {
  const size = 72;

  function getBg(type, color) {
    if (type === 'planet' || type === 'career') {
      return `radial-gradient(circle at 35% 32%, rgba(255,255,255,0.28) 0%, ${color} 28%, ${color}99 58%, transparent 85%)`;
    }
    if (type === 'star') {
      return `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, ${color} 22%, ${color}88 50%, transparent 80%)`;
    }
    // moon
    return `radial-gradient(circle at 62% 30%, ${color} 25%, ${color}aa 52%, #040912 68%)`;
  }

  const categoryLabel = {
    project: 'Project',
    experience: 'Experience',
    career: 'Career',
  }[item.category] || item.type;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      {/* Animated glow container */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Outer pulse ring */}
        <div style={{
          position: 'absolute',
          width: size + 24,
          height: size + 24,
          borderRadius: '50%',
          border: `1px solid ${item.color}44`,
          animation: 'objModalPulse 2.4s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          width: size + 48,
          height: size + 48,
          borderRadius: '50%',
          border: `1px solid ${item.color}22`,
          animation: 'objModalPulse 2.4s ease-in-out infinite 0.8s',
        }} />
        {/* Main body */}
        <div style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: getBg(item.type, item.color),
          border: `1.5px solid ${item.color}66`,
          boxShadow: `0 0 28px ${item.color}66, 0 0 56px ${item.color}33`,
          flexShrink: 0,
        }} />
      </div>

      {/* Category badge */}
      <span style={{
        fontSize: 9,
        fontFamily: 'monospace',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: item.color,
        opacity: 0.75,
      }}>
        {categoryLabel} · {item.type}
      </span>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────
export default function ObjectModal({ item, onClose }) {
  const [visible, setVisible] = useState(false);

  // Fade in
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!item) return null;

  return (
    <>
      {/* Keyframe injection */}
      <style>{`
        @keyframes objModalPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.9; transform: scale(1.06); }
        }
        @keyframes objModalSlideUp {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 18px)); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          background: 'rgba(1,2,10,0.72)',
          backdropFilter: 'blur(6px)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Card */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: 310,
          animation: 'objModalSlideUp 0.35s cubic-bezier(0.22,1,0.36,1) forwards',
          width: 'min(360px, 90vw)',
          background: 'rgba(4,10,28,0.92)',
          border: `1px solid ${item.color}44`,
          borderRadius: 14,
          padding: '36px 32px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 22,
          boxShadow: `0 0 60px ${item.color}18, 0 20px 60px rgba(0,0,0,0.6)`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            background: 'none',
            border: 'none',
            color: 'rgba(150,210,255,0.5)',
            fontSize: 18,
            cursor: 'pointer',
            lineHeight: 1,
            padding: '2px 4px',
            borderRadius: 4,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#66e8ff'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(150,210,255,0.5)'; }}
        >
          ×
        </button>

        {/* Visual */}
        <ObjectVisual item={item} />

        {/* Name */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            margin: 0,
            fontSize: 18,
            fontFamily: 'monospace',
            fontWeight: 600,
            color: '#f0faff',
            letterSpacing: '0.04em',
          }}>
            {item.name}
          </h2>
        </div>

        {/* Divider */}
        <div style={{
          width: 60,
          height: 1,
          background: `linear-gradient(to right, transparent, ${item.color}66, transparent)`,
        }} />

        {/* Coming soon section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          padding: '16px 20px',
          background: `${item.color}0a`,
          border: `1px solid ${item.color}22`,
          borderRadius: 8,
          width: '100%',
          boxSizing: 'border-box',
        }}>
          {/* Pulsing dot */}
          <div style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: item.color,
            boxShadow: `0 0 8px ${item.color}`,
            animation: 'objModalPulse 1.8s ease-in-out infinite',
          }} />
          <span style={{
            fontSize: 12,
            fontFamily: 'monospace',
            color: item.color,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.85,
          }}>
            Coming Soon
          </span>
          <p style={{
            margin: 0,
            fontSize: 11,
            fontFamily: 'monospace',
            color: 'rgba(160,210,255,0.45)',
            textAlign: 'center',
            lineHeight: 1.6,
            letterSpacing: '0.03em',
          }}>
            Details for this {item.category} are being crafted.<br />
            Check back soon to explore.
          </p>
        </div>

        {/* Coordinates / metadata */}
        <div style={{
          display: 'flex',
          gap: 20,
          opacity: 0.35,
        }}>
          <span style={{ fontSize: 9, fontFamily: 'monospace', color: '#aaccff', letterSpacing: '0.08em' }}>
            ID: {item.id.toUpperCase()}
          </span>
          <span style={{ fontSize: 9, fontFamily: 'monospace', color: '#aaccff', letterSpacing: '0.08em' }}>
            TYPE: {item.type.toUpperCase()}
          </span>
        </div>
      </div>
    </>
  );
}
