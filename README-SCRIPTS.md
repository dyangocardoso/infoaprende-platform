# 📚 InfoAprende - Guía Completa de Scripts

## 🎯 Descripción General

InfoAprende es una plataforma educativa de informática con:
- **Frontend:** React + Vite (Puerto 5173)
- **Backend:** Node.js + Express (Puerto 4000)
- **Base de Datos:** PostgreSQL/SQLite con Sequelize

Esta guía explica todos los scripts disponibles para iniciar, gestionar y detener la plataforma.

---

## 📋 Scripts Principales

### 🌟 `iniciar-infoaprende-completo.bat` - **RECOMENDADO**
**Script completo con todas las verificaciones**

**¿Qué hace?**
- ✅ Limpia procesos de Node.js anteriores
- ✅ Verifica e instala dependencias automáticamente (backend y frontend)
- ✅ Crea archivo `.env` si no existe
- ✅ Inicia backend en puerto 4000
- ✅ Inicia frontend en puerto 5173
- ✅ Abre navegador automáticamente
- ✅ Muestra información completa de endpoints

**Cuándo usar:**
- ✅ Primera vez que usas InfoAprende
- ✅ Después de actualizaciones o cambios importantes
- ✅ Cuando quieres asegurar que todo esté configurado correctamente
- ✅ Si otros scripts fallan

**Tiempo estimado:** 10-15 segundos

---

### ⚡ `iniciar-rapido.bat`
**Inicio rápido para desarrollo diario**

**¿Qué hace?**
- 🚀 Limpia procesos anteriores
- 🚀 Inicia backend directamente
- 🚀 Inicia frontend directamente
- 🚀 Abre navegador automáticamente
- 🚀 No verifica dependencias (más rápido)

**Cuándo usar:**
- ✅ Desarrollo diario
- ✅ Cuando ya tienes todo configurado
- ✅ Necesitas iniciar rápidamente

**Tiempo estimado:** 3-5 segundos

---

### 🧪 `iniciar-test.bat`
**Versión de prueba con servidor simple**

**¿Qué hace?**
- 🔬 Usa `server-simple.js` en lugar del servidor completo
- 🔬 Verifica dependencias básicas
- 🔬 Ideal para pruebas y desarrollo

**Cuándo usar:**
- ✅ Pruebas de funcionalidad básica
- ✅ Desarrollo de features específicas
- ✅ Debugging de problemas

---

### 🆘 `inicio-emergencia.bat`
**Servidor de emergencia mínimo**

**¿Qué hace?**
- ⚠️ Usa `quick-server.js` (servidor mínimo)
- ⚠️ Configuración básica sin verificaciones
- ⚠️ Solo funcionalidades esenciales

**Cuándo usar:**
- ⚠️ Si todos los otros scripts fallan
- ⚠️ Problemas con dependencias
- ⚠️ Necesitas acceso básico urgente

---

### 🛑 `detener-infoaprende.bat`
**Detener todos los servicios**

**¿Qué hace?**
- 🛑 Termina todos los procesos de Node.js
- 🛑 Verifica liberación de puertos 4000 y 5173
- 🛑 Limpia el sistema completamente

**Cuándo usar:**
- ✅ Al finalizar el trabajo
- ✅ Antes de reiniciar servicios
- ✅ Si hay problemas de puertos ocupados

---

### 🖥️ `start-server.bat`
**Solo backend**

**¿Qué hace?**
- 🖥️ Inicia únicamente el backend
- 🖥️ Usa `npm run dev` (modo desarrollo)

**Cuándo usar:**
- ✅ Desarrollo solo del backend
- ✅ Testing de APIs
- ✅ Frontend separado

---

## 🚀 Flujos de Trabajo Recomendados

### 👶 **Primera vez / Instalación:**
```bash
1. iniciar-infoaprende-completo.bat
```

### 💼 **Desarrollo diario:**
```bash
1. iniciar-rapido.bat
# Trabajar en el código...
2. detener-infoaprende.bat (al terminar)
```

### 🔧 **Desarrollo con problemas:**
```bash
1. detener-infoaprende.bat
2. iniciar-infoaprende-completo.bat
```

### 🧪 **Testing y pruebas:**
```bash
1. iniciar-test.bat
# O para emergencias:
2. inicio-emergencia.bat
```

### 🖥️ **Solo backend:**
```bash
1. start-server.bat
```

---

## 🌐 URLs de Acceso

### Frontend (Aplicación Web):
```
http://localhost:5173
```

### Backend (API):
```
http://localhost:4000
```

### Verificación de estado:
```
http://localhost:4000/          # Info del servidor
http://localhost:4000/test      # Test de conexión
```

---

## 📊 Endpoints de la API

### 🔐 **Autenticación:**
- `POST /api/users/register` - Registro de usuario
- `POST /api/users/login` - Inicio de sesión

### 👤 **Gestión de Perfil:**
- `GET /api/users/profile` - Obtener perfil del usuario
- `PUT /api/users/profile` - Editar perfil (nombre, email, grado)
- `PUT /api/users/change-password` - Cambiar contraseña

### ℹ️ **General:**
- `GET /` - Información del servidor
- `GET /test` - Prueba de conexión y estado

---

