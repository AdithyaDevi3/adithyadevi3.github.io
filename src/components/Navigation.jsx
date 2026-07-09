import { btn as btnStyle } from '../theme';

function Navigation({ route, setRoute }) {
  const navButtons = [
    { label: '🏠 Home', route: 'home', active: route === 'home' },
    { label: '🌌 About', route: 'about', active: route === 'about' }
  ];

  return (
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 50, pointerEvents: 'none' }}>
      <div style={{ pointerEvents: 'auto', display: 'flex', gap: 8 }}>
        {navButtons.map((item) => (
          <button
            key={item.route}
            onClick={() => setRoute(item.route)}
            style={{
              ...btnStyle.base,
              ...(item.active ? btnStyle.active : btnStyle.inactive),
            }}
            onMouseEnter={(e) => btnStyle.hoverEnter(e.currentTarget)}
            onMouseLeave={(e) => {
              // restore correct state on leave
              const active = item.active;
              Object.assign(e.currentTarget.style, active ? btnStyle.active : btnStyle.inactive);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;