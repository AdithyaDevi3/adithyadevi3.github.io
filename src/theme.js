// ─── Design Tokens ───────────────────────────────────────────────────────────
// Engineering software palette: light, precise, and restrained.

export const colors = {
  accent:            '#2563eb',
  accentDim:         'rgba(37,99,235,0.56)',
  accentBorder:      'rgba(37,99,235,0.16)',
  accentBorderHover: 'rgba(37,99,235,0.34)',
  accentBg:          'rgba(37,99,235,0.08)',
  accentBgHover:     'rgba(37,99,235,0.13)',

  // Text
  textPrimary:   '#111827',
  textSecondary: '#4b5563',
  textMuted:     '#64748b',
  textLabel:     '#475569',

  // Backgrounds
  bgBase:        '#08111f',
  bgCard:        'rgba(255,255,255,0.92)',
  bgOverlay:     'rgba(248,250,252,0.82)',
  bgSocial:      'rgba(255,255,255,0.92)',
  bgSocialHover: '#f3f4f6',

  // Cards / borders
  cardBorder:     '#e5e7eb',
  cardBorderLeft: '#d1d5db',
  techBg:         '#f3f4f6',
  techText:       '#1f2937',
  projectText:    '#4b5563',
};

// ─── Typography ──────────────────────────────────────────────────────────────

const SANS = "var(--font-heading)";
const BODY = "var(--font-body)";
const MONO = "var(--font-mono)";

export const font = {
  sans:      SANS,
  mono:      MONO,
  sansSerif: BODY,

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
    padding: '12px 20px',
    borderRadius: 7,
    fontFamily: SANS,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 1.25,
    letterSpacing: '0.01em',
    cursor: 'pointer',
    minWidth: 0,
    maxWidth: 'calc(100vw - 48px)',
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
    border: '1px solid var(--button-border)',
    background: 'var(--button-bg)',
    color: '#111827',
    boxShadow: 'var(--button-shadow)',
  },
  active: {
    color: '#ffffff',
    border: '1px solid var(--accent)',
    background: 'var(--accent)',
    fontWeight: 500,
  },
  inactive: {
    color: '#111827',
    border: '1px solid var(--button-border)',
    background: 'var(--button-bg)',
    fontWeight: 500,
  },
  hoverEnter: (el) => {
    el.style.color = '#111827';
    el.style.borderColor = 'var(--button-border-hover)';
    el.style.background = 'var(--button-bg-hover)';
    el.style.transform = 'translateY(-1px)';
    el.style.boxShadow = 'var(--button-shadow-hover)';
  },
  hoverLeave: (el) => {
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = 'var(--button-shadow)';
  },
};

// ─── Layout ──────────────────────────────────────────────────────────────────

export const layout = {
  zNav:     50,
  zOverlay: 60,
  zCanvas:  0,
};
