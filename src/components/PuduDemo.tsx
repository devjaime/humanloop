"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const tagColor: Record<string, string> = {
  hit: "text-secondary",
  noise: "text-accent",
  def: "text-success",
  test: "text-gold",
  call: "text-electric-light",
};

export default function PuduDemo() {
  const { t } = useLanguage();
  const d = t.puduDemo;
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(0);

  const strategy = d.strategies[active]!;

  useEffect(() => {
    setVisible(0);
    const timer = setInterval(() => {
      setVisible((n) => {
        if (n >= strategy.lines.length) {
          clearInterval(timer);
          return n;
        }
        return n + 1;
      });
    }, 220);
    return () => clearInterval(timer);
  }, [active, strategy.lines.length]);

  return (
    <section id="pudu-demo" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(0,212,255,0.12),_transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric/20 border border-electric/40 text-electric-light text-xs font-mono tracking-[0.2em] mb-5">
            {d.badge}
          </span>
          <p className="text-secondary font-mono text-sm mb-3">{d.kicker}</p>
          <h2 className="text-4xl sm:text-6xl font-black leading-tight mb-5">
            <span className="text-text-primary">{d.title1} </span>
            <span className="bg-gradient-to-r from-secondary via-electric-light to-neon-pink bg-clip-text text-transparent">
              {d.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg">{d.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div className="rounded-3xl border border-secondary/20 bg-surface-card/80 backdrop-blur shadow-[0_0_80px_rgba(124,58,237,0.15)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-secondary/10 bg-primary/60">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-gold" />
                <span className="w-3 h-3 rounded-full bg-success" />
              </div>
              <span className="text-[10px] font-mono text-secondary tracking-widest">{d.origin}</span>
            </div>
            <div className="flex flex-wrap gap-2 px-4 py-3 border-b border-secondary/10">
              {d.strategies.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                    i === active
                      ? "bg-gradient-to-r from-electric to-secondary text-white shadow-lg shadow-electric/30"
                      : "bg-surface-light text-text-muted hover:text-text-primary"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="p-5 font-mono text-sm min-h-[280px]">
              <p className="text-text-muted mb-1">{d.promptLabel}</p>
              <p className="text-text-primary mb-4">{d.prompt}</p>
              <p className="text-secondary mb-4">
                <span className="text-text-muted">$ </span>
                {strategy.command}
              </p>
              {strategy.lines.slice(0, visible).map((line) => (
                <p key={line.file} className="mb-2">
                  <span className="text-electric-light">{line.file}</span>
                  <span className={`ml-3 ${tagColor[line.tag] ?? "text-text-secondary"}`}>{line.text}</span>
                </p>
              ))}
              {visible < strategy.lines.length && <span className="inline-block w-2 h-4 bg-secondary animate-pulse" />}
            </div>
            <p className="px-5 pb-4 text-[11px] text-text-muted">{d.originNote}</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-electric/30 bg-gradient-to-br from-electric/20 to-surface-card p-8">
              <p className="text-xs font-mono text-electric-light mb-2">{d.reduction}</p>
              <p className="text-6xl font-black bg-gradient-to-r from-secondary to-success bg-clip-text text-transparent">
                {d.reductionValue}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  ["matches", strategy.metrics.matches],
                  ["tokens", strategy.metrics.tokens],
                  ["tools", strategy.metrics.tools],
                  ["score", strategy.metrics.score],
                ] as const
              ).map(([key, value]) => (
                <div key={key} className="rounded-2xl border border-border bg-surface-card p-5">
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">
                    {d.metricLabels[key]}
                  </p>
                  <p className="text-2xl font-black text-text-primary">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-muted">{d.scoreNote}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/devjaime/pudu-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-electric to-secondary text-white font-semibold shadow-lg shadow-electric/20"
              >
                {d.github}
              </a>
              <a href="/mcp" className="px-5 py-3 rounded-xl border border-secondary/30 text-secondary font-semibold hover:bg-secondary/10">
                {d.mcpCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
