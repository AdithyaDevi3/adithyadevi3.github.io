import { useMemo, useState } from 'react';
import CrystalBackground from '../components/CrystalBackground';
import CareerGalaxy from '../components/CareerGalaxy';
import { careerHighlights, portfolioEntries } from '../data/portfolioData';

function AboutPage() {
  const [mode, setMode] = useState('animated');
  const [selectedEntryId, setSelectedEntryId] = useState(portfolioEntries[0].id);

  const selectedEntry = useMemo(() => portfolioEntries.find((entry) => entry.id === selectedEntryId) ?? portfolioEntries[0], [selectedEntryId]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', paddingTop: '20px', paddingBottom: '100px' }}>
      <CrystalBackground />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1180px', background: 'rgba(2,8,20,0.72)', backdropFilter: 'blur(10px)', borderRadius: 20, padding: '28px 28px 36px', border: '1px solid rgba(102, 232, 255, 0.16)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.28)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, gap: 12, flexWrap: 'wrap' }}>
          <div>
            <p style={{ margin: 0, color: '#70d8ff', textTransform: 'uppercase', letterSpacing: '0.22em', fontSize: 12 }}>Career Universe</p>
            <h2 style={{ margin: '4px 0 0', fontSize: 30, color: '#f3fcff', fontWeight: 700 }}>Experience & Projects</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setMode('animated')} style={{ padding: '8px 12px', borderRadius: 999, border: mode === 'animated' ? '1px solid #69e4ff' : '1px solid rgba(255,255,255,0.12)', background: mode === 'animated' ? 'rgba(105,228,255,0.16)' : 'rgba(255,255,255,0.05)', color: '#f3fcff', cursor: 'pointer' }}>Animated Mode</button>
            <button onClick={() => setMode('list')} style={{ padding: '8px 12px', borderRadius: 999, border: mode === 'list' ? '1px solid #69e4ff' : '1px solid rgba(255,255,255,0.12)', background: mode === 'list' ? 'rgba(105,228,255,0.16)' : 'rgba(255,255,255,0.05)', color: '#f3fcff', cursor: 'pointer' }}>List Mode</button>
          </div>
        </div>

        {mode === 'animated' ? (
          <div style={{ position: 'relative', minHeight: '560px', borderRadius: 18, overflow: 'hidden', background: 'linear-gradient(135deg, rgba(5, 10, 24, 0.92), rgba(12, 18, 38, 0.86))', border: '1px solid rgba(102, 232, 255, 0.14)' }}>
            <CareerGalaxy onSelectEntry={setSelectedEntryId} selectedEntryId={selectedEntryId} />
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '22px' }}>
              <div style={{ width: 'min(100%, 420px)', background: 'rgba(2, 8, 20, 0.72)', border: '1px solid rgba(102, 232, 255, 0.16)', borderRadius: 16, padding: 18, boxShadow: '0 14px 36px rgba(0,0,0,0.26)' }}>
                <p style={{ margin: '0 0 6px', color: '#70d8ff', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 11 }}>{selectedEntry.period}</p>
                <h3 style={{ margin: 0, color: '#f3fcff', fontSize: 22 }}>{selectedEntry.name}</h3>
                <p style={{ margin: '6px 0 10px', color: '#9ed9ff', fontSize: 15 }}>{selectedEntry.summary}</p>
                <p style={{ margin: '0 0 6px', color: '#70d8ff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Highlights</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {careerHighlights.map((item) => (
                    <span key={item} style={{ padding: '6px 10px', borderRadius: 999, background: 'rgba(113, 216, 255, 0.12)', color: '#e5f9ff', fontSize: 12 }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 18 }}>
            {portfolioEntries.map((entry) => (
              <div key={entry.id} style={{ border: '1px solid rgba(102, 232, 255, 0.16)', borderRadius: 16, padding: 18, background: 'rgba(3, 10, 24, 0.7)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div>
                    <p style={{ margin: 0, color: '#70d8ff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{entry.period}</p>
                    <h3 style={{ margin: '2px 0 6px', color: '#f3fcff', fontSize: 20 }}>{entry.name}</h3>
                    <p style={{ margin: 0, color: '#9ed9ff', fontSize: 15 }}>{entry.summary}</p>
                  </div>
                  <div style={{ minWidth: 180 }}>
                    <p style={{ margin: '0 0 6px', color: '#70d8ff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Tech</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {entry.technologies.map((tech) => (
                        <span key={tech} style={{ padding: '6px 10px', borderRadius: 999, background: 'rgba(113,216,255,0.12)', color: '#e5f9ff', fontSize: 12 }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <p style={{ margin: '0 0 8px', color: '#70d8ff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Projects</p>
                  <div style={{ display: 'grid', gap: 8 }}>
                    {entry.projects.map((project) => (
                      <div key={project.name} style={{ padding: '10px 12px', borderRadius: 12, background: 'rgba(255,255,255,0.04)' }}>
                        <p style={{ margin: 0, color: '#f3fcff', fontWeight: 600 }}>{project.name}</p>
                        <p style={{ margin: '4px 0 0', color: '#9ed9ff', fontSize: 14 }}>{project.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutPage;