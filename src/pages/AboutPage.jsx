
// Page: About
function AboutPage() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', paddingTop: '80px', paddingBottom: '100px'}}>
      <div style={{maxWidth: '900px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', borderRadius: 16, padding: '40px', border: '1px solid rgba(102, 232, 255, 0.2)'}}>
        
        {/* Header with Resume Link */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32}}>
          <h2 style={{fontSize: 40, fontWeight: 700, color: '#ffffff', margin: 0}}>About</h2>
          <a 
            href="public/Adithya_Devi_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '10px 16px',
              background: 'rgba(102, 232, 255, 0.2)',
              color: '#e6fbff',
              border: '1px solid rgba(102, 232, 255, 0.4)',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.target.style.background = 'rgba(102, 232, 255, 0.3)'; e.target.style.borderColor = 'rgba(102, 232, 255, 0.7)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'rgba(102, 232, 255, 0.2)'; e.target.style.borderColor = 'rgba(102, 232, 255, 0.4)'; }}
          >
            Resume
          </a>
        </div>

        {/* Experience Section */}
        <div style={{marginBottom: 40}}>
          <h3 style={{fontSize: 24, fontWeight: 700, color: '#e6fbff', marginBottom: 20, marginTop: 0}}>Experience</h3>
          
          {/* Adobe */}
          <div style={{marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid rgba(102, 232, 255, 0.1)', display: 'flex', gap: 16, alignItems: 'flex-start'}}>
            <img src="/adobe-logo.png" alt="Adobe" style={{width: 80, height: 80, objectFit: 'contain', minWidth: 80}} />
            <div style={{flex: 1}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4}}>
                <h4 style={{fontSize: 18, fontWeight: 600, color: '#ffffff', margin: 0}}>Developer Platforms Intern</h4>
                <span style={{fontSize: 14, color: '#9be8ff'}}>Summer 2026</span>
              </div>
              <p style={{fontSize: 16, color: '#a8d8ff', margin: '4px 0 0 0', fontWeight: 500}}>Adobe</p>
            </div>
          </div>

          {/* NCR Voyix */}
          <div style={{marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid rgba(102, 232, 255, 0.1)', display: 'flex', gap: 16, alignItems: 'flex-start'}}>
            <img src="/ncr-voyix-logo.png" alt="NCR Voyix" style={{width: 50, height: 50, objectFit: 'contain', minWidth: 50}} />
            <div style={{flex: 1}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4}}>
                <h4 style={{fontSize: 18, fontWeight: 600, color: '#ffffff', margin: 0}}>Mobile Development Intern</h4>
                <span style={{fontSize: 14, color: '#9be8ff'}}>Summer 2025</span>
              </div>
              <p style={{fontSize: 16, color: '#a8d8ff', margin: '4px 0 8px 0', fontWeight: 500}}>NCR Voyix</p>
              <p style={{fontSize: 14, color: '#9be8ff', margin: 0}}>React Native • Expo • GraphQL</p>
            </div>
          </div>

          {/* Novae */}
          <div style={{marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid rgba(102, 232, 255, 0.1)', display: 'flex', gap: 16, alignItems: 'flex-start'}}>
            <img src="/novae-logo.png" alt="Novae" style={{width: 50, height: 50, objectFit: 'contain', minWidth: 50}} />
            <div style={{flex: 1}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4}}>
                <h4 style={{fontSize: 18, fontWeight: 600, color: '#ffffff', margin: 0}}>Software Engineering Intern</h4>
                <span style={{fontSize: 14, color: '#9be8ff'}}>Summer 2024</span>
              </div>
              <p style={{fontSize: 16, color: '#a8d8ff', margin: '4px 0 8px 0', fontWeight: 500}}>Novae</p>
              <p style={{fontSize: 14, color: '#9be8ff', margin: 0}}>SpringBoot • Angular • Kafka • MongoDB</p>
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div>
          <h3 style={{fontSize: 24, fontWeight: 700, color: '#e6fbff', marginBottom: 20, marginTop: 0}}>Research</h3>
          
          <div style={{marginBottom: 24}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4}}>
              <h4 style={{fontSize: 18, fontWeight: 600, color: '#ffffff', margin: 0}}>Undergraduate Research</h4>
              <span style={{fontSize: 14, color: '#9be8ff'}}>Aug 2024 – May 2025</span>
            </div>
            <p style={{fontSize: 16, color: '#a8d8ff', margin: '4px 0 0 0', fontWeight: 500}}>Translational Glycomaterials and Neural Repair Lab</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage 