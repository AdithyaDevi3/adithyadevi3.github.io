import { useEffect, useMemo, useState } from 'react';
import { portfolioEntries } from '../data/portfolioData';

function CareerGalaxy({ onSelectEntry, selectedEntryId }) {
  const [phase, setPhase] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    let frameId = 0;

    const loop = (time) => {
      setPhase(time * 0.00018);
      frameId = window.requestAnimationFrame(loop);
    };

    frameId = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const focusEntry = useMemo(() => {
    return portfolioEntries.find((entry) => entry.id === selectedEntryId) ?? portfolioEntries[0];
  }, [selectedEntryId]);

  const stars = useMemo(() => {
    const focusIndex = portfolioEntries.findIndex((entry) => entry.id === focusEntry.id);
    return portfolioEntries.map((entry, index) => {
      const angle = phase * entry.orbitSpeed + index * 0.9;
      const radius = entry.orbitRadius * 0.9;
      const baseX = Math.cos(angle) * radius;
      const baseY = Math.sin(angle * 0.75 + index * 0.3) * (radius * 0.55);

      const focusAngle = focusIndex >= 0 ? phase * entry.orbitSpeed + focusIndex * 0.9 : 0;
      const focusOffsetX = Math.cos(focusAngle) * (focusIndex >= 0 ? 1.6 : 0);
      const focusOffsetY = Math.sin(focusAngle * 0.82) * (focusIndex >= 0 ? 1.1 : 0);
      const isSelected = entry.id === focusEntry.id;

      return {
        ...entry,
        x: baseX - focusOffsetX * 0.6 + (isSelected ? 0 : -focusOffsetX * 0.2),
        y: baseY - focusOffsetY * 0.6 + (isSelected ? 0 : -focusOffsetY * 0.2),
        angle,
        scale: isSelected ? 1.18 : 0.9 + Math.sin(phase * 3 + index) * 0.06,
        glow: 0.7 + Math.sin(phase * 3 + index * 0.8) * 0.2
      };
    });
  }, [focusEntry.id, phase]);

  const nebulaLayers = useMemo(() => [
    { left: '8%', top: '12%', size: '38%', color: 'rgba(47, 101, 255, 0.16)' },
    { left: '68%', top: '16%', size: '28%', color: 'rgba(46, 196, 182, 0.14)' },
    { left: '32%', top: '70%', size: '26%', color: 'rgba(158, 82, 255, 0.16)' }
  ], []);

  const shootingStars = useMemo(() => [
    { left: '12%', top: '16%', width: '36%', delay: 0.2 },
    { left: '64%', top: '28%', width: '28%', delay: 0.8 },
    { left: '28%', top: '74%', width: '22%', delay: 1.3 }
  ], []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(11, 17, 40, 0.2) 0%, rgba(2, 6, 18, 0.84) 52%, rgba(2, 6, 18, 1) 100%)' }} />
      {nebulaLayers.map((layer, index) => (
        <div
          key={layer.left + index}
          style={{
            position: 'absolute',
            left: layer.left,
            top: layer.top,
            width: layer.size,
            height: layer.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${layer.color} 0%, rgba(255,255,255,0) 72%)`,
            filter: 'blur(22px)',
            transform: `translate3d(0, ${Math.sin(phase * 2 + index) * 6}px, 0)`
          }}
        />
      ))}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.26) 0 1px, transparent 1px), radial-gradient(circle, rgba(123, 170, 255, 0.18) 0 2px, transparent 2px)', backgroundSize: '140px 140px, 260px 260px', backgroundPosition: '0 0, 50px 60px', opacity: 0.7 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(80, 185, 255, 0.08) 0%, transparent 40%)' }} />
      {shootingStars.map((star, index) => (
        <div
          key={star.left + index}
          style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: star.width,
            height: 1,
            opacity: 0.35 + Math.sin(phase * 1.6 + index) * 0.12,
            background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.8), rgba(255,255,255,0))',
            transform: `rotate(-18deg) translate3d(${Math.sin(phase * 1.2 + index) * 10}px, ${Math.cos(phase * 1.2 + index) * 6}px, 0)`
          }}
        />
      ))}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25 }}>
        {stars.map((entry) => (
          <line
            key={`route-${entry.id}`}
            x1="50"
            y1="50"
            x2={50 + entry.x * 0.9}
            y2={50 + entry.y * 0.9}
            stroke={entry.color}
            strokeWidth="0.2"
            strokeDasharray="0.4 0.4"
            opacity="0.6"
          />
        ))}
      </svg>
      <div style={{ position: 'absolute', left: '50%', top: '50%', width: 180, height: 180, transform: 'translate(-50%, -50%)', borderRadius: '50%', border: '1px solid rgba(125, 217, 255, 0.25)', boxShadow: '0 0 42px rgba(66, 200, 255, 0.16), inset 0 0 60px rgba(65, 211, 255, 0.08)', background: 'radial-gradient(circle, rgba(41, 152, 255, 0.2), rgba(6, 12, 28, 0.06) 65%, transparent 100%)' }} />

      {stars.map((entry) => {
        const isActive = hoveredId === entry.id || entry.id === focusEntry.id;
        return (
          <button
            key={entry.id}
            type="button"
            onClick={() => onSelectEntry(entry.id)}
            onMouseEnter={() => setHoveredId(entry.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: 'absolute',
              left: `calc(50% + ${entry.x}vw)`,
              top: `calc(50% + ${entry.y}vh)`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
              border: 'none',
              background: 'transparent',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              color: '#eafaff'
            }}
          >
            <div style={{ width: isActive ? 22 : 16, height: isActive ? 22 : 16, borderRadius: '50%', background: entry.color, boxShadow: `0 0 ${isActive ? 28 : 18}px ${entry.accent}`, border: `1px solid ${entry.accent}`, transform: `scale(${entry.scale})`, transition: 'transform 0.24s ease, box-shadow 0.24s ease, width 0.24s ease, height 0.24s ease' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: isActive ? 1 : 0.82, color: isActive ? '#ffffff' : '#a9e3ff', textShadow: '0 0 10px rgba(255,255,255,0.18)' }}>{entry.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default CareerGalaxy;
