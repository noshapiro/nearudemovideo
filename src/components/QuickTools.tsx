import type { RefObject } from "react";

const TOOLS = [
  { id: 0, icon: "🔴", code: "A.01", title: "HR Onboarding", subtitle: "Vulnerability & first-day emotional states" },
  { id: 1, icon: "💬", code: "A.02", title: "Customer Support", subtitle: "Acute frustration & urgency detection" },
  { id: 2, icon: "💼", code: "B.01", title: "Sales Close", subtitle: "Skepticism & cautious buyer signals" },
  { id: 3, icon: "📚", code: "B.02", title: "Training", subtitle: "Low engagement & disengagement recovery" },
];

type QuickToolsProps = {
  sectionRef: RefObject<HTMLElement>;
  selectedId: number | null;
  onSelect: (id: number) => void;
};

export function QuickTools({ sectionRef, selectedId, onSelect }: QuickToolsProps) {
  return (
    <section ref={sectionRef} className="section reveal" data-section="quick-tools">
      <div
        className="quick-tools-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
        }}
      >
        {TOOLS.map((tool) => {
          const isActive = selectedId === tool.id;
          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => onSelect(tool.id)}
              style={{
                padding: 20,
                textAlign: "left",
                border: `1px solid ${isActive ? "var(--blue-border)" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                background: isActive ? "var(--blue-glow)" : "var(--bg-panel)",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "transform 0.15s, border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 20, marginBottom: 8 }}>{tool.icon}</div>
              <div style={{ fontSize: 11, color: "var(--text-dim)", marginBottom: 4 }}>{tool.code}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{tool.title}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.4 }}>{tool.subtitle}</div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
