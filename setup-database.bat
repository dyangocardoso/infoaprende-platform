@echo off
echo ================================================
echo    INFOAPRENDE - CONFIGURACION DE BASE DE DATOS
echo ================================================
echo.

cd /d "%~dp0\backend"

echo [1/4] Verificando dependencias...
if not exist "node_modules" (
    echo Instalando dependencias de Node.js...
    npm install
    if errorlevel 1 (
        echo ERROR: No se pudieron instalar las dependencias
        pause
        exit /b 1
    )
)

echo [2/4] Verificando archivo .env...
if not exist ".env" (
    echo Creando archivo .env con configuracion por defecto...
    echo NODE_ENV=development > .env
    echo PORT=4000 >> .env
    echo DB_NAME=infoaprende >> .env
    echo DB_USER=postgres >> .env
    echo DB_PASSWORD= >> .env
    echo DB_HOST=localhost >> .env
    echo DB_PORT=5432 >> .env
    echo JWT_SECRET=tu_jwt_secret_muy_seguro_aqui >> .env
)

echo [3/4] Ejecutando pruebas de base de datos...
node test-database-complete.js
if errorlevel 1 (
    echo ERROR: Las pruebas de base de datos fallaron
    echo Verifica la configuracion de PostgreSQL o usa SQLite como respaldo
    pause
    exit /b 1
)

echo [4/4] Iniciando servidor backend...
echo.
echo ================================================
echo  Base de datos configurada correctamente!
echo  Iniciando servidor en http://localhost:4000
echo ================================================
echo.
npm run dev
