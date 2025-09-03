@echo off
echo ========================================
echo   INICIANDO SERVIDOR DE EMERGENCIA
echo ========================================
echo.

echo Cerrando cualquier proceso en puerto 4000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :4000') do taskkill /f /pid %%a >nul 2>&1

echo.
echo Iniciando servidor de emergencia...
cd /d "%~dp0backend"
start "Backend Emergency Server" cmd /k "echo Servidor de emergencia - InfoAprende && node quick-server.js"

echo.
echo Esperando 3 segundos...
timeout /t 3 /nobreak >nul

echo.
echo Iniciando frontend...
cd /d "%~dp0frontend"
start "Frontend React" cmd /k "echo Frontend React - InfoAprende && npm run dev"

echo.
echo ========================================
echo   SERVIDORES INICIADOS
echo ========================================
echo.
echo Backend: http://localhost:4000
echo Frontend: http://localhost:5173
echo.
echo Las ventanas se abrieron por separado.
echo Ahora puedes probar el registro de usuario.
echo.
pause
