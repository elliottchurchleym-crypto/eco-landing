// src/components/KPIPanel.jsx
import React from "react";

export default function KPIPanel() {
  return (
    <section className="space-y-8" id="kpi">
      <div className="text-center">
        <h2 className="text-sm tracking-[0.32em] uppercase text-white/70 label-glow">
          What Exists Today
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="kpi-card">
          <p className="kpi-label">Foundational build</p>
          <h3 className="kpi-headline">400+ structured hours</h3>
          <p className="kpi-body">
            IP design, financial frameworks and governance architecture already
            completed and documented.
          </p>
        </div>

        <div className="kpi-card">
          <p className="kpi-label">Document stack</p>
          <h3 className="kpi-headline">100+ pages</h3>
          <p className="kpi-body">
            Whitepapers, registers and technical briefs ready for IP valuers,
            accountants and investors.
          </p>
        </div>

        <div className="kpi-card">
          <p className="kpi-label">Core IP lanes</p>
          <h3 className="kpi-headline">TSA · CCE/CEE · Capital CEE</h3>
          <p className="kpi-body">
            Each with defined monetisation routes, proof-of-concept assets and
            expansion roadmaps.
          </p>
        </div>
      </div>
    </section>
  );
}