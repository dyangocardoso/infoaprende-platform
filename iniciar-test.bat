@echo off
echo ========================================
echo   INICIANDO INFOAPRENDE - VERSION TEST
echo ========================================
echo.

echo [1/3] Verificando dependencias...
cd backend
if not exist node_modules (
    echo Instalando dependencias del backend...
    npm install
)
cd ..

cd frontend
if not exist node_modules (
    echo Instalando dependencias del frontend...
    npm install
)
cd ..

echo.
echo [2/3] Iniciando Backend (Servidor Simple)...
REM Inicia el backend simple en una nueva ventana
start "InfoAprende Backend Simple" cmd /k "cd /d %~dp0backend && echo Iniciando servidor backend simple... && node server-simple.js"

echo.
echo Esperando 5 segundos para que el backend inicie...
timeout /t 5 /nobreak >nul

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
echo Base de datos: SQLite/PostgreSQL (auto-detección)
echo.
echo Las ventanas del backend y frontend se abrieron por separado.
echo Prueba el registro de usuario en http://localhost:5173
echo.
pause
