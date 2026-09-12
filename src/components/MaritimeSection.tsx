"use client";

import { useLanguage } from "@/context/LanguageContext";

const ARCH = `┌─────────────────────────────────────────────────────┐
│           AI ORCHESTRATION LAYER                       │
├─────────────────────────────────────────────────────┤
│   Vessel/Agent    Technician     Port Authority       │
│            ┌─────────────────────┐                  │
│            │  HITL Orchestrator   │                  │
│            │  (LangGraph + MCP)  │                  │
│            └─────────┬───────────┘                  │
│    Diagnose Agent │ Match Agent │ Schedule Agent      │
└─────────────────────────────────────────────────────┘`;

export default function MaritimeSection() {
  const { t } = useLanguage();
  const m = t.maritime;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a1628] to-[#0d2137]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            🚢 {m.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{m.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{m.subtitle}</p>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">🎯 {m.problemTitle}</h3>
          <p className="text-gray-300 mb-4">{m.problem1}</p>
          <p className="text-gray-400">{m.problem2}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {m.cards.map((card) => (
            <div key={card.title} className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-6 border border-blue-500/20">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
              <p className="text-sm text-gray-400 mb-3">{card.text}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">🏗️ {m.archTitle}</h3>
          <div className="bg-[#0a1628] rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">{ARCH}</pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">🛠️ {m.stackTitle}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {m.stack.map((row) => (
                <li key={row.name}>
                  • <strong className="text-white">{row.name}</strong> — {row.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">💰 {m.revenueTitle}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {m.revenue.map((row) => (
                <li key={row.name}>
                  • <strong className="text-white">{row.name}</strong> {row.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">{m.ctaQuestion}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contacto@humanloop.cl?subject=Humanloop Maritime"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
            >
              🚢 {m.ctaTech}
            </a>
            <a
              href="/blog/humanloop-maritime-ai-marine-technicians"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors border border-white/20"
            >
              📖 {m.ctaRead}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
