"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Scenarios() {
  const { language, t } = useLanguage();
  const [activeScenario, setActiveScenario] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);

  const scenarios = t.scenarios.items;

  useEffect(() => {
    setVisibleMessages(0);
    const messages = 5; // Fixed number of messages per scenario
    let current = 0;
    const interval = setInterval(() => {
      if (current < messages) {
        setVisibleMessages(current + 1);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [activeScenario]);

  const scenario = scenarios[activeScenario];
  const orchestratingText = language === "en" ? "orchestrating..." : "orquestando...";
  const cycleCompleteText = language === "en" ? "CYCLE COMPLETED" : "CICLO COMPLETADO";
  const orchestratorText = language === "en" ? "ORCHESTRATOR" : "ORQUESTADOR";

  // Build narrative from scenario data
  const narrative = [
    { speaker: "ai", text: scenario.action },
    { speaker: "system", text: `${language === "en" ? "HITL activated. Routing to operator..." : "HITL activado. Enrutando a operador..."} ${scenario.operator}` },
    { speaker: "human", text: scenario.response },
    { speaker: "ai", text: language === "en" ? "Feedback received. Updating model..." : "Feedback recibido. Actualizando modelo..." },
    { speaker: "result", text: scenario.feedback },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-accent/20 text-xs font-mono text-accent mb-4">
            {t.scenarios.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">{t.scenarios.title1} </span>
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              {t.scenarios.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {t.scenarios.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveScenario(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeScenario === i
                  ? "bg-gradient-to-r from-secondary to-electric text-white shadow-lg shadow-secondary/20"
                  : "bg-surface-card border border-secondary/10 text-text-secondary hover:border-secondary/30"
              }`}
            >
              <span className="mr-2">🤖</span>
              {s.agent}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-card border border-secondary/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-secondary/10 bg-gradient-to-r from-surface-card to-primary/50">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-xl border-2 border-surface-card">🤖</div>
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xl border-2 border-surface-card">👤</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">{scenario.agent}</h3>
                    <p className="text-xs text-text-muted">{scenario.operator}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-secondary/5 text-secondary">{scenario.skill}</span>
              </div>
            </div>

            <div className="p-6 space-y-4 min-h-[350px]">
              {narrative.map((msg, i) => {
                if (i >= visibleMessages) return null;
                const isAI = msg.speaker === "ai";
                const isSystem = msg.speaker === "system";
                const isResult = msg.speaker === "result";

                return (
                  <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    {isSystem ? (
                      <div className="text-center py-2">
                        <span className="text-xs font-mono text-text-muted bg-surface/50 px-4 py-1.5 rounded-full border border-secondary/5">
                          {orchestratorText}: {msg.text}
                        </span>
                      </div>
                    ) : isResult ? (
                      <div className="bg-success/5 border border-success/20 rounded-xl p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs font-mono text-success font-bold">{cycleCompleteText}</span>
                        </div>
                        <p className="text-sm text-text-secondary">{msg.text}</p>
                      </div>
                    ) : (
                      <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${isAI ? "bg-secondary/10 border border-secondary/20 rounded-tl-sm" : "bg-accent/10 border border-accent/20 rounded-tr-sm"}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm">{isAI ? "🤖" : "👤"}</span>
                            <span className={`text-xs font-mono font-bold ${isAI ? "text-secondary" : "text-accent"}`}>
                              {isAI ? scenario.agent : scenario.operator}
                            </span>
                            <span className="text-[10px] text-text-muted">
                              {isAI ? `(${t.scenarios.legend.agent})` : `(${t.scenarios.legend.operator})`}
                            </span>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {visibleMessages < narrative.length && (
                <div className="flex items-center gap-2 text-text-muted">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: "0s" }} />
                    <div className="w-2 h-2 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-2 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <span className="text-xs font-mono">{orchestratingText}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
