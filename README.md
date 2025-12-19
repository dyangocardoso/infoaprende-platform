# InfoAprende — Instrucciones de desarrollo y despliegue

[![CI](https://github.com/dyangocardoso/info-app/actions/workflows/ci.yml/badge.svg)](https://github.com/dyangocardoso/info-app/actions/workflows/ci.yml)

Este repositorio contiene el frontend (Vite + React) y el backend (Node.js + Express) de la plataforma InfoAprende.

Este README resume cómo desarrollar localmente, cómo usar Docker (compose) para levantar un entorno integrado, y cómo desplegar en plataformas en la nube. También lista las variables de entorno necesarias y pasos para CI (GitHub Actions) que ya incluye un workflow básico.

## Requisitos

- Node.js 18+ (para desarrollo local)
- npm
- Docker & Docker Compose (para testing con contenedores)

Si trabajas en Windows, usa PowerShell o WSL2 para una experiencia consistente con Docker.

## Estructura principal

- `/frontend` — aplicación React (Vite)
- `/backend` — API Node/Express
- `docker-compose.yml` — orquesta `db` (Postgres), `backend` y `frontend` (Nginx)
- `.github/workflows/ci.yml` — workflow CI básico (build frontend, start backend, health check)

## Variables de entorno (ejemplos)

Hemos añadido `*.env.example` en la raíz, `backend/` y `frontend/`. Nunca subas `.env` con secretos al repo.

- `NODE_ENV` — `development` | `production`
- `PORT` — puerto del backend (por defecto 4000)
- `DATABASE_URL` — cadena de conexión Postgres (ej.: `postgres://user:pass@host:5432/db`)
- `JWT_SECRET` — secreto para JWT
- `FRONTEND_URL` — lista de orígenes permitidos para CORS (coma-separados)
- `VITE_API_URL` (frontend) — URL pública del backend cuando no se usan rutas relativas o proxy. En desarrollo, puedes dejarlo vacío y usar rutas relativas o `http://localhost:4000`.

Ejemplos de archivos de ejemplo:

- `/.env.example`
- `/backend/.env.example`
- `/frontend/.env.example`

## Desarrollo local (sin Docker)

1. Instala dependencias:

```powershell
npm --prefix backend install
npm --prefix frontend install
```

2. Ejecuta el backend:

```powershell
cd backend
npm run dev
```

3. Ejecuta el frontend (HMR):

```powershell
cd frontend
# Opcional: crear frontend/.env con VITE_API_URL=http://localhost:4000
npm run dev
```

Nota: durante desarrollo, si usas rutas relativas en el frontend (recomendado), configura `VITE_API_URL=http://localhost:4000` en `frontend/.env` para evitar CORS.

## Levantar entorno integrado con Docker (recomendado para pruebas)

El proyecto incluye `docker-compose.yml` que crea:
- `db` (Postgres)
- `backend` (Node)
- `frontend` (Nginx que sirve la SPA y proxyea `/api` al backend)

Para levantarlo:

```powershell
docker compose up --build
```

Visita:
- Frontend: http://localhost:5173
- Backend (directo): http://localhost:4000/api/health
- Backend (proxied desde frontend): http://localhost:5173/api/health

Para bajar y limpiar:

```powershell
docker compose down
docker volume rm infoaprende_db_data   # opcional, borra la base de datos
```

### Notas sobre la configuración Docker

- El frontend en contenedor sirve la build estática con Nginx. Nginx tiene una configuración que proxyea `/api` al servicio `backend:4000` dentro de la red Docker para evitar CORS.
- El `frontend` Dockerfile acepta `ARG VITE_API_URL` en build. En `docker-compose.yml` se pasa `http://backend:4000` como build-arg.

## CI (GitHub Actions)

El repo ya incluye `.github/workflows/ci.yml` con un job básico que:
- build del frontend
- instala dependencias backend
- arranca el backend en background
- espera el endpoint `/api/health` y ejecuta `backend/npm test` (script que ejecuta `test-health.js`)

También existe un workflow `test-create-tema` que valida la CLI de creación de temarios y se ejecuta en cambios relevantes.

Puedes extender los workflows para ejecutar linter, tests frontend o publicar imágenes a un registry.

## Política de ramas y revisiones

Se ha añadido una política de ramas y CODEOWNERS. Consulta `docs/BRANCH_POLICY.md` y `.github/CODEOWNERS` para los detalles y los responsables de revisión.

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

Seguridad
- El componente usa DOMPurify para sanitizar el HTML del servidor antes de insertarlo en el DOM. Mantén siempre sanitización al renderizar HTML provisto por el servidor.

Decisión sobre PDF
- La exportación a PDF sigue disponible en `/api/docente/plantillas/:id/export` (uso de Puppeteer). Manténla si necesitas descargas/archivado; para solo visualización usa el endpoint `preview`.

## Tests locales

Backend incluye un script de health check:

```powershell
cd backend
node test-health.js
# o
npm test
```

## Siguientes mejoras sugeridas

- Añadir tests E2E (Playwright) que validen login y rutas protegidas.
- Añadir logging estructurado y graceful shutdown en backend.
- Añadir despliegue automático (CD) en el workflow de GitHub Actions.

---

Fecha del documento: 2025-11-12
