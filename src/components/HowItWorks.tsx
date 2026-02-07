"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const icons = [
    <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A7.297 7.297 0 0112 21.75" />
    </svg>,
    <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>,
    <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>,
    <svg key="4" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
    <svg key="5" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>,
    <svg key="6" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  ];

  const codeDetails = [
    "event.detect({ source: 'iot_sensor', type: 'anomaly', location: 'Las Condes' })",
    "agents.analyze({ priority: 'high', requires_human: true, skill: 'field_repair' })",
    "skill.execute('route_optimization', { deliveries: 4, zone: 'Providencia' })",
    "hitl.evaluate({ needs_physical: true, needs_judgment: true }) // -> route_to_human",
    "operator.assign({ type: 'plumber', location: 'Las Condes', status: 'accepted' })",
    "task.complete({ evidence: 'photo', feedback: 'resolved', operator_paid: true })",
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-surface-card border border-electric/20 text-xs font-mono text-electric-light mb-4">
            {t.howItWorks.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">{t.howItWorks.title1} </span>
            <span className="bg-gradient-to-r from-electric to-success bg-clip-text text-transparent">
              {t.howItWorks.titleHighlight}
            </span>
            {t.howItWorks.title2 && <span className="text-text-primary"> {t.howItWorks.title2}</span>}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-surface-card border border-secondary/10 rounded-2xl p-6 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-black text-secondary/10 font-mono">{step.number}</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-electric/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                  {icons[index]}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">{step.description}</p>
                <div className="bg-surface/50 rounded-lg p-3 border border-secondary/5">
                  <p className="text-xs font-mono text-text-muted leading-relaxed">{codeDetails[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
