import { useRef, useState, useCallback, useEffect } from "react";
import { SCENARIOS } from "../data/scenarios";
import { AgentCard } from "./AgentCard";
import type { ChatMessage } from "./ChatArea";

type PlaybackPhase = "idle" | "user-typing" | "intercept" | "std-response" | "smart-response" | "done";

const TAB_ICONS: Record<number, string> = {
  0: "🔴",
  1: "🛡️",
  2: "💬",
  3: "💼",
  4: "📚",
};

const TAB_LABELS: Record<number, string> = {
  0: "HR Onboarding",
  1: "CS Insurance",
  2: "Support",
  3: "Sales",
  4: "Training",
};

type DemoSectionProps = {
  sectionRef: React.RefObject<HTMLElement>;
  onStatusChange: (status: "responding" | "listening") => void;
  selectedScenarioId: number | null;
  onSelectScenario: (id: number) => void;
};

function typeWriter(
  fullText: string,
  onUpdate: (visibleLength: number) => void,
  onComplete: () => void
): () => void {
  let index = 0;
  let cancelled = false;

  function schedule() {
    if (cancelled || index >= fullText.length) {
      onComplete();
      return;
    }
    index += 1;
    onUpdate(index);
    const delay = 16 + Math.random() * 12;
    const t = setTimeout(schedule, delay);
    return () => clearTimeout(t);
  }

  const t = setTimeout(schedule, 16 + Math.random() * 12);
  return () => {
    cancelled = true;
    clearTimeout(t);
  };
}

