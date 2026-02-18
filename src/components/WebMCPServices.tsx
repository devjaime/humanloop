"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WebMCPServices() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "🔧",
      title: "Gasfitería Certified SEC",
      description: "Conecta tu AI con gasfiteros certificados. Diagnóstico remoto, cotizaciones automáticas y scheduling inteligente.",
      features: [
        "Diagnóstico de filtraciones por video",
        "Cotización automática según problemática",
        "Scheduling con disponibilidad en tiempo real",
        "Certificación SEC verificada",
      ],
      mcpTools: ["plumbing.diagnose", "plumbing.quote", "plumbing.schedule", "plumbing.verify_sec"],
      price: "$20.000 - $45.000 CLP",
    },
    {
      icon: "⚡",
      title: "Electricidad SEC",
      description: "Instalaciones y reparaciones eléctricas certificadas. Seguridad garantizada y cumplimiento normativo.",
      features: [
        "Inspecciones de seguridad eléctrica",
        "Planificación de carga eléctrica",
        "Certificación de instalaciones",
        "Cotizaciones por tipo de trabajo",
      ],
      mcpTools: ["electric.verify_permit", "electric.inspect", "electric.plan_load", "electric.certify"],
      price: "$18.000 - $50.000 CLP",
    },
    {
      icon: "🚚",
      title: "Logística & Entregas",
      description: "Última milla con tracking en tiempo real. Compras presenciales y delivery optimizado.",
      features: [
        "Ruteo optimizado por GPS",
        "Compras en tienda física",
        "Chain de frío para medicamentos",
        "Foto/video como evidencia",
      ],
      mcpTools: ["logistics.route", "logistics.track", "logistics.purchase", "logistics.evidency"],
      price: "$5.000 - $15.000 CLP",
    },
    {
      icon: "📋",
      title: "Trámites Legales",
      description: "Notarías, firmas y representación legal. Documentación certificada y procesos garantizados.",
      features: [
        "Firma de documentos notariales",
        "Verificación de identidad",
        "Legalización de trámite",
        "Copia certificada digital",
      ],
      mcpTools: ["legal.sign", "legal.verify_identity", "legal.notarize", "legal. certify_copy"],
      price: "$45.000 - $120.000 CLP",
    },
  ];

  return (
    <section id="webmcp" className="py-24 relative bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric/20 border border-electric/30 text-electric text-sm font-mono mb-4">
            {t.webMCP.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">{t.webMCP.title1} </span>
            <span className="bg-gradient-to-r from-electric to-neon-pink bg-clip-text text-transparent">
              {t.webMCP.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {t.webMCP.subtitle}
          </p>
        </div>

        {/* MCP Integration diagram */}
        <div className="bg-surface-card border border-electric/20 rounded-3xl p-8 mb-16">
          <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
            {t.webMCP.integrationTitle}
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {/* AI Agent */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric to-neon-pink flex items-center justify-center mb-2">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="text-sm text-text-secondary">AI Agent</span>
            </div>

            <div className="text-electric">→</div>

            {/* MCP Protocol */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-16 rounded-xl bg-electric/20 border border-electric/30 flex items-center justify-center mb-2 px-4">
                <span className="text-xs font-mono text-electric">MCP Protocol</span>
              </div>
              <span className="text-sm text-text-secondary">JSON-RPC</span>
            </div>

            <div className="text-electric">→</div>

            {/* Skills Layer */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-16 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mb-2 px-4">
                <span className="text-xs font-mono text-secondary">Skills Layer</span>
              </div>
              <span className="text-sm text-text-secondary">Cognitive</span>
            </div>

            <div className="text-electric">→</div>

            {/* Human Operator */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-accent flex items-center justify-center mb-2">
                <span className="text-2xl">👷</span>
              </div>
              <span className="text-sm text-text-secondary">Operator</span>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-surface-card border border-secondary/10 rounded-2xl p-6 hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-secondary/10 pt-4">
                <p className="text-xs text-text-muted mb-2">MCP Tools:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.mcpTools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-electric/10 border border-electric/20 text-electric font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold">{service.price}</span>
                  <button className="text-sm text-secondary hover:text-secondary/80 font-medium transition-colors">
                    {t.webMCP.integrate} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">{t.webMCP.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pilot"
              className="px-6 py-3 bg-gradient-to-r from-electric to-neon-pink text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-electric/20 transition-all"
            >
              {t.webMCP.ctaIntegrate}
            </a>
            <a
              href="https://github.com/devjaime/humanloop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-surface-card border border-secondary/20 text-text-secondary font-semibold rounded-xl hover:border-secondary/40 transition-all"
            >
              {t.webMCP.viewDocs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
