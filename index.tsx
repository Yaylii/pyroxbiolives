import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="eyebrow">Australian R&amp;D Focused</p>

        <h1>Experimental Compound Sourcing, Built for Australia</h1>

        <p className="hero-copy">
          A streamlined source for the Australian research and development market.
          We make experimental compound sourcing more direct, more transparent, and
          easier to navigate, with clear stock visibility and a fast enquiry pathway.
        </p>

        <div className="hero-break" aria-hidden="true" />

        <p className="hero-authority">
          If we can&apos;t help you,{" "}
          <span className="ghost">we know who can</span>
        </p>

        <div className="hero-actions">
          <a href="#stock" className="btn btn-primary">
            View Available Compounds
          </a>
          <a href="#contact" className="btn btn-secondary">
            Enquire Now
          </a>
        </div>

        <p className="hero-microcopy">
          Fast responses. Clear stock status. No clutter.
        </p>

        <div className="trust-strip" aria-label="Trust indicators">
          <span>Australian-focused</span>
          <span>Simple stock visibility</span>
          <span>Direct enquiry pathway</span>
        </div>
      </div>
    </section>
  );
}
