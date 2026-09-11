import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { motionDuration, motionEase, motionSpring, motionSpringSoft } from '../motion';

const MotionAnchor = motion.a;
const MotionButton = motion.button;
const MotionDiv = motion.div;
const MotionSpan = motion.span;

function LogoMark({ item }) {
  if (item.logo) {
    return <img src={item.logo} alt="" />;
  }

  return <span>{item.name.slice(0, 2).toUpperCase()}</span>;
}

export default function CampaignCardModal({ item, onClose }) {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setFlipped(false);
  }, [item?.id]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {item && <MotionDiv
        key={item.id}
        className="campaign-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0.1 : motionDuration.base, ease: motionEase }}
        onClick={onClose}
      >
        <MotionDiv
          className="campaign-modal-shell"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 34, scale: 0.92, rotateX: -6 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
          transition={reduceMotion ? { duration: 0.1 } : motionSpring}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="campaign-modal-orbit" aria-hidden="true"><i /><i /></div>
          <MotionButton
            type="button"
            className="campaign-modal-close"
            onClick={onClose}
            aria-label="Close details"
            whileHover={reduceMotion ? undefined : { rotate: 90, scale: 1.08 }}
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
            transition={motionSpring}
          >
            x
          </MotionButton>

          <div className="campaign-card-stage" style={{ '--node-color': item.color }}>
            <MotionButton
              type="button"
              className="campaign-flip-card"
              onClick={() => setFlipped((next) => !next)}
              aria-expanded={flipped}
              aria-label={`${flipped ? 'Show overview' : 'Show details'} for ${item.name}`}
              whileHover={reduceMotion ? undefined : { scale: 1.012 }}
              whileTap={reduceMotion ? undefined : { scale: 0.992 }}
              transition={motionSpringSoft}
            >
              <MotionSpan
                className="campaign-flip-card-inner"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={reduceMotion ? { duration: 0.01 } : { ...motionSpring, stiffness: 175, damping: 22 }}
              >
                <span className="campaign-card-face campaign-card-face--front" aria-hidden={flipped}>
                  <MotionSpan
                    className="campaign-card-logo"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, 1.2, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <LogoMark item={item} />
                  </MotionSpan>
                  <span className="campaign-card-kicker">{item.branchLabel || item.category}</span>
                  <strong>{item.name}</strong>
                  <span>{item.title}</span>
                  <small>{item.period}</small>
                  <em>Press to reveal details</em>
                </span>

                <span className="campaign-card-face campaign-card-face--back" aria-hidden={!flipped}>
                  <span className="campaign-card-kicker">{item.period}</span>
                  <strong>{item.title}</strong>
                  <span className="campaign-card-summary">{item.summary}</span>
                  <span className="campaign-card-details">
                    {(item.details || []).map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </span>
                  <span className="campaign-card-skills">
                    {(item.skills || item.technologies || []).map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </span>
                  <em>Press to return</em>
                </span>
              </MotionSpan>
            </MotionButton>

            {(item.repoUrl || item.readmeUrl) && (
              <MotionDiv
                className="campaign-card-links"
                aria-hidden={!flipped}
                animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 8 }}
                transition={{ duration: reduceMotion ? 0.01 : motionDuration.fast, ease: motionEase }}
              >
                {item.repoUrl && (
                  <MotionAnchor href={item.repoUrl} target="_blank" rel="noreferrer" tabIndex={flipped ? 0 : -1} whileHover={reduceMotion ? undefined : { x: 3 }}>
                    View on GitHub
                  </MotionAnchor>
                )}
                {item.readmeUrl && (
                  <MotionAnchor href={item.readmeUrl} target="_blank" rel="noreferrer" tabIndex={flipped ? 0 : -1} whileHover={reduceMotion ? undefined : { x: 3 }}>
                    Open README
                  </MotionAnchor>
                )}
              </MotionDiv>
            )}
          </div>
        </MotionDiv>
      </MotionDiv>}
    </AnimatePresence>
  );
}
