"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function MCPCatalog() {
  const { t } = useLanguage();
  const d = t.puduDemo;
  const docs = t.mcpDocs;

  return (
    <section id="mcp-catalog" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-mono tracking-[0.2em] mb-5">
            {docs.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-4 text-text-primary">{d.mcpTitle}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">{d.mcpSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {docs.groups.map((group) => (
            <div
              key={group.id}
              className="rounded-3xl border border-electric/20 bg-surface-card p-8 hover:border-secondary/40 transition-all"
            >
              <p className="font-mono text-secondary text-sm mb-2">{group.name}</p>
              <h3 className="text-2xl font-black mb-2">
                {group.id === "hitl" ? docs.humanloopTitle : docs.puduTitle}
              </h3>
              <p className="text-text-secondary mb-6">
                {group.id === "hitl" ? docs.humanloopLead : docs.puduLead}
              </p>
              <ul className="space-y-3">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="flex gap-3">
                    <code className="text-xs text-electric-light font-mono shrink-0 mt-0.5">{tool.name}</code>
                    <span className="text-sm text-text-secondary">{tool.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pudu-ai"
              className="inline-block px-8 py-4 rounded-2xl border border-secondary/40 text-secondary font-bold hover:bg-secondary/10"
            >
              {d.docsCta} →
            </a>
            <a
              href="/mcp"
              className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-secondary to-electric text-white font-bold shadow-[0_0_40px_rgba(0,212,255,0.25)]"
            >
              {d.mcpCta} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
