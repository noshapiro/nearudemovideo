import type { RefObject } from "react";

type CTAProps = {
  sectionRef: RefObject<HTMLElement>;
  onViewArchitecture: () => void;
};

export function CTA({ sectionRef, onViewArchitecture }: CTAProps) {
  return (
    <section ref={sectionRef} className="section reveal" data-section="cta">
      <div
        className="card"
        style={{
          border: "1px solid var(--blue-border)",
          boxShadow: "0 0 80px rgba(59, 158, 255, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "120%",
            height: 200,
            background: "radial-gradient(ellipse at center, var(--blue-glow) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", textAlign: "center", padding: "44px 24px" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "var(--blue)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            THE NEXT STEP
          </div>
          <h2
            style={{
              margin: "0 0 16px",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}
          >
            Give Kaltura a soul.
          </h2>
          <p
            style={{
              margin: "0 auto 28px",
              fontSize: 14,
              color: "var(--text-muted)",
              maxWidth: 440,
              lineHeight: 1.6,
            }}
          >
            Request a pilot to integrate the NearuVibe™ directly into Kaltura's Immersive Agent stack — with your content, your agents, and your metrics.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <a href="mailto:noa@nnearu.com?subject=Kaltura%20Pilot%20Request" className="btn btn-primary">
              Request a Pilot
            </a>
            <button type="button" className="btn btn-outline" onClick={onViewArchitecture}>
              View Architecture Docs
            </button>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-dim)",
            }}
          >
            noa@nnearu.com · +972-54-5884883 · www.nnearu.com
          </div>
        </div>
      </div>
    </section>
  );
}
