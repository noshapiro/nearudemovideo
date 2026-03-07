import { useRef, useState, useEffect } from "react";
import type { RefObject } from "react";

const METRICS = [
  {
    value: "4.8/5",
    title: "CSAT Score",
    desc: "HR onboarding with emotionally adaptive agents vs 3.1 standard",
    delta: "↑ +55% vs standard",
    barWidth: 87,
  },
  {
    value: "−42%",
    title: "Escalations",
    desc: "Fewer handoffs when AI detects & responds to frustration before it peaks",
    delta: "↓ Cost reduction",
    barWidth: 72,
  },
  {
    value: "2.3×",
    title: "Completions",
    desc: "Training completions when agents adapt to confusion in real time",
    delta: "↑ 130% uplift",
    barWidth: 93,
  },
  {
    value: "+31%",
    title: "Sales Conv.",
    desc: "Demo-to-close rate when agents respond to buyer skepticism live",
    delta: "↑ Revenue per demo",
    barWidth: 68,
  },
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
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        {METRICS.map((m, i) => (
          <MetricCell key={i} {...m} />
        ))}
      </div>
    </section>
  );
}

function MetricCell({
  value,
  title,
  desc,
  delta,
  barWidth,
}: {
  value: string;
  title: string;
  desc: string;
  delta: string;
  barWidth: number;
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
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        position: "relative",
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 700, color: "var(--text)" }}>{value}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.45, flex: 1 }}>{desc}</div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--border)",
          borderRadius: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: visible ? `${barWidth}%` : "0%",
            background: "var(--blue)",
            borderRadius: 0,
            transition: "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: "var(--blue)",
          marginTop: 4,
        }}
      >
        {delta}
      </span>
    </div>
  );
}
