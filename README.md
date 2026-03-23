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
│   DeliverySkill │ LegalSkill │ CleaningServiceSkill │ EventSkill  │
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

### ⚡ Available Skills

HumanLoop includes real-world skills that connect AI orchestration with human operators:

| Skill | Command | Description |
|-------|---------|-------------|
| **Business Consultant** | `/business-consultant` | Connect with a software engineer for in-person consulting sessions |
| **Cleaning Service** | `/cleaning-service` | Professional home and office cleaning with AI scheduling |
| **Gasfiter Service** | `/gasfiter-service` | Certified plumbing and gas installation in Chile (SEC) |
| **IoT Security Installer** | `/iot-security-installer` | Professional security camera and smart home installation |

#### Example: Business Consulting
```
/business-consultant
Topic: Explain microservices architecture to investors
Location: Las Condes, Santiago
Duration: 2 hours
```

#### Example: Gasfiter Service
```
/gasfiter-service
Type: reparación
Problem: Fuga de agua en cocina
Location: Las Condes, Santiago
Urgency: urgente
```

#### Example: IoT Installation
```
/iot-security-installer
Service: 4 IP cameras + NVR system
Location: Providencia
Property: Residential house
```

### 🎬 Demo Projects & Promotional Videos

Multiple promotional videos created using [Remotion](https://remotion.dev/):

| Demo | Description |
|------|-------------|
| `airbnb-cleaning` | Airbnb property cleaning automation demo |
| `vocari-videos` | Vocational platform promotional videos |

```bash
# Preview demos
npm run remotion:preview

# Render specific demo
npm run remotion:render -- --props '{"video":"Video1Colegios"}'
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

### ⚡ Skills Disponibles

HumanLoop incluye skills del mundo real que conectan la orquestación de IA con operadores humanos:

| Skill | Comando | Descripción |
|-------|---------|-------------|
| **Consultor de Negocios** | `/business-consultant` | Conecta con un ingeniero de software para consultoría presencial |
| **Servicio de Limpieza** | `/cleaning-service` | Limpieza profesional de hogares y oficinas con IA |
| **Servicio de Gasfitería** | `/gasfiter-service` | Plomería y gas certificada en Chile (SEC) |
| **Instalador IoT/Seguridad** | `/iot-security-installer` | Instalación profesional de cámaras y dispositivos smart home |

#### Ejemplo: Consultoría de Negocios
```
/business-consultant
Tema: Explicar arquitectura de microservicios a inversores
Ubicación: Las Condes, Santiago
Duración: 2 horas
```

#### Ejemplo: Servicio de Gasfitería
```
/gasfiter-service
Tipo: reparación
Problema: Fuga de agua en cocina
Ubicación: Las Condes, Santiago
Urgencia: urgente
```

#### Ejemplo: Instalación IoT
```
/iot-security-installer
Servicio: 4 cámaras IP + sistema NVR
Ubicación: Providencia
Propiedad: Casa residencial
```

### 🎬 Proyectos Demo y Videos Promocionales

Múltiples videos promocionales creados con [Remotion](https://remotion.dev/):

| Demo | Descripción |
|------|-------------|
| `airbnb-cleaning` | Demo de automatización de limpieza para propiedades Airbnb |
| `vocari-videos` | Videos promocionales para plataforma vocacional |

```bash
# Vista previa de demos
npm run remotion:preview

# Renderizar demo específico
npm run remotion:render -- --props '{"video":"Video1Colegios"}'
```

---

## 📁 Project Structure / Estructura del Proyecto

```
humanloop/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── blog/           # Blog section
│   │   └── globals.css     # Global styles + Tailwind v4 theme
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation + Language switcher
│   │   ├── Hero.tsx        # Hero section
│   │   ├── HowItWorks.tsx  # HITL flow explanation
│   │   ├── Services.tsx    # Skills/capabilities
│   │   ├── Scenarios.tsx   # Use case examples
│   │   ├── MCPSection.tsx  # Technical architecture
│   │   ├── EthicsFramework.tsx  # Ethical principles
│   │   ├── Pricing.tsx     # Compensation model
│   │   ├── ConceptBanner.tsx    # POC explanation
│   │   └── Footer.tsx      # Footer
│   ├── content/
│   │   ├── en.ts           # English translations
│   │   └── es.ts           # Spanish translations
│   └── context/
│       └── LanguageContext.tsx  # i18n provider
├── skills/
│   ├── business-consultant/
│   │   └── SKILL.md        # Business consulting skill
│   ├── cleaning-service/
│   │   └── SKILL.md        # Cleaning service skill
│   ├── gasfiter-service/
│   │   └── SKILL.md        # Plumbing/gas service skill
│   └── iot-security-installer/
│       └── SKILL.md        # IoT installation skill
├── demos/
│   ├── airbnb-cleaning/    # Airbnb cleaning automation demo
│   └── vocari-videos/      # Vocari.cl promotional videos
├── out/                    # Rendered video output
├── package.json
├── vercel.json             # Vercel configuration
├── render-videos.sh        # Video rendering script
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
