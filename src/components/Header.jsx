import { motion, useReducedMotion } from 'framer-motion';
import { font, layout } from '../theme';
import { motionEase } from '../motion';

const MotionHeader = motion.header;
const MotionSpan = motion.span;

function Header() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionHeader
      className="site-intro"
      style={{ position: 'fixed', top: 18, left: 20, zIndex: layout.zNav }}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.58, delay: reduceMotion ? 0 : 0.18, ease: motionEase }}
    >
      <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8, fontSize: font.xl, color: '#e8e3db', fontWeight: font.semibold, fontFamily: font.sans, letterSpacing: '-0.01em', textShadow: '0 1px 10px rgba(2,6,17,0.42)' }}>
        <MotionSpan
          className="header-wave"
          aria-hidden="true"
          whileHover={reduceMotion ? undefined : { rotate: [0, 18, -10, 12, 0], transition: { duration: 0.7 } }}
        >
          👋
        </MotionSpan>
        <span>Hi, I'm Adi</span>
      </h1>
      <span className="site-intro-meta">Interactive portfolio · 2026</span>
    </MotionHeader>
  );
}

export default Header;
