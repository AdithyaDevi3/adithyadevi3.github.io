import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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

  if (!item) return null;

  return (
    <AnimatePresence>
      <MotionDiv
        className="campaign-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <MotionDiv
          className="campaign-modal-shell"
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button type="button" className="campaign-modal-close" onClick={onClose} aria-label="Close details">
            x
          </button>

          <button
            type="button"
            className="campaign-flip-card"
            onClick={() => setFlipped((next) => !next)}
            aria-label={`Flip card for ${item.name}`}
            style={{ '--node-color': item.color }}
          >
            <MotionSpan
              className="campaign-flip-card-inner"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="campaign-card-face campaign-card-face--front">
                <span className="campaign-card-logo">
                  <LogoMark item={item} />
                </span>
                <span className="campaign-card-kicker">{item.branchLabel || item.category}</span>
                <strong>{item.name}</strong>
                <span>{item.title}</span>
                <small>{item.period}</small>
                <em>Press to flip</em>
              </span>

              <span className="campaign-card-face campaign-card-face--back">
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
              </span>
            </MotionSpan>
          </button>
        </MotionDiv>
      </MotionDiv>
    </AnimatePresence>
  );
}