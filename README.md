# InfoAprende — Instrucciones de desarrollo y despliegue

<!-- CI badge: reemplaza OWNER y REPO por tu usuario/organización y nombre de repo -->
[![CI](https://github.com/dyang/info-app/actions/workflows/ci.yml/badge.svg)](https://github.com/dyang/info-app/actions/workflows/ci.yml)


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

Puedes extender el workflow para ejecutar linter, tests frontend o publicar imágenes a un registry.

## Despliegue en la nube (opciones)

- Opción rápida: desplegar `frontend` en Vercel/Netlify (servir estático) y `backend` en Render/Railway. Estas plataformas proporcionan URL públicas y manejo de SSL automático.
- Opción Docker: publicar imágenes en un registry y desplegar en DigitalOcean App Platform, AWS ECS, etc.
- Serverless: mover endpoints a funciones (Vercel/Netlify) y usar DB gestionada (Supabase). Recomendada solo si se adapta al patrón sin conexiones persistentes.

En todos los casos, configura las variables de entorno (DATABASE_URL, JWT_SECRET, FRONTEND_URL, VITE_API_URL si es necesario) en el panel de la plataforma.

## Limpieza de problemas comunes

- npm no encontrado: asegúrate de tener Node.js y npm instalados. En Windows, añadir Node al PATH o usar WSL2.
- Puerto en uso: modifica `PORT` o para frontend `VITE_PORT` si fuera necesario.
- Errores de CORS: en desarrollo usa `VITE_API_URL=http://localhost:4000`. En Docker Compose, `frontend` usa proxy para evitar CORS.

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

Si quieres que añada alguno de estos puntos ahora (README automatizado para deploy a una plataforma concreta, Playwright, o DockerHub publish) dime cuál y lo implemento.

---

Fecha del documento: 2025-11-12
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
