import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "HumanLoop.cl | AI Orchestration with Human Action",
  description:
    "Intelligent orchestration platform with Human-in-the-Loop model. AI agents coordinate and plan. Verified human operators execute. MCP + Skills architecture.",
  keywords: [
    "AI orchestration",
    "human in the loop",
    "HITL",
    "MCP",
    "intelligent agents",
    "skills",
    "human operators",
    "Chile",
    "human AI collaboration",
    "work amplification",
  ],
  openGraph: {
    title: "HumanLoop.cl | AI that amplifies human work",
    description:
      "Platform where AI agents orchestrate tasks and verified human operators execute in the real world. Intelligent coordination, responsible human action.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
