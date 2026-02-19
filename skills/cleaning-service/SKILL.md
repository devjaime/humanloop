---
name: cleaning-service
description: Servicio de limpieza automática para propiedades Airbnb. Se activa cuando se detecta checkout del huésped y servicio de limpieza contratado.
---

# Cleaning Service Skill - HumanLoop.cl

Servicio de limpieza profesional para propiedades Airbnb y holiday rentals con activación automática basada en eventos de checkout.

## Cuándo Usar Este Skill

Activar este skill cuando:
- Un huésped hace checkout de una propiedad Airbnb
- El sistema detecta que el auto/chapa sale del domicilio
- Se verificó que el servicio de limpieza está contratado
- La propiedad necesita estar lista para el siguiente huésped
- Se requiere evidencia fotográfica de la limpieza

## Flujo del Servicio

```
Checkout detectado → Chapa/patente sale → Verificar servicio → 
Notificar equipo → Limpieza → Verificar → Notificar property manager
```

### Paso 1: Detección de Evento
- Sensores IoT o API de Airbnb detectan checkout
- Cámara/LPR detecta vehículo saliendo (patente)
- Sistema verifica reserva y servicio contratado

### Paso 2: Verificación de Servicio
- Confirmar que cleaning service está activo
- Verificar horario de limpieza asignado
- Confirmar ubicación exacta de la propiedad

### Paso 3: Notificación al Equipo
- Asignar equipo de limpieza disponible más cercano
- Enviar detalles: dirección, acceso, instrucciones especiales
- Estimar tiempo de llegada (ETA)

### Paso 4: Ejecución
- Equipo llega al domicilio
- Limpieza profunda según checklist
- Photos de evidencia (antes/después)
- Reporte de estado

### Paso 5: Cierre
- Notificar al property manager
- Actualizar estado "ready for next guest"
- Feedback del operador mejora el servicio

## Detalles del Servicio

| Aspecto | Detalle |
|---------|---------|
| **Tiempo de respuesta** | 20-45 min desde checkout |
| **Tipos de limpieza** | Estándar, Profunda, Post-checkout |
| **Cobertura** | Santiago y regiones (con coordinacion) |
| **Evidencia** | Photos + reporte detallado |
| **Checklist** | Rooms, baños, cocina, áreas comunes |

## Proceso de Booking

1. **Property Manager** - Registra propiedad y servicio en plataforma
2. **Detección Automática** - AI detecta checkout y activa skill
3. **Asignación** - AI asigna equipo según ubicación/disponibilidad
4. **Ejecución** - Equipo realiza limpieza
5. **Verificación** - Photos + reporte subido al sistema
6. **Notificación** - PM recibe estado "ready"

## Formato de Solicitud

```
/cleaning-service

Property: [Dirección o código]
Check-out: [Hora detectada]
Service Type: [estándar/profunda/post-checkout]
Access: [Código puerta, instrucciones especiales]
Next Guest: [Hora de llegada si aplica]
Priority: [normal/urgente]
```

## Escenarios de Ejemplo

### Escenario 1: Checkout Normal
- **Detección**: Cámara detecta auto SR-CZ-57 saliendo
- **Verificación**: Servicio contratado confirmado
- **Acción**: CleaningTeam en camino en 15 min
- **Resultado**: Propiedad lista en 1.5h

### Escenario 2: Checkout Urgente
- **Detección**: Nuevo huésped llega en 2h
- **Verificación**: Servicio express requerido
- **Acción**: Equipo prioritario asignado
- **Resultado**: Propiedad lista en 45 min

### Escenario 3: Sin Servicio Contratado
- **Detección**: Checkout detectado
- **Verificación**: NO hay servicio activo
- **Acción**: Notificar al PM para coordinar
- **Resultado**: Pendiente hasta confirmación

## Compensación

| Tipo de Limpieza | Tarifa (CLP) |
|------------------|---------------|
| Estándar | $25,000 - $35,000 |
| Profunda | $45,000 - $65,000 |
| Post-checkout | $35,000 - $50,000 |
| Express (urgente) | +50% recargo |

*85% de la compensación va directo al operador.*

## Cualificaciones del Operador

- Experiencia en limpieza profesional
- Conocimiento de protocolos Airbnb
- Smartphone con cámara para evidencia
- Disponibilidad flexible
- Translúcido en zonas asignadas

## Feedback Loop

Después de cada servicio:
1. Property manager califica (1-5 estrellas)
2. Operator reporta tiempo real vs estimado
3. Photos son revisadas por QA
4. AI actualiza tiempos y rutas óptimas
5. Métricas de efectividad del skill

## Tech Stack del Caso

Este caso práctico demuestra:
- **Event Detection**: Sensores IoT + Cámaras LPR
- **API Integration**: Airbnb, Booking, Vrbo
- **Orquestación HITL**: HumanLoop Agent coordina
- **Skills**: CleaningServiceSkill con operadores reales
- **Feedback Loop**: Mejora continua basada en datos

## Contacto

- Plataforma: HumanLoop.cl
- Skill: `/cleaning-service`
- Soporte: Disponible 7am-10pm (Chile time)
