"use client";

import { useState } from "react";
import { Check, Star, Zap, Shield, Users, TrendingUp } from "lucide-react";

const plans = [
  {
    name: "starter",
    price: 0,
    period: "free",
    icon: "🌱",
    title: "Starter",
    description: "Perfecto para probar la plataforma",
    features: [
      "3 MCP skills básicos",
      "10 interacciones/mes",
      "Soporte por email",
      "Documentación básica"
    ],
    cta: "Comenzar Gratis",
    popular: false,
  },
  {
    name: "pro",
    price: 29,
    period: "USD/mo",
    icon: "🚀",
    title: "Professional",
    description: "Para profesionales independientes",
    features: [
      "Todos los MCP skills",
      "100 interacciones/mes",
      "Soporte prioritario",
      "API access",
      "Personalización de workflows",
      "Analytics básico"
    ],
    cta: "Empezar Trial de 7 días",
    popular: true,
  },
  {
    name: "enterprise",
    price: 99,
    period: "USD/mo",
    icon: "⚡",
    title: "Enterprise",
    description: "Para equipos y empresas",
    features: [
      "Todo lo de Pro",
      "Interacciones ilimitadas",
      "Soporte 24/7 dedicado",
      "Multi-usuario",
      "Integraciones personalizadas",
      "SLA garantizado",
      "Training incluido"
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 relative bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric/20 border border-electric/30 text-electric text-sm font-mono mb-4">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="text-text-primary">Planes </span>
            <span className="bg-gradient-to-r from-electric to-accent bg-clip-text text-transparent">
              Flexibles
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Escoge el plan que mejor se adapte a tus necesidades. 
            Cambia cuando quieras.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-surface-card border border-border rounded-full p-1 flex">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !annual 
                  ? 'bg-electric text-white' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                annual 
                  ? 'bg-electric text-white' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Anual <span className="text-xs ml-1 opacity-70">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-surface-card border rounded-3xl p-8 ${
                plan.popular 
                  ? 'border-electric shadow-lg shadow-electric/10 scale-105 z-10' 
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-electric text-white text-sm font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{plan.icon}</div>
                <h3 className="text-xl font-bold text-text-primary">{plan.title}</h3>
                <p className="text-text-secondary text-sm mt-1">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-text-primary">
                    ${annual && plan.price > 0 ? Math.round(plan.price * 0.8) : plan.price}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-text-secondary">/{plan.period}</span>
                  )}
                </div>
                {annual && plan.price > 0 && (
                  <p className="text-sm text-electric mt-1">Ahorras 20% anual</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-electric" />
                    </div>
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-electric text-white hover:bg-electric-light'
                    : 'bg-surface-light text-text-primary hover:bg-border'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-text-secondary">
          <div className="flex items-center gap-2">
            <Shield size={18} />
            <span className="text-sm">Pagos seguros</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} />
            <span className="text-sm">Cancelar cuando quieras</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={18} />
            <span className="text-sm">500+ operators activos</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={18} />
            <span className="text-sm">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
