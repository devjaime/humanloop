# SPEC.md - FakeNews Detector para Humanloop.cl

## 1. Concept & Vision

**FakeNews Detector** es una plataforma donde la IA analiza noticias trending y determina su veracidad, mientras usuarios votan, justifican sus respuestas, y reciben reportes personalizados. Al final del día, la IA hace un análisis final ponderado combinando votos humanos + verificación en fuentes oficiales.

**Personalidad:** Transparente, educativo, colaborativo. No es un "juez" sino un facilitador de pensamiento crítico.

## 2. Design Language

### Aesthetic Direction
Estilo "News Analytics" - limpio, profesional pero accesible. Inspirado en dashboards de journalism como Bloomberg Terminal pero más amigable.

### Color Palette
- **Primary:** `#3B82F6` (Azul confianza)
- **Secondary:** `#10B981` (Verde real/verificado)
- **Accent Fake:** `#EF4444` (Rojo alerta)
- **Accent Real:** `#22C55E` (Verde confirmación)
- **Neutral:** `#1F2937` (Gris oscuro), `#F9FAFB` (Fondo claro)
- **Background:** `#F3F4F6`

### Typography
- **Headings:** Inter, bold
- **Body:** Inter, regular
- **Monospace:** Para datos/estadísticas

### Motion
- Transiciones suaves en cards (200ms ease)
- Progress bars animados para votaciones
- Confetti sutil cuando se completa análisis del día

## 3. Layout & Structure

### Página Principal `/fake-news` o `/`
```
┌─────────────────────────────────────────────────────────────┐
│  🔍 FakeNews Detector by Humanloop                    [?] │
├─────────────────────────────────────────────────────────────┤
│  [Búsqueda de noticias] [Filtros: Todas|Verified|Fake]    │
├─────────────────────────────────────────────────────────────┤
│  📰 NOTICIAS TRENDING                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │ Noticia 1   │ │ Noticia 2   │ │ Noticia 3   │       │
│  │ [REAL ✅]   │ │ [FAKE ❌]   │ │ [PENDING ⏳] │       │
│  │ 85% voted  │ │ 72% voted   │ │ 23% voted   │       │
│  │ [VOTAR]    │ │ [VER DETALLE]│ │ [VOTAR]     │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
├─────────────────────────────────────────────────────────────┤
│  📊 ESTADÍSTICAS DEL DÍA                                  │
│  [Votados: 45] [Pendientes: 12] [Verificados: 8]          │
├─────────────────────────────────────────────────────────────┤
│  📋 ÚLTIMOS ANÁLISIS COMPLETADOS                          │
│  Lista de noticias con veredicto final IA                  │
└─────────────────────────────────────────────────────────────┘
```

### Página Detalle Noticia `/news/[id]`
```
┌─────────────────────────────────────────────────────────────┐
│  ← Volver a noticias                                       │
├─────────────────────────────────────────────────────────────┤
│  📰 [TÍTULO DE LA NOTICIA]                                 │
│  Fuente: [nombre] | Fecha: [fecha] | Análisis IA: [REAL/FAKE] │
├─────────────────────────────────────────────────────────────┤
│  🤖 ANÁLISIS IA                                            │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ • Veredicto: [REAL/FAKE/NO VERIFICADO]                  ││
│  │ • Confianza: [85%]                                     ││
│  │ • Fuentes verificadas: [lista]                          ││
│  │ • Puntos clave encontrados: [lista]                     ││
│  │ •claimos detectados: [lista]                            ││
│  │ • Explicación detallada: [texto]                        ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  🗳️ VOTACIÓN COMUNITARIA                                   │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ ¿Es real o fake?                                       ││
│  │ [🟢 ES REAL] [🔴 ES FAKE]                             ││
│  │                                                        ││
│  │ Justificación (opcional):                               ││
│  │ [________________________________] [ENVIAR VOTO]       ││
│  │                                                        ││
│  │ Tu email para recibir reporte:                          ││
│  │ [________________________________]                     ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  📈 RESULTADOS VOTACIÓN                                    │
│  [Barra: 72% FAKE - 28% REAL]                             │
│  Total votos: 156                                           │
│  ─────────────────────────────────────────────              │
│  💬 JUSTIFICACIONES DESTACADAS                             │
│  • "Los datos del INE no coinciden..." - @usuario1          │
│  • "Tengo familiares en esa zona y..." - @usuario2         │
└─────────────────────────────────────────────────────────────┘
```

