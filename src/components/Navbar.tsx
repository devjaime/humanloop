"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="#como-funciona" className="text-sm text-text-secondary hover:text-secondary transition-colors">Como Funciona</a>
            <a href="#skills" className="text-sm text-text-secondary hover:text-secondary transition-colors">Skills</a>
            <a href="#arquitectura" className="text-sm text-text-secondary hover:text-secondary transition-colors">Arquitectura</a>
            <a href="#etica" className="text-sm text-text-secondary hover:text-secondary transition-colors">Marco Etico</a>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all">
              Soy Operador
            </a>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-secondary to-electric text-white hover:shadow-lg hover:shadow-secondary/20 transition-all">
              Integrar mi IA
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
            <a href="#como-funciona" className="block text-sm text-text-secondary hover:text-secondary px-2 py-1">Como Funciona</a>
            <a href="#skills" className="block text-sm text-text-secondary hover:text-secondary px-2 py-1">Skills</a>
            <a href="#arquitectura" className="block text-sm text-text-secondary hover:text-secondary px-2 py-1">Arquitectura</a>
            <a href="#etica" className="block text-sm text-text-secondary hover:text-secondary px-2 py-1">Marco Etico</a>
            <div className="flex gap-2 pt-2">
              <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20">Soy Operador</a>
              <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-secondary to-electric text-white">Integrar mi IA</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
