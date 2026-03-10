type EmotionValues = {
  calmness: number;
  anxiety: number;
  frustration: number;
  sadness: number;
  anger: number;
  confidence: number;
  engagement: number;
  surprise: number;
  boredom: number;
};

type EmotionBarsProps = {
  values: EmotionValues | null;
  visible: boolean;
};

const BARS: { key: keyof EmotionValues; label: string; color: string }[] = [
  { key: "calmness", label: "Calmness", color: "#3FB950" },
  { key: "anxiety", label: "Anxiety", color: "#D29922" },
  { key: "frustration", label: "Frustration", color: "#F85149" },
  { key: "sadness", label: "Sadness", color: "#A371F7" },
  { key: "anger", label: "Anger", color: "#FF6B35" },
  { key: "confidence", label: "Confidence", color: "#3FB950" },
  { key: "engagement", label: "Engagement", color: "#3B9EFF" },
  { key: "surprise", label: "Surprise", color: "#58B4FF" },
  { key: "boredom", label: "Boredom", color: "#6E7681" },
];

export function EmotionBars({ values, visible }: EmotionBarsProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span
        style={{
          display: "inline-flex",
          fontSize: 10,
          fontWeight: 600,
          padding: "3px 8px",
          borderRadius: 6,
          background: "rgba(255,255,255,0.06)",
          color: "var(--text-dim)",
          marginBottom: 4,
          alignSelf: "flex-start",
        }}
      >
        Neutral (baseline)
      </span>
      {BARS.map(({ key, label, color }) => (
        <div
          key={key}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
          }}
        >
          <span
            style={{
              width: 80,
              flexShrink: 0,
              color: "var(--text-muted)",
            }}
          >
            {label}
          </span>
          <div
            style={{
              flex: 1,
              height: 3,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: visible && values ? `${values[key]}%` : "0%",
                background: color,
                borderRadius: 2,
                transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>
          <span
            style={{
              width: 28,
              textAlign: "right",
              fontSize: 10,
              color: "var(--text-dim)",
            }}
          >
            {visible && values ? `${values[key]}%` : "—"}
          </span>
        </div>
      ))}
    </div>
  );
}
