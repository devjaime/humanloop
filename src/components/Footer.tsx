"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary border-t border-secondary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary to-electric flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-bold text-text-primary">
                  HumanLoop
                </span>
                <span className="text-[10px] text-secondary font-mono">.cl</span>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {t.footer.brand.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/5 border border-secondary/10">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-mono text-secondary">
                PROOF OF CONCEPT
              </span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-xs font-mono text-secondary mb-4 tracking-wider">
              {t.footer.skills.title}
            </h4>
            <ul className="space-y-2">
              {t.footer.skills.items.map((skill, i) => (
                <li key={i}>
                  <a
                    href="#skills"
                    className="text-sm text-text-muted hover:text-secondary transition-colors"
                  >
                    {skill}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Developers */}
          <div>
            <h4 className="text-xs font-mono text-secondary mb-4 tracking-wider">
              {t.footer.developers.title}
            </h4>
            <ul className="space-y-2">
              {t.footer.developers.items.map((item, i) => (
                <li key={i}>
                  <a
                    href="#arquitectura"
                    className="text-sm text-text-muted hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About the project */}
          <div>
            <h4 className="text-xs font-mono text-secondary mb-4 tracking-wider">
              {t.footer.about.title}
            </h4>
            <ul className="space-y-2">
              {t.footer.about.items.map((item, i) => (
                <li key={i}>
                  <a
                    href="#etica"
                    className="text-sm text-text-muted hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary/10 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-xs text-text-muted font-mono">
                &copy; 2025 HumanLoop.cl
              </p>
              <span className="text-text-muted/30">|</span>
              <p className="text-xs text-text-muted">
                {t.footer.bottom.tagline}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-text-muted font-mono">
                {t.footer.bottom.madeWith}{" "}
                <span className="text-success">{t.footer.bottom.collaboration}</span> {t.footer.bottom.inChile}
              </span>
              <span className="text-text-muted/30">|</span>
              <span className="text-xs text-text-muted font-mono">
                <span className="text-secondary">IA + {t.footer.bottom.humans}</span>
              </span>
            </div>
          </div>

          {/* Final disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-[10px] font-mono text-text-muted/50 max-w-2xl mx-auto leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
