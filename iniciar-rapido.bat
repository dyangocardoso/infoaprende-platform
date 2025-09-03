@echo off
title InfoAprende - Inicio Rápido
echo ========================================
echo   ⚡ INFOAPRENDE - INICIO RÁPIDO ⚡
echo ========================================
echo.

REM Limpiar procesos anteriores
echo 🧹 Limpiando procesos anteriores...
taskkill /F /IM node.exe >nul 2>&1

REM Iniciar backend
echo 🖥️ Iniciando Backend...
start "Backend API" cmd /k "cd /d %~dp0backend && node index.js"

REM Esperar 2 segundos
timeout /t 2 >nul

REM Iniciar frontend
echo 🎨 Iniciando Frontend...
start "Frontend React" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ✅ InfoAprende iniciado!
echo 🌐 Frontend: http://localhost:5173
echo 🖥️ Backend:  http://localhost:4000
echo.
timeout /t 5 >nul
start http://localhost:5173
exit
