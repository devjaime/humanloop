"use client";

import { useState } from "react";

const codeExamples = {
  mcp: `// Orquestacion via MCP - HumanLoop SDK
// Agente conecta con la capa de coordinacion

import { HumanLoopClient } from "@humanloop/sdk";

const client = new HumanLoopClient({
  apiKey: "hl_sk_live_...",
  region: "cl-santiago"
});

// El agente detecta una tarea y la enruta
const task = await client.orchestrate({
  skill: "logistics.delivery",
  context: {
    description: "4 entregas en Providencia",
    optimized_route: ["Lyon", "Los Leones",
      "Pedro de Valdivia", "Tobalaba"],
    priority: "normal"
  },
  hitl: {
    requires_human: true,
    operator_type: "delivery",
    location: "Providencia, Santiago"
  }
});

// Respuesta del orquestador
// {
//   task_id: "tsk_cl_2025_abc123",
//   status: "operator_assigned",
//   operator: { name: "Carlos M.", rating: 4.9 },
//   eta: "25 minutos",
//   human_decision: "accepted"
// }`,
  rest: `# REST API - Capa de Orquestacion
# El agente enruta tareas al sistema

POST /api/v1/orchestrate HTTP/1.1
Host: api.humanloop.cl
Authorization: Bearer hl_sk_live_...
Content-Type: application/json

{
  "skill": "legal.document_signing",
  "context": {
    "document_type": "poder_notarial",
    "prepared_by": "LegalAgent",
    "validated": true
  },
  "hitl": {
    "requires_human": true,
    "reason": "firma_legal_presencial",
    "operator_requirements": [
      "Abogado colegiado",
      "Experiencia en poderes notariales"
    ],
    "location": {
      "address": "Monjitas 527, Santiago",
      "comuna": "Santiago Centro"
    },
    "schedule": {
      "date": "2025-03-15",
      "time_range": "10:00-12:00"
    }
  }
}

# Response 201 Created
{
  "task_id": "tsk_cl_2025_def456",
  "status": "routing_to_operator",
  "hitl_reason": "human_judgment_required"
}`,
  webhook: `// Webhooks - Feedback loop en tiempo real
// El sistema aprende de cada ejecucion humana

await client.webhooks.create({
  url: "https://tu-agente.cl/webhook",
  events: [
    "task.operator_assigned",
    "task.operator_accepted",
    "task.in_progress",
    "task.completed",
    "task.evidence_submitted",
    "feedback.operator_report"
  ]
});

// Evento recibido por el agente:
{
  "event": "task.completed",
  "task_id": "tsk_cl_2025_def456",
  "data": {
    "operator": "Carolina M.",
    "execution_time": "45 minutos",
    "evidence": [
      "documento_firmado.jpg",
      "timbre_notarial.jpg"
    ],
    "operator_notes": "Documento firmado
      exitosamente. Notario verifico identidad.",
    "human_decision": "Aprobo sin cambios",
    "compensation": {
      "amount": 48000,
      "currency": "CLP",
      "status": "paid"
    },
    "feedback": {
      "quality": 5,
      "ai_preparation_useful": true
    }
  }
}`,
};

export default function MCPSection() {
  const [activeTab, setActiveTab] = useState<"mcp" | "rest" | "webhook">("mcp");

  const tabs = [
    { key: "mcp" as const, label: "MCP SDK" },
    { key: "rest" as const, label: "REST API" },
    { key: "webhook" as const, label: "Webhooks" },
  ];

  return (
    <section id="arquitectura" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-electric/20 text-xs font-mono text-electric-light mb-4">
              ARQUITECTURA TECNICA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-text-primary">Cuatro capas. </span>
              <span className="bg-gradient-to-r from-electric to-secondary bg-clip-text text-transparent">
                Un sistema.
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              HumanLoop se estructura en capas: orquestacion de tareas por IA,
              red de agentes conectados via MCP, sistema de Skills reutilizables,
              y la capa de ejecucion humana (HITL).
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Capa 1: Orquestacion de Tareas",
                  desc: "Motor central que recibe eventos, prioriza y distribuye tareas entre agentes y operadores.",
                },
                {
                  title: "Capa 2: Red de Agentes (MCP)",
                  desc: "Agentes modulares conectados via Model Context Protocol. Cada agente tiene un dominio especializado.",
                },
                {
                  title: "Capa 3: Skills Reutilizables",
                  desc: "Capacidades cognitivas compartidas: optimizacion de rutas, analisis de documentos, diagnostico, planificacion.",
                },
                {
                  title: "Capa 4: Ejecucion Humana (HITL)",
                  desc: "Operadores verificados que ejecutan con autonomia. El humano mantiene criterio, responsabilidad y decision.",
                },
                {
                  title: "Feedback Loop",
                  desc: "Cada ejecucion humana alimenta al sistema. La IA mejora su coordinacion basada en resultados reales.",
                },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-surface-card/50 border border-secondary/5 hover:border-secondary/20 transition-all">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{feature.title}</h4>
                    <p className="text-xs text-text-muted mt-0.5">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-24">
            <div className="bg-surface-card border border-secondary/20 rounded-2xl overflow-hidden shadow-2xl shadow-secondary/5">
              <div className="flex border-b border-secondary/10">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 px-4 py-3 text-xs font-mono transition-all ${
                      activeTab === tab.key
                        ? "text-secondary bg-secondary/5 border-b-2 border-secondary"
                        : "text-text-muted hover:text-text-secondary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-xs font-mono leading-relaxed text-text-secondary">
                  <code>{codeExamples[activeTab]}</code>
                </pre>
              </div>
              <div className="px-6 py-4 bg-primary/30 border-t border-secondary/10 flex items-center justify-between">
                <span className="text-xs text-text-muted font-mono">@humanloop/sdk@1.0.0</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-success font-mono">Orchestrator: Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
