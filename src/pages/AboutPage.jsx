import { landingCampaignBranches } from '../data/landingCampaignData';

const pageStyle = {
  minHeight: '100vh',
  background: '#08111f',
  color: '#e8e3db',
  padding: '104px 24px 96px',
  boxSizing: 'border-box',
  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
};

const wrapStyle = {
  width: '100%',
  maxWidth: 880,
  margin: '0 auto'
};

const sectionStyle = {
  borderTop: '1px solid rgba(255,255,255,0.1)',
  paddingTop: 24,
  marginTop: 32
};

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '96px minmax(0, 1fr)',
  gap: 20,
  padding: '22px 0',
  borderBottom: '1px solid rgba(255,255,255,0.08)'
};

function FallbackMark({ name }) {
  return (
    <div style={{
      width: 64,
      height: 64,
      display: 'grid',
      placeItems: 'center',
      border: '1px solid rgba(255,255,255,0.14)',
      color: 'rgba(232,227,219,0.82)',
      fontSize: 16,
      fontWeight: 700,
      background: 'rgba(255,255,255,0.05)'
    }}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

function AboutPage() {
  return (
    <main style={pageStyle}>
      <div style={wrapStyle}>
        <header style={{ marginBottom: 42 }}>
          <p style={{ margin: '0 0 8px', fontSize: 13, color: 'rgba(232,227,219,0.55)' }}>Portfolio overview</p>
          <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.15, fontWeight: 700, color: '#e8e3db' }}>
            About
          </h1>
          <p style={{ maxWidth: 640, margin: '14px 0 0', color: 'rgba(232,227,219,0.72)', lineHeight: 1.65, fontSize: 15 }}>
            A plain list of experience, education, and projects. Each entry includes the role, timing, summary, and core skills.
          </p>
        </header>

        {landingCampaignBranches.map((branch) => (
          <section key={branch.id} style={{ ...sectionStyle, borderTopColor: `${branch.color}88` }}>
            <h2 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 700, color: branch.color }}>{branch.label}</h2>
            <div>
              {branch.nodes.map((item) => (
                <article key={item.id} style={rowStyle}>
                  <div>
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.name}
                        style={{ width: 64, height: 64, objectFit: 'contain', filter: 'none', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 8, padding: 8, boxSizing: 'border-box', background: '#ffffff' }}
                      />
                    ) : (
                      <FallbackMark name={item.name} />
                    )}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.25, color: '#e8e3db' }}>{item.name}</h3>
                    <p style={{ margin: '4px 0 0', color: 'rgba(232,227,219,0.78)', fontSize: 14 }}>{item.title}</p>
                    <p style={{ margin: '4px 0 12px', color: 'rgba(232,227,219,0.48)', fontSize: 13 }}>{item.period}</p>
                    <p style={{ margin: '0 0 12px', color: 'rgba(232,227,219,0.72)', lineHeight: 1.6, fontSize: 14 }}>{item.summary}</p>
                    {item.skills?.length > 0 && (
                      <p style={{ margin: 0, color: 'rgba(232,227,219,0.58)', fontSize: 13, lineHeight: 1.5 }}>
                        Skills: {item.skills.join(', ')}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default AboutPage;
