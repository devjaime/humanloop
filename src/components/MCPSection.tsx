"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const codeExamples = {
  mcp: `// Orchestration via MCP - HumanLoop SDK
import { HumanLoopClient } from "@humanloop/sdk";

const client = new HumanLoopClient({
  apiKey: "hl_sk_live_...",
  region: "cl-santiago"
});

const task = await client.orchestrate({
  skill: "logistics.delivery",
  context: {
    description: "4 deliveries in Providencia",
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

// Response
// {
//   task_id: "tsk_cl_2025_abc123",
//   status: "operator_assigned",
//   operator: { name: "Carlos M.", rating: 4.9 },
//   human_decision: "accepted"
// }`,
  rest: `# REST API - Orchestration Layer
POST /api/v1/orchestrate HTTP/1.1
Host: api.humanloop.cl
Authorization: Bearer hl_sk_live_...
Content-Type: application/json

{
  "skill": "legal.document_signing",
  "context": {
    "document_type": "notarial_power",
    "prepared_by": "LegalAgent",
    "validated": true
  },
  "hitl": {
    "requires_human": true,
    "reason": "physical_legal_signature",
    "operator_requirements": [
      "Licensed lawyer",
      "Notarial experience"
    ],
    "location": {
      "address": "Monjitas 527, Santiago",
      "comuna": "Santiago Centro"
    }
  }
}

# Response 201 Created
{
  "task_id": "tsk_cl_2025_def456",
  "status": "routing_to_operator",
  "hitl_reason": "human_judgment_required"
}`,
  webhook: `// Webhooks - Real-time feedback loop
await client.webhooks.create({
  url: "https://your-agent.cl/webhook",
  events: [
    "task.operator_assigned",
    "task.completed",
    "feedback.operator_report"
  ]
});

// Event received by agent:
{
  "event": "task.completed",
  "task_id": "tsk_cl_2025_def456",
  "data": {
    "operator": "Carolina M.",
    "execution_time": "45 minutes",
    "evidence": [
      "signed_document.jpg",
      "notary_stamp.jpg"
    ],
    "operator_notes": "Document signed
      successfully.",
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
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"mcp" | "rest" | "webhook">("mcp");

  const tabs = [
    { key: "mcp" as const, label: "MCP SDK" },
    { key: "rest" as const, label: "REST API" },
    { key: "webhook" as const, label: "Webhooks" },
  ];

  return (
    <section id="architecture" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-electric/20 text-xs font-mono text-electric-light mb-4">
              {t.mcp.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-text-primary">{t.mcp.title1} </span>
              <span className="bg-gradient-to-r from-electric to-secondary bg-clip-text text-transparent">
                {t.mcp.titleHighlight}
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {t.mcp.subtitle}
            </p>

            <div className="space-y-4">
              {t.mcp.layers.map((layer, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-surface-card/50 border border-secondary/5 hover:border-secondary/20 transition-all">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{layer.name}: {layer.description}</h4>
                    <p className="text-xs text-text-muted mt-0.5">{layer.detail}</p>
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
