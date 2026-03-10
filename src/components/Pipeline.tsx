import { type RefObject } from "react";

const STEPS = [
  { title: "Audio Input", desc: "WebRTC stream from user mic", nearu: false },
  { title: "Vision Layer", desc: "Webcam feed — micro-expressions & facial affect", nearu: false },
  { title: "NearuVibe™", desc: "Fuses audio + visual signals into a real-time EQ state", nearu: true },
  { title: "Emotion Fusion", desc: "EQ signal injected into LLM context before response", nearu: true },
  { title: "Kaltura LLM", desc: "Generates response with full emotional awareness", nearu: false },
  { title: "Avatar Output", desc: "Tone, pacing & expression tuned to emotional state", nearu: false },
];

function IconAudio() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text-muted)" }}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2C7 2 5 4 5 6.5c0 .5.1 1 .2 1.5C3.9 8.5 3 9.9 3 11.5 3 13.4 4.3 15 6 15.5V17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5c1.7-.5 3-2.1 3-3.9 0-1.6-.9-3-2.2-3.6.1-.5.2-1 .2-1.5C19 4 17 2 14.5 2c-1.2 0-2.3.5-3.1 1.2C10.8 2.5 10.2 2 9.5 2z" />
      <path d="M12 6v13" />
      <path d="M9 9h1" />
      <path d="M14 9h1" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function IconSpeech() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text-muted)" }}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function IconAvatar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text-muted)" }}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      <path d="M16 3.5c1.5.5 3 2 3 4.5s-1.5 4-3 4.5" />
    </svg>
  );
}

function NearuBadge() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        background: "var(--blue)",
        color: "#0D1117",
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.12em",
        padding: "3px 10px",
        borderRadius: "0 0 8px 8px",
        whiteSpace: "nowrap",
        zIndex: 1,
      }}
    >
      NEARU
    </div>
  );
}

function PipelineCellIcon({ stepIndex, nearu }: { stepIndex: number; nearu: boolean }) {
  if (nearu) {
    const Icon = stepIndex === 2 ? IconBrain : IconHeart;
    return (
      <div
        style={{
          width: 52,
          height: 52,
          background: "rgba(59,158,255,0.1)",
          border: "1px solid rgba(59,158,255,0.25)",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
          color: "var(--blue)",
        }}
      >
        <Icon />
      </div>
    );
  }
  if (stepIndex === 0) return <div style={{ marginBottom: 14 }}><IconAudio /></div>;
  if (stepIndex === 1) {
    return (
      <div style={{ marginBottom: 14 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-muted)" }}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    );
  }
  if (stepIndex === 4) return <div style={{ marginBottom: 14 }}><IconSpeech /></div>;
  return <div style={{ marginBottom: 14 }}><IconAvatar /></div>;
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
          background: "var(--border-md)",
          border: "1px solid var(--border-md)",
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 24,
        }}
      >
        {STEPS.map((step, i) => (
          <div
            key={i}
            style={{
              background: step.nearu ? "rgba(59,158,255,0.06)" : "var(--bg-card)",
              padding: "24px 16px 20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {step.nearu && <NearuBadge />}
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: step.nearu ? "var(--blue)" : "var(--text-dim)",
                marginTop: 20,
                marginBottom: 12,
                letterSpacing: "0.08em",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <PipelineCellIcon stepIndex={i} nearu={step.nearu} />
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{step.title}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.4, maxWidth: 120 }}>{step.desc}</div>
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
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0,
            }}
          >
            {"custom" in p && p.custom ? (
              <>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--blue)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  9
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5, marginBottom: 4 }}>
                  Distinct emotional states: calm, anxious, frustrated, sad, surprised & more
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: "var(--blue)" }}>→ 30 states in roadmap</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: 20,
                      background: "var(--amber-dim)",
                      color: "var(--amber)",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--blue)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {p.value}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{p.label}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
