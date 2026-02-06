# HumanLoop.cl

<div align="center">

![HumanLoop Logo](https://img.shields.io/badge/HumanLoop-HITL_Platform-8b5cf6?style=for-the-badge&logo=lightning&logoColor=white)

**AI that orchestrates. Humans that execute.**

*IA que orquesta. Humanos que ejecutan.*

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

[🇺🇸 English](#english) | [🇪🇸 Español](#español)

</div>

---

<a name="english"></a>
## 🇺🇸 English

### 🚀 What is HumanLoop?

HumanLoop is a **Human-in-the-Loop (HITL) orchestration platform** that connects AI agents with human operators for real-world tasks. This is a **proof of concept** demonstrating how AI can coordinate complex operations while humans maintain autonomy, professional judgment, and responsibility.

### 💡 The Problem We Solve

Traditional task coordination relies on:
- WhatsApp groups and scattered messages
- Spreadsheets and manual tracking
- Phone calls and unstructured communication
- No traceability or scalability

**HumanLoop changes this** by creating an orchestration layer where:
- AI agents **plan and coordinate** tasks
- Human operators **decide and execute** with full autonomy
- The system **learns from feedback** to improve continuously

### 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    ORCHESTRATION LAYER                       │
│         HumanLoop Orchestrator + Event Detection             │
├─────────────────────────────────────────────────────────────┤
│                    MCP AGENTS                                │
│    TaskAgent │ RoutingAgent │ ValidationAgent │ FeedbackAgent│
├─────────────────────────────────────────────────────────────┤
│                    SKILLS                                    │
│   DeliverySkill │ LegalSkill │ DiagnosticSkill │ EventSkill  │
├─────────────────────────────────────────────────────────────┤
│                    HUMAN OPERATORS                           │
│     Autonomous execution + Professional judgment + Feedback  │
└─────────────────────────────────────────────────────────────┘
```

### 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15+ | App Router, SSR |
| React | 19 | UI Components |
| TypeScript | 5.7+ | Type Safety |
| Tailwind CSS | v4 | Styling |
| Vercel | - | Deployment |

### 📦 Installation

```bash
# Clone repository
git clone https://github.com/devjaime/humanloop.git

# Install dependencies
cd humanloop
npm install

# Development server
npm run dev

# Production build
npm run build
```

### 🌐 Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will auto-detect Next.js
3. Automatic deployments on every push to `main`

### 📐 Ethical Framework

| Principle | Description |
|-----------|-------------|
| **Human supervision always** | The operator has the final word |
| **Explicit human responsibility** | Humans decide, not just execute |
| **AI as assistant, not boss** | AI suggests, humans validate |
| **Bidirectional collaboration** | Human feedback improves AI |
| **Amplification, not replacement** | We enhance human capabilities |
| **Fair compensation** | Direct and transparent payment to operators |

### 🎬 Promotional Video

A 60-second promotional video was created using [Remotion](https://remotion.dev/). The video project is available in `/humanloop-video/`.

```bash
cd humanloop-video
npm install
npm run studio  # Preview in browser
npm run render  # Render to MP4
```

---

<a name="español"></a>
## 🇪🇸 Español

### 🚀 ¿Qué es HumanLoop?

HumanLoop es una **plataforma de orquestación Human-in-the-Loop (HITL)** que conecta agentes de IA con operadores humanos para tareas del mundo real. Es un **proof of concept** que demuestra cómo la IA puede coordinar operaciones complejas mientras los humanos mantienen autonomía, criterio profesional y responsabilidad.

### 💡 El Problema que Resolvemos

La coordinación tradicional de tareas depende de:
- Grupos de WhatsApp y mensajes dispersos
- Hojas de cálculo y seguimiento manual
- Llamadas telefónicas y comunicación no estructurada
- Sin trazabilidad ni escalabilidad

**HumanLoop cambia esto** creando una capa de orquestación donde:
- Los agentes de IA **planifican y coordinan** tareas
- Los operadores humanos **deciden y ejecutan** con plena autonomía
- El sistema **aprende del feedback** para mejorar continuamente

### 🏗️ Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    CAPA DE ORQUESTACIÓN                      │
│         HumanLoop Orchestrator + Detección de Eventos        │
├─────────────────────────────────────────────────────────────┤
│                    AGENTES MCP                               │
│    TaskAgent │ RoutingAgent │ ValidationAgent │ FeedbackAgent│
├─────────────────────────────────────────────────────────────┤
│                    SKILLS                                    │
│   DeliverySkill │ LegalSkill │ DiagnosticSkill │ EventSkill  │
├─────────────────────────────────────────────────────────────┤
│                    OPERADORES HUMANOS                        │
│     Ejecución autónoma + Criterio profesional + Feedback     │
└─────────────────────────────────────────────────────────────┘
```

### 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 15+ | App Router, SSR |
| React | 19 | Componentes UI |
| TypeScript | 5.7+ | Tipado Seguro |
| Tailwind CSS | v4 | Estilos |
| Vercel | - | Despliegue |

### 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/devjaime/humanloop.git

# Instalar dependencias
cd humanloop
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

### 🌐 Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Despliegue automático en cada push a `main`

### 📐 Marco Ético

| Principio | Descripción |
|-----------|-------------|
| **Supervisión humana siempre** | El operador tiene la última palabra |
| **Responsabilidad humana explícita** | Humanos deciden, no solo ejecutan |
| **IA como asistente, no jefe** | La IA sugiere, el humano valida |
| **Colaboración bidireccional** | El feedback humano mejora la IA |
| **Amplificación, no reemplazo** | Potenciamos capacidades humanas |
| **Compensación justa** | Pago directo y transparente al operador |

### 🎬 Video Promocional

Se creó un video promocional de 60 segundos usando [Remotion](https://remotion.dev/). El proyecto del video está disponible en `/humanloop-video/`.

```bash
cd humanloop-video
npm install
npm run studio  # Vista previa en navegador
npm run render  # Renderizar a MP4
```

---

## 📁 Project Structure / Estructura del Proyecto

```
humanloop/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles + Tailwind v4 theme
│   └── components/
│       ├── Navbar.tsx      # Navigation
│       ├── Hero.tsx        # Hero section
│       ├── HowItWorks.tsx  # HITL flow explanation
│       ├── Services.tsx    # Skills/capabilities
│       ├── Scenarios.tsx   # Use case examples
│       ├── MCPSection.tsx  # Technical architecture
│       ├── EthicsFramework.tsx  # Ethical principles
│       ├── Pricing.tsx     # Compensation model
│       ├── ConceptBanner.tsx    # POC explanation
│       └── Footer.tsx      # Footer
├── humanloop-video/        # Remotion video project
├── package.json
├── vercel.json             # Vercel configuration
└── README.md
```

---

## 🤝 Contributing / Contribuir

This is a proof of concept. Contributions, issues, and feature requests are welcome!

Este es un proof of concept. ¡Contribuciones, issues y solicitudes de features son bienvenidas!

## 📄 License / Licencia

MIT License - Educational and demonstrative use.

Licencia MIT - Uso educativo y demostrativo.

---

<div align="center">

**Made with AI + Human collaboration in Chile 🇨🇱**

*Hecho con colaboración IA + Humanos en Chile 🇨🇱*

</div>
