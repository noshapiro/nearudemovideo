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
      <div className="card" style={{ position: "relative" }}>
        <img
          src="/kaltura-logo.png"
          alt="Kaltura"
          style={{
            position: "absolute",
            top: 36,
            right: 44,
            height: 40,
            width: "auto",
            objectFit: "contain",
          }}
        />
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
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          <StatCell
            value="68%"
            label="of users abandon after one emotionally failed AI interaction"
            badge="Problem"
            badgeVariant="red"
          />
          <StatCell
            value="$13.8B"
            label="Emotion AI market by 2030 — 24.5% CAGR"
            badge="Market"
            badgeVariant="green"
          />
          <StatCell
            value="&lt;10wk"
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
  value,
  label,
  badge,
  badgeVariant,
}: {
  value: string;
  label: string;
  badge: string;
  badgeVariant: "red" | "green" | "amber";
}) {
  const badgeBg =
    badgeVariant === "red"
      ? "rgba(248,81,73,0.12)"
      : badgeVariant === "green"
        ? "var(--green-dim)"
        : "var(--amber-dim)";
  const badgeColor =
    badgeVariant === "red"
      ? "var(--red)"
      : badgeVariant === "green"
        ? "var(--green)"
        : "var(--amber)";
  return (
    <div
      style={{
        background: "var(--bg-panel)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 700, color: "var(--text)" }}>{value}</div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.4 }}>{label}</div>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          padding: "4px 8px",
          borderRadius: "var(--radius-sm)",
          background: badgeBg,
          color: badgeColor,
          width: "fit-content",
        }}
      >
        {badge}
      </span>
    </div>
  );
}
