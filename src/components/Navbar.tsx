"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary to-electric flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-text-primary leading-none">HumanLoop</span>
              <span className="text-[10px] text-secondary font-mono">.cl</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-text-secondary hover:text-secondary transition-colors">{t.nav.howItWorks}</a>
            <a href="#skills" className="text-sm text-text-secondary hover:text-secondary transition-colors">{t.nav.skills}</a>
            <a href="#architecture" className="text-sm text-text-secondary hover:text-secondary transition-colors">{t.nav.architecture}</a>
            <a href="#ethics" className="text-sm text-text-secondary hover:text-secondary transition-colors">{t.nav.ethics}</a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-xs font-mono">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded transition-all ${
                  language === "en"
                    ? "text-white bg-secondary/20"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                EN
              </button>
              <span className="text-text-muted/30">|</span>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 rounded transition-all ${
                  language === "es"
                    ? "text-white bg-secondary/20"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                ES
              </button>
            </div>

            <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all">
              {t.nav.ctaOperator}
            </a>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-secondary to-electric text-white hover:shadow-lg hover:shadow-secondary/20 transition-all">
              {t.nav.ctaIntegrate}
            </a>
          </div>

          <button className="md:hidden text-text-secondary hover:text-secondary" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-secondary/10 mt-2 pt-4 space-y-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 px-2 pb-2 border-b border-secondary/10">
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-mono px-3 py-1.5 rounded transition-all ${
                  language === "en"
                    ? "text-white bg-secondary/20"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`text-xs font-mono px-3 py-1.5 rounded transition-all ${
                  language === "es"
                    ? "text-white bg-secondary/20"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                ES
              </button>
            </div>
            <a href="#how-it-works" className="block text-sm text-text-secondary hover:text-secondary px-2 py-1">{t.nav.howItWorks}</a>
            <a href="#skills" className="block text-sm text-text-secondary hover:text-secondary px-2 py-1">{t.nav.skills}</a>
            <a href="#architecture" className="block text-sm text-text-secondary hover:text-secondary px-2 py-1">{t.nav.architecture}</a>
            <a href="#ethics" className="block text-sm text-text-secondary hover:text-secondary px-2 py-1">{t.nav.ethics}</a>
            <div className="flex gap-2 pt-2">
              <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20">{t.nav.ctaOperator}</a>
              <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-secondary to-electric text-white">{t.nav.ctaIntegrate}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
