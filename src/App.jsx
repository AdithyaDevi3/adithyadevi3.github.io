
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { colors } from "./theme";
import { motionEase } from './motion';

const MotionDiv = motion.div;

export default function App() {
  const [route, setRoute] = useState('home');
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="app-shell"
      data-font-theme="inter"
      style={{ position: 'relative', width: '100%', minHeight: '100vh', background: colors.bgBase }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <MotionDiv
          key={route}
          className={`page-stage page-stage--${route}`}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.012, filter: 'blur(6px)' }}
          transition={{ duration: reduceMotion ? 0.12 : 0.48, ease: motionEase }}
        >
          {route === 'home' ? <HomePage /> : <AboutPage />}
        </MotionDiv>
      </AnimatePresence>

      {route === 'home' && <Header />}
      <Navigation route={route} setRoute={setRoute} />
      <SocialLinks />
    </div>
  );
}
