# Plataforma Educativa de Informática

Este proyecto es una plataforma educativa para estudiantes de 2º Básica a 3º Bachillerato.

## Estructura principal
- **frontend/**: Aplicación React (Vite)
- **backend/**: API Node.js + Express
- **docs/**: Documentación y guiones
- **recursos/**: Materiales de apoyo (PDFs, imágenes, etc.)

## Primeros pasos
1. Instala dependencias en el frontend:
   ```bash
   cd frontend
   npm install
   ```
2. Instala dependencias en el backend (cuando esté inicializado):
   ```bash
   cd backend
   npm install
   ```
3. Ejecuta ambos servidores en desarrollo.

## Tecnologías sugeridas
- React, Vite, Node.js, Express, MongoDB, JWT

## Autor
- Proyecto generado con ayuda de GitHub Copilot

## Preview de plantillas (HTML) — vista rápida y uso en frontend
Se ha añadido soporte para previsualizar plantillas en HTML sin generar PDF. Esta funcionalidad facilita mostrar temarios y contenido en la web y evita depender de Puppeteer/Chromium cuando solo se necesita visualización.

Qué se añadió:
- Endpoint backend: `GET /api/docente/plantillas/:id/preview` (protegido por token). Devuelve el HTML compuesto de la plantilla (partials y CSS incluidos).
- Componente React: `frontend/src/components/PlantillaPreview.jsx` (usa DOMPurify para sanitizar antes de renderizar).
- Ejemplo de uso incluido en `frontend/src/App.jsx` (muestra la preview demo en la página principal durante el desarrollo).

Instrucciones rápidas para probar localmente
1. Reiniciar backend:
   ```bash
   cd backend
   npm run dev
   ```

2. Instalar dependencia en frontend (DOMPurify):
   ```bash
   cd frontend
   npm install dompurify
   ```

3. (Opcional) Configurar id de demo en Vite env: crea `.env` en `frontend` con:
   ```env
   VITE_PLANTILLA_DEMO_ID=1
   ```

4. Iniciar frontend:
   ```bash
   cd frontend
   npm run dev
   ```

5. Obtener token (login) y guardarlo en localStorage o pásalo al componente. Ejemplo de prueba con curl (sin frontend):
   ```bash
   curl.exe -H "Authorization: Bearer <TOKEN>" "http://localhost:4000/api/docente/plantillas/<ID>/preview" -o preview.html
   ```
   Luego abre `preview.html` en el navegador.

Seguridad
- El componente usa DOMPurify para sanitizar el HTML del servidor antes de insertarlo en el DOM. Mantén siempre sanitización al renderizar HTML provisto por el servidor.

Decisión sobre PDF
- La exportación a PDF sigue disponible en `/api/docente/plantillas/:id/export` (uso de Puppeteer). Manténla si necesitas descargas/archivado; para solo visualización usa el endpoint `preview`.

Notas de desarrollo
- Si quieres crear un PR con estos cambios, la rama sugerida fue `feat/preview-plantilla`.

---

## Documentación avanzada y pruebas automatizadas
A continuación hay recomendaciones de seguridad para producción y plantillas de pruebas automatizadas (backend y frontend).

Seguridad (producción)
- Content Security Policy (CSP): Añade una cabecera CSP estricta en producción. Ejemplo mínimo:
  Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https:; img-src 'self' data:; frame-ancestors 'none';
- Evita scripts inline en plantillas: transforma cualquier script permitido en módulos o recursos externos verificados.
- Sanitización servidor-side: además del sanitizado en el frontend con DOMPurify, considera validar/limitar las entradas HTML que los docentes pueden guardar (whitelist de etiquetas y atributos).
- Cabeceras adicionales: X-Frame-Options: DENY, Referrer-Policy, Strict-Transport-Security (si usas HTTPS).
- COOP/COEP para integridad de recursos si usas cross-origin isolated features.

Pruebas automatizadas (plantillas y preview)
- Objetivo: comprobar que el endpoint `GET /api/docente/plantillas/:id/preview` devuelve HTML y que la UI renderiza correctamente el HTML sanitizado.

Backend (plantilla de test con Mocha + Supertest)
- Archivo de ejemplo: `backend/test/preview.test.js`
- Pasos para ejecutar (PowerShell):
  cd backend; npm install --save-dev mocha chai supertest; npm run test
- Nota: Para que Supertest pueda requerir la aplicación directamente, exporta `app` desde `backend/index.js` (al final del archivo):
  module.exports = app;
  Si no exportas `app`, el test intentará usar `http://localhost:4000` como fallback (asegúrate de tener el servidor iniciado con `npm run dev`).

Frontend (plantilla de test con Vitest + Testing Library)
- Archivo de ejemplo: `frontend/src/components/__tests__/PlantillaPreview.test.jsx`
- Pasos para ejecutar (PowerShell):
  cd frontend; npm install --save-dev vitest @testing-library/react @testing-library/jest-dom; npm run test
- Script sugerido en `frontend/package.json`: `"test": "vitest"`
- El test simula la respuesta del endpoint y verifica que el contenido HTML se muestra y que los scripts son eliminados por DOMPurify.

Plantillas de tests incluidos
- `backend/test/preview.test.js` (plantilla Mocha+Supertest) — ver `backend/test/`.
- `frontend/src/components/__tests__/PlantillaPreview.test.jsx` (plantilla Vitest+RTL) — ver `frontend/src/components/__tests__/`.

Consejos para integrar tests en CI
- Backend: Ejecuta migraciones y seeders en un job anterior al test; usa una base de datos SQLite en memoria o una instancia de test en Postgres.
- Frontend: Ejecuta `npm run test -- --watch=false` en CI; usa `--run` o configuraciones headless si pruebas end-to-end.

Si deseas, puedo:
- Añadir los scripts de test a `backend/package.json` y `frontend/package.json`.
- Exportar `app` en `backend/index.js` para facilitar Supertest.
- Añadir los archivos de test de ejemplo al repositorio (actualmente se incluyen como plantillas).

Indica qué prefieres que haga ahora: añadir los archivos de test, actualizar package.json para incluir scripts de test, y/o exportar `app` en `backend/index.js`.
