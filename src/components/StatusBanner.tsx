"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function StatusBanner() {
  const { t } = useLanguage();
  return (
    <div className="bg-amber-900/20 border-t border-amber-500/30 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-amber-200 text-sm">
          <strong>📋 {t.status.title}</strong> {t.status.body}{" "}
          <a href="mailto:contacto@humanloop.cl" className="underline">
            {t.status.contact}
          </a>
        </p>
      </div>
    </div>
  );
}
