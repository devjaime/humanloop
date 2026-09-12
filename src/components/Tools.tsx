"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Tools() {
  const { t } = useLanguage();
  return (
    <section id="tools" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric/20 border border-electric/30 text-electric text-sm font-mono mb-4">
            {t.tools.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="text-text-primary">{t.tools.title1} </span>
            <span className="bg-gradient-to-r from-electric to-accent bg-clip-text text-transparent">
              {t.tools.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">{t.tools.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.tools.items.map((item) => (
            <a
              key={item.name}
              href={item.name === "Pudu-AI" ? "#pudu-demo" : item.href}
              className="group relative overflow-hidden bg-surface-card border border-electric/20 rounded-3xl p-8 hover:border-secondary/50 hover:shadow-[0_0_50px_rgba(0,212,255,0.12)] transition-all"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-electric/10 group-hover:bg-secondary/10 transition-colors" />
              <span className="text-xs font-mono text-electric tracking-widest">{item.tag}</span>
              <h3 className="text-3xl font-black text-text-primary mt-3 mb-3">{item.name}</h3>
              <p className="text-text-secondary mb-6 relative">{item.description}</p>
              <span className="text-sm font-bold text-secondary">{item.cta} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
