// ─── Design Tokens ───────────────────────────────────────────────────────────
// Warm, clean, human-friendly. Reads crisp on dark backgrounds without neon glare.

export const colors = {
  // Warm off-white palette (replaces neon cyan)
  accent:            '#d7a85f',
  accentDim:         'rgba(215,168,95,0.56)',
  accentBorder:      'rgba(215,168,95,0.16)',
  accentBorderHover: 'rgba(215,168,95,0.34)',
  accentBg:          'rgba(215,168,95,0.08)',
  accentBgHover:     'rgba(215,168,95,0.13)',

  // Text
  textPrimary:   '#e8e3db',
  textSecondary: 'rgba(210,205,196,0.82)',
  textMuted:     'rgba(162,156,146,0.72)',
  textLabel:     'rgba(188,182,172,0.78)',

  // Backgrounds
  bgBase:        '#08111f',
  bgCard:        'rgba(19,26,34,0.72)',
  bgOverlay:     'rgba(9,14,23,0.76)',
  bgSocial:      'rgba(21,28,36,0.66)',
  bgSocialHover: 'rgba(42,39,35,0.84)',

  // Cards / borders
  cardBorder:     'rgba(255,255,255,0.09)',
  cardBorderLeft: 'rgba(255,255,255,0.14)',
  techBg:         'rgba(255,255,255,0.05)',
  techText:       'rgba(222,217,208,0.88)',
  projectText:    'rgba(188,182,172,0.8)',
};

// ─── Typography ──────────────────────────────────────────────────────────────

const SANS = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export const font = {
  sans:      SANS,
  mono:      SANS,   // keep 'mono' key for compatibility — now maps to sans
  sansSerif: SANS,

  // Sizes
  xs:   11,
  sm:   12,
  base: 13,
  md:   14,
  lg:   18,
  xl:   20,
  h1:   36,

  // Weights
  normal:   400,
  medium:   500,
  semibold: 600,
  bold:     700,
};

// ─── Shared Button Style ─────────────────────────────────────────────────────

export const btn = {
  base: {
    padding: '8px 18px',
    borderRadius: 8,
    fontFamily: SANS,
    fontWeight: 400,
    fontSize: 13,
    letterSpacing: '0.01em',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    backdropFilter: 'blur(14px)',
    border: '1px solid rgba(255,255,255,0.09)',
    background: 'rgba(8,6,18,0.55)',
    color: 'rgba(188,182,172,0.68)',
  },
  active: {
    color: '#e8e3db',
    border: '1px solid rgba(232,227,219,0.22)',
    background: 'rgba(255,255,255,0.08)',
    fontWeight: 500,
  },
  inactive: {
    color: 'rgba(188,182,172,0.68)',
    border: '1px solid rgba(255,255,255,0.09)',
    background: 'rgba(8,6,18,0.55)',
    fontWeight: 400,
  },
  hoverEnter: (el) => {
    el.style.color = 'rgba(228,224,216,0.9)';
    el.style.borderColor = 'rgba(255,255,255,0.18)';
    el.style.background = 'rgba(255,255,255,0.06)';
  },
  hoverLeave: (el) => {
    el.style.color = 'rgba(188,182,172,0.68)';
    el.style.borderColor = 'rgba(255,255,255,0.09)';
    el.style.background = 'rgba(8,6,18,0.55)';
  },
};

// ─── Layout ──────────────────────────────────────────────────────────────────

export const layout = {
  zNav:     50,
  zOverlay: 60,
  zCanvas:  0,
};
