# HumanLoop.cl

> IA que orquesta. Humanos que ejecutan.

Plataforma de orquestación Human-in-the-Loop (HITL) que conecta agentes de IA con operadores humanos para tareas del mundo físico.

## 🚀 Concepto

HumanLoop es un **proof of concept** que demuestra cómo los agentes de IA pueden:
- **Orquestar** tareas complejas mediante el Model Context Protocol (MCP)
- **Coordinar** con operadores humanos que mantienen autonomía y criterio
- **Amplificar** el trabajo humano sin reemplazarlo

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    CAPA DE ORQUESTACIÓN                      │
│         HumanLoop Orchestrator + Event Detection             │
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

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **UI**: React 19, TypeScript 5.7+
- **Estilos**: Tailwind CSS v4
- **Deploy**: Vercel

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/[tu-usuario]/humanloop-cl.git

# Instalar dependencias
cd humanloop-cl
npm install

# Desarrollo
npm run dev

# Build producción
npm run build
```

## 🌐 Deploy en Vercel

1. Conecta el repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Deploy automático en cada push a `main`

## 📐 Principios Éticos

1. **Supervisión humana siempre**: El operador tiene la última palabra
2. **Responsabilidad humana explícita**: Humanos deciden, no solo ejecutan
3. **IA como asistente, no jefe**: La IA sugiere, el humano valida
4. **Colaboración bidireccional**: Feedback humano mejora la IA
5. **Amplificación, no reemplazo**: Potenciamos capacidades humanas
6. **Compensación justa**: Pago directo y transparente al operador

## 📄 Licencia

Proof of concept - Uso educativo y demostrativo.

---

Hecho con colaboración IA + Humanos en Chile 🇨🇱
