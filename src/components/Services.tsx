"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const skillIcons = ["🎭", "⚖️", "📦", "🔧", "⚡", "🤝", "🌐", "📸"];
const skillColors = [
  { color: "from-neon-pink to-electric", borderColor: "border-neon-pink/20", hoverBorder: "hover:border-neon-pink/50" },
  { color: "from-secondary to-neon-green", borderColor: "border-secondary/20", hoverBorder: "hover:border-secondary/50" },
  { color: "from-accent to-gold", borderColor: "border-accent/20", hoverBorder: "hover:border-accent/50" },
  { color: "from-electric to-secondary", borderColor: "border-electric/20", hoverBorder: "hover:border-electric/50" },
  { color: "from-gold to-accent", borderColor: "border-gold/20", hoverBorder: "hover:border-gold/50" },
  { color: "from-success to-neon-green", borderColor: "border-success/20", hoverBorder: "hover:border-success/50" },
  { color: "from-neon-green to-secondary", borderColor: "border-neon-green/20", hoverBorder: "hover:border-neon-green/50" },
  { color: "from-electric-light to-neon-pink", borderColor: "border-electric-light/20", hoverBorder: "hover:border-electric-light/50" },
];

export default function Services() {
  const { language, t } = useLanguage();
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const detailLabel = language === "en" ? "Detail" : "Detalle";
  const closeLabel = language === "en" ? "Close" : "Cerrar";
  const useCasesLabel = language === "en" ? "USE CASES:" : "CASOS DE USO:";

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-secondary/20 text-xs font-mono text-secondary mb-4">
            {t.skills.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">{t.skills.title1} </span>
            <span className="bg-gradient-to-r from-secondary to-electric bg-clip-text text-transparent">
              {t.skills.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.items.map((skill, index) => {
            const colors = skillColors[index];
            return (
              <div
                key={index}
                className={`group relative bg-surface-card rounded-2xl border ${colors.borderColor} ${colors.hoverBorder} p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{skillIcons[index]}</div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{skill.title}</h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">{skill.description}</p>

                  <div className={`overflow-hidden transition-all duration-500 ${activeSkill === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pt-4 border-t border-secondary/10">
                      <p className="text-xs font-mono text-secondary mb-2">{useCasesLabel}</p>
                      <ul className="space-y-1">
                        {skill.features.map((feature, i) => (
                          <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                            <span className="text-secondary mt-0.5">&#9656;</span>
                            {feature}
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
                      {activeSkill === index ? closeLabel : detailLabel} &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