### Dashboard Admin `/fake-news/admin`
- Lista de todas las noticias
- Estado de análisis
- Reportes de usuarios
- Configuración de umbrales

## 4. Features & Interactions

### Core Features

#### F1:News Feed
- Fetch automático de noticias trending via RSS/APIs (Google News, NewsAPI)
- Clasificación inicial por categoría
- Actualización cada 15 minutos
- Badge de estado: 🟡 Pendiente | 🟢 Verificado Real | 🔴 Verificado Fake | ⚪ No Clasificado

#### F2:AI Analysis
- Análisis con Claude API / Ollama
- Verificación de facts contra fuentes oficiales
- Detección de claims verificables
- Score de confianza 0-100%
- Tiempo de análisis: ~10-30 segundos
- Stored en BD para no re-analizar

#### F3:User Voting
- Voto binario: Real / Fake
- Justificación textual opcional
- Email requerido para enviar reporte
- Un voto por usuario por noticia
- Sin login requerido (anónimo + email)

#### F4:Daily Digest
- Cada 24h, IA hace análisis final de noticias con >50 votos
- Combina: veredicto IA + distribución de votos + justificaciones
- Genera reporte PDF/email
- Envía a todos los emails que votaron

#### F5:Verification Sources
- INE Chile
- Banco Central
- OMS/WHO
- Reuters
- BBC
- Fuentes específicas por tema

### Interaction Details

| Elemento | Hover | Click | Loading | Error |
|----------|-------|-------|---------|-------|
| News Card | Elevate shadow | Navigate to detail | Skeleton | Retry button |
| Vote Button | Scale 1.05 | Toggle selected state | Spinner | Toast error |
| Submit Vote | - | Loading spinner | Success animation | Error toast |
| Email Input | Border blue | - | - | Red border + mensaje |

### Edge Cases
- **Sin noticias trending:** Mostrar mensaje "No hay noticias nuevas, vuelve más tarde"
- **API rate limit:** Cache agresivo, fallback a noticias locales
- **Email inválido:** Validación en tiempo real, no permitir envío
- **Ya votaste:** "Ya has votado en esta noticia. Puedes cambiar tu voto."
- **Sin justificaciones:** Permitir voto sin justificación, solo contar

## 5. Component Inventory

### NewsCard
- Estados: default, hover (shadow-lg), loading (skeleton)
- Badge de veredicto según estado
- Preview del título + fuente
- Progress bar de votos

### VoteBox
- Estados: idle, voted-real (verde), voted-fake (rojo), loading
- Textarea para justificación
- Input email con validación
- Botón submit deshabilitado sin email válido

### AnalysisPanel
- Estados: pending (spinner), complete, error
- Veredicto con badge colorido
- Lista de facts verificados
- Score de confianza
- Links a fuentes

### ResultsChart
- Barra horizontal con porcentajes
- Colores verde/rojo según distribución
- Tooltip con número de votos

### UserJustification
- Avatar/username anónimo
- Texto de justificación
- Timestamp relativo

### DailyReportCard
- Fecha del reporte
- Resumen: X reales, Y fakes
- Accordeón con detalle

## 6. Technical Approach

### Stack
- **Frontend:** Next.js 14, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API Routes (Server Actions)
- **Database:** Supabase (PostgreSQL)
- **AI:** Claude API (Anthropic) o Ollama local
- **Email:** Resend o Supabase Edge Functions
- **Hosting:** Vercel (frontend) + Supabase (DB)

