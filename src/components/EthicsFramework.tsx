export default function EthicsFramework() {
  const principles = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: "Supervision humana siempre",
      description: "Ningun proceso critico se ejecuta sin un humano en el loop. La IA sugiere, coordina y optimiza. El operador humano decide, valida y ejecuta. La responsabilidad final es siempre humana.",
      highlight: "El humano tiene la ultima palabra.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Responsabilidad humana explicita",
      description: "Los operadores no son ejecutores pasivos de instrucciones de IA. Son profesionales que aportan criterio, experiencia y juicio propio. Si el diagnostico de la IA no coincide con lo que ven en terreno, prevalece su decision.",
      highlight: "El operador puede corregir a la IA.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      title: "IA como asistente, no como jefe",
      description: "La IA actua como coordinador, planificador y optimizador. No como controlador de personas. Los operadores reciben contexto y apoyo, no ordenes. La relacion es de colaboracion, no de subordinacion.",
      highlight: "Coordinacion, no control.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      title: "Colaboracion bidireccional",
      description: "El feedback del operador mejora la IA. Cuando un gasfiter detecta algo que el sensor no vio, o un abogado corrige un documento, esa experiencia se integra al sistema. Los humanos ensenan a la IA.",
      highlight: "El humano mejora a la IA.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      title: "Amplificacion, no reemplazo",
      description: "HumanLoop no automatiza el trabajo humano. Lo amplifica. Un gasfiter con diagnostico de IA resuelve mas rapido. Un abogado con documentos pre-redactados atiende mas casos. La IA potencia la capacidad humana.",
      highlight: "Mas capacidad, no menos personas.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Compensacion justa y directa",
      description: "Los operadores reciben compensacion justa por su trabajo, experiencia y criterio profesional. El pago es directo, transparente y proporcional al valor que aportan. Sin intermediarios ocultos.",
      highlight: "Trabajo humano valorado.",
    },
  ];

  return (
    <section id="etica" className="py-24 relative bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-success/20 text-xs font-mono text-success mb-4">
            MARCO ETICO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">Principios de </span>
            <span className="bg-gradient-to-r from-success to-secondary bg-clip-text text-transparent">
              colaboracion responsable
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            La tecnologia debe amplificar la capacidad humana, no controlarla.
            Estos principios guian cada decision arquitectonica de HumanLoop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, i) => (
            <div key={i} className="group bg-surface-card border border-secondary/10 rounded-2xl p-6 hover:border-success/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success/10 to-secondary/10 flex items-center justify-center text-success mb-4 group-hover:scale-110 transition-transform">
                {principle.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{principle.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{principle.description}</p>
              <div className="bg-success/5 border border-success/10 rounded-lg px-3 py-2">
                <p className="text-xs font-mono text-success font-semibold">{principle.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-surface-card border border-electric/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-text-primary mb-3">El principio central</h3>
          <p className="text-lg text-text-secondary leading-relaxed">
            <span className="text-secondary font-semibold">La IA es la capa de orquestacion y soporte cognitivo.</span>{" "}
            Los humanos son la capa de accion real, juicio y responsabilidad.
            El sistema amplifica el trabajo humano mediante inteligencia artificial,
            sin reemplazarlo.
          </p>
        </div>
      </div>
    </section>
  );
}
