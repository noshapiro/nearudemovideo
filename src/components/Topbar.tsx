type TopbarProps = {
  status: "responding" | "listening";
};

export function Topbar({ status }: TopbarProps) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 24px",
        background: "rgba(13, 17, 23, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--text)" }}>
        Live Session — Scenario Demo
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 500,
            padding: "6px 12px",
            borderRadius: 9999,
            background: status === "listening" ? "var(--amber-dim)" : "var(--green-dim)",
            color: status === "listening" ? "var(--amber)" : "var(--green)",
            animation: status === "listening" ? "dot-pulse 1.2s ease-in-out infinite" : undefined,
          }}
        >
          <span style={{ fontSize: 8, lineHeight: 1 }}>●</span>
          {status === "listening" ? "Listening" : "Responding"}
        </span>
        <button
          type="button"
          aria-label="Search"
          style={{
            width: 36,
            height: 36,
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border)",
            background: "var(--bg-panel)",
            color: "var(--text-muted)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M11 7a4 4 0 11-8 0 4 4 0 018 0 4 4 0 01-8 0zM7 11a6 6 0 0012 0l-2-2a4 4 0 10-6 0L7 11z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
