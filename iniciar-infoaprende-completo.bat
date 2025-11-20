@echo off
title InfoAprende - Iniciador Completo
echo ========================================
echo   🚀 INICIANDO INFOAPRENDE COMPLETO 🚀
echo ========================================
echo.

REM Mostrar información del sistema
echo [INFO] Verificando sistema...
echo 📅 Fecha: %DATE% %TIME%
echo 📁 Directorio: %CD%
echo 💻 Usuario: %USERNAME%
echo.

REM Limpiar procesos anteriores
echo [1/5] 🧹 Limpiando procesos anteriores...
taskkill /F /IM node.exe >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Procesos de Node.js terminados
) else (
    echo ℹ️ No hay procesos de Node.js ejecutándose
)
echo.

REM Verificar dependencias del backend
echo [2/5] 🔍 Verificando dependencias del backend...
if not exist "backend\node_modules" (
    echo ⚠️ Instalando dependencias del backend...
    cd backend
    npm install
    cd ..
    echo ✅ Dependencias del backend instaladas
) else (
    echo ✅ Dependencias del backend verificadas
)
echo.

REM Verificar dependencias del frontend
echo [3/5] 🔍 Verificando dependencias del frontend...
if not exist "frontend\node_modules" (
    echo ⚠️ Instalando dependencias del frontend...
    cd frontend
    npm install
    cd ..
    echo ✅ Dependencias del frontend instaladas
) else (
    echo ✅ Dependencias del frontend verificadas
)
echo.

REM Verificar archivo .env del backend
echo [4/5] ⚙️ Verificando configuración...
if not exist "backend\.env" (
    echo ⚠️ Creando archivo de configuración .env...
    echo PORT=4000 > backend\.env
    echo DB_HOST=localhost >> backend\.env
    echo DB_PORT=5432 >> backend\.env
    echo DB_NAME=infoaprende >> backend\.env
    echo DB_USER=postgres >> backend\.env
    echo DB_PASSWORD= >> backend\.env
    echo JWT_SECRET=tu_jwt_secreto_super_seguro_infoaprende_2025 >> backend\.env
    echo NODE_ENV=development >> backend\.env
    echo ✅ Archivo .env creado
) else (
    echo ✅ Archivo .env verificado
)
echo.

REM Iniciar servicios
echo [5/5] 🚀 Iniciando servicios...
echo.
echo ┌─────────────────────────────────────┐
echo │  INICIANDO BACKEND (Puerto 4000)   │
echo └─────────────────────────────────────┘
start "🖥️ InfoAprende Backend" cmd /k "cd /d %~dp0backend && echo 🚀 Iniciando servidor backend... && echo ⚡ Node.js + Express + SQLite/PostgreSQL && echo 🌐 URL: http://localhost:4000 && echo. && node index.js"

timeout /t 3 >nul

echo ┌─────────────────────────────────────┐
echo │  INICIANDO FRONTEND (Puerto 5173)  │
echo └─────────────────────────────────────┘
start "🎨 InfoAprende Frontend" cmd /k "cd /d %~dp0frontend && echo 🚀 Iniciando cliente React... && echo ⚡ Vite + React + Router && echo 🌐 URL: http://localhost:5173 && echo. && npm run dev"

echo.
echo 🎉 ¡INFOAPRENDE INICIADO COMPLETAMENTE!
echo.
echo 📋 INFORMACIÓN DE ACCESO:
echo ┌──────────────────────────────────────────┐
echo │ 🖥️  Backend API: http://localhost:4000   │
echo │ 🎨 Frontend Web: http://localhost:5173   │
echo │ 📊 Base de datos: SQLite (automática)    │
echo └──────────────────────────────────────────┘
echo.
echo 🔗 ENDPOINTS PRINCIPALES:
echo   • GET  /                    (Info general)
echo   • POST /api/users/register  (Registro)
echo   • POST /api/users/login     (Login)
echo   • GET  /api/users/profile   (Perfil)
echo   • PUT  /api/users/profile   (Editar perfil)
echo   • PUT  /api/users/change-password (Cambiar contraseña)
echo.
echo ⏱️ Tiempo estimado de inicio: 10-15 segundos
echo 🌐 El navegador se abrirá automáticamente en unos segundos...
echo.

REM Esperar un momento y abrir el navegador
timeout /t 8 >nul
start http://localhost:5173

echo 💡 CONSEJOS:
echo   • Para detener: Cerrar las ventanas de terminal
echo   • Para reiniciar: Ejecutar este archivo nuevamente
echo   • Para desarrollo: Usar iniciar-test.bat (más rápido)
echo.
echo ✅ ¡Todo listo! Presiona cualquier tecla para salir...
pause >nul
