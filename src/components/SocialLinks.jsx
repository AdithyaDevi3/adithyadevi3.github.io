import { createElement } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { layout } from '../theme';

const linkStyle = {
  color: 'var(--accent)',
  padding: '8px 12px',
  borderRadius: 8,
  background: 'var(--button-bg)',
  border: '1px solid var(--button-border)',
  transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
  boxShadow: 'var(--button-shadow)',
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
      {socialLinks.map(({ href, icon, label, target }) => (
        <a
          key={label}
          href={href}
          target={target}
          aria-label={label}
          rel={target ? 'noopener noreferrer' : undefined}
          style={linkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--button-bg-hover)';
            e.currentTarget.style.borderColor = 'var(--button-border-hover)';
            e.currentTarget.style.boxShadow = 'var(--button-shadow-hover)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--button-bg)';
            e.currentTarget.style.borderColor = 'var(--button-border)';
            e.currentTarget.style.boxShadow = 'var(--button-shadow)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {createElement(icon, { size: 26 })}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;