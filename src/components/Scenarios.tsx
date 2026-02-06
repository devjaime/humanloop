"use client";

import { useState, useEffect } from "react";

const scenarios = [
  {
    id: "presentacion",
    aiName: "EventAgent",
    aiAvatar: "🤖",
    humanRole: "Operador presentador",
    humanName: "Valentina R.",
    humanAvatar: "🎭",
    title: "IA prepara, operador presenta",
    narrative: [
      { speaker: "ai", text: "He analizado la audiencia y preparado un guion con datos de ventas Q4. La presentacion requiere presencia humana para conectar con el directorio." },
      { speaker: "system", text: "HITL activado. Enrutando a operador presentador en Santiago Centro... Valentina R. asignada. Experiencia: corporativo." },
      { speaker: "human", text: "Guion recibido y revisado. Ajuste el tono para esta audiencia. Estare lista en la sala de directorio a las 10:00." },
      { speaker: "ai", text: "Perfecto. He actualizado las diapositivas con tus ajustes. Tu criterio sobre el tono es valioso, lo incorporo al modelo." },
      { speaker: "result", text: "Presentacion completada. Feedback del directorio: positivo. Valentina compensada. IA actualiza perfil de audiencia para futuras coordinaciones." },
    ],
    tags: ["EventSkill", "HITL", "Colaboracion"],
  },
  {
    id: "gasfiter",
    aiName: "DiagnosticAgent",
    aiAvatar: "🏠",
    humanRole: "Operador gasfiter",
    humanName: "Roberto C.",
    humanAvatar: "🔧",
    title: "IA diagnostica, operador repara",
    narrative: [
      { speaker: "ai", text: "Sensor de humedad detecta anomalia. Analisis de imagen sugiere union T defectuosa. Requiere intervencion fisica de operador certificado." },
      { speaker: "system", text: "HITL activado. Enrutando a operador gasfiter en Las Condes... Roberto C. disponible. Certificacion SEC vigente." },
      { speaker: "human", text: "Diagnostico de IA recibido. Concuerdo con el analisis pero voy a verificar tambien la llave de paso. Llevo repuestos extra por precaucion." },
      { speaker: "ai", text: "Buena decision Roberto. Te envio el plano de instalacion. Tu experiencia en terreno complementa mi diagnostico remoto." },
      { speaker: "result", text: "Reparacion completada. Roberto detecto un problema adicional que la IA no vio. Feedback incorporado al modelo de diagnostico. Operador compensado." },
    ],
    tags: ["DiagnosticSkill", "HITL", "Feedback"],
  },
  {
    id: "legal",
    aiName: "LegalAgent",
    aiAvatar: "⚖️",
    humanRole: "Operadora abogada",
    humanName: "Carolina M.",
    humanAvatar: "📋",
    title: "IA redacta, abogada valida y firma",
    narrative: [
      { speaker: "ai", text: "Documento preparado segun normativa vigente. Requiere revision por criterio legal humano y firma presencial en notaria." },
      { speaker: "system", text: "HITL activado. Tarea requiere juicio profesional. Enrutando a operadora abogada... Carolina M. Colegio de Abogados verificado." },
      { speaker: "human", text: "Documento revisado. Encontre una clausula que necesita ajuste para proteger mejor al cliente. Corregido antes de firmar." },
      { speaker: "ai", text: "Incorporo tu correccion al template legal. Tu criterio profesional mejora la calidad del sistema para futuros documentos." },
      { speaker: "result", text: "Documento firmado y timbrado. Correccion de Carolina integrada al modelo. Operadora compensada. El sistema aprende del juicio humano." },
    ],
    tags: ["LegalSkill", "HITL", "Criterio humano"],
  },
  {
    id: "logistica",
    aiName: "LogisticsAgent",
    aiAvatar: "📦",
    humanRole: "Operador delivery",
    humanName: "Diego T.",
    humanAvatar: "🚴",
    title: "IA optimiza ruta, operador entrega",
    narrative: [
      { speaker: "ai", text: "4 entregas en Providencia. Ruta optimizada: Lyon > Los Leones > Pedro de Valdivia > Tobalaba. Condiciones de trafico favorables." },
      { speaker: "system", text: "HITL activado. Ejecucion fisica requerida. Enrutando a operador delivery... Diego T. disponible en zona Providencia." },
      { speaker: "human", text: "Ruta recibida. Conozco un atajo por una calle interior que la IA no tiene mapeada. Ajusto el orden para ser mas eficiente." },
      { speaker: "ai", text: "Actualizo: el paquete 3 cambio direccion. Pero acepto tu ajuste de ruta. Tu conocimiento local es un input valioso." },
      { speaker: "result", text: "4/4 entregas completadas. Diego mejoro el tiempo estimado por IA en 15 min. Su atajo fue incorporado al grafo de rutas. Operador compensado." },
    ],
    tags: ["LogisticsSkill", "HITL", "Conocimiento local"],
  },
];

