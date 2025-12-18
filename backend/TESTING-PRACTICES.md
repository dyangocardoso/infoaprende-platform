# Prácticas y guía para tests (InfoAprende - backend)

Este documento recoge las prácticas aplicadas para garantizar confiabilidad, aislamiento y reproducibilidad de la suite de tests del backend.

Objetivos
- Evitar contaminación entre tests (require.cache, globals, variables compartidas).
- Centralizar stubs/mocks (auth, base de datos) y hacerlos robustos.
- Asegurar ejecución fiable en CI y entornos locales (Windows PowerShell, Git Bash).

Prácticas aplicadas

1) Helper central para construir la app
- `test/helpers/buildApp.js` devuelve la app instrumentada para tests (soporta stubs de DB y auth).
- Usar siempre `buildApp(...)` en tests de integración en lugar de requerir `index.js` directamente.

2) Aislamiento por test
- Crear un sandbox de `sinon` en cada test (`sinon.createSandbox()` en beforeEach) y restaurarlo en afterEach.
- Limpiar `global` utilizados por la aplicación (por ejemplo `global.sequelize`, `global.Plantilla`) antes y después de cada test.
- Borrar del `require.cache` los módulos que pueden ser hot-swapped (p. ej. `middlewares/auth.middleware.js`, `middlewares/docente.middleware.js`) antes y después de cada test.

3) Stubs/mocks centralizados
- Los stubs de autenticación y base de datos deben residir en el helper (`buildApp`) y aceptar múltiples patrones (export como función u objeto con métodos) para cubrir distintas formas de require.
- Evitar logs diagnósticos innecesarios en los stubs; mantenerlos discretos para CI.

4) Readiness y condiciones de carrera
- Esperar readiness de la app antes de ejecutar requests en tests de integración:
  - comprobar `/api/health` y validar `database === 'connected'` (o traducciones existentes).
  - verificar que endpoints críticos (p. ej. `/api/docente/plantillas/:id/preview`) no devuelven 503 antes de continuar.

5) Cross-platform
- Scripts de test usan `cross-env` y patrones de archivo compatibles (`"test/**/*.test.js"`) para soportar PowerShell, Git Bash y CI.

6) CI y ejecución local
- Comando recomendado (desde la carpeta `backend`):
  - PowerShell: `npm test` (usa cross-env y mocha configurado en package.json)
  - Ejecutar tests individuales: `npx mocha test/preview.test.js --exit --file test/_setup.js`

Buenas prácticas adicionales
- Mantener logs útiles pero no verbosos durante CI.
- Documentar nuevos stubs/mocks en este README cuando se añadan.
- Considerar aplicar el mismo patrón a tests legacy que aún requieran aislamiento.
- Revisar periódicamente dependencias y vulnerabilidades (opcional, fuera del scope de tests).

Si quieres, puedo:
- Aplicar este patrón al resto de tests en `backend/test` automáticamente.
- Generar un script npm adicional para ejecutar solo tests aislados.
- Abrir un PR con estas mejoras y el README.

