import type { RefObject } from "react";

type HeroProps = {
  sectionRef: RefObject<HTMLElement>;
  onViewArchitecture: () => void;
};

export function Hero({ sectionRef, onViewArchitecture }: HeroProps) {
  return (
    <section
      ref={sectionRef}
      className="section reveal"
      data-section="hero"
    >
      <div className="card">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <span
            style={{
              width: 20,
              height: 1,
              background: "var(--blue)",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "var(--blue)",
              textTransform: "uppercase",
            }}
          >
            NEARU Soul Engine™ — Kaltura Integration Preview
          </span>
        </div>
        <h1
          style={{
            margin: "0 0 16px",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            color: "var(--text)",
          }}
        >
          Your avatars can hear.
          <br />
          <span style={{ color: "var(--blue)" }}>Can they feel?</span>
        </h1>
        <p
          style={{
            margin: "0 0 28px",
            fontSize: 14,
            color: "var(--text-muted)",
            maxWidth: 500,
          }}
        >
          See how the Soul Engine™ adds real-time emotional intelligence to Kaltura Immersive Agents — so every conversation feels human, not robotic.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
          <a href="#demo" className="btn btn-primary">
            Watch the Demo
          </a>
          <button type="button" className="btn btn-outline" onClick={onViewArchitecture}>
            View Architecture
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            overflow: "hidden",
            marginTop: 28,
          }}
        >
          <StatCell
            main="68"
            unit="%"
            label="of users abandon after one emotionally failed AI interaction"
            badge="Problem"
            badgeVariant="red"
          />
          <StatCell
            main="$13.8"
            unit="B"
            label="Emotion AI market by 2030 — 24.5% CAGR"
            badge="Market"
            badgeVariant="green"
          />
          <StatCell
            main="&lt;10"
            unit="wk"
            label="To a live Nearu-enhanced pilot inside Kaltura's stack"
            badge="Timeline"
            badgeVariant="amber"
          />
        </div>
      </div>
    </section>
  );
}

function StatCell({
  main,
  unit,
  label,
  badge,
  badgeVariant,
}: {
  main: string;
  unit: string;
  label: string;
  badge: string;
  badgeVariant: "red" | "green" | "amber";
}) {
  const badgeStyle =
    badgeVariant === "red"
      ? { background: "rgba(248,81,73,0.15)", color: "#F85149", border: "1px solid rgba(248,81,73,0.3)" }
      : badgeVariant === "green"
        ? { background: "rgba(63,185,80,0.15)", color: "#3FB950", border: "1px solid rgba(63,185,80,0.3)" }
        : { background: "rgba(210,153,34,0.15)", color: "#D29922", border: "1px solid rgba(210,153,34,0.3)" };
  return (
    <div
      style={{
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        background: "var(--bg-card)",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 2 }}>
        <span
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "var(--text)",
            letterSpacing: "-0.03em",
          }}
        >
          {main}
        </span>
        <span style={{ fontSize: 18, color: "var(--text-muted)" }}>{unit}</span>
      </div>
      <div
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
          lineHeight: 1.4,
          marginTop: 2,
        }}
      >
        {label}
      </div>
      <span
        style={{
          marginTop: 8,
          display: "inline-flex",
          alignSelf: "flex-start",
          fontSize: 11,
          fontWeight: 600,
          padding: "3px 10px",
          borderRadius: 20,
          ...badgeStyle,
        }}
      >
        {badge}
      </span>
    </div>
  );
}
