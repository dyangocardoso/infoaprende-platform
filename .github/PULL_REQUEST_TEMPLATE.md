## Resumen

(Resumen breve de los cambios incluidos en este PR — qué problema resuelve y por qué es importante)

- Añade instrucciones cross-platform para ejecutar tests (README).
- Ajusta scripts de test para compatibilidad Windows (`cross-env`) en backend.
- Añade aserciones extra en tests frontend (previsualización iframe).
- Añade test backend para sanitización de `generated_html`.
- Actualiza workflow CI para cubrir instalación y ejecución de tests frontend/backend.

## Tipo de cambio

- [ ] Bugfix
- [x] Nueva funcionalidad / mejora
- [x] Documentación

## Checklist de revisión

- [ ] Los tests pasan localmente (backend y frontend) y en CI.
- [ ] No se añaden credenciales ni secretos en este PR.
- [ ] Código y cambios de configuración están documentados (README actualizado).
- [ ] Revisar cambios de dependencias (se añadió `cross-env` como devDependency).
- [ ] Revisar posibles impactos en entornos Windows / CI.
- [ ] Si el PR toca infra/CI, confirmar que el workflow en `.github/workflows/ci.yml` se ejecuta correctamente.

## Notas de pruebas manuales

1. Backend:
   ```bash
   cd backend
   npm install
   npm run test:ci
   ```
2. Frontend:
   ```bash
   cd frontend
   npm ci --legacy-peer-deps
   npm run test:ci
   ```

## Cambios necesarios para merge

- [ ] Esperar a que CI esté en verde.
- [ ] Solicitar al menos una review de un maintainer.

## Comentarios adicionales

(Indica aquí cualquier detalle relevante para el reviewer: rutas afectadas, consideraciones de seguridad, pasos para reproducir, etc.)
