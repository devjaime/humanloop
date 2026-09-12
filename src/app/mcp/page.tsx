"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const snippet = `{
  "mcpServers": {
    "humanloop": {
      "command": "npx",
      "args": ["-y", "humanloop-mcp"],
      "env": { "HUMANLOOP_REGION": "cl-santiago" }
    },
    "pudu-ai": {
      "command": "python3",
      "args": ["-m", "pudu_agent"],
      "env": { "PYTHONPATH": "./python" }
    }
  }
}`;

export default function McpDocsPage() {
  const { t } = useLanguage();
  const docs = t.mcpDocs;

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <a href="/" className="text-sm text-secondary font-mono mb-8 inline-block">
            ← {docs.back}
          </a>
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric/20 border border-electric/40 text-electric-light text-xs font-mono tracking-[0.2em] mb-6">
            {docs.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="text-text-primary">{docs.title1} </span>
            <span className="bg-gradient-to-r from-secondary via-electric-light to-neon-pink bg-clip-text text-transparent">
              {docs.titleHighlight}
            </span>
          </h1>
          <p className="text-xl text-text-secondary mb-16 max-w-3xl">{docs.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {docs.groups.map((group) => (
              <section
                key={group.id}
                className="rounded-3xl border border-secondary/20 bg-surface-card p-8"
              >
                <p className="font-mono text-secondary mb-2">{group.name}</p>
                <h2 className="text-2xl font-black mb-2">
                  {group.id === "hitl" ? docs.humanloopTitle : docs.puduTitle}
                </h2>
                <p className="text-text-secondary mb-6">
                  {group.id === "hitl" ? docs.humanloopLead : docs.puduLead}
                </p>
                <ul className="space-y-4">
                  {group.tools.map((tool) => (
                    <li key={tool.name} className="border-b border-border/60 pb-3">
                      <code className="text-electric-light font-mono text-sm">{tool.name}</code>
                      <p className="text-sm text-text-secondary mt-1">{tool.desc}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="rounded-3xl border border-electric/30 bg-primary p-8">
            <h2 className="text-xl font-bold mb-2">{docs.installTitle}</h2>
            <p className="text-text-muted text-sm mb-4">{docs.snippetTitle}</p>
            <pre className="overflow-x-auto text-sm font-mono text-secondary leading-relaxed">{snippet}</pre>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
