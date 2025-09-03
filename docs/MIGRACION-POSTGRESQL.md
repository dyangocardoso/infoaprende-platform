# 🚀 Migración de MongoDB a PostgreSQL - InfoAprende

## ✅ Migración Completada

La plataforma educativa InfoAprende ha sido migrada exitosamente de **MongoDB** a **PostgreSQL**.

## 🔄 Cambios Realizados

### Backend
- ✅ Reemplazado `mongoose` por `sequelize` y `pg`
- ✅ Actualizado modelo de datos con relaciones estrictas
- ✅ Mejorados controladores con validaciones robustas
- ✅ Agregado manejo de errores específicos de PostgreSQL
- ✅ Implementadas asociaciones entre modelos

### Base de Datos
- ✅ Esquema PostgreSQL con tipos de datos específicos
- ✅ Índices optimizados para consultas frecuentes
- ✅ Constraints y validaciones a nivel de base de datos
- ✅ Triggers para timestamps automáticos
- ✅ Vista para estadísticas de progreso

### Nuevas Funcionalidades
- 📊 Consultas SQL avanzadas para reportes
- 🔒 Integridad referencial estricta
- 📈 Mejor rendimiento en consultas complejas
- 🎯 Validaciones robustas de datos

## 🛠️ Pasos para Configurar

### 1. Instalar PostgreSQL
```bash
# Opción 1: Descarga manual
https://www.postgresql.org/download/windows/

# Opción 2: Chocolatey
choco install postgresql

# Opción 3: Winget
winget install PostgreSQL.PostgreSQL
```

### 2. Configurar Base de Datos
```bash
# Ejecutar script de configuración
scripts\setup-postgresql.bat
```

### 3. Instalar Dependencias (Ya realizado)
```bash
cd backend
npm install
```

### 4. Configurar Variables de Entorno
Archivo `backend\.env`:
```env
PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=infoaprende
DB_USER=postgres
DB_PASSWORD=tu_contraseña
JWT_SECRET=supersecreto123
NODE_ENV=development
```

### 5. Iniciar la Aplicación
```bash
# Opción 1: Script automático
iniciar-infoaprende.bat

# Opción 2: Manual
cd backend && npm run dev
cd frontend && npm run dev
```

## 📊 Nuevo Esquema de Base de Datos

### Tablas Principales
1. **usuarios** - Información de estudiantes y docentes
2. **cursos** - Cursos disponibles en la plataforma
3. **lecciones** - Contenido de cada curso
4. **progreso_usuarios** - Seguimiento del progreso
5. **insignias** - Sistema de logros
6. **usuario_insignias** - Insignias obtenidas por usuarios

### Ventajas del Nuevo Esquema
- 🔒 **Integridad de datos** con foreign keys
- 📊 **Consultas complejas** con SQL nativo
- 🚀 **Mejor rendimiento** con índices optimizados
- 📈 **Reportes avanzados** con vistas y agregaciones
- 🔍 **Búsqueda full-text** en contenido educativo

## 🔄 Migración de Datos Existentes

Si tenías datos en MongoDB, ejecuta:
```bash
cd scripts
node migrate-data.js
```

## 🧪 Pruebas de Funcionalidad

### Endpoints Disponibles
```
POST /api/users/register  - Registro de usuarios
POST /api/users/login     - Inicio de sesión
GET  /api/users/profile   - Perfil del usuario
GET  /api/users/          - Lista de usuarios (docentes)
GET  /api/test/test       - Prueba de conectividad
```

### Probar la API
```bash
# Registrar usuario
curl -X POST http://localhost:4000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test User","email":"test@test.com","password":"123456","grado":"5to","rol":"estudiante"}'

# Iniciar sesión
curl -X POST http://localhost:4000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123456"}'
```

## 🐛 Solución de Problemas

### Error: "no se puede conectar a PostgreSQL"
1. Verificar que PostgreSQL esté corriendo
2. Comprobar credenciales en `.env`
3. Verificar puerto 5432 esté disponible

### Error: "relation does not exist"
1. Ejecutar `scripts\setup-postgresql.bat`
2. Verificar que la base de datos `infoaprende` existe

### Error: "authentication failed"
1. Verificar usuario y contraseña en `.env`
2. Configurar PostgreSQL para permitir conexiones locales

## 📚 Recursos Adicionales

- [Documentación de Sequelize](https://sequelize.org/docs/v6/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Express.js Guide](https://expressjs.com/es/)

## 🎉 ¡Migración Exitosa!

Tu plataforma InfoAprende ahora está ejecutándose con **PostgreSQL**, ofreciendo:
- Mayor robustez en los datos
- Mejor rendimiento para consultas complejas
- Capacidades avanzadas de reportes
- Escalabilidad mejorada

¡Disfruta de tu nueva arquitectura de base de datos! 🚀
