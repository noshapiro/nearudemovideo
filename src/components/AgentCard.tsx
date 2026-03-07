import { useState, type ReactNode } from "react";
import { EmotionBars } from "./EmotionBars";
import { ChatArea, type ChatMessage } from "./ChatArea";
import type { Scenario } from "../data/scenarios";

const NEARU_AVATAR_SVG = "/nearu-avatar.svg";
const NEARU_AVATAR_PNG = "/nearu-avatar.png";
const STANDARD_AVATAR_PNG = "/kaltura-avatar.png";
const STANDARD_AVATAR_SVG = "/kaltura-avatar.svg";

type AgentCardProps = {
  variant: "standard" | "nearu";
  statusLabel: string;
  statusVariant: "ghost" | "blue";
  interceptText: string;
  interceptActive: boolean;
  bottomLeft: ReactNode;
  bottomRight: ReactNode;
  messages: ChatMessage[];
  scenario: Scenario | null;
  emotionBarsVisible: boolean;
  avatarEmotion?: "neutral" | "empathetic";
};

function StandardAvatar() {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(STANDARD_AVATAR_PNG);
  const handleError = () => {
    setAvatarSrc((prev) => (prev === STANDARD_AVATAR_PNG ? STANDARD_AVATAR_SVG : null));
  };

  if (avatarSrc) {
    return (
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
        }}
      >
        <img
          src={avatarSrc}
          alt="Kaltura Agent"
          width={52}
          height={52}
          style={{ width: 52, height: 52, objectFit: "cover", display: "block" }}
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="25" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1" />
      <circle cx="20" cy="22" r="2.5" fill="#6b7a96" />
      <circle cx="32" cy="22" r="2.5" fill="#6b7a96" />
      <path d="M18 32 Q26 38 34 32" stroke="#6b7a96" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function NearuAvatar({ emotion = "neutral" }: { emotion?: "neutral" | "empathetic" }) {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(NEARU_AVATAR_PNG);
  const handleAvatarError = () => {
    setAvatarSrc((prev) => (prev === NEARU_AVATAR_PNG ? NEARU_AVATAR_SVG : null));
  };

  const avatarSize = 52;
  const ringOffset = 4;

  if (avatarSrc) {
    return (
      <div
        style={{
          position: "relative",
          width: avatarSize,
          height: avatarSize,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -ringOffset,
            left: -ringOffset,
            width: avatarSize + ringOffset * 2,
            height: avatarSize + ringOffset * 2,
            borderRadius: "50%",
            border: "2px solid var(--blue-border)",
            opacity: 0.5,
            animation: "avatar-pulse 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: avatarSize,
            height: avatarSize,
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid var(--blue-border)",
            background: "var(--bg-card)",
          }}
        >
          <img
            src={avatarSrc}
            alt="NEARU character"
            width={avatarSize}
            height={avatarSize}
            style={{ width: avatarSize, height: avatarSize, objectFit: "cover", display: "block" }}
            onError={handleAvatarError}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: avatarSize,
        height: avatarSize,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -ringOffset,
          left: -ringOffset,
          width: avatarSize + ringOffset * 2,
          height: avatarSize + ringOffset * 2,
          borderRadius: "50%",
          border: "2px solid var(--blue-border)",
          opacity: 0.5,
          animation: "avatar-pulse 2s ease-in-out infinite",
        }}
      />
      <svg width={avatarSize} height={avatarSize} viewBox="0 0 52 52" fill="none" style={{ position: "relative", zIndex: 1 }}>
        <circle cx="26" cy="26" r="25" fill="var(--bg-card)" stroke="var(--blue-border)" strokeWidth="1" />
        <circle cx="20" cy="22" r="2.5" fill="#3b9eff" />
        <circle cx="32" cy="22" r="2.5" fill="#3b9eff" />
        <circle cx="21" cy="21" r="0.6" fill="white" opacity={0.9} />
        <circle cx="33" cy="21" r="0.6" fill="white" opacity={0.9} />
        <path
          d={emotion === "empathetic" ? "M18 31 Q26 37 34 31" : "M18 32 Q26 38 34 32"}
          stroke="#3b9eff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function AgentCard({
  variant,
  statusLabel,
  statusVariant,
  interceptText,
  interceptActive,
  bottomLeft,
  bottomRight,
  messages,
  scenario,
  emotionBarsVisible,
  avatarEmotion = "neutral",
}: AgentCardProps) {
  const isNearu = variant === "nearu";

  return (
    <div
      style={{
        background: "var(--bg-panel)",
        border: `1px solid ${isNearu ? "var(--blue-border)" : "var(--border)"}`,
        borderRadius: "var(--radius-lg)",
        boxShadow: isNearu ? "0 0 0 1px var(--blue-glow)" : undefined,
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
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Agent {isNearu ? "B" : "A"}</span>
        <span
          style={{
            fontSize: 11,
            padding: "4px 8px",
            borderRadius: "var(--radius-sm)",
            background: isNearu ? "var(--blue-dim)" : "var(--bg-card)",
            color: isNearu ? "var(--blue)" : "var(--text-muted)",
            fontWeight: 500,
          }}
        >
          {isNearu ? "NEARU Soul Engine™" : "Standard Kaltura Avatar"}
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11,
            padding: "4px 8px",
            borderRadius: 9999,
            background: statusVariant === "blue" ? "var(--blue-dim)" : "transparent",
            color: statusVariant === "blue" ? "var(--blue)" : "var(--text-muted)",
            fontWeight: 500,
          }}
        >
          {statusLabel}
        </span>
      </div>

      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
          {isNearu ? <NearuAvatar emotion={avatarEmotion} /> : <StandardAvatar />}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>Kaltura Agent</span>
              {isNearu && (
                <span
                  style={{
                    fontSize: 10,
                    padding: "2px 6px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--blue-dim)",
                    color: "var(--blue)",
                    fontWeight: 600,
                  }}
                >
                  NEARU
                </span>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, fontSize: 12, color: "var(--text-muted)" }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: isNearu ? "var(--green)" : "var(--text-dim)",
                  animation: isNearu ? "dot-pulse 1.2s ease-in-out infinite" : undefined,
                }}
              />
              {isNearu ? "NearuVibe™ monitoring" : "No emotion detection"}
            </div>
            {isNearu && scenario ? (
              <EmotionBars values={scenario.emotion} visible={emotionBarsVisible} />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 11,
                  color: "var(--text-dim)",
                  marginTop: 2,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden>
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M8 7v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="8" cy="5" r="0.7" fill="currentColor" />
                </svg>
                Emotional state: unknown
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            padding: "8px 12px",
            borderRadius: "var(--radius-sm)",
            background: interceptActive
              ? isNearu
                ? "var(--blue-glow)"
                : "var(--bg-card)"
              : isNearu
                ? "var(--blue-glow)"
                : "var(--bg-card)",
            border: `1px solid ${interceptActive && isNearu ? "var(--blue-border)" : "var(--border)"}`,
            marginBottom: 12,
            fontSize: 12,
            color: isNearu ? "var(--blue)" : "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            minHeight: 36,
          }}
        >
          <span className="intercept-text" style={{ flex: 1 }}>
            {interceptText}
          </span>
          {isNearu && (
            <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 14, flexShrink: 0 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 2,
                    height: "100%",
                    background: "var(--blue)",
                    borderRadius: 1,
                    animation: "waveform 0.8s ease-in-out infinite",
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <ChatArea messages={messages} isNearu={isNearu} />

        <div
          style={{
            marginTop: 12,
            paddingTop: 12,
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 12,
            color: "var(--text-dim)",
          }}
        >
          <span>{bottomLeft}</span>
          <span>{bottomRight}</span>
        </div>
      </div>
    </div>
  );
}
