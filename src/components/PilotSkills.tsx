"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PilotSkills() {
  const { t } = useLanguage();
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    {
      id: "business-consultant",
      icon: "💼",
      command: "/business-consultant",
      title: t.pilotSkills.skills[0].title,
      description: t.pilotSkills.skills[0].description,
      features: t.pilotSkills.skills[0].features,
      example: {
        input: t.pilotSkills.skills[0].example.input,
        output: t.pilotSkills.skills[0].example.output,
      },
      pricing: "$40,000 - $400,000 CLP",
      color: "#10b981",
    },
    {
      id: "iot-security-installer",
      icon: "📹",
      command: "/iot-security-installer",
      title: t.pilotSkills.skills[1].title,
      description: t.pilotSkills.skills[1].description,
      features: t.pilotSkills.skills[1].features,
      example: {
        input: t.pilotSkills.skills[1].example.input,
        output: t.pilotSkills.skills[1].example.output,
      },
      pricing: "$25,000 - $250,000 CLP",
      color: "#06b6d4",
    },
  ];

  return (
    <section id="pilot-skills" className="py-24 relative bg-gradient-to-b from-primary to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-success/10 border border-success/30 text-xs font-mono text-success mb-4 animate-pulse">
            {t.pilotSkills.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">{t.pilotSkills.title1} </span>
            <span className="bg-gradient-to-r from-success to-secondary bg-clip-text text-transparent">
              {t.pilotSkills.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {t.pilotSkills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`relative bg-surface-card border-2 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group ${
                activeSkill === index
                  ? "border-secondary shadow-lg shadow-secondary/20"
                  : "border-secondary/20 hover:border-secondary/40"
              }`}
              onClick={() => setActiveSkill(activeSkill === index ? null : index)}
            >
              {/* Header */}
              <div
                className="p-6 border-b border-secondary/10"
                style={{ background: `linear-gradient(135deg, ${skill.color}10, transparent)` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{skill.icon}</span>
                    <div>
                      <code
                        className="text-sm font-mono px-3 py-1 rounded-lg bg-surface border border-secondary/20"
                        style={{ color: skill.color }}
                      >
                        {skill.command}
                      </code>
                      <h3 className="text-xl font-bold text-text-primary mt-2">{skill.title}</h3>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-success text-xl">✓</span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm">{skill.description}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: `${skill.color}10`,
                        borderColor: `${skill.color}30`,
                        color: skill.color,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Example Terminal */}
                <div className="bg-primary rounded-xl overflow-hidden border border-secondary/10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-surface/50 border-b border-secondary/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-text-muted ml-2 font-mono">terminal</span>
                  </div>
                  <div className="p-4 space-y-3 font-mono text-sm">
                    <div>
                      <span className="text-success">$</span>
                      <span className="text-secondary ml-2">{skill.example.input}</span>
                    </div>
                    <div
                      className={`transition-all duration-500 ${
                        activeSkill === index ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      <div className="text-text-muted text-xs mt-2 p-3 bg-surface/30 rounded-lg">
                        {skill.example.output}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-text-muted text-sm">{t.pilotSkills.compensation}</span>
                  <span className="font-bold font-mono" style={{ color: skill.color }}>
                    {skill.pricing}
                  </span>
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-success/20 text-success border border-success/30">
                  PILOT
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-text-muted text-sm mb-6">{t.pilotSkills.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-success text-white font-semibold rounded-xl hover:bg-success/90 transition-all"
            >
              {t.pilotSkills.ctaOperator}
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-secondary/10 border border-secondary/30 text-secondary font-semibold rounded-xl hover:bg-secondary/20 transition-all"
            >
              {t.pilotSkills.ctaIntegrate}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
