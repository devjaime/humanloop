"use client";

export default function Partners() {
  const partners = [
    { name: "SEC", logo: "⚡", type: "Certificación" },
    { name: "CChC", logo: "🏠", type: "Construcción" },
    { name: "CMP", logo: "🔧", type: "Gasfitería" },
    { name: "Colegio de Abogados", logo: "⚖️", type: "Legal" },
    { name: "Cruz del Sur", logo: "🚚", type: "Logística" },
    { name: "MINEDUC", logo: "📚", type: "Educación" },
  ];

  return (
    <section className="py-16 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-text-secondary mb-8">
            Empresas y organizaciones que confían en nosotros
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="text-4xl grayscale hover:grayscale-0 transition-all transform hover:scale-110">
                  {partner.logo}
                </div>
                <span className="text-sm font-medium text-text-secondary">
                  {partner.name}
                </span>
                <span className="text-xs text-text-secondary opacity-60">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA for partners */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            ¿Quieres ser partner? 
          </p>
          <a
            href="mailto:contacto@humanloop.cl?subject=Partner"
            className="inline-block px-6 py-2 border border-electric text-electric rounded-lg hover:bg-electric hover:text-white transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
