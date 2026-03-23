# Humanloop Maritime — Arquitectura y Datos

**Versión:** 0.1.0  
**Fecha:** 2026-03-23  
**Estado:** Investigación inicial  

---

## Visión del Proyecto

Humanloop Maritime es un marketplace vertical de servicios técnicos navieros especializados, utilizando la arquitectura Human-in-the-Loop (HITL) con agentes de IA que orquestan y técnicos humanos certificados que ejecutan.

**Inspiración:** Navily.com (+1.1M usuarios) — comunidad colaborativa de datos náuticos  
**Diferenciador:** IA + técnicos certificados bajo demanda

---

## Fuentes de Datos

### 1. Furuno USA — Equipos y Manuales

**URL Base:** `https://www.furunousa.com/en`

#### Productos Identificados

| Producto | Categoría | Descripción |
|---------|----------|-------------|
| FAR-1523 | Radar | Excelente detección de objetivos, interfaz simple |
| FAR-1518 | Radar | Detección confiable, ACE (Automatic Clutter Elimination) |
| FI70 | Instrumentos | Display de navegación 4.1" LCD color |
| TZT22X | NavNet MFD | Future of navigation, TZ MAPS, BathyVision |
| CSH8LMK2 | Sonar | sonar para NavNet TZtouch2/3/XL |
| DFF3D | Sonar | Multibeam sonar, 120° port-a-starboard |
| GP170 | GPS | Navigator para barcos oceánicos, BAM ready |
| RD50 | Display | Remote display 8.4" para sensores |
| NavNet TZtouchXL | MFD | Extra-large Multi Function Displays |

#### Características Técnicas Clave

**Radar FAR-1523:**
- Automatic Clutter Elimination (ACE)
- Target Analyzer (colores para objetivos peligrosos)
- Fast Target Tracking (TT)
- RotoKey + touch panel
- Compact control unit

**Sistema GMDSS (Global Maritime Distress and Safety System):**
- Requerido por船只 comerciales
- Certificación obligatoria
- Equipos: radio VHF/HF, EPIRB, SART

**AIS (Automatic Identification System):**
- Identificación de barcos en tiempo real
- Compartición de posición
- Requerido para船只 > 300GT

### 2. Navily.com — Guía Náutica (para datos de rutas)

**URL:** `https://www.navily.com/es`  
**Estado:** Bloqueado por Cloudflare (requiere browser)

**Datos objetivo:**
- Puertos y marinas
- Rutas náuticas populares
- Datos de usuarios (inicio/destino)
- Reviews de puertos

---

## Arquitectura Técnica

```
┌─────────────────────────────────────────────────────────────────┐
│                      HUMANLOOP MARITIME                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐       │
│  │   Agente    │    │   Agente    │    │   Agente    │       │
│  │  Diagnóstico │    │   Match     │    │  Scheduling  │       │
│  │   (RAG)     │    │  (Skills)   │    │  (Tiempo)   │       │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘       │
│         │                   │                   │               │
│         └───────────────────┼───────────────────┘               │
│                             ▼                                   │
│              ┌───────────────────────────────┐                   │
│              │    Orquestador HITL          │                   │
│              │    (MCP + LangGraph)         │                   │
│              └───────────────┬───────────────┘                   │
│                              │                                   │
│         ┌────────────────────┼────────────────────┐               │
│         ▼                    ▼                    ▼               │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐       │
│  │  Technician │    │    Port     │    │    Ship     │       │
│  │   Agent    │    │    Data     │    │    Data     │       │
│  └─────────────┘    └─────────────┘    └─────────────┘       │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │               BASE DE DATOS VECTORIAL                     │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐        │   │
│  │  │  Manuales  │  │  Servicios │  │  Técnicos  │        │   │
│  │  │   (zvec)   │  │   (zvec)   │  │   (zvec)   │        │   │
│  │  └────────────┘  └────────────┘  └────────────┘        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Modelo de Datos

### Technician (Técnico)
```typescript
interface Technician {
  id: string;
  name: string;
  certifications: Certification[];  // STCW, Furuno Certified, etc.
  skills: Skill[];
  location: GeoLocation;
  availability: Availability;
  rating: number;
  reviews: Review[];
  services: Service[];
  hourlyRate: number;
  verified: boolean;
}
```

### Service (Servicio)
```typescript
interface Service {
  id: string;
  category: ServiceCategory;
  equipment: Equipment[];
  description: string;
  estimatedTime: string;
  priceRange: PriceRange;
  requirements: string[];
}
```

### ServiceCategory
```typescript
type ServiceCategory = 
  | 'radar_installation'
  | 'radar_calibration'
  | 'gmdss_maintenance'
  | 'ais_diagnostic'
  | 'gps_repair'
  | 'echosounder_diagnostic'
  | 'vhf_hf_communication'
  | 'navigation_software_update';
```

### Equipment (Equipo)
```typescript
interface Equipment {
  brand: Brand;  // Furuno, Raymarine, JRC, etc.
  model: string;
  category: EquipmentCategory;
  manualUrl?: string;
  specs: Record<string, string>;
}
```

---

## Skills del Sistema

### 1. Radar Installation & Calibration
**Equipos:** FAR-1523, FAR-1518, FAR-2127, etc.
**Servicios:**
- Instalación de radar
- Calibración de antenna
- Configuración de Target Analyzer
- Actualización de firmware

### 2. GMDSS Maintenance
**Equipos:** Radio VHF/HF, EPIRB, SART
**Servicios:**
- Mantenimiento preventivo
- Prueba de baterías
- Certificación SOLAS

### 3. AIS Diagnostic
**Equipos:** FA-150, FA-170, MG-500
**Servicios:**
- Diagnóstico de transponder
- Configuración de canal
- Sincronización GPS

### 4. GPS Repair
**Equipos:** GP-170, GP-39, NAVPILOT
**Servicios:**
- Reemplazo de antena GPS
- Calibración de posición
- Integración con otros equipos

### 5. Echossounder Diagnostic
**Equipos:** DFF3D, FCV-628, FE-700
**Servicios:**
- Calibración de transductor
- Diagnóstico de sonar
- Actualización desoftware

### 6. VHF/HF Communication
**Equipos:** FS-1575, FS-2075, ICOM
**Servicios:**
- Instalación de radio
- Prueba de canal 16
- Certificación DSC

---

## Modelo de Revenue

| Plan | Precio | Comisión | Features |
|------|--------|----------|----------|
| Técnico Profesional | US$29/mes | 15% por transacción | Perfil destacado, hasta 10 servicios |
| Técnico Enterprise | US$99/mes | 15% por transacción | Sin límite, analytics, soporte prioritario |
| Capitán/Barco | Gratuito | - | Búsqueda, contacto directo |
| Capitán Premium | US$9/mes | - | Historial, favoritos, alertas |

---

## Próximos Pasos

- [ ] Configurar zvec para vectorización de manuales
- [ ] Scraping de productos Furuno (browser automation)
- [ ] Scraping de Navily ( overcoming Cloudflare)
- [ ] Diseño de schema de base de datos
- [ ] MVP de búsqueda de técnicos
- [ ] Integración con MCP

---

## Notas Técnicas

- **zvec:** SQLite con búsqueda vectorial, 8000+ queries/segundo
- **MCP:** Model Context Protocol para herramientas marítimas
- **LangGraph:** Orquestación de agentes con estado

---

*Documento generado automáticamente - 2026-03-23*
