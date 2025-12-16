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

## Generador de temas (CLI)
Se añadió un script para crear rápidamente temas y evaluaciones en formato estandarizado.

- Script: `scripts/create-tema.js`
- Entrada npm: `npm run create-tema`

Uso básico (desde la raíz del proyecto):

npm run create-tema -- --curso=<curso> [opciones]

Opciones principales:
- --curso=<curso>               Curso destino (obligatorio)
- --numero=<NN>                 Número del tema (ej. 01). Default: 01
- --titulo="<Título>"           Título del tema. Default: "Nuevo Tema"
- --tipo=<tema|evaluacion|proyecto>  Tipo de elemento. Default: tema
- --normalizar=true             Normaliza pesos de criteriosEvaluacion para sumar 100
- --normalizar-pesos=true       Alias de --normalizar
- --open=vscode                 Abre el archivo en VS Code (usa la CLI `code`)
- --open=code                   Alias de --open=vscode
- --yes=true, --force=true      Forzar sobrescritura si el archivo ya existe
- --help, -h                    Mostrar ayuda del comando

Ejemplos:
- Crear tema normal:
  npm run create-tema -- --curso=paint --numero=06 --titulo="Prueba"
- Crear evaluación y normalizar pesos, abrir en VS Code y forzar sobrescritura:
  npm run create-tema -- --curso=paint --numero=07 --titulo="Evaluación 1" --tipo=evaluacion --normalizar=true --open=vscode --yes=true

Notas:
- El script crea archivos en `frontend/src/data/cursos/<curso>/` usando una plantilla con campos: `objetivos`, `secciones`, `evaluacion`, `criteriosEvaluacion`, `recursos`.
- El script incluye validación automática de pesos y puede normalizar los pesos con `--normalizar`.
- El validador principal `scripts/validar-sistema-modular.js` exige que los `criteriosEvaluacion` sumen 100; usa ese script para validar todo el sistema:
  node scripts/validar-sistema-modular.js
