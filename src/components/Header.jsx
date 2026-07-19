import { colors, font, layout } from '../theme';

function Header() {
  return (
    <header style={{ position: 'fixed', top: 18, left: 20, zIndex: layout.zNav }}>
      <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8, fontSize: font.xl, color: colors.textPrimary, fontWeight: font.semibold, fontFamily: font.sans, letterSpacing: '-0.01em' }}>
        <span className="header-wave" aria-hidden="true">👋</span>
        Adithya Devi
      </h1>
    </header>
  );
}

export default Header;
