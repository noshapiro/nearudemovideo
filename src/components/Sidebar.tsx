import { useState, type RefObject } from "react";

const navItems = [
  { id: "live-session", label: "Live Session", icon: LiveIcon, active: true },
  { id: "impact-metrics", label: "Impact Metrics", icon: ChartIcon },
  { id: "architecture", label: "Architecture", icon: ArchIcon },
  { id: "start-pilot", label: "Start Pilot", icon: RocketIcon },
];

function LiveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="4" fill="currentColor" />
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 12v-2h3v2H2zm5-4v6h3V8H7zm5-4v10h3V4h-3z" fill="currentColor" />
    </svg>
  );
}
function ArchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 14h12v-2H2v2zm0-4h12V8H2v2zm2-6h8V2h-8v2z" fill="currentColor" />
    </svg>
  );
}
function RocketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 1L6 5H4l2 8 2-8H8L8 1z" fill="currentColor" />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      <path d="M13.5 8a1.5 1.5 0 01-.5 1.1l.7 1.9-1.4.5-.7-1.9a2 2 0 01-1.2 0l-.7 1.9-1.4-.5.7-1.9A1.5 1.5 0 017 8a1.5 1.5 0 01.9-1.4l-.7-1.9 1.4-.5.7 1.9a2 2 0 011.2 0l.7-1.9 1.4.5-.7 1.9c.3.2.5.5.5.9z" fill="currentColor" />
    </svg>
  );
}

type SectionRefs = {
  hero: RefObject<HTMLElement | null>;
  demo: RefObject<HTMLElement | null>;
  quickTools: RefObject<HTMLElement | null>;
  metrics: RefObject<HTMLElement | null>;
  pipeline: RefObject<HTMLElement | null>;
  cta: RefObject<HTMLElement | null>;
};

type SidebarProps = {
  sectionRefs: SectionRefs;
};

const LOGO_SVG = "/nearu-logo.svg";
const LOGO_PNG = "/nearu-logo.png";

export function Sidebar({ sectionRefs }: SidebarProps) {
  const [logoSrc, setLogoSrc] = useState<string | null>(LOGO_SVG);
  const handleLogoError = () => {
    setLogoSrc((prev) => (prev === LOGO_SVG ? LOGO_PNG : null));
  };
  const scrollTo = (key: keyof SectionRefs) => {
    const ref = sectionRefs[key];
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      className="sidebar"
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        background: "var(--bg-panel)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        padding: "24px 0",
      }}
    >
      <div style={{ padding: "0 20px" }}>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }} aria-label="NEARU × Kaltura">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="NEARU × Kaltura"
              width={120}
              height={28}
              style={{ height: 28, width: "auto", objectFit: "contain" }}
              onError={handleLogoError}
            />
          ) : (
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span style={{ color: "var(--blue)", fontWeight: 700, fontSize: 18 }}>NEARU</span>
              <sup style={{ color: "var(--text-muted)", fontSize: 10, fontWeight: 500 }}>× Kaltura</sup>
            </div>
          )}
        </a>
      </div>

      <div style={{ marginTop: 32, padding: "0 12px" }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: 10 }}>
          WORKSPACE
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map((item, i) => {
            const isActive = item.active;
            const sectionKey = i === 0 ? "demo" : i === 1 ? "metrics" : i === 2 ? "pipeline" : "cta";
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(sectionKey)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  border: "none",
                  borderRadius: "var(--radius-sm)",
                  background: isActive ? "var(--blue-dim)" : "transparent",
                  color: isActive ? "var(--blue)" : "var(--text)",
                  fontSize: 14,
                  fontWeight: isActive ? 500 : 400,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <item.icon />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div style={{ marginTop: 24, padding: "0 12px" }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: 10 }}>
          TOOLS
        </div>
        <button
          type="button"
          onClick={() => scrollTo("pipeline")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            border: "none",
            borderRadius: "var(--radius-sm)",
            background: "transparent",
            color: "var(--text)",
            fontSize: 14,
            cursor: "pointer",
            fontFamily: "inherit",
            textAlign: "left",
            width: "100%",
          }}
        >
          <SettingsIcon />
          Settings
        </button>
      </div>

      <div
        style={{
          marginTop: "auto",
          padding: "20px 20px 0",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-muted)",
          }}
        >
          K
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>Kaltura Demo</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Partner Preview</div>
        </div>
      </div>
    </aside>
  );
}
