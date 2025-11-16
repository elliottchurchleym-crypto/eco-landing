import React from "react";
import LogoCard from "./Logocard";

export default function Hero() {
  return (
    <section className="hero-section">

      {/* Background Gradient + Glow */}
      <div className="hero-bg-fade"></div>

      {/* Logo */}
      <div className="hero-logo-container">
        <LogoCard />
      </div>

      {/* Text */}
      <div className="hero-text">
        <h1 className="hero-title">ELLIOTT CHURCHLEY MEDIA</h1>
        <p className="hero-sub">
          Architecting the future of Cognitive Capital, AI–Human hybrid ecosystems,
          and next-generation animated universes shaping global culture.
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="hero-pills">
        <button className="pill">Cognitive Capital Engine</button>
        <button className="pill">Twinkle’s Star Adventures</button>
        <button className="pill">Capital CEE</button>
        <button className="pill">2026 Seed Preparation</button>
      </div>

    </section>
  );
}