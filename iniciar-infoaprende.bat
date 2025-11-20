@echo off
echo ========================================
echo   INICIANDO INFOAPRENDE CON POSTGRESQL
echo ========================================
echo.

REM Verificar si PostgreSQL esta corriendo
echo [1/3] Verificando PostgreSQL...
pg_isready -h localhost -p 5432 >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ PostgreSQL no esta corriendo o no esta instalado
    echo.
    echo Para configurar PostgreSQL, ejecuta:
    echo   scripts\setup-postgresql.bat
    echo.
    pause
    exit /b 1
) else (
    echo ✅ PostgreSQL esta corriendo
)

echo.
echo [2/3] Iniciando Backend (Node.js + PostgreSQL)...
REM Inicia el backend en una nueva ventana
start "InfoAprende Backend" cmd /k "cd /d %~dp0backend && echo Iniciando servidor backend con PostgreSQL... && npm run dev"

echo.
echo [3/3] Iniciando Frontend (React + Vite)...
REM Inicia el frontend en una nueva ventana
start "InfoAprende Frontend" cmd /k "cd /d %~dp0frontend && echo Iniciando cliente React... && npm run dev"

echo.
echo ========================================
echo   SERVIDORES INICIADOS EXITOSAMENTE
echo ========================================
echo.
echo Backend: http://localhost:4000
echo Frontend: http://localhost:5173
echo Base de datos: PostgreSQL (localhost:5432)
echo.
echo Las ventanas del backend y frontend se abrieron por separado.
echo Puedes cerrar esta ventana.
echo.
pause
