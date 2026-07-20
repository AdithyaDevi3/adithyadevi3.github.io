
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { colors } from "./theme";

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div
      className="app-shell"
      data-font-theme="inter"
      style={{ position: 'relative', width: '100%', minHeight: '100vh', background: colors.bgBase }}
    >
      {route === 'home' && <HomePage />}
      {route === 'about' && <AboutPage />}

      {route === 'home' && <Header />}
      <Navigation route={route} setRoute={setRoute} />
      <SocialLinks />
    </div>
  );
}