## ⚙️ Configuración Automática

### Variables de Entorno (`backend/.env`):
Los scripts crean automáticamente este archivo con:

```env
PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=infoaprende
DB_USER=postgres
DB_PASSWORD=
JWT_SECRET=tu_jwt_secreto_super_seguro_infoaprende_2025
NODE_ENV=development
```

### Base de Datos:
- **Primaria:** PostgreSQL (si está instalado)
- **Fallback:** SQLite automático en `backend/database/infoaprende.sqlite`

---

## 🛠️ Solución de Problemas

### ❌ **Error: "npm not found"**
```bash
# Instalar Node.js desde: https://nodejs.org/
# Reiniciar el sistema después de la instalación
```

### ❌ **Error: Puerto en uso**
```bash
# Solución:
1. detener-infoaprende.bat
2. Esperar 5 segundos
3. iniciar-infoaprende-completo.bat
```

### ❌ **Error: Dependencias faltantes**
```bash
# El script completo las instala automáticamente
# O manualmente:
cd backend && npm install
cd ../frontend && npm install
```

### ❌ **Frontend no carga**
```bash
# Verificar:
1. ¿Está ejecutándose el backend? (http://localhost:4000)
2. ¿Está ejecutándose el frontend? (http://localhost:5173)
3. ¿Hay errores en las consolas?

# Solución:
detener-infoaprende.bat && iniciar-infoaprende-completo.bat
```

### ❌ **Backend no responde**
```bash
# Verificar en: http://localhost:4000
# Debería mostrar: "InfoAprende Backend API"

# Si no funciona:
1. inicio-emergencia.bat (servidor mínimo)
2. Verificar logs en la consola del backend
```

### ❌ **Base de datos no conecta**
```bash
# InfoAprende usa fallback automático a SQLite
# No requiere configuración adicional
# PostgreSQL es opcional
```

---

## 📁 Estructura del Proyecto

```
INFOAPRENDE/
├── 📜 Scripts de Inicio:
│   ├── iniciar-infoaprende-completo.bat  ⭐ Principal
│   ├── iniciar-rapido.bat               ⚡ Rápido
│   ├── iniciar-test.bat                 🧪 Pruebas
│   ├── inicio-emergencia.bat            🆘 Emergencia
│   ├── start-server.bat                 🖥️ Solo backend
│   └── detener-infoaprende.bat          🛑 Detener
│
├── 🖥️ Backend (API):
│   ├── index.js                         # Servidor principal
│   ├── server-simple.js                 # Servidor simplificado
│   ├── quick-server.js                  # Servidor emergencia
│   ├── package.json                     # Dependencias
│   ├── .env                             # Configuración
│   ├── models/                          # Modelos Sequelize
│   ├── controllers/                     # Controladores
│   ├── routes/                          # Rutas API
│   └── database/                        # SQLite backup
│
├── 🎨 Frontend (React):
│   ├── src/                             # Código fuente
│   │   ├── App.jsx                      # Componente principal
│   │   ├── pages/                       # Páginas
│   │   └── api/                         # Cliente API
│   ├── package.json                     # Dependencias
│   └── vite.config.js                   # Configuración Vite
│
├── 📊 Database:
│   └── postgres-setup.sql               # Setup PostgreSQL
│
└── 📁 Scripts:
    ├── setup-postgresql.bat             # Instalación PostgreSQL
    └── install-postgresql-guide.bat     # Guía instalación
```

---

## 🎉 Inicio Rápido

### Para empezar ahora mismo:

1. **Doble clic en:** `iniciar-infoaprende-completo.bat`
2. **Espera:** 10-15 segundos
3. **¡Listo!** El navegador se abrirá automáticamente

### Para desarrollo diario:

1. **Doble clic en:** `iniciar-rapido.bat`
2. **Espera:** 3-5 segundos
3. **¡A trabajar!**

### Para detener:

1. **Doble clic en:** `detener-infoaprende.bat`
2. **O:** Cerrar las ventanas de terminal

---

## 💡 Consejos y Mejores Prácticas

### ✅ **Recomendaciones:**
- Usa `iniciar-infoaprende-completo.bat` la primera vez
- Usa `iniciar-rapido.bat` para desarrollo diario
- Siempre detén los servicios con `detener-infoaprende.bat`
- Mantén las ventanas de terminal abiertas para ver logs
- Si hay problemas, siempre usa el script completo primero

### ⚠️ **Evita:**
- Cerrar ventanas de terminal bruscamente
- Ejecutar múltiples scripts simultáneamente
- Modificar puertos sin actualizar la configuración

### 🔧 **Para desarrolladores:**
- Los logs aparecen en las ventanas de terminal
- El backend se reinicia automáticamente en modo desarrollo
- El frontend tiene hot-reload activado
- Usa las herramientas de desarrollador del navegador

---

## 📞 Soporte

Si tienes problemas:

1. **Intenta:** `detener-infoaprende.bat` → `iniciar-infoaprende-completo.bat`
2. **Verifica:** Node.js instalado correctamente
3. **Revisa:** Los logs en las ventanas de terminal
4. **Usa:** `inicio-emergencia.bat` como último recurso

---

**¡InfoAprende está listo para ayudarte a aprender informática! 🚀📚**
