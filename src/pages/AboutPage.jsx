import { useMemo } from 'react';
import { galaxyObjects } from '../data/galaxyData';
import { colors, font } from '../theme';
import ncrLogo from './assets/public/ncr-voyix-logo.png';
import novaeLogo from './assets/public/novae-logo.png';
import adobeLogo from './assets/public/adobe-logo.png';
import curoLogo from './assets/public/curo-logo.png';

const companyLogos = {
  ncr: ncrLogo,
  novae: novaeLogo,
  adobe: adobeLogo,
  research: curoLogo,
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
    <div key={obj.id} style={{ border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 16, background: colors.bgCard }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: obj.color, boxShadow: `0 0 8px ${obj.color}`, flexShrink: 0, marginTop: 4 }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            {companyLogos[obj.id] && (
              <img src={companyLogos[obj.id]} alt={obj.name} style={{ height: 28, width: 'auto', maxWidth: 80, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            )}
            <h3 style={{ margin: 0, color: colors.textPrimary, fontSize: font.lg, fontWeight: font.semibold }}>{obj.name}</h3>
          </div>
          {obj.title && <p style={{ margin: '0 0 4px', color: colors.textLabel, fontSize: font.sm, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{obj.title}</p>}
          {obj.period && <p style={{ margin: 0, color: colors.textMuted, fontSize: font.xs }}>{obj.period}</p>}
        </div>
      </div>

      {obj.summary && <p style={{ margin: '0 0 12px', color: colors.textSecondary, fontSize: font.base, lineHeight: 1.5 }}>{obj.summary}</p>}

      {obj.technologies && obj.technologies.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <p style={{ margin: '0 0 6px', color: colors.textLabel, fontSize: font.xs, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {obj.technologies.map((tech) => (
              <span key={tech} style={{ padding: '4px 8px', borderRadius: 6, background: colors.techBg, color: colors.techText, fontSize: font.xs }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {obj.projects && obj.projects.length > 0 && (
        <div>
          <p style={{ margin: '0 0 6px', color: colors.textLabel, fontSize: font.xs, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Projects</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {obj.projects.map((project) => (
              <div key={project.name} style={{ paddingLeft: 8, borderLeft: `2px solid ${colors.cardBorderLeft}` }}>
                <p style={{ margin: 0, color: colors.textPrimary, fontWeight: font.medium, fontSize: font.sm }}>{project.name}</p>
                <p style={{ margin: '2px 0 0', color: colors.projectText, fontSize: font.xs }}>{project.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const sectionHeading = { margin: '0 0 16px', fontSize: font.xl, color: colors.accent, fontWeight: font.semibold, letterSpacing: '0.02em', fontFamily: font.sans };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '80px 20px 80px', background: colors.bgBase }}>
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ margin: 0, color: colors.textMuted, letterSpacing: '0.12em', fontSize: font.sm, textTransform: 'uppercase', fontFamily: font.sans }}>Galaxy Atlas</p>
          <h1 style={{ margin: '8px 0 12px', fontSize: font.h1, color: colors.textPrimary, fontWeight: font.bold, fontFamily: font.sans, letterSpacing: '-0.01em' }}>Explore the Universe</h1>
          <p style={{ margin: 0, color: colors.textSecondary, fontSize: font.md, lineHeight: 1.6, fontFamily: font.sans }}>A comprehensive directory of all celestial objects orbiting throughout the galaxy.</p>
        </div>

        {objectsByType.career.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={sectionHeading}>Career Experiences</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.career.map(renderObjectCard)}
            </div>
          </div>
        )}

        {objectsByType.core.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={sectionHeading}>Core Systems</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.core.map(renderObjectCard)}
            </div>
          </div>
        )}

        {objectsByType.planet.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={sectionHeading}>Planets</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.planet.map(renderObjectCard)}
            </div>
          </div>
        )}

        {objectsByType.star.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={sectionHeading}>Stars</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.star.map(renderObjectCard)}
            </div>
          </div>
        )}

        {objectsByType.moon.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={sectionHeading}>Moons</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.moon.map(renderObjectCard)}
            </div>
          </div>
        )}

        {objectsByType.nebula.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={sectionHeading}>Nebulae</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {objectsByType.nebula.map(renderObjectCard)}
            </div>
          </div>
        )}

        {objectsByType.comet.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={sectionHeading}>Comets</h2>
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