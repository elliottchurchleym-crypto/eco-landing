import React from "react";

export default function Pillars() {
  return (
    <div className="section__inner">
      <div className="section-heading">
        <p className="section-heading__eyebrow">The ECM Pillars</p>
        <h2 className="section-heading__title">Foundational Systems</h2>
        <p className="section-heading__subtitle">
          The core architectures authored by Elliott Bernard Churchley to define
          the Cognitive Era.
        </p>
      </div>

      <div className="card-grid card-grid--pillars">
        <div className="card card--pillars">
          <p className="card__eyebrow">Capital System</p>
          <h3 className="card__title">Cognitive Capital Engine (CCE)</h3>
          <p className="card__body">
            A codified valuation system measuring cognitive work, creativity and
            IP architecture with institutional-grade precision.
          </p>
        </div>

        <div className="card card--pillars">
          <p className="card__eyebrow">Market Infrastructure</p>
          <h3 className="card__title">Cognitive Equity Exchange (CEE)</h3>
          <p className="card__body">
            A future market for cognitive assets — turning creative intelligence
            into bankable, tradeable equity.
          </p>
        </div>

        <div className="card card--pillars">
          <p className="card__eyebrow">Flagship Universe</p>
          <h3 className="card__title">Twinkle&apos;s Star Adventures (TSA)</h3>
          <p className="card__body">
            A cinematic emotional-intelligence universe for children — built
            with Pixar-level resonance and ECM-level system design.
          </p>
        </div>

        <div className="card card--pillars">
          <p className="card__eyebrow">Studio Spine</p>
          <h3 className="card__title">ECM Founder Studio</h3>
          <p className="card__body">
            The architectural studio behind CCE, CEE and TSA — merging luxury
            identity, cognitive systems and strategic storytelling.
          </p>
        </div>
      </div>
    </div>
  );
}