import React from "react";

export default function Footer() {
  return (
    <footer className="ecm-footer">
      <div className="section__inner">
        <h2 className="section-heading__title section-heading__title--small">
          Join the ECM Circle
        </h2>
        <p className="section-heading__subtitle section-heading__subtitle--narrow">
          Be the first to receive updates on Cognitive Capital, AI–Human Hybrid
          Systems and ECM&apos;s flagship creative universes shaping global
          culture.
        </p>

        <form
          className="footer-form"
          method="POST"
          action="#"
        >
          <input
            type="email"
            name="email"
            className="footer-form__input"
            placeholder="Enter your email"
          />
          <button type="submit" className="footer-form__button">
            Sign Up
          </button>
        </form>

        <div className="footer-meta">
          <p>General enquiries: info@elliottchurchleymedia.com</p>
          <p>Founder contact: founder@elliottchurchleymedia.com</p>
        </div>

        <p className="footer-copy">
          © 2025 Elliott Churchley Media — AI–Human Systems · Cognitive Capital
          · IP Architecture
        </p>
      </div>
    </footer>
  );
}