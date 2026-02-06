"use client";

import { useState } from "react";

const skills = [
  {
    id: "presentacion",
    icon: "🎭",
    title: "Comunicacion & Presencia",
    description: "La IA prepara guiones, analiza audiencia y genera materiales. Un operador presentador lleva la comunicacion al escenario real con presencia y empatia humana.",
    useCases: [
      "Presentaciones corporativas con material generado por IA",
      "Voceria y comunicacion presencial en eventos",
      "Capacitaciones con contenido adaptado por IA",
      "Representacion en reuniones presenciales",
    ],
    skillTag: "EventSkill + PresenterOperator",
    color: "from-neon-pink to-electric",
    borderColor: "border-neon-pink/20",
    hoverBorder: "hover:border-neon-pink/50",
  },
  {
    id: "legal",
    icon: "⚖️",
    title: "Gestion Legal & Documental",
    description: "La IA redacta, revisa y prepara documentos legales. Un operador abogado verificado ejerce el criterio profesional, firma y ejecuta tramites presenciales.",
    useCases: [
      "Firma de documentos en notaria",
      "Revision profesional de contratos",
      "Tramites legales presenciales",
      "Representacion con criterio legal humano",
    ],
    skillTag: "LegalSkill + LawyerOperator",
    color: "from-secondary to-neon-green",
    borderColor: "border-secondary/20",
    hoverBorder: "hover:border-secondary/50",
  },
  {
    id: "logistica",
    icon: "📦",
    title: "Logistica & Entregas",
    description: "La IA optimiza rutas, gestiona inventario y coordina tiempos. Un operador de logistica ejecuta la entrega fisica con criterio sobre el terreno.",
    useCases: [
      "Entregas mismo dia con rutas optimizadas por IA",
      "Coordinacion multi-punto con ajustes en tiempo real",
      "Retiro y despacho coordinado por agentes",
      "Mensajeria urgente con tracking inteligente",
    ],
    skillTag: "LogisticsSkill + DeliveryOperator",
    color: "from-accent to-gold",
    borderColor: "border-accent/20",
    hoverBorder: "hover:border-accent/50",
  },
  {
    id: "gasfiteria",
    icon: "🔧",
    title: "Diagnostico & Gasfiteria",
    description: "La IA analiza sintomas, fotos y datos de sensores para diagnosticar. Un operador gasfiter certificado aplica su experiencia en terreno para resolver.",
    useCases: [
      "Diagnostico asistido por IA + reparacion humana",
      "Mantencion preventiva coordinada por agentes",
      "Respuesta a emergencias con enrutamiento inteligente",
      "Documentacion automatica del trabajo realizado",
    ],
    skillTag: "DiagnosticSkill + PlumberOperator",
    color: "from-electric to-secondary",
    borderColor: "border-electric/20",
    hoverBorder: "hover:border-electric/50",
  },
  {
    id: "electrico",
    icon: "⚡",
    title: "Planificacion & Electricidad",
    description: "La IA planifica la instalacion y genera documentacion tecnica. Un operador electricista certificado SEC ejecuta con seguridad y responsabilidad profesional.",
    useCases: [
      "Planificacion IA + ejecucion humana certificada",
      "Presupuestos generados por IA, validados por operador",
      "Certificaciones SEC con documentacion automatizada",
      "Mantencion programada por agentes inteligentes",
    ],
    skillTag: "PlanningSkill + ElectricianOperator",
    color: "from-gold to-accent",
    borderColor: "border-gold/20",
    hoverBorder: "hover:border-gold/50",
  },
  {
    id: "gestion",
    icon: "🤝",
    title: "Gestion Presencial",
    description: "La IA organiza agenda, prepara documentacion y optimiza procesos. Un operador de gestion ejecuta tramites y reuniones con juicio humano.",
    useCases: [
      "Tramites en instituciones con documentacion pre-generada",
      "Gestiones presenciales coordinadas por IA",
      "Reuniones con briefing preparado por agentes",
      "Compras presenciales con comparativas de IA",
    ],
    skillTag: "ManagementSkill + FieldOperator",
    color: "from-success to-neon-green",
    borderColor: "border-success/20",
    hoverBorder: "hover:border-success/50",
  },
  {
    id: "idiomas",
    icon: "🌐",
    title: "Traduccion & Mediacion",
    description: "La IA traduce documentos y prepara contexto cultural. Un operador interprete aporta la empatia, tono y comprension cultural que solo un humano puede dar.",
    useCases: [
      "Interpretacion presencial con contexto preparado por IA",
      "Mediacion cultural con analisis de IA",
      "Traduccion de documentos + validacion humana",
      "Acompanamiento a extranjeros con soporte de IA",
    ],
    skillTag: "TranslationSkill + InterpreterOperator",
    color: "from-neon-green to-secondary",
    borderColor: "border-neon-green/20",
    hoverBorder: "hover:border-neon-green/50",
  },
  {
    id: "visual",
    icon: "📸",
    title: "Contenido Visual & Registro",
    description: "La IA define encuadres, checklists y criterios de calidad. Un operador fotografo captura con ojo humano, creatividad y presencia en terreno.",
    useCases: [
      "Fotografia de productos con guia de IA",
      "Registro de eventos con checklist inteligente",
      "Inspeccion visual con criterios predefinidos por IA",
      "Contenido para redes con estrategia generada por IA",
    ],
    skillTag: "ContentSkill + PhotographerOperator",
    color: "from-electric-light to-neon-pink",
    borderColor: "border-electric-light/20",
    hoverBorder: "hover:border-electric-light/50",
  },
];

export default function Services() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-secondary/20 text-xs font-mono text-secondary mb-4">
            SKILLS + OPERADORES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">IA que planifica, </span>
            <span className="bg-gradient-to-r from-secondary to-electric bg-clip-text text-transparent">
              humanos que resuelven
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Cada skill combina capacidad cognitiva de IA con la experiencia y criterio
            de operadores humanos verificados. La IA amplifica, el humano decide y actua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`group relative bg-surface-card rounded-2xl border ${skill.borderColor} ${skill.hoverBorder} p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveSkill(activeSkill === skill.id ? null : skill.id)}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{skill.title}</h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">{skill.description}</p>

                <div className={`overflow-hidden transition-all duration-500 ${activeSkill === skill.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pt-4 border-t border-secondary/10">
                    <p className="text-xs font-mono text-secondary mb-2">CASOS DE USO:</p>
                    <ul className="space-y-1">
                      {skill.useCases.map((useCase, i) => (
                        <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                          <span className="text-secondary mt-0.5">&#9656;</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-text-muted bg-surface/50 px-2 py-1 rounded border border-secondary/5">
                    {skill.skillTag}
                  </span>
                  <span className="text-xs text-text-muted group-hover:text-secondary transition-colors">
                    {activeSkill === skill.id ? "Cerrar" : "Detalle"} &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
