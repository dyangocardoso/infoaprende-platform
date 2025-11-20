@echo off
echo ========================================
echo   CONFIGURACION DE POSTGRESQL PARA INFOAPRENDE
echo ========================================
echo.

echo [1/4] Verificando si PostgreSQL esta instalado...
psql --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ PostgreSQL no esta instalado.
    echo.
    echo Para instalar PostgreSQL:
    echo 1. Descarga desde: https://www.postgresql.org/download/windows/
    echo 2. O usa Chocolatey: choco install postgresql
    echo 3. O usa winget: winget install PostgreSQL.PostgreSQL
    echo.
    echo Despues de instalar PostgreSQL, ejecuta este script nuevamente.
    pause
    exit /b 1
) else (
    echo ✅ PostgreSQL esta instalado
)

echo.
echo [2/4] Creando la base de datos infoaprende...
echo Usuario por defecto: postgres
echo Si es la primera vez, la contraseña podria estar vacia o ser 'postgres'
echo.

psql -U postgres -c "CREATE DATABASE infoaprende;" 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  La base de datos podria ya existir o hay un problema de conexion
    echo Intentando continuar...
) else (
    echo ✅ Base de datos 'infoaprende' creada
)

echo.
echo [3/4] Ejecutando script de configuracion de tablas...
psql -U postgres -d infoaprende -f "%~dp0..\database\postgres-setup.sql"
if %errorlevel% neq 0 (
    echo ❌ Error ejecutando el script de configuracion
    echo Verifica las credenciales y que PostgreSQL este corriendo
    pause
    exit /b 1
) else (
    echo ✅ Tablas y datos iniciales creados correctamente
)

echo.
echo [4/4] Configuracion completada!
echo.
echo ========================================
echo   CONFIGURACION EXITOSA
echo ========================================
echo.
echo La base de datos PostgreSQL esta lista para InfoAprende
echo.
echo Configuracion actual:
echo - Base de datos: infoaprende
echo - Host: localhost
echo - Puerto: 5432
echo - Usuario: postgres
echo.
echo Puedes iniciar el servidor backend con:
echo   cd backend
echo   npm run dev
echo.
pause
