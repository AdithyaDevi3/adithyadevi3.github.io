import { motion, useReducedMotion } from 'framer-motion';
import { landingCampaignBranches } from '../data/landingCampaignData';
import { motionEase, motionSpringSoft, sequenceDelay } from '../motion';

const MotionArticle = motion.article;
const MotionDiv = motion.div;
const MotionMain = motion.main;
const MotionSection = motion.section;

const pageStyle = {
  minHeight: '100vh',
  background: '#08111f',
  color: '#e8e3db',
  padding: '104px 24px 96px',
  boxSizing: 'border-box',
  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
};

const wrapStyle = {
  width: '100%',
  maxWidth: 880,
  margin: '0 auto'
};

const sectionStyle = {
  borderTop: '1px solid rgba(255,255,255,0.1)',
  paddingTop: 24,
  marginTop: 32
};

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '112px minmax(0, 1fr)',
  gap: 20,
  padding: '22px 0',
  borderBottom: '1px solid rgba(255,255,255,0.08)'
};

function FallbackMark({ name }) {
  return (
    <div style={{
      width: 64,
      height: 64,
      display: 'grid',
      placeItems: 'center',
      border: '1px solid rgba(255,255,255,0.14)',
      color: 'rgba(232,227,219,0.82)',
      fontSize: 16,
      fontWeight: 700,
      background: 'rgba(255,255,255,0.05)'
    }}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionMain style={pageStyle} className="about-page">
      <MotionDiv
        style={wrapStyle}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.12 : 0.62, ease: motionEase }}
      >
        <motion.header
          style={{ marginBottom: 42 }}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } }
          }}
        >
          <p style={{ margin: '0 0 8px', fontSize: 13, color: 'rgba(232,227,219,0.55)' }}>Portfolio overview</p>
          <motion.h1
            style={{ margin: 0, fontSize: 34, lineHeight: 1.15, fontWeight: 700, color: '#e8e3db' }}
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: motionEase }}
          >
            About
          </motion.h1>
          <motion.p
            style={{ maxWidth: 640, margin: '14px 0 0', color: 'rgba(232,227,219,0.72)', lineHeight: 1.65, fontSize: 15 }}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: motionEase }}
          >
            A plain list of experience, education, and projects. Each entry includes the role, timing, summary, and core skills.
          </motion.p>
        </motion.header>

        {landingCampaignBranches.map((branch, branchIndex) => (
          <MotionSection
            key={branch.id}
            style={{ ...sectionStyle, borderTopColor: `${branch.color}88` }}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ ...motionSpringSoft, delay: reduceMotion ? 0 : sequenceDelay(branchIndex, 0.08) }}
          >
            <h2 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 700, color: branch.color }}>{branch.label}</h2>
            <div>
              {branch.nodes.map((item, itemIndex) => (
                <MotionArticle
                  key={item.id}
                  className="about-entry"
                  style={rowStyle}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={reduceMotion ? undefined : { x: 6 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ ...motionSpringSoft, delay: reduceMotion ? 0 : sequenceDelay(itemIndex, 0.035) }}
                >
                  <div>
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.name}
                        style={{ width: 80, height: 80, objectFit: 'contain', filter: 'none', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 10, padding: 10, boxSizing: 'border-box', background: '#ffffff' }}
                      />
                    ) : (
                      <FallbackMark name={item.name} />
                    )}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.25, color: '#e8e3db' }}>{item.name}</h3>
                    <p style={{ margin: '4px 0 0', color: 'rgba(232,227,219,0.78)', fontSize: 14 }}>{item.title}</p>
                    <p style={{ margin: '4px 0 12px', color: 'rgba(232,227,219,0.48)', fontSize: 13 }}>{item.period}</p>
                    <p style={{ margin: '0 0 12px', color: 'rgba(232,227,219,0.72)', lineHeight: 1.6, fontSize: 14 }}>{item.summary}</p>
                    {item.skills?.length > 0 && (
                      <p style={{ margin: 0, color: 'rgba(232,227,219,0.58)', fontSize: 13, lineHeight: 1.5 }}>
                        Skills: {item.skills.join(', ')}
                      </p>
                    )}
                  </div>
                </MotionArticle>
              ))}
            </div>
          </MotionSection>
        ))}
      </MotionDiv>
    </MotionMain>
  );
}

export default AboutPage;