### Data Model

```sql
-- Tabla de noticias
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  source TEXT,
  url TEXT,
  published_at TIMESTAMP,
  image_url TEXT,
  ai_verdict JSONB, -- {verdict, confidence, facts, sources}
  ai_analyzed_at TIMESTAMP,
  human_votes_count INT DEFAULT 0,
  real_votes INT DEFAULT 0,
  fake_votes INT DEFAULT 0,
  final_verdict JSONB, -- resultado del análisis diario
  status VARCHAR(20) DEFAULT 'pending', -- pending, analyzed, completed
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de votos
CREATE TABLE votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id UUID REFERENCES news(id),
  vote BOOLEAN, -- true = real, false = fake
  justification TEXT,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(news_id, email) -- un voto por email por noticia
);

-- Tabla de justificaciones destacadas
CREATE TABLE featured_justifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id UUID REFERENCES news(id),
  vote_id UUID REFERENCES votes(id),
  is_featured BOOLEAN DEFAULT false,
  featured_at TIMESTAMP
);

-- Tabla de reportes diarios
CREATE TABLE daily_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_date DATE UNIQUE,
  news_summary JSONB, -- {analyzed: [], fake: [], real: []}
  generated_at TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_news_status ON news(status);
CREATE INDEX idx_news_published ON news(published_at DESC);
CREATE INDEX idx_votes_news ON votes(news_id);
CREATE INDEX idx_votes_email ON votes(email);
```

### API Endpoints

```
GET  /api/news              - Lista noticias (con filtros)
GET  /api/news/[id]         - Detalle noticia + análisis + votos
POST /api/news/[id]/analyze - Trigger análisis IA (admin/cron)
POST /api/news/[id]/vote    - Submit voto usuario
GET  /api/news/[id]/results - Resultados votación
POST /api/daily-digest      - Generar reporte diario (cron)
GET  /api/reports/[date]    - Obtener reporte de fecha
```

### AI Prompt Strategy

```python
# Análisis inicial de noticia
SYSTEM_PROMPT = """Eres un verificador de hechos especializado en desinformación.
Analiza la siguiente noticia y determina:
1. Veredicto: REAL, FALSO, PARCIALMENTE_REAL, NO_VERIFICABLE
2. Confianza: 0-100%
3. Hechos verificables: lista de claims que se pueden verificar
4. Fuentes de verificación: enlaces a fuentes oficiales
5. Explicación: razonamiento detallado
6. Señales de alerta: indicadores de posible desinformación

Sé riguroso, usa fuentes oficiales cuando sea posible."""

# Análisis diario ponderado
DAILY_ANALYSIS_PROMPT = """Analiza esta noticia considerando:
- El veredicto inicial de IA
- La distribución de votos humanos ({} real, {} fake)
- Las justificaciones de los usuarios:
{}

Basándote en esta información combinada, proporciona:
1. Veredicto final: REAL o FAKE
2. Explicación del razonamiento
3. Confianza en el veredicto: 0-100%
4. Recomendación para los usuarios"""
```

### Cron Jobs
- **Cada 15 min:** Fetch noticias trending
- **Cada 1 min:** Verificar noticias pendientes sin análisis IA
- **Diario 20:00:** Generar daily digest para noticias con >50 votos
- **Cada 24h:** Enviar reportes por email

### Email Template
- Asunto: "📊 Tu reporte FakeNews - [Fecha]"
- Contenido: Resumen de noticias analizadas, tu voto, veredicto final
- CTA: Ver dashboard completo

## 7. Out of Scope (MVP)

- Login/registro de usuarios (email por voto es suficiente)
- Gamification (badges, puntos)
- App móvil
- Integración con redes sociales
- Comentarios threaded
- Alertas push

## 8. Success Metrics

- Noticias analizadas por día
- Tasa de participación en votaciones
- Precisión de veredictos vs fuentes oficiales
- Emails capturados
- Reports generados y enviados
