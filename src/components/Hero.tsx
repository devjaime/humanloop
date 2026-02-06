"use client";

import { useState, useEffect } from "react";

const orchestrationFlow = [
  { agent: "DetectorAgent", action: "Filtracion detectada via sensor IoT > derivar a operador gasfiter en terreno" },
  { agent: "LogisticsAgent", action: "4 entregas optimizadas en Providencia > enrutar a operador delivery disponible" },
  { agent: "LegalAgent", action: "Documento listo para firma > coordinar operador legal en notaria" },
  { agent: "EventAgent", action: "Presentacion corporativa requiere presencia > asignar operador presentador" },
  { agent: "SupportAgent", action: "Instalacion electrica planificada > conectar con operador electricista SEC" },
  { agent: "ContentAgent", action: "Sesion fotografica requerida en terreno > enrutar a operador fotografo" },
];

export default function Hero() {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const msg = orchestrationFlow[currentMsg];
    const fullText = `[${msg.agent}] ${msg.action}`;
    let charIndex = 0;

    if (isTyping) {
      const interval = setInterval(() => {
        if (charIndex <= fullText.length) {
          setDisplayText(fullText.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsTyping(false);
            setTimeout(() => {
              setCurrentMsg((prev) => (prev + 1) % orchestrationFlow.length);
              setIsTyping(true);
              setDisplayText("");
            }, 500);
          }, 2000);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [currentMsg, isTyping]);

  const bracketEnd = displayText.indexOf('] ');
  const agentPart = bracketEnd > -1 ? displayText.substring(0, bracketEnd + 1) : displayText;
  const actionPart = bracketEnd > -1 ? displayText.substring(bracketEnd + 2) : "";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-success/3 rounded-full blur-3xl" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-scan-line" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-secondary/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-mono text-text-secondary">HUMAN-IN-THE-LOOP</span>
            <span className="text-xs text-text-muted">|</span>
            <span className="text-xs font-mono text-secondary">Arquitectura MCP + Skills</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-text-primary">IA que orquesta.</span>
            <br />
            <span className="bg-gradient-to-r from-secondary via-electric-light to-success bg-clip-text text-transparent animate-gradient">
              Humanos que ejecutan.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-4 leading-relaxed">
            <span className="text-secondary font-semibold">HumanLoop</span> es una plataforma de
            orquestacion inteligente donde agentes de IA coordinan, planifican y optimizan tareas
            del mundo real, y operadores humanos verificados las ejecutan con criterio y responsabilidad.
          </p>
          <p className="text-base text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            La IA no reemplaza personas. Amplifica su trabajo. Los humanos mantienen
            el juicio, la responsabilidad y la accion. La IA aporta velocidad,
            analisis y coordinacion.
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-surface-card border border-secondary/20 rounded-xl overflow-hidden shadow-2xl shadow-secondary/5">
              <div className="flex items-center gap-2 px-4 py-3 bg-primary/50 border-b border-secondary/10">
                <div className="w-3 h-3 rounded-full bg-accent/80" />
                <div className="w-3 h-3 rounded-full bg-gold/80" />
                <div className="w-3 h-3 rounded-full bg-success/80" />
                <span className="ml-2 text-xs font-mono text-text-muted">humanloop-orchestrator ~ task-routing</span>
              </div>
              <div className="p-6 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-mono text-sm mt-0.5">&gt;</span>
                  <div className="font-mono text-sm text-text-primary min-h-[48px]">
                    <span className="text-text-muted">{agentPart} </span>
                    <span className="text-electric-light">{actionPart}</span>
                    {isTyping && <span className="inline-block w-2 h-4 bg-secondary ml-1 animate-pulse" />}
                  </div>
                </div>
                {!isTyping && (
                  <div className="mt-3 pl-6 text-xs font-mono text-success animate-fade-in-up">
                    Operador asignado. Tarea enrutada. Esperando confirmacion humana...
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#como-funciona" className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-electric text-white font-bold text-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:-translate-y-1">
              <span className="relative z-10">Ver como funciona</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary to-electric opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            </a>
            <a href="#arquitectura" className="px-8 py-4 rounded-xl border border-secondary/30 text-secondary font-semibold text-lg hover:bg-secondary/10 transition-all duration-300">
              Arquitectura tecnica
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "6", label: "Agentes especializados" },
              { value: "12+", label: "Skills reutilizables" },
              { value: "HITL", label: "Supervision humana" },
              { value: "16", label: "Regiones de Chile" },
            ].map((stat, i) => (
              <div key={i} className="bg-surface-card/50 border border-secondary/10 rounded-xl p-4 hover:border-secondary/30 transition-all">
                <div className="text-2xl font-bold text-secondary font-mono">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
