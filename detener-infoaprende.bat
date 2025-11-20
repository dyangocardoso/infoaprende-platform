@echo off
title InfoAprende - Detener Servicios
echo ========================================
echo   🛑 DETENIENDO INFOAPRENDE
echo ========================================
echo.

echo 🔍 Buscando procesos de Node.js...
tasklist /FI "IMAGENAME eq node.exe" 2>nul | find /I "node.exe" >nul
if %errorlevel% equ 0 (
    echo ⚠️ Deteniendo procesos de Node.js...
    taskkill /F /IM node.exe
    echo ✅ Procesos detenidos correctamente
) else (
    echo ℹ️ No hay procesos de Node.js ejecutándose
)

echo.
echo 🔍 Verificando puertos...
netstat -ano | findstr :4000 >nul
if %errorlevel% equ 0 (
    echo ⚠️ Puerto 4000 aún en uso
) else (
    echo ✅ Puerto 4000 liberado
)

netstat -ano | findstr :5173 >nul
if %errorlevel% equ 0 (
    echo ⚠️ Puerto 5173 aún en uso
) else (
    echo ✅ Puerto 5173 liberado
)

echo.
echo ✅ InfoAprende detenido completamente
echo.
timeout /t 3
exit
