---
name: gasfiter-service
description: Servicio de gasfitería profesional en Chile. Se activa cuando un cliente necesita reparación, instalación o mantención de sistemas de agua, gas y drenaje.
---

# Gasfiter Service Skill - HumanLoop.cl

Servicio de gasfitería profesional en Chile con certificación SEC. Orchestrado por IA y ejecutado por profesionales certificados.

## Cuándo Usar Este Skill

Activar cuando:
- Cliente reporta fuga de agua o gas
- Necesita instalación de calefón, termoval, ducha eléctrica
- Problemas con tuberías, desagües, llaves
- Mantención preventiva de sistema de agua/gas
- Emergencia de plomería (agua potable o gas)

## Flujo del Servicio

```
Solicitud → Clasificación → Asignación → Diagnóstico → 
Cotización → Ejecución → Verificación → Cierre
```

### Paso 1: Clasificación de Urgencia
- **Emergencia** (gas fuga, inundación): Respuesta inmediata
- **Urgente** (sin agua, baño fuera de servicio): < 2 horas
- **Normal** (mantención, instalación): Programable 24-48h

### Paso 2: Recopilar Información
- Tipo de problema (agua, gas, drenaje)
- Ubicación exacta (comuna, dirección)
- Síntomas reportados
- Acceso a medidor (agua/gas)
- Fotos si es posible

### Paso 3: Asignación
- Operador disponible más cercano
- Verificar certificaciones (SEC para gas)
- Confirmar herramientas/repuestos disponibles

### Paso 4: Diagnóstico en Terreno
- Operador llega y diagnostica
- Fotografías del problema
- Determina solución y repuestos necesarios

### Paso 5: Cotización
- Emitir cotización con:
  - Mano de obra
  - Materiales/repuestos
  - Tiempo estimado
- Aprobación del cliente

### Paso 6: Ejecución
- Reparación/instalación según protocolo
- Pruebas de hermeticidad (gas)
- Fotos del resultado

### Paso 7: Cierre
- Cliente verifica trabajo
- Pago vía plataforma
- Feedback + calificación

## Detalles del Servicio

| Aspecto | Detalle |
|---------|---------|
| **Tiempo de respuesta** | Emergente: 30min, Urgente: 2h, Normal: 24-48h |
| **Cobertura** | Gran Santiago (extensión con coordinación) |
| **Certificación** | Operadores SEC para trabajos de gas |
| **Garantía** | 30 días en reparaciones |

## Tipos de Servicio

| Tipo | Ejemplos | Rango Precio (CLP) |
|------|----------|-------------------|
| Reparación menor | Llave goteando, filtro tapado | $25,000 - $45,000 |
| Reparación mayor | Tubería rota, fuite | $50,000 - $120,000 |
| Instalación | Calefón, termoval, lavadora | $80,000 - $200,000 |
| Emergencias | Fuga de gas, inundación | $60,000 - $150,000 |
| Mantención | Revisión anual sistema gas | $40,000 - $60,000 |

## Formato de Solicitud

```
/gasfiter-service

Tipo: [reparación/instalación/emergencia/mantención]
Problema: [descripción breve]
Ubicación: [comuna y dirección]
Urgencia: [emergente/urgente/normal]
Acceso: [casa/depto, acceso a medidor]
Fotos: [adjuntar si es posible]
```

## Escenarios de Ejemplo

### Escenario 1: Fuga de gas
- **Detección**: Cliente huele gas en cocina
- **Clasificación**: EMERGENCIA - riesgo vida
- **Acción**: Operador SEC en camino < 30 min
- **Resultado**: Fuga sellada, certificación OK

### Escenario 2: Calefón no enciende
- **Problema**: Termoval no calienta agua
- **Clasificación**: Urgente (sin agua caliente)
- **Diagnóstico**: Electrodo dañado
- **Resultado**: Repuesto + instalación 2h

### Escenario 3: Desagüe tapado
- **Problema**: Baño principal no drena
- **Clasificación**: Normal
- **Resultado**: Destape + revisión 24-48h

## Cualificaciones del Operador

- Certificación SEC (gas licuado y/o natural)
- Experiencia mínima 3 años
- Herramientas básicas + equipo seguridad
- Smartphone para evidencia fotográfica
- Disponibilidad para emergencias

## Regulación Chile

- **SEC**: Superintendencia de Electricidad y Combustible
- Trabajos de gas **deben** ser realizados por instalador autorizado
- Certificación obligatoria para conexiones de gas