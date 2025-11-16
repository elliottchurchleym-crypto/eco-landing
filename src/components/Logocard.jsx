import React from "react";
import logoVideo from "../assets/logo-animation.mp4";

export default function LogoCard() {
  return (
    <div className="logo-card">
      <div className="logo-card__inner">
        <video
          className="logo-card__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={logoVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}