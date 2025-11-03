
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Navigation from "./components/Navigation";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
export default function App() {
  const [route, setRoute] = useState('home');
  // return (
  //   <div className="relative w-full h-screen bg-black overflow-hidden">
  //     {/* Fixed elements should be outside main content flow */}
  //     <Header />
  //     <Navigation route={route} setRoute={setRoute} />
  //     <SocialLinks />
  
  //     <div className="relative z-10 h-full pointer-events-auto">
  //       {route === 'home' && <HomePage />}
  //       {route === 'about' && <AboutPage />}
  //       {route === 'contact' && <ContactPage />}
  //     </div>
  //   </div>
  // );
  return (
    <div style={{ backgroundColor: '#000510', minHeight: '100vh' }}>
      <Header />
       <Navigation route={route} setRoute={setRoute} />
      <SocialLinks />
    </div>
  );
  
}