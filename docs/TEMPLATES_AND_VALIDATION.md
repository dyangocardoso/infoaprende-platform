Guía rápida: creación y validación de temarios y evaluaciones

Propósito

Este documento explica cómo crear de forma estandarizada temarios y evaluaciones usando la CLI del proyecto y cómo validar los archivos localmente y en CI. Ideal para onboarding de docentes y colaboradores.

Ubicaciones importantes

- CLI: `scripts/create-tema.js` (soporta `--tipo=tema|evaluacion|proyecto`)
- Schemas: `schemas/tema.schema.json`, `schemas/evaluacion.schema.json`
- Plantillas de ejemplo: `templates/tema-template.md`, `templates/evaluacion-template.md`
- Validadores: `scripts/validate-tema.js`, `scripts/validate-evaluacion.js`
- Tests/runner: `scripts/test-validate-tema.js`, `scripts/test-validate-evaluacion.js`, `scripts/test-create-tema-cli.js`, `scripts/test-create-evaluacion-cli.js`
- CI workflows: `.github/workflows/validate-temas.yml`, `.github/workflows/test-create-tema.yml`

Crear un nuevo tema (ejemplo)

1. Desde la raíz del repo:

   npm run create-tema -- --curso=paint --numero=02 --titulo="Herramientas" --tipo=tema --open=vscode

2. Opciones útiles:
   - `--out=<ruta>` cambia la carpeta destino (por defecto `frontend/src/data/cursos`)
   - `--yes=true` o `--force=true` sobrescribe si ya existe
   - `--validate=true` valida metadata contra el schema disponible
   - `--normalizar=true` normaliza los pesos de `criteriosEvaluacion` para sumar 100

Crear una evaluación (ejemplo)

1. Desde la raíz del repo:

   npm run create-tema -- --curso=paint --numero=01 --titulo="Evaluación inicial" --tipo=evaluacion --validate=true

2. Resultado: se genera `evaluacion-<numero>-<slug>.json` en la carpeta del curso.

Validar archivos localmente

- Validar un tema (MD/YAML/JSON):

  node scripts/validate-tema.js <ruta-al-archivo>

- Validar una evaluación (JSON/YAML/MD):

  node scripts/validate-evaluacion.js <ruta-al-archivo>

- Validar plantillas de ejemplo (runner):

  node scripts/test-validate-tema.js
  node scripts/test-validate-evaluacion.js

Ejecución de tests CLI localmente

- Test de creación de la CLI (tema):

  node scripts/test-create-tema-cli.js

- Test de creación de la CLI (evaluación):

  node scripts/test-create-evaluacion-cli.js

- Ejecutar la suite completa (temas + CLI temas + CLI evaluaciones):

  npm run test-create-tema-suite

Comportamiento en CI

- `validate-temas.yml` se ejecuta en PRs que tocan `templates/**`, `content/temas/**` o `schemas/**` y valida tanto temas como evaluaciones.
- `test-create-tema.yml` ejecuta la suite completa de tests CLI en pushes/PRs sobre los scripts relevantes y `package.json`.

Buenas prácticas para colaboradores

- Siempre ejecuta el validador antes de abrir un PR cuando modifiques `templates/` o `content/`.
- Usa `--normalizar=true` o revisa manualmente `criteriosEvaluacion` para que los pesos sumen 100.
- Si la validación falla en CI, corrige los errores del schema indicados por Ajv y vuelve a enviar el PR.

Añadir/Modificar schemas

1. Edita o crea `schemas/<nuevo>.schema.json` según JSON Schema draft-07.
2. Añade una plantilla en `templates/` y un test runner en `scripts/` si procede.
3. Actualiza `validate-temas.yml` si el nuevo schema debe validarse en PRs.

Sugerencias opcionales (DX)

- Añadir un script npm directo para ejecutar validadores: p.ej. `npm run validate-temas`.
- Integrar `husky` + `lint-staged` para validar temarios/evaluaciones pre-commit.
- Documentar en `docs/` ejemplos concretos para cada tipo de pregunta (multiple-choice, open, code).

Contacto

Si dudas sobre un schema o formato, abre un issue o menciona a los responsables en `.github/CODEOWNERS`.
