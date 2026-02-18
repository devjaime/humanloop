"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PilotPayment() {
  const { t } = useLanguage();

  return (
    <section id="pilot" className="py-20 relative bg-gradient-to-b from-primary to-primary-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm font-mono mb-4">
            {t.pilotPayment.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="text-text-primary">{t.pilotPayment.title1} </span>
            <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
              {t.pilotPayment.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {t.pilotPayment.subtitle}
          </p>
        </div>

        {/* Pilot program card */}
        <div className="bg-surface-card border border-gold/20 rounded-3xl p-8 md:p-10 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🚀</span>
                <h3 className="text-xl font-bold text-text-primary">
                  {t.pilotPayment.programTitle}
                </h3>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {t.pilotPayment.programDescription}
              </p>
              
              <div className="space-y-3">
                {t.pilotPayment.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment buttons */}
            <div className="w-full md:w-72">
              <div className="bg-primary/50 rounded-2xl p-6 border border-secondary/10">
                <p className="text-text-muted text-sm mb-4 text-center">
                  {t.pilotPayment.selectAmount}
                </p>
                
                {/* Pilot fee button */}
                <a
                  href="https://www.paypal.com/ncp/payment/5CM4J3P78GDBC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-gold to-accent text-primary font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:scale-[1.02] text-center mb-4"
                >
                  <span className="block text-lg">$50 USD</span>
                  <span className="block text-xs font-normal opacity-80">{t.pilotPayment.pilotFee}</span>
                </a>

                {/* Tip/Donation button */}
                <a
                  href="https://www.paypal.com/ncp/payment/B7E8AEEDC9V6Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-surface-card border border-secondary/30 text-secondary font-semibold rounded-xl hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 text-center"
                >
                  <span className="block text-sm">💛 {t.pilotPayment.tip}</span>
                  <span className="block text-xs font-normal opacity-70">{t.pilotPayment.tipDescription}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* How payments work */}
          <div className="bg-surface-card/50 border border-secondary/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-text-primary">{t.pilotPayment.transparencyTitle}</h4>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t.pilotPayment.transparencyDescription}
            </p>
          </div>

          {/* Alternative payments */}
          <div className="bg-surface-card/50 border border-secondary/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h4 className="font-bold text-text-primary">{t.pilotPayment.alternativeTitle}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.pilotPayment.alternativeMethods.map((method, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 text-secondary"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-3">
              {t.pilotPayment.alternativeNote}
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {t.pilotPayment.trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-text-muted text-sm">
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
