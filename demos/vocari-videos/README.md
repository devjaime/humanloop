# Vocari.cl Videos with Remotion

> Status: ✅ Componentes desarrollados | ⏳ Pending: Renderizado de videos

This project contains 4 promotional videos for Vocari.cl generated with Remotion.

## Videos

1. **Video1Colegios** - Flujo de Colegios (Dashboard, registro, reportes) - 4 escenas | ⏳
2. **Video2Compra** - Flujo de Compra de Informes (4 pasos) - 5 escenas | ⏳
3. **Video3Orientacion** - Flujo de Orientación con IA - 6 escenas | ⏳
4. **Video4AsistenciaIA** - Asistencia con Inteligencia Artificial - 7 escenas | ⏳

## Estado de Desarrollo

| Video | Escenas | Estado | Duración |
|-------|---------|--------|----------|
| Video1Colegios | 4 | ✅ Listo para render | 12s |
| Video2Compra | 5 | ✅ Listo para render | 15s |
| Video3Orientacion | 6 | ✅ Listo para render | 18s |
| Video4AsistenciaIA | 7 | ✅ Listo para render | 21s |

**Total: 4 videos | 66 segundos de contenido**

## Render Commands

### Opción 1: Script batch (recomendado)
```bash
bash /Users/devjaime/.openclaw/workspace/humanloop/render-videos.sh
```

### Opción 2: npm scripts (individual)
```bash
# Preview en browser
npm run remotion:preview --prefix /Users/devjaime/.openclaw/workspace/humanloop

# Render Video 1 - Colegios
npm run remotion:render --prefix /Users/devjaime/.openclaw/workspace/humanloop -- Video1Colegios

# Render Video 2 - Compra
npm run remotion:render --prefix /Users/devjaime/.openclaw/workspace/humanloop -- Video2Compra

# Render Video 3 - Orientación
npm run remotion:render --prefix /Users/devjaime/.openclaw/workspace/humanloop -- Video3Orientacion

# Render Video 4 - Asistencia IA
npm run remotion:render --prefix /Users/devjaime/.openclaw/workspace/humanloop -- Video4AsistenciaIA
```

## Preview

```bash
npm run remotion:preview --prefix /Users/devjaime/.openclaw/workspace/humanloop
```

## Tech Stack

- Remotion 4.0
- React 19
- TypeScript

## Credits

Created by OpenClaw for Vocari.cl

---

## 📋 Checklist de Producción

- [x] Instalar dependencias: `npm install --prefix /Users/devjaime/.openclaw/workspace/humanloop`
- [ ] Renderizar Video 1 (Colegios)
- [ ] Renderizar Video 2 (Compra)
- [ ] Renderizar Video 3 (Orientación)
- [ ] Renderizar Video 4 (Asistencia IA)
- [ ] Revisar videos renderizados
- [ ] Subir a YouTube/Vimeo
- [ ] Embeder en Vocari.cl
