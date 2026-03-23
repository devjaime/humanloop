import Link from "next/link";

export default function MaritimePage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Header */}
      <nav className="border-b border-white/10 bg-[#0a1628]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            🚢 Humanloop Maritime
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Nuevo Vertical
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Humanloop Maritime
          </h1>
          <p className="text-xl text-gray-400">
            Técnicos navieros certificados cuando los necesitas.
          </p>
        </div>

        {/* Problem */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">🎯 El Problema</h2>
          <p className="text-gray-300 mb-4">
            La industria marítima depende de equipos críticos (radares Furuno, sistemas GMDSS, AIS, GPS, ecosondas) 
            que requieren técnicos certificados para instalación, mantenimiento y reparación.
          </p>
          <p className="text-gray-400">
            Actualmente encontrar un técnico especializado es <strong className="text-white">lento, opaco</strong> y depende de redes informales.
          </p>
        </section>

        {/* Solution */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">💡 La Solución</h2>
          <p className="text-gray-300 mb-6">
            Utilizando la arquitectura Human-in-the-Loop (HITL) con agentes de IA que orquestan y técnicos humanos 
            certificados que ejecutan, creamos un marketplace vertical donde:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>✅ La IA detecta y diagnostica problemas de equipos</li>
            <li>✅ Matching automático con técnicos certificados por skill</li>
            <li>✅ Scheduling inteligente según disponibilidad y ubicación</li>
            <li>✅ El técnico humano ejecuta con criterio profesional</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">🛠️ Servicios Técnicos</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">📡 Radar Systems</h3>
              <p className="text-sm text-gray-400 mb-3">
                Instalación, calibración y mantenimiento de radares.
              </p>
              <div className="flex flex-wrap gap-2">
                {["FAR-1523", "FAR-1518", "FAR-2127", "ACE", "Target Tracking"].map(item => (
                  <span key={item} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-cyan-900/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">📻 GMDSS & VHF/HF</h3>
              <p className="text-sm text-gray-400 mb-3">
                Sistemas de comunicación marítima certificados.
              </p>
              <div className="flex flex-wrap gap-2">
                {["EPIRB", "SART", "VHF", "HF", "SOLAS"].map(item => (
                  <span key={item} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-teal-900/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">🧭 Navigation & AIS</h3>
              <p className="text-sm text-gray-400 mb-3">
                GPS, navegación, transponders AIS.
              </p>
              <div className="flex flex-wrap gap-2">
                {["GP-170", "AIS", "GPS", "NAV"].map(item => (
                  <span key={item} className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">🔊 Sonar & EchoSounders</h3>
              <p className="text-sm text-gray-400 mb-3">
                Diagnóstico y calibración de ecosondas.
              </p>
              <div className="flex flex-wrap gap-2">
                {["DFF3D", "FCV-628", "Transducer"].map(item => (
                  <span key={item} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Revenue */}
        <section className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">💰 Modelo de Revenue</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Para Técnicos</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>Pro:</strong> US$29/mes + 15% comisión</li>
                <li>• <strong>Enterprise:</strong> US$99/mes + 15%</li>
                <li>• <strong>85%</strong> de compensación al técnico</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Mercado</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Furuno presente en 150+ países</li>
                <li>• Niche de alto valor, poca digitalización</li>
                <li>• Gig economy de servicios técnicos especializados</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
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
            <Link 
              href="/"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors border border-white/20"
            >
              ← Volver al inicio
            </Link>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 Humanloop.cl — AI Orchestration Platform</p>
      </footer>
    </main>
  );
}
