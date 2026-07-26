import { useState } from 'react';
import CareerGalaxy from '../components/CareerGalaxy';
import { initialPortfolioEntries, initialConnections } from '../data/portfolioData';
import { landingCampaignNodes } from '../data/landingCampaignData';

function PortfolioPage() {
  const [selectedEntryId, setSelectedEntryId] = useState('ncr');
  const selectedEntry = initialPortfolioEntries.find(entry => entry.id === selectedEntryId) || initialPortfolioEntries[0];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <CareerGalaxy 
        onSelectEntry={setSelectedEntryId}
        selectedEntryId={selectedEntryId}
        entries={initialPortfolioEntries}
        connections={initialConnections}
      />
      
      {/* Galaxy overlay: Career details panel */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: 32,
        maxWidth: 420,
        background: 'rgba(2, 6, 18, 0.85)',
        border: '1px solid rgba(102, 232, 255, 0.2)',
        borderRadius: 8,
        padding: 24,
        backdropFilter: 'blur(8px)',
        zIndex: 20,
        pointerEvents: 'auto',
        color: '#e0f2fe'
      }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: 18, fontWeight: 700, color: '#66e8ff' }}>
          🚀 {selectedEntry.name}
        </h3>
        <p style={{ margin: '0 0 4px 0', fontSize: 14, color: '#a8e6fc', fontWeight: 600 }}>
          💼 {selectedEntry.title}
        </p>
        <p style={{ margin: '0 0 16px 0', fontSize: 12, color: '#7bb8d9' }}>
          📅 {selectedEntry.period}
        </p>
        <p style={{ margin: '0 0 12px 0', fontSize: 13, lineHeight: 1.6, color: '#cbd5e1' }}>
          {selectedEntry.summary}
        </p>
        <div style={{ marginBottom: 12 }}>
          <p style={{ margin: '0 0 6px 0', fontSize: 11, fontWeight: 600, color: '#66e8ff', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            🛠️ Technologies
          </p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {selectedEntry.technologies.map(tech => (
              <span
                key={tech}
                style={{
                  fontSize: 11,
                  padding: '4px 8px',
                  background: 'rgba(102, 232, 255, 0.1)',
                  border: '1px solid rgba(102, 232, 255, 0.3)',
                  borderRadius: 4,
                  color: '#a0e7e5'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project highlights */}
        {selectedEntry.projects && selectedEntry.projects.length > 0 && (
          <div>
            <p style={{ margin: '0 0 6px 0', fontSize: 11, fontWeight: 600, color: '#66e8ff', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              ✨ Key Projects
            </p>
            {selectedEntry.projects.map(project => (
              <div key={project.name} style={{ marginBottom: 8, fontSize: 12, color: '#cbd5e1' }}>
                <span style={{ color: '#a0e7e5', fontWeight: 600 }}>{project.name}</span>
                <p style={{ margin: '2px 0 0 0', fontSize: 11, color: '#94a3b8' }}>
                  {project.summary}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* All projects (GitHub nodes) */}
        <div style={{ marginTop: 12 }}>
          <p style={{ margin: '0 0 6px 0', fontSize: 11, fontWeight: 600, color: '#66e8ff', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            🔗 All Projects
          </p>
          <div style={{ maxHeight: 220, overflowY: 'auto', marginTop: 6 }}>
            {landingCampaignNodes.filter(n => n.category === 'project').map((proj) => (
              <div key={proj.id} style={{ marginBottom: 8, fontSize: 12, color: '#cbd5e1' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ color: '#a0e7e5', fontWeight: 600 }}>{proj.name}</span>
                  <span style={{ color: '#94a3b8', fontSize: 11 }}>{proj.period}</span>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: 11, color: '#94a3b8' }}>{proj.summary}</p>
                <div style={{ marginTop: 6, display: 'flex', gap: 8 }}>
                  {proj.repoUrl && (
                    <a href={proj.repoUrl} target="_blank" rel="noreferrer" style={{ color: '#66e8ff', fontSize: 12 }}>Repository</a>
                  )}
                  {proj.readmeUrl && (
                    <a href={proj.readmeUrl} target="_blank" rel="noreferrer" style={{ color: '#66e8ff', fontSize: 12 }}>README</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Click hint */}
        <p style={{
          margin: '12px 0 0 0',
          fontSize: 11,
          color: '#64748b',
          fontStyle: 'italic'
        }}>
          💫 Click planets to explore different experiences
        </p>
      </div>
    </div>
  );
}

export default PortfolioPage;
