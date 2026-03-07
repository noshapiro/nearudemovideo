import { useState, type RefObject } from "react";

const SIDEBAR_LOGO_SIZE = 48;

function SidebarFooter() {
  const [logoError, setLogoError] = useState(false);
  return (
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
          width: SIDEBAR_LOGO_SIZE,
          height: SIDEBAR_LOGO_SIZE,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
        }}
      >
        {!logoError ? (
          <img
            src="/kaltura-logo.png"
            alt="Kaltura"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: 4,
            }}
            onError={() => setLogoError(true)}
          />
        ) : (
          <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text-muted)" }}>K</span>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>Kaltura Demo</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Partner Preview</div>
      </div>
    </div>
  );
}

const navItems = [
  { id: "live-session", label: "Live Session", icon: LiveIcon, active: true },
  { id: "impact-metrics", label: "Impact Metrics", icon: ChartIcon },
  { id: "architecture", label: "Architecture", icon: ArchIcon },
  { id: "start-pilot", label: "Start Pilot", icon: PlusIcon },
];

function LiveIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2.5" fill="currentColor" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 11 L5 7 L8 9 L12 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ArchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="6" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="3" width="5" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5.5V8l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      <div style={{ padding: "0 20px", marginBottom: 32 }}>
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
      <div style={{ padding: "0 12px" }}>
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
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <span style={{ opacity: isActive ? 1 : 0.6, display: "flex", alignItems: "center" }}>
                  <item.icon />
                </span>
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
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
            textAlign: "left",
            width: "100%",
            opacity: 0.6,
          }}
        >
          <SettingsIcon />
          Settings
        </button>
      </div>

      <SidebarFooter />
    </aside>
  );
}
