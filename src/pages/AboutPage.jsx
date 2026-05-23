import curoLogo from './assets/public/curo-logo.png'
import novaeLogo from './assets/public/novae-logo.png'
import ncrLogo from './assets/public/ncr-voyix-logo.png'
import adobeLogo from './assets/public/adobe-logo.png'
import resume from './assets/public/Adithya_Devi_Resume.pdf'
// Page: About
function AboutPage() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', paddingTop: '20px', paddingBottom: '100px'}}>
      <div style={{maxWidth: '900px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', borderRadius: 16, padding: '40px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32}}>
          <h2 style={{fontSize: 40, fontWeight: 700, color: '#ffffff', margin: 0}}>About</h2>
          <a 
            href={resume} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '10px 16px',
              background: 'rgba(7, 13, 14, 0.2)',
              color: '#e6fbff',
              // border: '1px solid rgba(102, 232, 255, 0.4)',
              borderRadius: 4,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.target.style.background = 'rgba(102, 232, 255, 0.3)'; e.target.style.borderColor = 'rgba(102, 232, 255, 0.7)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'rgba(0, 2, 2, 0.2)'; e.target.style.borderColor = 'rgba(0, 0, 0, 0.4)'; }}
          >
            CV / Resume
          </a>
        </div>

        {/* Experience Section */}
        <div style={{marginBottom: 40}}>
          <h3 style={{fontSize: 24, fontWeight: 700, color: '#e6fbff', marginBottom: 20, marginTop: 20}}>Experience</h3>
          
          {/* Adobe */}
          
          <div style={{marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid rgba(102, 232, 255, 0.1)', display: 'flex', gap: 16, alignItems: 'flex-start'}}>
            <img src={adobeLogo} alt="Adobe" style={{width: 150, height: 80, objectFit: 'contain', minWidth: 150}} />
            <div style={{flex: 1}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4}}>
                <h4 style={{fontSize: 18, fontWeight: 600, color: '#ffffff', margin: 0}}>Developer Platforms Intern</h4>
                <span style={{fontSize: 14, color: '#9be8ff'}}>Summer 2026</span>
              </div>
              <p style={{ fontSize: 16, color: '#a8d8ff', margin: '4px 0 8px 0', fontWeight: 500 }}>Adobe</p>
              <p style={{fontSize: 14, color: '#9be8ff', margin: 0}}>Incoming</p>
            </div>
          </div>

          {/* NCR Voyix */}
          <div style={{marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid rgba(102, 232, 255, 0.1)', display: 'flex', gap: 16, alignItems: 'flex-start'}}>
            <img src={ncrLogo} alt="NCR Voyix" style={{ width: 150, height: 80, objectFit: 'contain', minWidth: 150 }} />
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
            <img src={novaeLogo} alt="Novae" style={{width: 150, height: 80, objectFit: 'contain', minWidth: 150}} />
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
          <h3 style={{ fontSize: 24, fontWeight: 700, color: '#e6fbff', marginBottom: 20, marginTop: 0 }}>Research</h3>
          <div style={{marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid rgba(102, 232, 255, 0.1)', display: 'flex', gap: 16, alignItems: 'flex-start'}}>
            <img src={curoLogo} alt="Curo" style={{ width: 200, height: 60, objectFit: 'contain', minWidth: 200 }} />
            <div style={{flex: 1}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4}}>
              <h4 style={{fontSize: 18, fontWeight: 600, color: '#ffffff', margin: 0}}>Undergraduate Research</h4>
              <span style={{fontSize: 14, color: '#9be8ff'}}>Aug 2024 – May 2025</span>
              </div>
              <p style={{fontSize: 16, color: '#a8d8ff', margin: '4px 0 8px 0', fontWeight: 500}}>Translational Glycomaterials and Neural Repair Lab</p>
            </div>
            
            
          </div> 
      </div>
      </div>
      </div>
  );
}

export default AboutPage 