"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ConceptBanner() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-surface to-neon-pink/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main concept card */}
        <div className="bg-surface-card border-2 border-electric/30 rounded-3xl overflow-hidden animate-border-dance shadow-2xl">
          {/* Header with glitch effect */}
          <div className="relative p-8 sm:p-12 text-center bg-gradient-to-b from-electric/10 to-transparent">
            {/* Rotating decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 border border-secondary/20 rounded-full animate-rotate-slow">
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-secondary -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-xs font-mono text-secondary font-bold tracking-wider">
                PROOF OF CONCEPT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="text-text-primary">{t.concept.title1} </span>
              <span className="bg-gradient-to-r from-secondary via-electric to-success bg-clip-text text-transparent animate-gradient">
                {t.concept.titleHighlight}
              </span>
            </h2>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
              {t.concept.subtitle.part1}{" "}
              <span className="text-electric-light font-semibold">
                {t.concept.subtitle.highlight}
              </span>{" "}
              {t.concept.subtitle.part2}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric/10 border border-electric/20 text-electric-light font-medium hover:bg-electric/20 transition-all"
            >
              {isExpanded ? t.concept.hideVision : t.concept.readVision}
              <svg
                className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Expandable vision */}
          <div
            className={`overflow-hidden transition-all duration-700 ${
              isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-8 sm:px-12 pb-12 space-y-8">
              <div className="h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

              {/* Vision points */}
              {t.concept.visionPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-xl bg-surface/50 border border-secondary/5 hover:border-secondary/15 transition-all"
                >
                  <span className="text-3xl shrink-0">{point.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}

              {/* Final note */}
              <div className="text-center p-6 bg-gradient-to-r from-success/5 via-electric/5 to-secondary/5 rounded-xl border border-success/10">
                <p className="text-sm text-text-muted font-mono leading-relaxed">
                  {t.concept.finalNote.line1}
                  <br />
                  {t.concept.finalNote.line2}
                  <br />
                  <span className="text-success">
                    {t.concept.finalNote.line3}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
