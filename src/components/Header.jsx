import { font, layout } from '../theme';

function Header() {
  return (
    <header style={{ position: 'fixed', top: 18, left: 20, zIndex: layout.zNav }}>
      <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8, fontSize: font.xl, color: '#e8e3db', fontWeight: font.semibold, fontFamily: font.sans, letterSpacing: '-0.01em', textShadow: '0 1px 10px rgba(2,6,17,0.42)' }}>
        <span className="header-wave" aria-hidden="true">👋</span>
        Hi, I'm Adi
      </h1>
    </header>
  );
}

export default Header;
