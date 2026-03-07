import { useState, type RefObject } from "react";

const STEPS = [
  { icon: "🎙️", title: "Audio Input", desc: "WebRTC stream from user mic", nearu: false },
  { icon: "🧠", title: "NearuVibe™", desc: "Prosodic emotion analysis, EQ signal", nearu: true },
  { icon: "👁️", title: "Vision Layer", desc: "Micro-expression + facial affect", nearu: true },
  { icon: "⚡", title: "Emotion Fusion", desc: "EQ state injected as LLM context", nearu: true },
  { icon: "💬", title: "Kaltura LLM", desc: "Response with emotional awareness", nearu: false },
  { icon: "🤖", title: "Avatar Output", desc: "Tone, pacing, expression tuned", nearu: false },
];

const PROOF = [
  { value: "<80ms", label: "Emotion inference latency — zero perceptible delay added" },
  { value: "Edge", label: "On-premise deployment. Privacy-first. Emotion vectors, not raw AV." },
  { value: "30+", label: "Languages — works across all languages Kaltura supports" },
  {
    value: "9",
    label: "Distinct emotional states recognized",
    custom: true as const,
    line1: "9 emotional states in MVP",
    line2: "Up to 30 in roadmap",
    badge: "In R&D",
  },
];

const NEARU_TAB_LOGO = "/nearu-tab-logo.png";

function NearuTabBadge() {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        padding: "4px 8px",
        background: "var(--blue)",
        color: "#0d1117",
        fontSize: 10,
        fontWeight: 700,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 20,
      }}
    >
      {!imgError ? (
        <img
          src={NEARU_TAB_LOGO}
          alt="NEARU"
          style={{ height: 14, width: "auto", maxWidth: "100%", objectFit: "contain" }}
          onError={() => setImgError(true)}
        />
      ) : (
        "NEARU"
      )}
    </div>
  );
}

type PipelineProps = {
  sectionRef: RefObject<HTMLElement>;
};

export function Pipeline({ sectionRef }: PipelineProps) {
  return (
    <section ref={sectionRef} className="section reveal" data-section="pipeline">
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "var(--blue)", textTransform: "uppercase", marginBottom: 6 }}>
          Architecture
        </div>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
          Emotion intercepts the LLM — not the other way around.
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted)" }}>
          NearuVibe™ reads emotional state <em>before</em> the LLM formulates its response. Zero structural changes to Kaltura's existing stack.
        </p>
      </div>
      <div
        className="pipeline-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 1,
          background: "var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          marginBottom: 24,
        }}
      >
        {STEPS.map((step, i) => (
          <div
            key={i}
            style={{
              background: step.nearu ? "var(--blue-glow)" : "var(--bg-panel)",
              padding: "28px 16px 20px",
              position: "relative",
              borderTop: step.nearu ? "3px solid var(--blue)" : undefined,
            }}
          >
            {step.nearu && (
              <NearuTabBadge />
            )}
            <div style={{ fontSize: 24, marginBottom: 10, marginTop: step.nearu ? 4 : 0 }}>{step.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{step.title}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.4 }}>{step.desc}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
        }}
      >
        {PROOF.map((p, i) => (
          <div
            key={i}
            style={{
              padding: 16,
              background: "var(--bg-panel)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
            }}
          >
            {"custom" in p && p.custom ? (
              <>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "var(--blue)" }}>9</span>
                  <span
                    className="proof-arrow"
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    → 30
                  </span>
                  <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>emotional states in MVP</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--green)", lineHeight: 1.4, marginBottom: 8 }}>
                  Up to <strong>30</strong> in roadmap
                </div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "4px 8px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--amber-dim)",
                    color: "var(--amber)",
                  }}
                >
                  {p.badge}
                </span>
              </>
            ) : (
              <>
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--blue)", marginBottom: 6 }}>{p.value}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.4 }}>{p.label}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
