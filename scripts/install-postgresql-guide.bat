@echo off
echo ========================================
echo   GUIA DE INSTALACION DE POSTGRESQL
echo ========================================
echo.

echo PostgreSQL no esta instalado en tu sistema.
echo.
echo OPCIONES PARA INSTALAR:
echo.
echo [OPCION 1] Descarga Manual (Recomendado)
echo 1. Ve a: https://www.postgresql.org/download/windows/
echo 2. Descarga PostgreSQL 15 o superior
echo 3. Ejecuta el instalador
echo 4. Durante la instalacion:
echo    - Usuario: postgres
echo    - Contraseña: (anota la que elijas)
echo    - Puerto: 5432
echo    - Locale: Spanish, Spain
echo.
echo [OPCION 2] Chocolatey (si lo tienes instalado)
echo 1. Abre PowerShell como Administrador
echo 2. Ejecuta: choco install postgresql
echo.
echo [OPCION 3] Docker (para desarrolladores avanzados)
echo 1. docker run --name postgres-infoaprende -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:15
echo.
echo ========================================
echo   DESPUES DE INSTALAR
echo ========================================
echo.
echo 1. Reinicia este script o ejecuta:
echo    scripts\setup-postgresql.bat
echo.
echo 2. Configura la contraseña en backend\.env:
echo    DB_PASSWORD=tu_contraseña
echo.
echo 3. Ejecuta la aplicacion:
echo    iniciar-infoaprende.bat
echo.
pause
