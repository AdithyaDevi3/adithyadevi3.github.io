
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

  // Component: Navigation
  function Navigation({ route, setRoute }) {
    return (
      <div className="fixed top-0 right-0 p-6 md:p-8 z-50 pointer-events-none">
        <div className="flex gap-3 pointer-events-auto">
          <button
            onClick={() => setRoute('home')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              route === 'home'
                ? 'bg-cyan-500 text-white'
                : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
            } backdrop-blur-sm`}
          >
            Home
          </button>
          <button
            onClick={() => setRoute('about')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              route === 'about'
                ? 'bg-cyan-500 text-white'
                : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
            } backdrop-blur-sm`}
          >
            About
          </button>
          <button
            onClick={() => setRoute('contact')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              route === 'contact'
                ? 'bg-cyan-500 text-white'
                : 'bg-black/40 text-cyan-300 hover:bg-black/60 border border-cyan-500/30'
            } backdrop-blur-sm`}
          >
            Contact
          </button>
        </div>
      </div>
    );
  }
  export default Navigation