export default function Pricing() {
  const categories = [
    {
      category: "Operadores Basicos",
      icon: "🚴",
      description: "Tareas de ejecucion fisica y logistica",
      services: [
        {
          name: "Operador Delivery",
          price: "5.000 - 15.000",
          unit: "por entrega",
        },
        {
          name: "Operador de Gestion",
          price: "15.000 - 25.000",
          unit: "por hora",
        },
        {
          name: "Operador de Compras",
          price: "8.000 - 12.000",
          unit: "por gestion",
        },
        {
          name: "Operador de Tramites",
          price: "12.000 - 20.000",
          unit: "por tramite",
        },
      ],
    },
    {
      category: "Operadores Certificados",
      icon: "🔧",
      description: "Profesionales con certificaciones verificadas",
      services: [
        { name: "Gasfiter SEC", price: "20.000 - 45.000", unit: "por visita" },
        {
          name: "Electricista SEC",
          price: "18.000 - 50.000",
          unit: "por visita",
        },
        {
          name: "Fotografo Profesional",
          price: "22.000 - 60.000",
          unit: "por hora",
        },
        {
          name: "Interprete Bilingue",
          price: "30.000 - 70.000",
          unit: "por hora",
        },
      ],
    },
    {
      category: "Operadores Expertos",
      icon: "⚖️",
      description: "Profesionales con criterio especializado",
      services: [
        {
          name: "Presentador Corporativo",
          price: "25.000 - 80.000",
          unit: "por hora",
        },
        {
          name: "Abogado Colegiado",
          price: "45.000 - 120.000",
          unit: "por gestion",
        },
        {
          name: "Representante Ejecutivo",
          price: "35.000 - 90.000",
          unit: "por reunion",
        },
        {
          name: "Equipo Multidisciplinario",
          price: "150.000+",
          unit: "por proyecto",
        },
      ],
    },
  ];

  return (
    <section id="compensacion" className="py-24 relative bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-gold/20 text-xs font-mono text-gold mb-4">
            MODELO DE COMPENSACION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">Compensacion justa </span>
            <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
              por trabajo real
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Los operadores reciben compensacion directa por su trabajo, experiencia
            y criterio profesional. Pago transparente y proporcional al valor aportado.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-surface-card border border-secondary/10 rounded-2xl overflow-hidden hover:border-secondary/30 transition-all duration-500 group"
            >
              <div className="p-6 border-b border-secondary/10 bg-gradient-to-r from-surface-card to-primary/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-lg font-bold text-text-primary">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-text-muted">{cat.description}</p>
              </div>
              <div className="p-6 space-y-4">
                {cat.services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-secondary/5 last:border-0"
                  >
                    <span className="text-sm text-text-secondary">
                      {service.name}
                    </span>
                    <div className="text-right">
                      <span className="text-sm font-bold font-mono text-secondary">
                        ${service.price}
                      </span>
                      <span className="text-xs text-text-muted block">
                        {service.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Payment info */}
        <div className="bg-surface-card border border-success/20 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-text-primary mb-2">
                Pago directo al operador
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                La plataforma garantiza que el 85% del pago va directamente al
                operador que ejecuta la tarea. El 15% cubre operacion, seguros y
                soporte. El operador mantiene autonomia sobre como ejecutar el trabajo.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Transferencia bancaria",
                  "Mercado Pago",
                  "Cuenta RUT",
                  "Pago inmediato",
                ].map((method, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-success/5 border border-success/10 text-success"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transparency note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted max-w-2xl mx-auto">
            Los rangos de compensacion reflejan la experiencia, certificaciones y
            complejidad de cada tarea. El operador tiene derecho a negociar segun
            las condiciones especificas de cada asignacion.
          </p>
        </div>
      </div>
    </section>
  );
}
