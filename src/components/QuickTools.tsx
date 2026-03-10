import type { RefObject } from "react";

const TOOLS = [
  { id: 0, icon: "🔴", code: "A.01", title: "HR Onboarding", subtitle: "Anxiety & first-day adjustment stress" },
  { id: 1, icon: "🛡️", code: "A.02", title: "CS Insurance", subtitle: "Chronic frustration & trust breakdown" },
  { id: 2, icon: "💬", code: "B.01", title: "Customer Support", subtitle: "Acute frustration & urgency detection" },
  { id: 3, icon: "💼", code: "B.02", title: "Sales", subtitle: "Skepticism & cautious buyer signals" },
  { id: 4, icon: "📚", code: "B.03", title: "Training", subtitle: "Low engagement & disengagement recovery" },
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
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 14,
        }}
      >
        {TOOLS.map((tool) => {
          const isActive = selectedId === tool.id;
          const isHrOnboarding = tool.id === 0;
          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => onSelect(tool.id)}
              style={{
                position: isHrOnboarding ? "relative" : undefined,
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
              {isHrOnboarding && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontSize: 10,
                    fontWeight: 500,
                    color: "var(--blue)",
                    background: "var(--blue-dim)",
                    border: "1px solid var(--blue-border)",
                    borderRadius: 20,
                    padding: "2px 8px",
                  }}
                >
                  🎬 Video available
                </span>
              )}
              <span style={{ fontSize: 20, marginBottom: 8, display: "block" }}>{tool.icon}</span>
              <div style={{ fontSize: 11, color: "var(--text-dim)", marginBottom: 4 }}>{tool.code}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{tool.title}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.4 }}>{tool.subtitle}</div>
            </button>
          );
        })}
      </div>

      {selectedId === 0 && (
        <>
          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            <div
              style={{
                background: "var(--bg-panel)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Agent A</span>
                <span
                  style={{
                    fontSize: 11,
                    padding: "4px 8px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-card)",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  Standard Avatar
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 11,
                    padding: "4px 8px",
                    borderRadius: 9999,
                    background: "transparent",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  No emotion detection
                </span>
              </div>
              <video
                src="/videos/hr-standard.mp4"
                controls
                preload="metadata"
                style={{ width: "100%", display: "block", background: "#000" }}
              />
              <div
                style={{
                  padding: "12px 16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "var(--text-dim)",
                }}
              >
                <span>Detected emotion: —</span>
                <span>No confidence data</span>
              </div>
            </div>

            <div
              style={{
                background: "var(--bg-panel)",
                border: "1px solid var(--blue-border)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 0 0 1px var(--blue-glow)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Agent B</span>
                <span
                  style={{
                    fontSize: 11,
                    padding: "4px 8px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--blue-dim)",
                    color: "var(--blue)",
                    fontWeight: 500,
                  }}
                >
                  NEARU Soul Engine™
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 11,
                    padding: "4px 8px",
                    borderRadius: 9999,
                    background: "var(--blue-dim)",
                    color: "var(--blue)",
                    fontWeight: 500,
                  }}
                >
                  NearuVibe™ active
                </span>
              </div>
              <video
                src="/videos/hr-nearu.mp4"
                controls
                preload="metadata"
                style={{ width: "100%", display: "block", background: "#000" }}
              />
              <div
                style={{
                  padding: "12px 16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "var(--text-dim)",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  Detected emotion
                  <span
                    style={{
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 9999,
                      background: "var(--blue-dim)",
                      color: "var(--blue)",
                      fontWeight: 600,
                      border: "1px solid var(--blue-border)",
                    }}
                  >
                    Vulnerable
                  </span>
                </span>
                <span>84% confidence</span>
              </div>
            </div>
          </div>
          <p
            style={{
              marginTop: 10,
              fontSize: 12,
              color: "var(--text-dim)",
              textAlign: "center",
            }}
          >
            🎬 Real avatar interaction — recorded with Kaltura Immersive Agents
          </p>
        </>
      )}
    </section>
  );
}
