"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DollarSign, TrendingUp, Users, Shield, CheckCircle, ArrowRight } from "lucide-react";

export default function RevenueModel() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("operators");

  const operatorStats = [
    { label: "Ingreso promedio/mes", value: "$450.000 CLP", icon: DollarSign },
    { label: "Jobs completados", value: "12.500+", icon: CheckCircle },
    { label: "Operators activos", value: "150+", icon: Users },
    { label: "Crecimiento mensual", value: "+23%", icon: TrendingUp },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Te llegan solicitudes",
      description: "Los clientes necesiten servicios y nuestro AI los deriva a ti según tu especialidad y disponibilidad."
    },
    {
      step: "2",
      title: "Aceptas y ejecutas",
      description: "Revisas los detalles, aceptas el trabajo y lo ejecutas. Nosotros coordinamos todo."
    },
    {
      step: "3",
      title: "Recibes tu pago",
      description: "Pago automático en 24-48 horas. Sin chasing, sin complicaciones."
    }
  ];

  return (
    <section id="revenue" className="py-24 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success/20 border border-success/30 text-success text-sm font-mono mb-4">
            💰 GANA DINERO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="text-text-primary">Genera ingresos </span>
            <span className="bg-gradient-to-r from-success to-electric bg-clip-text text-transparent">
              con tu expertise
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Conviértete en operador de HumanLoop. Gana dinero siendo tu propio jefe,
            usando tu conocimiento y experiencia.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {operatorStats.map((stat, index) => (
            <div
              key={index}
              className="bg-surface-light border border-border rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className="relative bg-surface-light border border-border rounded-2xl p-8"
            >
              <div className="absolute -top-4 left-8 w-10 h-10 bg-success rounded-full flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-text-primary mt-4 mb-3">{item.title}</h3>
              <p className="text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#pilot"
              className="px-8 py-4 bg-success text-white font-bold rounded-xl hover:bg-success-light transition-all hover:scale-105 flex items-center gap-2"
            >
              Convertirse en Operator
              <ArrowRight size={20} />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-surface-light text-text-primary font-semibold rounded-xl hover:bg-border transition-colors"
            >
              Cómo funciona
            </a>
          </div>
          <p className="text-sm text-text-secondary mt-4">
            <Shield className="inline w-4 h-4 mr-1" />
            Pagos garantizados • Sin competencia desleal • Soporte 24/7
          </p>
        </div>
      </div>
    </section>
  );
}
