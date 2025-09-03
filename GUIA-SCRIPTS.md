# 🚀 InfoAprende - Guía de Scripts de Inicio

Esta guía te explica cómo usar los diferentes scripts para iniciar y gestionar la plataforma InfoAprende.

## 📋 Scripts Disponibles

### 1. 🌟 `iniciar-infoaprende-completo.bat` - RECOMENDADO
**Inicio completo con verificaciones**
- ✅ Verifica e instala dependencias automáticamente
- ✅ Configura el archivo .env si no existe
- ✅ Limpia procesos anteriores
- ✅ Inicia backend (puerto 4000) y frontend (puerto 5173)
- ✅ Abre automáticamente el navegador
- ✅ Muestra información detallada del estado

**Cuándo usar:** Primera vez o cuando quieras asegurar que todo esté configurado correctamente.

### 2. ⚡ `iniciar-rapido.bat`
**Inicio rápido para desarrollo**
- 🚀 Inicia directamente sin verificaciones
- 🚀 Ideal para desarrollo diario
- 🚀 Más rápido (2-3 segundos vs 10-15 segundos)

**Cuándo usar:** Desarrollo diario cuando ya tienes todo configurado.

### 3. 🛑 `detener-infoaprende.bat`
**Detener todos los servicios**
- 🛑 Termina todos los procesos de Node.js
- 🛑 Verifica que los puertos se liberen
- 🛑 Limpia el sistema completamente

**Cuándo usar:** Para detener completamente InfoAprende.

### 4. 🆘 `inicio-emergencia.bat`
**Inicio básico de emergencia**
- ⚠️ Solo para casos de emergencia
- ⚠️ Inicio mínimo sin configuraciones

**Cuándo usar:** Si los otros scripts fallan.

## 🎯 Flujo de Trabajo Recomendado

### Primera vez o después de cambios importantes:
```bash
1. iniciar-infoaprende-completo.bat
```

### Desarrollo diario:
```bash
1. iniciar-rapido.bat
# Trabajar en el código...
2. detener-infoaprende.bat (cuando termines)
```

### Si hay problemas:
```bash
1. detener-infoaprende.bat
2. iniciar-infoaprende-completo.bat
```

## 🌐 URLs de Acceso

Una vez iniciado InfoAprende:

- **Frontend (Aplicación Web):** http://localhost:5173
- **Backend (API):** http://localhost:4000

## 📊 Endpoints de la API

### Autenticación:
- `POST /api/users/register` - Registro de usuario
- `POST /api/users/login` - Inicio de sesión

### Perfil de Usuario:
- `GET /api/users/profile` - Obtener perfil
- `PUT /api/users/profile` - Editar perfil (nombre, email, grado)
- `PUT /api/users/change-password` - Cambiar contraseña

### General:
- `GET /` - Información del servidor
- `GET /test` - Prueba de conexión

## 🔧 Configuración

### Variables de Entorno (backend/.env):
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
- **Primaria:** PostgreSQL (si está disponible)
- **Fallback:** SQLite (automático en `backend/database/infoaprende.sqlite`)

## 🛠️ Solución de Problemas

### Error: "npm not found"
```bash
# Instalar Node.js desde https://nodejs.org/
```

### Error: Puerto en uso
```bash
# Ejecutar: detener-infoaprende.bat
# Luego: iniciar-infoaprende-completo.bat
```

### Error: Dependencias faltantes
```bash
# El script completo las instalará automáticamente
# O manualmente:
cd backend && npm install
cd ../frontend && npm install
```

### Frontend no carga
```bash
# Verificar que ambos servicios estén ejecutándose
# Ir a: http://localhost:5173
```

### Backend no responde
```bash
# Verificar en: http://localhost:4000
# Debería mostrar información del servidor
```

## 📁 Estructura de Archivos

```
INFOAPRENDE/
├── iniciar-infoaprende-completo.bat  # ⭐ Script principal
├── iniciar-rapido.bat               # ⚡ Script rápido  
├── detener-infoaprende.bat          # 🛑 Detener servicios
├── backend/                         # 🖥️ Servidor API
│   ├── index.js                     # Punto de entrada
│   ├── package.json                 # Dependencias
│   └── .env                         # Configuración
├── frontend/                        # 🎨 Aplicación React
│   ├── src/                         # Código fuente
│   ├── package.json                 # Dependencias
│   └── vite.config.js               # Configuración Vite
└── database/                        # 📊 Base de datos
    └── infoaprende.sqlite           # SQLite (fallback)
```

## 🎉 ¡Listo para usar!

1. Ejecuta `iniciar-infoaprende-completo.bat`
2. Espera que se abra el navegador
3. ¡Comienza a usar InfoAprende!

Para desarrollo diario, usa `iniciar-rapido.bat` para mayor velocidad.
