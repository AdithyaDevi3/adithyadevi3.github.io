import { createElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motionSpring, sequenceDelay } from '../motion';

const MotionAnchor = motion.a;
const MotionNav = motion.nav;

const socialLinks = [
  { href: 'https://github.com/AdithyaDevi3', icon: FaGithub, label: 'GitHub', target: '_blank' },
  { href: 'https://www.linkedin.com/in/adithya-devi', icon: FaLinkedin, label: 'LinkedIn', target: '_blank' },
  { href: 'mailto:adithya.r.devi02@gmail.com', icon: FaEnvelope, label: 'Email', target: undefined },
];

function SocialLinks() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionNav className="social-dock" aria-label="Social links">
      {socialLinks.map(({ href, icon, label, target }, index) => (
        <MotionAnchor
          key={label}
          href={href}
          target={target}
          aria-label={label}
          rel={target ? 'noopener noreferrer' : undefined}
          className="social-dock-link"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={reduceMotion ? undefined : { y: -5, rotate: index === 1 ? 0 : index === 0 ? -2 : 2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.9 }}
          transition={{ ...motionSpring, delay: reduceMotion ? 0 : sequenceDelay(index, 0.07, 0.42) }}
        >
          {createElement(icon, { size: 26 })}
          <span>{label}</span>
        </MotionAnchor>
      ))}
    </MotionNav>
  );
}

export default SocialLinks;
