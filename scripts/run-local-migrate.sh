#!/usr/bin/env bash
# Script para levantar Postgres (docker compose) y ejecutar migraciones Sequelize locales
# Ubicación: /workspace/scripts/run-local-migrate.sh
# Uso: chmod +x scripts/run-local-migrate.sh && ./scripts/run-local-migrate.sh

set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

# Valores por defecto (coinciden con docker-compose.yml)
: ${DATABASE_URL:="postgres://info:info@localhost:5432/infoaprende"}
: ${COMPOSE_SERVICE:=db}
: ${TIMEOUT:=60}

echo "Usando DATABASE_URL=${DATABASE_URL}"

# Comprobar que docker existe
if ! command -v docker >/dev/null 2>&1 && ! command -v "docker-compose" >/dev/null 2>&1 && ! command -v "docker" >/dev/null 2>&1; then
  echo "Advertencia: docker no parece estar instalado o no está en PATH. Asegúrate de tener Docker y Docker Compose." >&2
fi

echo "Iniciando servicio de base de datos con docker compose..."
# Preferir `docker compose` si existe
if command -v docker >/dev/null 2>&1 && docker compose version >/dev/null 2>&1; then
  docker compose up -d ${COMPOSE_SERVICE}
elif command -v docker-compose >/dev/null 2>&1; then
  docker-compose up -d ${COMPOSE_SERVICE}
else
  echo "No se pudo ejecutar docker compose. Salir." >&2
  exit 1
fi

# Esperar a que Postgres acepte conexiones en localhost:5432
echo "Esperando a que Postgres esté listo (timeout=${TIMEOUT}s)..."
START=$(date +%s)
while true; do
  # Intentar con nc, si no existe usar /dev/tcp
  if command -v nc >/dev/null 2>&1; then
    nc -z localhost 5432 && break
  else
    (echo > /dev/tcp/localhost/5432) >/dev/null 2>&1 && break || true
  fi
  now=$(date +%s)
  if [ $((now - START)) -ge ${TIMEOUT} ]; then
    echo "Timeout esperando Postgres en localhost:5432" >&2
    echo "Revisa 'docker compose ps' y los logs con 'docker compose logs ${COMPOSE_SERVICE}'" >&2
    exit 2
  fi
  sleep 1
done

echo "Postgres listo. Ejecutando migraciones..."
# Exportar DATABASE_URL para el proceso migración
export DATABASE_URL
cd "$ROOT_DIR/backend"

# Ejecutar migraciones y mostrar estado
npm run migrate
npm run migrate:status || true

echo "Migraciones ejecutadas."
