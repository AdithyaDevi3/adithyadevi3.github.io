
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
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#05070d' }}>
      {route === 'home' && <HomePage />}
      {route === 'about' && <AboutPage />}

      {route === 'home' && <Header />}
      <Navigation route={route} setRoute={setRoute} />
      <SocialLinks />
    </div>
  );
}