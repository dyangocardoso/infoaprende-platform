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

Consulta `docker-compose.yml` y los Dockerfiles en `frontend/` y `backend/` para detalles.

## CI / Workflows

Los workflows principales están en `.github/workflows/`. El workflow `test-create-tema` se encarga de validar la CLI de creación de temas y está configurado para ejecutarse en cambios relevantes.

## Política de ramas y revisiones

Se ha añadido una política de ramas y CODEOWNERS. Consulta `docs/BRANCH_POLICY.md` y `.github/CODEOWNERS` para los detalles y los responsables de revisión.

## Contribuir

Sigue el flujo recomendado:
1. Crear una rama con prefijo (p. ej. `feat/`, `fix/`, `infra/`).
2. Hacer commits claros y atómicos.
3. Push y abrir PR hacia `main`.
4. Esperar a que los checks pasen y pedir aprobación al reviewer o CODEOWNER.
5. Resolver todas las conversaciones antes de mergear.

## Notas finales

- Nunca subas secretos en `.env`.
- Mantén las dependencias actualizadas y ejecuta los tests antes de abrir PRs.

> Para detalles operativos adicionales, consulta la carpeta `docs/` y los archivos `README.md` dentro de `backend/` y `frontend/`.
