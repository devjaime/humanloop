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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.tools.items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-surface-card border border-border rounded-2xl p-8 hover:border-electric/40 transition-all"
            >
              <span className="text-xs font-mono text-electric">{item.tag}</span>
              <h3 className="text-2xl font-bold text-text-primary mt-2 mb-3">{item.name}</h3>
              <p className="text-text-secondary mb-4">{item.description}</p>
              <span className="text-sm font-medium text-secondary">{item.cta} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