export function DemoSection({ sectionRef, onStatusChange, selectedScenarioId, onSelectScenario }: DemoSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [csSubIndex, setCsSubIndex] = useState<0 | 1>(0);
  const [salesSubIndex, setSalesSubIndex] = useState<0 | 1>(0);
  const [playPhase, setPlayPhase] = useState<PlaybackPhase>("idle");
  const [userVisibleLength, setUserVisibleLength] = useState(0);
  const [stdVisibleLength, setStdVisibleLength] = useState(0);
  const [smartVisibleLength, setSmartVisibleLength] = useState(0);
  const [interceptActive, setInterceptActive] = useState(false);
  const [nearuInterceptActive, setNearuInterceptActive] = useState(false);
  const [emotionBarsVisible, setEmotionBarsVisible] = useState(false);
  const [emotionPillRevealed, setEmotionPillRevealed] = useState(false);
  const cancelRef = useRef<(() => void)[]>([]);

  const scenarioIndex =
    activeTab === 1 ? 1 + csSubIndex : activeTab === 2 ? 3 : activeTab === 3 ? 4 + salesSubIndex : activeTab === 4 ? 6 : activeTab;
  const scenarioForPlayback = SCENARIOS[scenarioIndex];

  const resetDemo = useCallback(() => {
    cancelRef.current.forEach((c) => c());
    cancelRef.current = [];
    setPlayPhase("idle");
    setUserVisibleLength(0);
    setStdVisibleLength(0);
    setSmartVisibleLength(0);
    setInterceptActive(false);
    setNearuInterceptActive(false);
    setEmotionBarsVisible(false);
    setEmotionPillRevealed(false);
    onStatusChange("responding");
  }, [onStatusChange]);

  useEffect(() => {
    const next = selectedScenarioId ?? 0;
    setActiveTab(next);
    if (next !== 1) setCsSubIndex(0);
    if (next !== 3) setSalesSubIndex(0);
  }, [selectedScenarioId]);

  useEffect(() => {
    if (selectedScenarioId == null) return;
    if (activeTab !== selectedScenarioId) setActiveTab(selectedScenarioId);
  }, [activeTab, selectedScenarioId]);

  const handleTabChange = useCallback(
    (tab: number) => {
      setActiveTab(tab);
      onSelectScenario(tab);
      resetDemo();
    },
    [resetDemo, onSelectScenario]
  );

  const buildMessages = useCallback(() => {
    const userFull = scenarioForPlayback?.user ?? "";
    const userLen = playPhase === "idle" ? 0 : userVisibleLength;
    const userMsg: ChatMessage | null =
      userLen > 0
        ? {
            id: "user",
            type: "user",
            text: userFull,
            visibleLength: Math.min(userLen, userFull.length),
          }
        : null;
    const stdFull = scenarioForPlayback?.stdResponse ?? "";
    const stdLen = stdVisibleLength;
    const stdMsg: ChatMessage | null =
      stdLen > 0
        ? {
            id: "std",
            type: "agent",
            text: stdFull,
            visibleLength: Math.min(stdLen, stdFull.length),
          }
        : null;
    const smartFull = scenarioForPlayback?.smartResponse ?? "";
    const smartLen = smartVisibleLength;
    const smartMsg: ChatMessage | null =
      smartLen > 0
        ? {
            id: "smart",
            type: "agent",
            text: smartFull,
            visibleLength: Math.min(smartLen, smartFull.length),
            highlightWords: true,
          }
        : null;
    const stdMessages: ChatMessage[] = [userMsg, stdMsg].filter(Boolean) as ChatMessage[];
    const smartMessages: ChatMessage[] = [userMsg, smartMsg].filter(Boolean) as ChatMessage[];
    return { stdMessages, smartMessages };
  }, [scenarioForPlayback, playPhase, userVisibleLength, stdVisibleLength, smartVisibleLength]);

  const { stdMessages, smartMessages } = buildMessages();

  const playScenario = useCallback(() => {
    if (!scenarioForPlayback || playPhase !== "idle") return;
    cancelRef.current.forEach((c) => c());
    cancelRef.current = [];
    onStatusChange("listening");
    setPlayPhase("user-typing");

    const userFull = scenarioForPlayback.user;
    const stdFull = scenarioForPlayback.stdResponse;
    const smartFull = scenarioForPlayback.smartResponse;

    const cancel1 = typeWriter(userFull, setUserVisibleLength, () => {
      setUserVisibleLength(userFull.length);
      setInterceptActive(true);
      setTimeout(() => {
        setNearuInterceptActive(true);
        setEmotionBarsVisible(true);
        setTimeout(() => setEmotionPillRevealed(true), 600);
      }, 400);
      setTimeout(() => {
        setPlayPhase("std-response");
        onStatusChange("responding");
        const cancel2 = typeWriter(stdFull, setStdVisibleLength, () => {
          setStdVisibleLength(stdFull.length);
          setTimeout(() => {
            setPlayPhase("smart-response");
            const cancel3 = typeWriter(smartFull, setSmartVisibleLength, () => {
              setSmartVisibleLength(smartFull.length);
              setPlayPhase("done");
            });
            cancelRef.current.push(cancel3);
          }, 400);
        });
        cancelRef.current.push(cancel2);
      }, 500);
    });
    cancelRef.current.push(cancel1);
  }, [scenarioForPlayback, playPhase, onStatusChange]);

  const standardInterceptText = interceptActive ? "Processing request…" : "Awaiting input…";
  const nearuInterceptText = nearuInterceptActive ? (scenarioForPlayback?.intercept ?? "") : "NearuVibe™ monitoring all signals…";

  return (
    <section ref={sectionRef} id="demo" className="section reveal" data-section="demo">
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 8 }}>
          LIVE SCENARIO COMPARISON
        </div>
        <h2 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>
          Same user. Same question.{" "}
          <span style={{ color: "var(--blue)", fontWeight: 700 }}>Completely different experience.</span>
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted)" }}>
          Select a scenario, then press Play to watch both agents respond.
        </p>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            display: "inline-flex",
            padding: 4,
            background: "var(--bg-panel)",
            borderRadius: 9999,
            border: "1px solid var(--border)",
            gap: 2,
          }}
        >
          {[0, 1, 2, 3, 4].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => handleTabChange(tab)}
              style={{
                padding: "8px 16px",
                borderRadius: 9999,
                border: "none",
                background: activeTab === tab ? "var(--blue)" : "transparent",
                color: activeTab === tab ? "#0d1117" : "var(--text)",
                fontSize: 14,
                fontWeight: activeTab === tab ? 600 : 400,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {TAB_ICONS[tab]} {TAB_LABELS[tab]}
            </button>
          ))}
        </div>
        {activeTab === 1 && (
          <div
            style={{
              marginTop: 10,
              display: "flex",
              gap: 6,
            }}
          >
            <button
              type="button"
              onClick={() => {
                setCsSubIndex(0);
                resetDemo();
              }}
              style={{
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 20,
                border: `1px solid ${csSubIndex === 0 ? "var(--blue-border)" : "var(--border)"}`,
                background: csSubIndex === 0 ? "var(--blue-dim)" : "transparent",
                color: csSubIndex === 0 ? "var(--blue)" : "var(--text-muted)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Claim Frustration
            </button>
            <button
              type="button"
              onClick={() => {
                setCsSubIndex(1);
                resetDemo();
              }}
              style={{
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 20,
                border: `1px solid ${csSubIndex === 1 ? "var(--blue-border)" : "var(--border)"}`,
                background: csSubIndex === 1 ? "var(--blue-dim)" : "transparent",
                color: csSubIndex === 1 ? "var(--blue)" : "var(--text-muted)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Add Dependent
            </button>
          </div>
        )}
        {activeTab === 3 && (
          <div
            style={{
              marginTop: 10,
              display: "flex",
              gap: 6,
            }}
          >
            <button
              type="button"
              onClick={() => {
                setSalesSubIndex(0);
                resetDemo();
              }}
              style={{
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 20,
                border: `1px solid ${salesSubIndex === 0 ? "var(--blue-border)" : "var(--border)"}`,
                background: salesSubIndex === 0 ? "var(--blue-dim)" : "transparent",
                color: salesSubIndex === 0 ? "var(--blue)" : "var(--text-muted)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Deal Objection
            </button>
            <button
              type="button"
              onClick={() => {
                setSalesSubIndex(1);
                resetDemo();
              }}
              style={{
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 20,
                border: `1px solid ${salesSubIndex === 1 ? "var(--blue-border)" : "var(--border)"}`,
                background: salesSubIndex === 1 ? "var(--blue-dim)" : "transparent",
                color: salesSubIndex === 1 ? "var(--blue)" : "var(--text-muted)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              CX Discovery
            </button>
          </div>
        )}
      </div>

      <div
        className="demo-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <AgentCard
            variant="standard"
            statusLabel="No emotion detection"
            statusVariant="ghost"
            interceptText={standardInterceptText}
            interceptActive={interceptActive}
            bottomLeft="Detected emotion: —"
            bottomRight="No confidence data"
            messages={stdMessages}
            scenario={null}
            emotionBarsVisible={false}
          />
        </div>
        <div style={{ minWidth: 0 }}>
          <AgentCard
            variant="nearu"
            statusLabel="NearuVibe™ monitoring"
            statusVariant="blue"
            interceptText={nearuInterceptText}
            interceptActive={nearuInterceptActive}
            bottomLeft="Detected emotion"
            bottomRight={
              emotionPillRevealed && scenarioForPlayback ? (
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 9999,
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                    className={scenarioForPlayback.pillClass}
                  >
                    {scenarioForPlayback.pillLabel}
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>{scenarioForPlayback.confidence}</span>
                </span>
              ) : (
                "—"
              )
            }
            messages={smartMessages}
            scenario={playPhase !== "idle" ? scenarioForPlayback : null}
            emotionBarsVisible={emotionBarsVisible}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={playPhase === "idle" ? playScenario : undefined}
          disabled={playPhase !== "idle" && playPhase !== "done"}
        >
          {playPhase === "idle" && "▶ Play Scenario"}
          {playPhase !== "idle" && playPhase !== "done" && "▶ Playing…"}
          {playPhase === "done" && "✓ Done"}
        </button>
        <button type="button" className="btn btn-outline" onClick={resetDemo}>
          ↺ Reset
        </button>
        <span style={{ fontSize: 13, color: "var(--text-dim)" }}>
          Select a scenario above, then play to see the difference between standard and NEARU-enhanced responses.
        </span>
      </div>
    </section>
  );
}
