"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { content as enContent } from "@/content/en";
import { content as esContent } from "@/content/es";

type Language = "en" | "es";
type Content = typeof enContent;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("hl-lang");
  if (stored === "en" || stored === "es") return stored;
  const nav = (window.navigator.language || "en").toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    setLanguageState(detectLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("hl-lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = language === "en" ? enContent : esContent;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
