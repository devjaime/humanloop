import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HumanLoop.cl | Orquestacion IA con Accion Humana",
  description:
    "Plataforma de orquestacion inteligente con modelo Human-in-the-Loop. Agentes de IA coordinan y planifican. Operadores humanos verificados ejecutan. Arquitectura MCP + Skills para Chile.",
  keywords: [
    "orquestacion IA",
    "human in the loop",
    "HITL",
    "MCP",
    "agentes inteligentes",
    "skills",
    "operadores humanos",
    "Chile",
    "colaboracion humano IA",
    "amplificacion del trabajo",
  ],
  openGraph: {
    title: "HumanLoop.cl | IA que amplifica el trabajo humano",
    description:
      "Plataforma donde agentes de IA orquestan tareas y operadores humanos verificados ejecutan en el mundo real. Coordinacion inteligente, accion humana responsable.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
