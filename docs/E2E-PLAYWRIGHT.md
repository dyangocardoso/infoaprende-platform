# Flujo E2E con Playwright (CI y local)

Resumen rápido

- Playwright gestiona el ciclo de vida de los servidores para E2E usando el script raíz `e2e:start`.
- CI (GitHub Actions) instala deps, navegadores y ejecuta `npx playwright test`. Playwright arranca backend+frontend y espera a que `/api/health` responda.
- Se generan artefactos: `playwright-report` (HTML), `test-results` (trazas, vídeos, screenshots). El workflow los lista y los sube como artefactos.

Archivos clave

- `.github/workflows/e2e.yml` — workflow de GitHub Actions que instala dependencias, ejecuta Playwright y sube artefactos.
- `package.json` (raíz) — script `e2e:start` que arranca backend y frontend con `concurrently`.
- `frontend/playwright.config.cjs` — configuración de Playwright:
  - `webServer.command: npm run e2e:start` (Playwright arranca la app)
  - `serverReadyCheck` espera a `${BACKEND_PORT}/api/health`
  - `use.trace: on-first-retry`, `screenshot: only-on-failure`, `video: retain-on-failure`
- `frontend/tests/*.js` — tests E2E (usar import ESM si corresponde).

Variables de entorno usadas en CI

- BACKEND_PORT (por defecto `4000`)
- FRONTEND_PORT (por defecto `5173`)
- PLAYWRIGHT_TRACE (por defecto `on-first-retry`)

Cómo ejecutar localmente (rápido)

1. Desde la raíz del repo instala deps: `npm ci` y `npm ci --prefix frontend` si es necesario.
2. Ejecuta Playwright localmente y deja que inicie los servidores: `npx playwright test`.
   - Alternativamente, puedes probar con `npx playwright test --project=chromium`.
3. Para ejecutar sólo los servidores en foreground: `npm run e2e:start` y luego `npx playwright test --grep "tu-test"` en otra terminal (no recomendado — Playwright controla lifecycle mejor).

Revisión de artefactos en GitHub Actions

- En la ejecución del job, tras fallos o siempre según configuración, se suben los artefactos `playwright-report` y `test-results`.
- Abre el artefacto `playwright-report` y descarga el HTML para visualizar pasos y enlaces a trazas/videos/screenshots.
- `test-results` contiene archivos por test (videos y capturas) conservados en fallos.

Buenas prácticas y recomendaciones

- Mantener puertos sincronizados entre `backend/index.js`, `playwright.config.cjs` y el workflow CI.
- En `playwright.config.cjs` mantener `trace: on-first-retry`, `screenshot: only-on-failure`, `video: retain-on-failure` para evidencias pequeñas y útiles.
- Si necesitas logs del servidor en CI, redirige stdout/stderr a `backend.log`/`frontend.log` desde los scripts que arranca `e2e:start`.
- Para determinismo en CI, fija versiones de Node y de Playwright en el workflow.

Solución de problemas comunes

- "playwright did not become ready": verificar que el backend realmente escuche en `BACKEND_PORT` y que `serverReadyCheck` apunte al endpoint correcto (`/api/health`).
- Artefactos vacíos: confirmar que `playwright.config.*` tiene `video`/`screenshot` configurados y que `retries` no elimina los archivos antes de subir.
- Tests fallando por CORS: asegurarse que `backend` permita `http://localhost:5173` en desarrollo o que FRONTEND_URL esté configurado.

Extensiones opcionales

- Añadir step en CI que convierta el `playwright-report` en un comentario en PR con enlace (acción externa).
- Guardar sólo artefactos de fallos grandes (videos), y limpiar artefactos muy grandes si el tamaño supera límites.

Nuevo script para logs

- `e2e:start:logs`: arranca backend y frontend pero redirige stdout/stderr a `backend.log` y `frontend.log`. Útil para CI cuando necesitas logs de los procesos.

Uso

- Para ejecutar local y generar logs: `npm run e2e:start:logs`.
- En CI: si prefieres que los logs se creen automáticamente, cambia `webServer.command` en `frontend/playwright.config.cjs` a `npm run e2e:start:logs` (o ajusta el workflow para ejecutar el script antes de Playwright).

¿Quieres que actualice el workflow CI para usar `e2e:start:logs` directamente en lugar de `e2e:start`?
