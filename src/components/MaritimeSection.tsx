"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function MaritimeSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a1628] to-[#0d2137]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            🚢 New Vertical
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Humanloop Maritime
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Técnicos navieros certificados cuando los necesitas. 
            IA que orquestra, humanos que ejecutan en alta mar.
          </p>
        </div>

        {/* Problem */}
        <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">🎯 El Problema</h3>
          <p className="text-gray-300 mb-4">
            La industria marítima depende de equipos críticos (radares Furuno, sistemas GMDSS, AIS, GPS, ecosondas) 
            que requieren técnicos certificados para instalación, mantenimiento y reparación.
          </p>
          <p className="text-gray-400">
            Actualmente encontrar un técnico especializado es <strong className="text-white">lento, opaco</strong> y depende de redes informales.
          </p>
        </div>

        {/* Solution */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-6 border border-blue-500/20">
            <div className="text-4xl mb-4">📡</div>
            <h4 className="text-lg font-bold text-white mb-2">Radar Systems</h4>
            <p className="text-sm text-gray-400 mb-3">
              FAR-1523, FAR-1518, FAR-2127 — Instalación, calibración y mantenimiento.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Furuno", "Raymarine", "JRC"].map(brand => (
                <span key={brand} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 rounded-xl p-6 border border-cyan-500/20">
            <div className="text-4xl mb-4">📻</div>
            <h4 className="text-lg font-bold text-white mb-2">GMDSS & VHF/HF</h4>
            <p className="text-sm text-gray-400 mb-3">
              Sistemas de comunicación marítima certificados SOLAS.
            </p>
            <div className="flex flex-wrap gap-2">
              {["EPIRB", "SART", "VHF", "HF"].map(cert => (
                <span key={cert} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/10 rounded-xl p-6 border border-teal-500/20">
            <div className="text-4xl mb-4">🧭</div>
            <h4 className="text-lg font-bold text-white mb-2">Navigation & AIS</h4>
            <p className="text-sm text-gray-400 mb-3">
              GPS, navegación, transponders AIS — calibración y diagnóstico.
            </p>
            <div className="flex flex-wrap gap-2">
              {["GP-170", "AIS", "NAV"].map(item => (
                <span key={item} className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Architecture */}
        <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">🏗️ Arquitectura HITL</h3>
          
          <div className="bg-[#0a1628] rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
{`┌─────────────────────────────────────────────────────┐
│           AI ORCHESTRATION LAYER                       │
├─────────────────────────────────────────────────────┤
│                                                      │
│   Vessel/Agent    Technician     Port Authority       │
│        │               │               │              │
│        └──────────────┼───────────────┘              │
│                       ▼                               │
│            ┌─────────────────────┐                  │
│            │  HITL Orchestrator   │                  │
│            │  (LangGraph + MCP)  │                  │
│            └─────────┬───────────┘                  │
│                      │                               │
│    ┌────────────────┼────────────────┐             │
│    ▼                ▼                ▼              │
│ ┌────────┐    ┌────────┐     ┌────────┐          │
│ │Diagnose│    │ Match  │     │Schedule│          │
│ │ Agent  │    │ Agent  │     │ Agent  │          │
│ │ (RAG) │    │(Skills)│     │ (Time) │          │
│ └────────┘    └────────┘     └────────┘          │
└─────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">🛠️ Stack Técnico</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• <strong className="text-white">zvec</strong> — Búsqueda vectorial en SQLite</li>
              <li>• <strong className="text-white">LangGraph</strong> — Orquestación de agentes</li>
              <li>• <strong className="text-white">MCP</strong> — Model Context Protocol</li>
              <li>• <strong className="text-white">RAG</strong> — Retrieval Augmented Generation</li>
              <li>• <strong className="text-white">PostgreSQL</strong> — Base de datos principal</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">💰 Modelo de Revenue</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• <strong className="text-white">Técnico Pro:</strong> US$29/mes + 15% comisión</li>
              <li>• <strong className="text-white">Técnico Enterprise:</strong> US$99/mes + 15%</li>
              <li>• <strong className="text-white">85%</strong> de compensación va al técnico</li>
              <li>• <strong className="text-white">Furuno</strong> — presente en 150+ países</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            ¿Eres técnico naval certificado? ¿Tienes una agencia marítima?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contacto@humanloop.cl?subject=Humanloop Maritime - Quiero ser técnico"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
            >
              🚢 Ser Técnico Naval
            </a>
            <a 
              href="/blog/humanloop-maritime-ai-marine-technicians"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors border border-white/20"
            >
              📖 Leer Más
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
