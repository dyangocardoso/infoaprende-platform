# Script para limpiar archivos innecesarios del proyecto INFOAPRENDE

Write-Host "Iniciando limpieza de archivos innecesarios..." -ForegroundColor Green

# Cambiar al directorio del proyecto
Set-Location "c:\Users\PROFESOR\Desktop\INFOAPRENDE"

# Archivos JavaScript de diagnóstico, verificación y pruebas temporales
$archivos_js_temporales = @(
    "analisis-detallado-contenido.js",
    "analisis-detallado-temas.js",
    "correccion-advertencias-final.js",
    "correccion-final-tema2.js",
    "corregir-advertencias.js",
    "corregir-sintaxis-tema2.js",
    "corregir-template-literals.js",
    "diagnostico-completo-bd.js",
    "diagnostico-contextos.js",
    "diagnostico-error-500-resuelto.js",
    "diagnostico-error-500.js",
    "diagnostico.js",
    "prueba-evaluacion-final.js",
    "prueba-evaluaciones-completa.js",
    "prueba-funcional-evaluaciones.js",
    "prueba-funcional-tema7.js",
    "resumen-eslint-fix.js",
    "resumen-final.js",
    "revisar-advertencias.js",
    "revision-completa-temas-1-4.js",
    "revision-final-corregida.js",
    "revision-temas-1-4.js",
    "test-api-real.js",
    "test-api.js",
    "test-backend-routes.js",
    "test-botones.js",
    "test-db.js",
    "test-simple.js",
    "validacion-tema4-final.js",
    "verificacion-completa-final.js",
    "verificacion-completa-tema5.js",
    "verificacion-evaluaciones-intro-windows.js",
    "verificacion-final-sistema.js",
    "verificacion-final-tema1.js",
    "verificacion-final-tema2.js",
    "verificacion-final-tema7.js",
    "verificacion-final.js",
    "verificacion-funcional.js",
    "verificacion-integral-final.js",
    "verificacion-integral-tema1.js",
    "verificacion-integral-tema7.js",
    "verificacion-manual-temas.js",
    "verificacion-precisa-intro-windows.js",
    "verificacion-simple-evaluaciones.js",
    "verificacion-sintaxis-tema2.js",
    "verificacion-tema2-explorador.js",
    "verificacion-tema4-barra-tareas.js",
    "verificacion-tema4-completo.js",
    "verificacion-tema6-completa.js",
    "verificacion-tema7-completa.js",
    "verificacion-tema8.js",
    "verificar-curso-windows.js",
    "verificar-eslint-final.js",
    "verificar-eslint-fix.js",
    "verificar-evaluacion-boton.js",
    "verificar-evaluacion-simple.js",
    "verificar-frontend.js",
    "verificar-problemas.js",
    "verificar-tema1-windows.js",
    "verificar-tema5.js",
    "verificar-tema6.js",
    "verificar-tematicas-actualizadas.js"
)

# Archivos Markdown temporales (conservar solo README.md)
$archivos_md_temporales = @(
    "INTEGRACION-COMPLETADA.md",
    "MIGRACION-COMPLETADA.md",
    "PLAN-CORRECCION-INTEGRAL.md",
    "README-SCRIPTS.md",
    "REPORTE-BASE-DATOS.md",
    "RESOLUCION-ADVERTENCIAS.md",
    "RESUMEN-BOTON-EVALUACION.md",
    "RESUMEN-FINAL-SISTEMA.md",
    "RESUMEN-FINAL-TEMA7-COMPLETADO.md",
    "RESUMEN-REVISION-FINAL.md",
    "SOLUCION-INMEDIATA.md",
    "SPRINT-4-INFORME-FINAL.md",
    "TEMA2-EXPLORADOR-COMPLETADO.md",
    "TEMA4-CORRECCION-COMPLETADA.md"
)

# Archivos batch temporales (conservar solo los esenciales)
$archivos_bat_temporales = @(
    "iniciar-test.bat",
    "inicio-emergencia.bat",
    "start-server.bat"
)

# Archivos HTML temporales
$archivos_html_temporales = @(
    "panel-docente-demo.html"
)

# Eliminar archivos JavaScript temporales
Write-Host "Eliminando archivos JavaScript temporales..." -ForegroundColor Yellow
foreach ($archivo in $archivos_js_temporales) {
    if (Test-Path $archivo) {
        Remove-Item $archivo -Force
        Write-Host "  -> Eliminado: $archivo" -ForegroundColor Red
    }
}

# Eliminar archivos Markdown temporales
Write-Host "Eliminando archivos Markdown temporales..." -ForegroundColor Yellow
foreach ($archivo in $archivos_md_temporales) {
    if (Test-Path $archivo) {
        Remove-Item $archivo -Force
        Write-Host "  -> Eliminado: $archivo" -ForegroundColor Red
    }
}

# Eliminar archivos batch temporales
Write-Host "Eliminando archivos batch temporales..." -ForegroundColor Yellow
foreach ($archivo in $archivos_bat_temporales) {
    if (Test-Path $archivo) {
        Remove-Item $archivo -Force
        Write-Host "  -> Eliminado: $archivo" -ForegroundColor Red
    }
}

# Eliminar archivos HTML temporales
Write-Host "Eliminando archivos HTML temporales..." -ForegroundColor Yellow
foreach ($archivo in $archivos_html_temporales) {
    if (Test-Path $archivo) {
        Remove-Item $archivo -Force
        Write-Host "  -> Eliminado: $archivo" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Limpieza completada!" -ForegroundColor Green
Write-Host ""
Write-Host "Archivos conservados importantes:" -ForegroundColor Cyan
Write-Host "  -> README.md (documentacion principal)" -ForegroundColor Green
Write-Host "  -> package.json (dependencias del proyecto)" -ForegroundColor Green
Write-Host "  -> .env (variables de entorno)" -ForegroundColor Green
Write-Host "  -> .gitignore (configuracion git)" -ForegroundColor Green
Write-Host "  -> iniciar-infoaprende.bat (script principal)" -ForegroundColor Green
Write-Host "  -> iniciar-infoaprende-completo.bat (script completo)" -ForegroundColor Green
Write-Host "  -> iniciar-rapido.bat (script rapido)" -ForegroundColor Green
Write-Host "  -> detener-infoaprende.bat (script para detener)" -ForegroundColor Green
Write-Host "  -> setup-database.bat (configuracion BD)" -ForegroundColor Green
Write-Host "  -> frontend/ (aplicacion React)" -ForegroundColor Green
Write-Host "  -> backend/ (API Node.js)" -ForegroundColor Green
Write-Host "  -> docs/ (documentacion)" -ForegroundColor Green
Write-Host "  -> recursos/ (recursos del proyecto)" -ForegroundColor Green
Write-Host "  -> database/ (base de datos)" -ForegroundColor Green
Write-Host "  -> scripts/ (scripts del sistema)" -ForegroundColor Green
