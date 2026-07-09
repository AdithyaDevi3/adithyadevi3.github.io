import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { colors, layout } from '../theme';

const linkStyle = {
  color: '#ffffff',
  padding: '8px 12px',
  borderRadius: 10,
  background: colors.bgSocial,
  border: `1px solid ${colors.accentBorder}`,
  transition: 'all 0.2s',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const socialLinks = [
  { href: 'https://github.com/AdithyaDevi3', icon: FaGithub, label: 'GitHub', target: '_blank' },
  { href: 'https://www.linkedin.com/in/adithya-devi', icon: FaLinkedin, label: 'LinkedIn', target: '_blank' },
  { href: 'mailto:adithya.r.devi02@gmail.com', icon: FaEnvelope, label: 'Email', target: undefined },
];

function SocialLinks() {
  return (
    <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: layout.zOverlay, display: 'flex', gap: 12, pointerEvents: 'auto' }}>
      {socialLinks.map(({ href, icon: Icon, label, target }) => (
        <a
          key={label}
          href={href}
          target={target}
          rel={target ? 'noopener noreferrer' : undefined}
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.background = colors.bgSocialHover}
          onMouseLeave={(e) => e.currentTarget.style.background = colors.bgSocial}
        >
          <Icon size={26} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;