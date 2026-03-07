import { useState, type RefObject } from "react";

const STEPS = [
  { icon: "🎙️", title: "Audio Input", desc: "WebRTC stream from user mic", nearu: false },
  { icon: "🧠", title: "NearuVibe™", desc: "Prosodic emotion analysis, EQ signal", nearu: true },
  { icon: "👁️", title: "Vision Layer", desc: "Micro-expression + facial affect", nearu: true },
  { icon: "⚡", title: "Emotion Fusion", desc: "EQ state injected as LLM context", nearu: true },
  { icon: "💬", title: "Kaltura LLM", desc: "Response with emotional awareness", nearu: false },
  { icon: "🤖", title: "Avatar Output", desc: "Tone, pacing, expression tuned", nearu: false },
];

const NEARU_TAB_LOGO = "/nearu-tab-logo.png";

function NearuTabBadge() {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: 0,
        padding: "5px 10px",
        background: "var(--blue)",
        color: "#fff",
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.1em",
        borderRadius: "0 0 6px 6px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      {!imgError ? (
        <img
          src={NEARU_TAB_LOGO}
          alt="NEARU"
          style={{ height: 8, width: "auto", maxWidth: 48, objectFit: "contain" }}
          onError={() => setImgError(true)}
        />
      ) : (
        "NEARU"
      )}
    </div>
  );
}

const PROOF = [
  { value: "<80ms", label: "Emotion inference latency — zero perceptible delay added" },
  { value: "Edge", label: "On-premise deployment. Privacy-first. Emotion vectors, not raw AV." },
  { value: "30+", label: "Languages — works across all languages Kaltura supports" },
  {
    value: "9",
    label: "Distinct emotional states: calm, anxious, frustrated, sad, surprised & more",
    custom: true as const,
    badge: "In R&D",
  },
];

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
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          marginBottom: 24,
        }}
      >
        {STEPS.map((step, i) => (
          <div
            key={i}
            style={{
              background: step.nearu ? "var(--blue-glow)" : "var(--bg-panel)",
              padding: "20px 16px",
              paddingTop: step.nearu ? 22 : 20,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {step.nearu && <NearuTabBadge />}
            <div style={{ fontSize: 10, color: "var(--text-dim)", marginBottom: 8 }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ fontSize: 22, marginBottom: 8 }}>{step.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{step.title}</div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", lineHeight: 1.4 }}>{step.desc}</div>
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
            className="proof-pill-card"
            style={{
              padding: "14px 18px",
              background: "var(--bg-panel)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 72,
            }}
          >
            {"custom" in p && p.custom ? (
              <>
                <div style={{ fontSize: 24, fontWeight: 700, color: "var(--blue)" }}>9</div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.4, marginBottom: 4 }}>
                    Distinct emotional states: calm, anxious, frustrated, sad, surprised & more
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, color: "var(--blue)" }}>→ 30 states in roadmap</span>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        padding: "1px 6px",
                        borderRadius: 20,
                        background: "var(--amber-dim)",
                        color: "var(--amber)",
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 24, fontWeight: 700, color: "var(--blue)" }}>{p.value}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.4 }}>{p.label}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
