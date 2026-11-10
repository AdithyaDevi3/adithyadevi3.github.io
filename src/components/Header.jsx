import { motion, useReducedMotion } from 'framer-motion';
import { motionEase } from '../motion';

const MotionHeader = motion.header;

function Header() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionHeader
      className="site-intro"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.58, delay: reduceMotion ? 0 : 0.18, ease: motionEase }}
    >
      <h1>
        <span>Hi, I'm Adi</span>
        <span className="header-wave" aria-hidden="true">👋</span>
      </h1>
    </MotionHeader>
  );
}

export default Header;
