
// function Navigation({ route, setRoute }) {
//   return (
//     <div className="fixed top-0 right-0 p-6 md:p-8 z-50 pointer-events-none">
//       <div className="flex gap-3 pointer-events-auto">
//         <button
//           onClick={() => setRoute('home')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'home'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           Home
//         </button>
//         <button
//           onClick={() => setRoute('about')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'about'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           About
//         </button>
//         <button
//           onClick={() => setRoute('contact')}
//           className={`px-4 py-2 rounded-lg font-medium transition-all ${
//             route === 'contact'
//               ? 'bg-cyan-500 text-white'
//               : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
//           } backdrop-blur-sm`}
//         >
//           Contact
//         </button>
//       </div>
//     </div>
//   );
// }
//   export default Navigation

// Component: Navigation (single About toggle + Test)
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
            borderRadius: 10,
            fontWeight: 600,
            background: isAbout ? '#06b6d4' : 'rgba(0,0,0,0.4)',
            color: isAbout ? '#fff' : '#9be8ff',
            border: '1px solid rgba(102, 232, 255, 0.15)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {aboutButtonText}
        </button>
        <button
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
        </button>
      </div>
    </div>
  );
}

export default Navigation