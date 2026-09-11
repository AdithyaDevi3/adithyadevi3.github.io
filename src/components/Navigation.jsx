import { motion, useReducedMotion } from 'framer-motion';
import { motionSpring } from '../motion';

const MotionButton = motion.button;
const MotionNav = motion.nav;

function Navigation({ route, setRoute }) {
  const reduceMotion = useReducedMotion();
  const navButtons = [
    { label: 'Home', route: 'home', active: route === 'home' },
    { label: 'About', route: 'about', active: route === 'about' }
  ];

  return (
    <MotionNav
      className="site-navigation"
      aria-label="Primary navigation"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...motionSpring, delay: reduceMotion ? 0 : 0.12 }}
    >
      <div className="site-navigation-track">
        {navButtons.map((item) => (
          <MotionButton
            key={item.route}
            type="button"
            className={`site-navigation-button ${item.active ? 'site-navigation-button--active' : ''}`}
            onClick={() => setRoute(item.route)}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            transition={motionSpring}
          >
            {item.active && (
              <motion.span
                className="site-navigation-active"
                layoutId="site-navigation-active"
                transition={motionSpring}
              />
            )}
            <span>{item.label}</span>
          </MotionButton>
        ))}
      </div>
    </MotionNav>
  );
}

export default Navigation;
