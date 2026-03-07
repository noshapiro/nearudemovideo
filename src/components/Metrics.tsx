import { useRef, useState, useEffect } from "react";
import type { RefObject } from "react";

const METRICS = [
  { main: "4.8", unit: "/5", title: "CSAT Score", desc: "HR onboarding with emotionally adaptive agents vs 3.1 standard", delta: "↑ +55% vs standard" },
  { main: "−42", unit: "%", title: "Escalations", desc: "Fewer handoffs when AI detects & responds to frustration before it peaks", delta: "↓ Cost reduction" },
  { main: "2.3", unit: "×", title: "Completions", desc: "Training completions when agents adapt to confusion in real time", delta: "↑ 130% uplift" },
  { main: "+31", unit: "%", title: "Sales Conv.", desc: "Demo-to-close rate when agents respond to buyer skepticism live", delta: "↑ Revenue per demo" },
];

type MetricsProps = {
  sectionRef: RefObject<HTMLElement>;
};

export function Metrics({ sectionRef }: MetricsProps) {
  return (
    <section ref={sectionRef} className="section reveal" data-section="metrics">
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "var(--blue)", textTransform: "uppercase", marginBottom: 6 }}>
          Impact Metrics
        </div>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: "var(--text)" }}>
          What emotional intelligence does to enterprise numbers.
        </h2>
      </div>
      <div
        className="metrics-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          background: "var(--border)",
          border: "1px solid var(--border-md)",
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 40,
        }}
      >
        {METRICS.map((m, i) => (
          <MetricCell key={i} {...m} />
        ))}
      </div>
    </section>
  );
}

const METRIC_BAR_FILL = 75; // одинаковое заполнение полосы по центру (%)

function MetricCell({
  main,
  unit,
  title,
  desc,
  delta,
}: {
  main: string;
  unit: string;
  title: string;
  desc: string;
  delta: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--bg-panel)",
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontSize: 52, fontWeight: 700, color: "var(--text)" }}>{main}</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: "var(--text-muted)" }}>{unit}</span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.45, flex: 1 }}>{desc}</div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--border)",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: visible ? `${METRIC_BAR_FILL}%` : "0%",
            maxWidth: "100%",
            background: "var(--blue)",
            transition: "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          padding: "4px 8px",
          borderRadius: "var(--radius-sm)",
          background: "var(--blue-dim)",
          color: "var(--blue)",
          width: "fit-content",
        }}
      >
        {delta}
      </span>
    </div>
  );
}
