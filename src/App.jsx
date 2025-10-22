
// // // // import React from 'react';
// // // // import CrystallineIcosahedron from './components/CrystallineIcosahedron';
// // // // import './App.css';

// // // // function App() {
// // // //   return (
// // // //     <div className="App">
// // // //       <CrystallineIcosahedron />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;


// // // // ============================================
// // // // FILE: src/App.jsx
// // // // ============================================
// // // import React, { useState } from 'react';
// // // import CrystalBackground from './components/CrystalBackground';
// // // import Header from './components/Header';
// // // import Navigation from './components/Navigation';
// // // import SocialLinks from './components/SocialLinks';
// // // import HomePage from './pages/HomePage';
// // // import AboutPage from './pages/AboutPage';
// // // import ContactPage from './pages/ContactPage';

// // // export default function App() {
// // //   const [route, setRoute] = useState('home');

// // //   return (
// // //     <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      
      
// // //       <div className="relative z-10">
// // //         <Header />
// // //         <div className="pointer-events-auto">
// // //           {route === 'home' && <HomePage />}
// // //           {route === 'about' && <AboutPage />}
// // //           {route === 'contact' && <ContactPage />}
// // //         </div>
// // //         <CrystalBackground />
// // //         <Navigation route={route} setRoute={setRoute} />
// // //         <SocialLinks />
        
        
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // ============================================
// // // FILE: src/App.jsx
// // // ============================================
// // import React, { useState } from 'react';
// // import CrystalBackground from './components/CrystalBackground';
// // import Header from './components/Header';
// // import Navigation from './components/Navigation';
// // import SocialLinks from './components/SocialLinks';
// // import HomePage from './pages/HomePage';
// // import AboutPage from './pages/AboutPage';
// // import ContactPage from './pages/ContactPage';

// // export default function App() {
// //   const [route, setRoute] = useState('home');

// //   return (
// //     <div className="relative w-full min-h-screen bg-black overflow-hidden">
      
// //       {/* === Background Layer === */}
// //       <div className="fixed inset-0 z-0">
// //         <CrystalBackground />
// //       </div>

// //       {/* === Foreground UI Layer === */}
// //       <div className="relative z-10 flex flex-col min-h-screen">
// //         <Header />
        
// //         <main className="flex-grow pointer-events-auto">
// //           {route === 'home' && <HomePage />}
// //           {route === 'about' && <AboutPage />}
// //           {route === 'contact' && <ContactPage />}
// //         </main>

// //         <Navigation route={route} setRoute={setRoute} />
// //         <SocialLinks />
// //       </div>
// //     </div>
// //   );
// // }


// // ============================================
// // FILE: src/App.jsx
// // ============================================
// import React, { useState } from 'react';
// import CrystalBackground from './components/CrystalBackground';
// import Header from './components/Header';
// import Navigation from './components/Navigation';
// import SocialLinks from './components/SocialLinks';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

// export default function App() {
//   const [route, setRoute] = useState('home');

//   return (
//     <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
//       <CrystalBackground />
      
//       <div className="relative z-10">
//         <Header />
//         <Navigation route={route} setRoute={setRoute} />
//         <SocialLinks />
        
//         <div className="pointer-events-auto">
//           {route === 'home' && <HomePage />}
//           {route === 'about' && <AboutPage />}
//           {route === 'contact' && <ContactPage />}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import CrystalBackground from './components/CrystalBackground';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SocialLinks from './components/SocialLinks';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <CrystalBackground />
      
      <div className="relative z-10 h-full">
        <Header />
        <Navigation route={route} setRoute={setRoute} />
        <SocialLinks />
        
        <div className="pointer-events-auto h-full">
          {route === 'home' && <HomePage />}
          {route === 'about' && <AboutPage />}
          {route === 'contact' && <ContactPage />}
        </div>
      </div>
    </div>
  );
}