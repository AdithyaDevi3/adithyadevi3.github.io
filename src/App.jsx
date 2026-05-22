
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
  return (
    <div >

      <Header />
      <Navigation route={route} setRoute={setRoute} />
      <SocialLinks />
  
      <div className="relative z-10 h-full pointer-events-auto">
        {route === 'home' && <HomePage />}
        {route === 'about' && <AboutPage />}
        {route === 'contact' && <ContactPage /> }
      </div>
    </div>
  );
}