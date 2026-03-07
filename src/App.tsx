import { useRef, useState, useCallback, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Hero } from "./components/Hero";
import { DemoSection } from "./components/DemoSection";
import { QuickTools } from "./components/QuickTools";
import { Metrics } from "./components/Metrics";
import { Pipeline } from "./components/Pipeline";
import { CTA } from "./components/CTA";

function useSectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section.reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const demoRef = useRef<HTMLElement | null>(null);
  const quickToolsRef = useRef<HTMLElement | null>(null);
  const metricsRef = useRef<HTMLElement | null>(null);
  const pipelineRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLElement | null>(null);

  const [topbarStatus, setTopbarStatus] = useState<"responding" | "listening">("responding");
  const [selectedScenarioId, setSelectedScenarioId] = useState<number | null>(null);

  const sectionRefs = {
    hero: heroRef,
    demo: demoRef,
    quickTools: quickToolsRef,
    metrics: metricsRef,
    pipeline: pipelineRef,
    cta: ctaRef,
  };

  const scrollToPipeline = useCallback(() => {
    pipelineRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useSectionReveal();

  return (
    <div className="app-shell">
      <Sidebar sectionRefs={sectionRefs} />
      <div className="main-content">
        <Topbar status={topbarStatus} />
        <main className="main-scroll">
          <Hero sectionRef={heroRef} onViewArchitecture={scrollToPipeline} />
          <DemoSection
            sectionRef={demoRef}
            onStatusChange={setTopbarStatus}
            selectedScenarioId={selectedScenarioId}
            onSelectScenario={setSelectedScenarioId}
          />
          <QuickTools
            sectionRef={quickToolsRef}
            selectedId={selectedScenarioId}
            onSelect={(id) => setSelectedScenarioId(id)}
          />
          <Metrics sectionRef={metricsRef} />
          <Pipeline sectionRef={pipelineRef} />
          <CTA sectionRef={ctaRef} onViewArchitecture={scrollToPipeline} />
        </main>
      </div>
    </div>
  );
}