export default function Scenarios() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    setVisibleMessages(0);
    const messages = scenarios[activeScenario].narrative.length;
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

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-accent/20 text-xs font-mono text-accent mb-4">
            COLABORACION EN ACCION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">Asi colaboran </span>
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              IA y humanos
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Escenarios reales donde agentes de IA y operadores humanos trabajan juntos.
            La IA coordina y aprende. El humano decide, corrige y ejecuta.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveScenario(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeScenario === i
                  ? "bg-gradient-to-r from-secondary to-electric text-white shadow-lg shadow-secondary/20"
                  : "bg-surface-card border border-secondary/10 text-text-secondary hover:border-secondary/30"
              }`}
            >
              <span className="mr-2">{s.aiAvatar}</span>
              {s.title}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-card border border-secondary/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-secondary/10 bg-gradient-to-r from-surface-card to-primary/50">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-xl border-2 border-surface-card">{scenario.aiAvatar}</div>
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xl border-2 border-surface-card">{scenario.humanAvatar}</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">{scenario.title}</h3>
                    <p className="text-xs text-text-muted">{scenario.aiName} + {scenario.humanName} ({scenario.humanRole})</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {scenario.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-1 rounded-full bg-secondary/5 text-secondary">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4 min-h-[350px]">
              {scenario.narrative.map((msg, i) => {
                if (i >= visibleMessages) return null;
                const isAI = msg.speaker === "ai";
                const isSystem = msg.speaker === "system";
                const isResult = msg.speaker === "result";

                return (
                  <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    {isSystem ? (
                      <div className="text-center py-2">
                        <span className="text-xs font-mono text-text-muted bg-surface/50 px-4 py-1.5 rounded-full border border-secondary/5">
                          ORQUESTADOR: {msg.text}
                        </span>
                      </div>
                    ) : isResult ? (
                      <div className="bg-success/5 border border-success/20 rounded-xl p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs font-mono text-success font-bold">CICLO COMPLETADO</span>
                        </div>
                        <p className="text-sm text-text-secondary">{msg.text}</p>
                      </div>
                    ) : (
                      <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${isAI ? "bg-secondary/10 border border-secondary/20 rounded-tl-sm" : "bg-accent/10 border border-accent/20 rounded-tr-sm"}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm">{isAI ? scenario.aiAvatar : scenario.humanAvatar}</span>
                            <span className={`text-xs font-mono font-bold ${isAI ? "text-secondary" : "text-accent"}`}>
                              {isAI ? scenario.aiName : scenario.humanName}
                            </span>
                            <span className="text-[10px] text-text-muted">
                              {isAI ? "(Agente)" : "(Operador)"}
                            </span>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {visibleMessages < scenario.narrative.length && (
                <div className="flex items-center gap-2 text-text-muted">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: "0s" }} />
                    <div className="w-2 h-2 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-2 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <span className="text-xs font-mono">orquestando...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
