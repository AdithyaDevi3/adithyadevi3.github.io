
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [route, setRoute] = useState('home');
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Canvas background - must be rendered first */}
      {route === 'home' && <HomePage />}
      {route === 'about' && <AboutPage />}

      {/* UI Overlay */}
      {route === 'home' && <Header />}
      <Navigation route={route} setRoute={setRoute} />
      <SocialLinks />
    </div>
  );
}