import { useMemo } from 'react';
import { galaxyObjects } from '../data/galaxyData';

const companyLogos = {
  ncr: '/assets/public/ncr-voyix-logo.png',
  novae: '/assets/public/novae-logo.png',
  adobe: '/assets/public/adobe-logo.png',
  research: '/assets/public/curo-logo.png',
};

function AboutPage() {
  // Separate objects by type
  const objectsByType = useMemo(() => {
    return {
      career: galaxyObjects.filter((obj) => obj.type === 'career'),
      core: galaxyObjects.filter((obj) => obj.type === 'core'),
      star: galaxyObjects.filter((obj) => obj.type === 'star'),
      planet: galaxyObjects.filter((obj) => obj.type === 'planet'),
      moon: galaxyObjects.filter((obj) => obj.type === 'moon'),
      nebula: galaxyObjects.filter((obj) => obj.type === 'nebula'),
      comet: galaxyObjects.filter((obj) => obj.type === 'comet')
    };
  }, []);

  const renderObjectCard = (obj) => (
    <div key={obj.id} style={{ border: '1px solid rgba(113, 216, 255, 0.16)', borderRadius: 12, padding: 16, background: 'rgba(4, 12, 24, 0.6)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: obj.color, boxShadow: `0 0 8px ${obj.color}`, flexShrink: 0, marginTop: 4 }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            {companyLogos[obj.id] && (
              <img
                src={companyLogos[obj.id]}
                alt={obj.name}
                style={{ height: 28, width: 'auto', maxWidth: 80, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.85 }}
              />
            )}
            <h3 style={{ margin: 0, color: '#f3fcff', fontSize: 18, fontWeight: 600 }}>{obj.name}</h3>
          </div>
          {obj.title && <p style={{ margin: '0 0 4px', color: '#70d8ff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{obj.title}</p>}
          {obj.period && <p style={{ margin: 0, color: '#7a9fc9', fontSize: 11 }}>{obj.period}</p>}
        </div>
      </div>

      {obj.summary && <p style={{ margin: '0 0 12px', color: '#a9dfff', fontSize: 13, lineHeight: 1.5 }}>{obj.summary}</p>}

      {obj.technologies && obj.technologies.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <p style={{ margin: '0 0 6px', color: '#70d8ff', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {obj.technologies.map((tech) => (
              <span key={tech} style={{ padding: '4px 8px', borderRadius: 6, background: 'rgba(113, 216, 255, 0.08)', color: '#e3f9ff', fontSize: 11 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {obj.projects && obj.projects.length > 0 && (
        <div>
          <p style={{ margin: '0 0 6px', color: '#70d8ff', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Projects</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {obj.projects.map((project) => (
              <div key={project.name} style={{ paddingLeft: 8, borderLeft: '2px solid rgba(113, 216, 255, 0.2)' }}>
                <p style={{ margin: 0, color: '#f3fcff', fontWeight: 500, fontSize: 12 }}>{project.name}</p>
                <p style={{ margin: '2px 0 0', color: '#9ed9ff', fontSize: 11 }}>{project.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '28px 20px 60px' }}>
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ margin: 0, color: '#70d8ff', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 12 }}>Galaxy Atlas</p>
          <h1 style={{ margin: '8px 0 12px', fontSize: 36, color: '#f3fcff', fontWeight: 700 }}>Explore the Universe</h1>
          <p style={{ margin: 0, color: '#a9dfff', fontSize: 14, lineHeight: 1.6 }}>A comprehensive directory of all celestial objects orbiting throughout the galaxy. Interact with any object on the home page to explore details.</p>
        </div>

        {/* Career Objects */}
        {objectsByType.career.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 20, color: '#66e8ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              🌟 Career Experiences
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.career.map(renderObjectCard)}
            </div>
          </div>
        )}

        {/* Core Objects */}
        {objectsByType.core.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 20, color: '#66e8ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              💎 Core Systems
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.core.map(renderObjectCard)}
            </div>
          </div>
        )}

        {/* Planets */}
        {objectsByType.planet.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 20, color: '#66e8ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              🪐 Planets
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.planet.map(renderObjectCard)}
            </div>
          </div>
        )}

        {/* Stars */}
        {objectsByType.star.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 20, color: '#66e8ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              ⭐ Stars
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.star.map(renderObjectCard)}
            </div>
          </div>
        )}

        {/* Moons */}
        {objectsByType.moon.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 20, color: '#66e8ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              🌙 Moons
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.moon.map(renderObjectCard)}
            </div>
          </div>
        )}

        {/* Nebulae */}
        {objectsByType.nebula.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 20, color: '#66e8ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              🌌 Nebulae
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.nebula.map(renderObjectCard)}
            </div>
          </div>
        )}

        {/* Comets */}
        {objectsByType.comet.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 20, color: '#66e8ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              ☄️ Comets
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.comet.map(renderObjectCard)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutPage;