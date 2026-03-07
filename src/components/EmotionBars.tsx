type EmotionValues = {
  anxiety: number;
  frustration: number;
  confidence: number;
  engagement: number;
};

type EmotionBarsProps = {
  values: EmotionValues | null;
  visible: boolean;
};

const BARS: { key: keyof EmotionValues; label: string; color: string }[] = [
  { key: "anxiety", label: "Anxiety", color: "#d29922" },
  { key: "frustration", label: "Frustration", color: "#f85149" },
  { key: "confidence", label: "Confidence", color: "#3fb950" },
  { key: "engagement", label: "Engagement", color: "#3b9eff" },
];

export function EmotionBars({ values, visible }: EmotionBarsProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {BARS.map(({ key, label, color }) => (
        <div
          key={key}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 74,
              flexShrink: 0,
              fontSize: 12,
              color: "var(--text-muted)",
            }}
          >
            {label}
          </span>
          <div
            style={{
              flex: 1,
              height: 3,
              background: "var(--border)",
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
              fontSize: 12,
              color: "var(--text-dim)",
              textAlign: "right",
            }}
          >
            {visible && values ? `${values[key]}%` : "—"}
          </span>
        </div>
      ))}
    </div>
  );
}
