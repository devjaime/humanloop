"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PuduDocsPage() {
  const { t } = useLanguage();
  const d = t.puduDocs;

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[220px_1fr] gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-2">
              <p className="text-[10px] font-mono text-secondary tracking-[0.2em] mb-4">{d.tocTitle}</p>
              {d.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs text-text-muted hover:text-secondary py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          <article>
            <a href="/" className="text-sm text-secondary font-mono mb-8 inline-block">
              ← {d.back}
            </a>
            <span className="inline-block px-4 py-1.5 rounded-full bg-electric/20 border border-electric/40 text-electric-light text-xs font-mono tracking-[0.2em] mb-6">
              {d.badge}
            </span>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              <span className="text-text-primary">{d.title1} </span>
              <span className="bg-gradient-to-r from-secondary via-electric-light to-neon-pink bg-clip-text text-transparent">
                {d.titleHighlight}
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl">{d.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-16">
              <a
                href="https://github.com/devjaime/pudu-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-electric to-secondary text-white font-semibold"
              >
                {d.github}
              </a>
              <a href="/#pudu-demo" className="px-5 py-3 rounded-xl border border-secondary/30 text-secondary font-semibold">
                {d.demoCta}
              </a>
              <a href="/mcp" className="px-5 py-3 rounded-xl border border-electric/30 text-electric-light font-semibold">
                {d.mcpCta}
              </a>
            </div>

            <section id="what" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-black mb-4">{d.whatTitle}</h2>
              <p className="text-text-secondary text-lg mb-6">{d.whatBody}</p>
              <ul className="space-y-2">
                {d.whatRules.map((rule) => (
                  <li key={rule} className="flex gap-3 text-sm text-text-secondary">
                    <span className="text-secondary font-mono">→</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </section>

            {d.steps.map((step) => (
              <section key={step.id} id={step.id} className="mb-14 scroll-mt-24">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono text-secondary text-sm">{step.n}</span>
                  <h2 className="text-2xl sm:text-3xl font-black">{step.title}</h2>
                </div>
                <p className="text-text-secondary mb-4">{step.body}</p>
                <pre className="rounded-2xl border border-electric/20 bg-primary p-5 overflow-x-auto text-sm font-mono text-secondary leading-relaxed mb-3">
                  {step.code}
                </pre>
                <p className="text-xs text-text-muted">{step.note}</p>
              </section>
            ))}

            <section className="mb-14">
              <h2 className="text-2xl font-black mb-4">{d.flagsTitle}</h2>
              <div className="rounded-2xl border border-border overflow-hidden">
                {d.flags.map((row) => (
                  <div key={row.flag} className="grid grid-cols-[minmax(0,0.45fr)_1fr] gap-4 px-5 py-3 border-b border-border/60 last:border-0">
                    <code className="text-electric-light text-xs font-mono">{row.flag}</code>
                    <span className="text-sm text-text-secondary">{row.meaning}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl font-black mb-4">{d.commandsTitle}</h2>
              <pre className="rounded-2xl border border-secondary/20 bg-primary p-5 overflow-x-auto text-sm font-mono text-secondary leading-relaxed">
                {d.commands}
              </pre>
            </section>

            <section id="score" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-black mb-4">{d.scoreTitle}</h2>
              <p className="text-text-secondary mb-6">{d.scoreBody}</p>
              <div className="rounded-2xl border border-border overflow-hidden">
                {d.scoreRows.map((row) => (
                  <div key={row.dim} className="grid grid-cols-3 gap-3 px-5 py-3 border-b border-border/60 last:border-0 text-sm">
                    <span className="font-semibold">{row.dim}</span>
                    <span className="font-mono text-secondary">{row.weight}</span>
                    <span className="text-text-muted">{row.source}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="privacy" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-black mb-4">{d.privacyTitle}</h2>
              <ul className="space-y-3">
                {d.privacyItems.map((item) => (
                  <li key={item} className="text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="later" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black mb-4">{d.laterTitle}</h2>
              <ul className="space-y-2 mb-4">
                {d.laterItems.map((item) => (
                  <li key={item} className="text-text-secondary font-mono text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-muted mb-4">{d.laterNote}</p>
              <p className="text-sm text-text-muted mb-2">{d.credits}</p>
              <p className="text-sm text-text-muted">{d.testsNote}</p>
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}
