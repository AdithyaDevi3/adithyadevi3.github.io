function Navigation({ route, setRoute }) {
  const navButtons = [
    { label: 'Home', route: 'home', active: route === 'home' },
    { label: 'About', route: 'about', active: route === 'about' }
  ];

  return (
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 50, pointerEvents: 'none' }}>
      <div style={{ pointerEvents: 'auto', display: 'flex', gap: 8 }}>
        {navButtons.map((btn) => (
          <button
            key={btn.route}
            onClick={() => setRoute(btn.route)}
            style={{
              padding: '8px 12px',
              borderRadius: 4,
              fontWeight: 600,
              color: btn.active ? '#66e8ff' : '#c11919ff',
              border: `1px solid ${btn.active ? 'rgba(102, 232, 255, 0.5)' : 'rgba(102, 232, 255, 0.15)'}`,
              background: btn.active ? 'rgba(102, 232, 255, 0.1)' : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: 12
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;