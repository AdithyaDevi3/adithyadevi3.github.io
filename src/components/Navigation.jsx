function Navigation({ route, setRoute }) {
  const isAbout = route === 'about';
  const aboutButtonText = isAbout ? 'Home' : 'About';
  
  return (
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 50, pointerEvents: 'none' }}>
      <div style={{ pointerEvents: 'auto', display: 'flex', gap: 8 }}>
        <button
          onClick={() => setRoute(isAbout ? 'home' : 'about')}
          style={{
            padding: '8px 12px',
            borderRadius: 4,
            fontWeight: 600,
            // background: isAbout ? '#06b6d4' : 'rgba(0,0,0,0.4)',
            color: isAbout ? '#c11919ff' : '#c11919ff',
            border: '1px solid rgba(102, 232, 255, 0.15)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {aboutButtonText}
        </button>
        {/* <button
          onClick={() => setRoute(route === 'test' ? 'home' : 'test')}
          style={{
            padding: '8px 12px',
            borderRadius: 10,
            fontWeight: 600,
            background: route === 'test' ? '#06b6d4' : 'rgba(0,0,0,0.4)',
            color: route === 'test' ? '#fff' : '#9be8ff',
            border: '1px solid rgba(102, 232, 255, 0.15)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: 12
          }}
        >
          Test
        </button> */}
      </div>
    </div>
  );
}

export default Navigation