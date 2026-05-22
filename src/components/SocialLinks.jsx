import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div style={{position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 60, display: 'flex', gap: 12, pointerEvents: 'auto'}}>
      <a
        href="https://github.com/AdithyaDevi3"
        target="_blank"
        rel="noopener noreferrer"
        style={{color: '#ffffff', padding: '8px 12px', borderRadius: 10, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(102, 232, 255, 0.15)', transition: 'all 0.2s', cursor: 'pointer'}}
        onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.4)'}
      >
        <FaGithub size={26}/>
      </a>

      <a
        href="https://www.linkedin.com/in/adithya-devi"
        target="_blank"
        rel="noopener noreferrer"
        style={{color: '#ffffff', padding: '8px 12px', borderRadius: 10, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(102, 232, 255, 0.15)', transition: 'all 0.2s', cursor: 'pointer'}}
        onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.4)'}
      >
        <FaLinkedin size={26} />
      </a>

      <a
        href="mailto:adithya.r.devi02@gmail.com"
        style={{color: '#ffffff', padding: '8px 12px', borderRadius: 10, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(102, 232, 255, 0.15)', transition: 'all 0.2s', cursor: 'pointer'}}
        onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.4)'}
      >
        <FaEnvelope size={26}/>
      </a>
    </div>
  );
}

export default SocialLinks