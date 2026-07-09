import { useState } from 'react';
import { initialPortfolioEntries } from '../data/portfolioData';

function AboutPage() {
  const [portfolioEntries] = useState(initialPortfolioEntries);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '28px 20px 90px' }}>
      <div style={{ width: '100%', maxWidth: '1100px', background: 'rgba(2, 8, 20, 0.74)', backdropFilter: 'blur(10px)', borderRadius: 24, padding: '28px 28px 34px', border: '1px solid rgba(113, 216, 255, 0.16)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.24)' }}>
        <div style={{ marginBottom: 24 }}>
          <p style={{ margin: 0, color: '#70d8ff', textTransform: 'uppercase', letterSpacing: '0.22em', fontSize: 12 }}>About</p>
          <h2 style={{ margin: '6px 0 10px', fontSize: 32, color: '#f3fcff', fontWeight: 700 }}>A professional portfolio foundation.</h2>
          <p style={{ margin: 0, color: '#a9dfff', fontSize: 16, lineHeight: 1.7 }}>This page remains a clean, readable record of experience and projects. The cinematic universe lives on the home experience, while this page serves as the structured portfolio source for future list-mode enhancements.</p>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          {portfolioEntries.map((entry) => (
            <div key={entry.id} style={{ border: '1px solid rgba(113, 216, 255, 0.16)', borderRadius: 18, padding: 18, background: 'rgba(4, 12, 24, 0.74)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ margin: 0, color: '#70d8ff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{entry.period}</p>
                  <h3 style={{ margin: '4px 0 6px', color: '#f3fcff', fontSize: 22 }}>{entry.name}</h3>
                  <p style={{ margin: 0, color: '#a9dfff', fontSize: 15, lineHeight: 1.6 }}>{entry.summary}</p>
                </div>
                <div style={{ minWidth: 180 }}>
                  <p style={{ margin: '0 0 6px', color: '#70d8ff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Stack</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {entry.technologies.map((tech) => (
                      <span key={tech} style={{ padding: '6px 10px', borderRadius: 999, background: 'rgba(113, 216, 255, 0.12)', color: '#e3f9ff', fontSize: 12 }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 14 }}>
                <p style={{ margin: '0 0 8px', color: '#70d8ff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Highlights</p>
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
      </div>
    </div>
  );
}

export default AboutPage;