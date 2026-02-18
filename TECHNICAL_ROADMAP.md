# HumanLoop - Technical Roadmap

## Estado Actual
- ✅ Landing page funcional (Next.js)
- ✅ Sistema de pagos PayPal listo
- ✅ Skills definidos (gasfitería, electricista, etc.)
- ❌ Sin backend, sin operators, sin sistema real

## Arquitectura Target

```
┌─────────────────────────────────────────────────────────────┐
│                      HUMANLOOP PLATFORM                      │
├─────────────────────────────────────────────────────────────┤
│  FRONTEND                                                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Landing     │  │ Operator    │  │ Client      │         │
│  │ (Next.js)   │  │ Dashboard   │  │ Portal      │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  BACKEND (API Layer)                                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ REST API    │  │ WebSocket   │  │ Auth        │         │
│  │ /api/v1     │  │ Real-time   │  │ Supabase    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  ORCHESTRATION LAYER (MCP)                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ TaskAgent   │  │ RoutingAgent│  │ValidationAge│         │
│  │ - classify  │  │ - match     │  │ - verify    │         │
│  │ - extract   │  │ - priority  │  │ - approve   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  SKILLS LAYER (WebMCP)                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Plumbing    │  │ Electrical  │  │ Logistics   │         │
│  │ MCP Server  │  │ MCP Server  │  │ MCP Server  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  OPERATORS (Human Layer)                                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Certified   │  │ Freelance   │  │ On-demand   │         │
│  │ Plumbers    │  │ Electricians│  │ Couriers   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

## Fase 1: MVP Funcional (Semanas 1-4)

### Semana 1: Backend Base
```bash
# Stack técnica
- Supabase (Auth, DB, Realtime) - $0/mo start
- Next.js API Routes
- WebSocket con Socket.io o Pusher
- PayPal SDK

# Schema inicial
- users (id, email, role: client|operator|admin)
- operators (user_id, skills[], certifications, availability)
- tasks (id, client_id, type, status, payment, operator_id)
- skills (id, name, mcp_tools[], base_price)
```

### Semana 2: Sistema de Operators
1. **Registro de Operators**
   - Formulario con verificación de skills
   - Upload de certificaciones (SEC para gasfitería/electricidad)
   - Disponibilidad semanal

2. **Operator Dashboard**
   - Lista de tasks disponibles
   - Aceptar/rechazar tasks
   - Chat con cliente
   - Historial de trabajos

### Semana 3: Sistema de Tasks
1. **Client Flow**
   - Seleccionar skill (ej: gasfitería)
   - Describir problema (texto/foto)
   - Recibir cotización automática
   - Pagar con PayPal
   - Tracking en tiempo real

2. **MCP Integration**
   - TaskAgent clasifica el problema
   - RoutingAgent selecciona mejor operator
   - ValidationAgent verifica certificaciones

### Semana 4: Pagos + Launch
- Webhook de PayPal para confirmar pagos
- 85% al operator, 15% plataforma
- Notifications en tiempo real

## Fase 2: MCP Integration (Semanas 5-8)

### WebMCP Servers por Skill
```typescript
// Ejemplo: plumbing-mcp-server/
src/
├── index.ts          # Entry point MCP
├── tools/
│   ├── diagnose.ts   # Analiza problema
│   ├── quote.ts      # Genera cotización
│   ├── schedule.ts   # Disponible? Cuándo?
│   └── verify_sec.ts # Verifica certificación
├── handlers/
│   └── operator-handler.ts
└── tests/
```

### Integración con Claude Code
```json
{
  "mcpServers": {
    "plumbing": {
      "command": "npx",
      "args": ["humanloop-mcp-plumbing"],
      "env": { "API_KEY": "..." }
    }
  }
}
```

## Fase 3: Scaling (Semanas 9-12)

### Agregar más skills
- Cleaning
- Moving
- Security installation
- Pet care
- Personal shopping

### Analytics
- Revenue por skill
- Operator performance
- Client NPS
- Task completion rate

## Costos Iniciales

| Item | Costo |
|------|-------|
| Supabase (Free tier) | $0 |
| Domain (humanloop.cl) | $10/año |
| Vercel ( hobby) | $0 |
| PayPal (2.9% + $0.30) | transacción |
| **Total Month 1** | **~$10** |

## Revenue Model

### Para la Plataforma
1. **15% por task** -，覆盖运营成本
2. **Suscripción operators** - $9.99/mo para acceso premium
3. **API fees** - $0.01 por MCP call para terceros

### Para Operators
- Gasfitería: $20k-45k CLP por visita
- Electricidad: $18k-50k CLP por visita
- Delivery: $5k-15k CLP por entrega

## Cómo Empezar Ahora

### Step 1: Operator Waiting List
```typescript
// signup/page.tsx
- Email + skills de interés
- "¿Por qué quieres ser operator?"
- Link a PayPal para deposits
```

### Step 2: Pilot Clients
- 10 clientes beta gratuitos
- Feedback-driven development
- Precio fijo: $50 USD = ~$45.000 CLP por 3 tasks

### Step 3: Operators Reales
- Contactar gasfiteros/electricistas certificados
- Ofrecer: "Te conseguiremos clientes, sin publicidad"
- 85% directo, 15% plataforma

## Métricas para el Pilot

| Métrica | Meta Mes 1 |
|---------|------------|
| Operators registrados | 5 |
| Clients pilot | 10 |
| Tasks completados | 20 |
| Revenue | $500 USD |
| NPS | > 7 |

## Tech Stack Final

```json
{
  "frontend": "Next.js 15",
  "backend": "Next.js API + Supabase",
  "auth": "Supabase Auth",
  "db": "Supabase PostgreSQL",
  "realtime": "Supabase Realtime",
  "payments": "PayPal SDK",
  "mcp": "MCP SDK + Custom Servers",
  "hosting": "Vercel",
  "domain": "humanloop.cl"
}
```

## siguiente acción

1. **Hoy**: Crear repo con backend base + Supabase schema
2. **Mañana**: Operator registration form
3. **Esta semana**: Pilot signup en landing + primeros 3 operators

¿Te pongo a crear el backend real?
