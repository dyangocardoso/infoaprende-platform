require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importar controladores y middlewares
const authController = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const authMiddleware = require('./middlewares/auth.middleware');

const app = express();
// Configurar CORS seguro: permitir orígenes listados en FRONTEND_URL (coma-separados) y localhost de desarrollo.
const rawFrontend = process.env.FRONTEND_URL || '';
const allowedOrigins = Array.from(new Set(
  rawFrontend.split(',').map(s => s.trim()).filter(Boolean)
));
// Siempre permitir el origen de Vite (desarrollo local)
if (!allowedOrigins.includes('http://localhost:5173')) {
  allowedOrigins.push('http://localhost:5173');
}
console.log('Allowed CORS origins:', allowedOrigins);
app.use(cors({
  origin: (origin, callback) => {
    // Permitir peticiones desde clientes que no envían Origin (ej. server-to-server, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('CORS policy: Origin not allowed'));
  },
  optionsSuccessStatus: 200
}));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Inicialización de base de datos
let dbConnected = false;

async function initDB() {
  try {
    console.log('🔍 Inicializando base de datos...');
    
    // Usar el script completo de inicialización
    const { initializeDatabase } = require('./config/database-init');
    const { User, Curso, Leccion, ProgresoUsuario, sequelize } = await initializeDatabase();
    
    // Hacer los modelos disponibles globalmente
    global.User = User;
    global.Curso = Curso;
    global.Leccion = Leccion;
    global.ProgresoUsuario = ProgresoUsuario;
    global.sequelize = sequelize;
    
    dbConnected = true;
    console.log('✅ Base de datos y modelos inicializados correctamente');
    
  } catch (error) {
    console.error('❌ Error inicializando base de datos:', error.message);
    console.log('⚠️  Continuando sin base de datos...');
    dbConnected = false;
  }
}

// Middleware para verificar estado de la BD
const checkDB = (req, res, next) => {
  if (!dbConnected) {
    return res.status(503).json({
      error: 'Base de datos no disponible',
      message: 'El servidor está iniciando. Intenta en unos segundos.'
    });
  }
  next();
};

// Rutas principales
app.get('/', (req, res) => {
  res.json({
    message: '🎉 InfoAprende API funcionando',
    status: 'OK',
    database: dbConnected ? 'Conectada' : 'Desconectada',
    version: '2.0.0',
    endpoints: {
      health: 'GET /api/health',
      register: 'POST /api/users/register',
      login: 'POST /api/users/login',
      profile: 'GET /api/users/profile (requiere auth)',
      updateProfile: 'PUT /api/users/profile (requiere auth)',
      changePassword: 'PUT /api/users/change-password (requiere auth)',
      test: 'GET /api/test/test'
    },
    frontend: 'http://localhost:5173'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    database: dbConnected ? 'connected' : 'disconnected',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Rutas de autenticación con base de datos real
app.post('/api/users/register', checkDB, authController.register);
app.post('/api/users/login', checkDB, authController.login);
app.get('/api/users/profile', checkDB, authMiddleware.verifyToken, userController.getProfile);
app.put('/api/users/profile', checkDB, authMiddleware.verifyToken, userController.updateProfile);
app.put('/api/users/change-password', checkDB, authMiddleware.verifyToken, userController.changePassword);

// Rutas de administración
const adminRoutes = require('./routes/admin.routes');
app.use('/api/admin', checkDB, adminRoutes);

// Rutas docentes: temarios, evaluaciones, preguntas, plantillas (admin)
const temariosRoutes = require('./routes/docente.temarios.routes');
const evaluacionesRoutes = require('./routes/docente.evaluaciones.routes');
const preguntasRoutes = require('./routes/docente.preguntas.routes');
const plantillasRoutes = require('./routes/docente.plantillas.routes');

app.use('/api/docente/temarios', checkDB, temariosRoutes);
app.use('/api/docente/evaluaciones', checkDB, evaluacionesRoutes);
// Preguntas se montan bajo /api/docente/evaluaciones/:evaluacionId/preguntas
app.use('/api/docente/evaluaciones/:evaluacionId/preguntas', checkDB, preguntasRoutes);
app.use('/api/docente/plantillas', checkDB, plantillasRoutes);

// Ruta de test
app.get('/api/test/test', (req, res) => {
  res.json({
    message: 'Test API funcionando correctamente',
    timestamp: new Date().toISOString(),
    database: dbConnected ? 'conectada' : 'desconectada'
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: err.message
  });
});

// Ruta no encontrada
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.originalUrl,
    available_routes: [
      '/',
      '/api/health',
      '/api/users/register',
      '/api/users/login',
      '/api/users/profile',
      '/api/test/test'
    ]
  });
});

// Inicializar base de datos en segundo plano
initDB();

// Sólo arrancar el servidor cuando este archivo es ejecutado directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('');
    console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
    console.log('🚀       INFOAPRENDE BACKEND INICIADO       🚀');
    console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
    console.log('');
    console.log(`🌐 API URL: http://localhost:${PORT}`);
    console.log(`🎯 Frontend: http://localhost:5173`);
    console.log(`📊 Estado: Funcionando (con o sin BD)`);
    console.log('');
    console.log('📝 Endpoints disponibles:');
    console.log(`   • GET  / (información general)`);
    console.log(`   • POST /api/users/register (registro)`);
    console.log(`   • POST /api/users/login (login)`);
    console.log(`   • GET  /api/users/profile (perfil)`);
    console.log(`   • GET  /api/test/test (prueba)`);
    console.log('');
    console.log('✅ ¡Listo para probar la aplicación!');
    console.log('');
  });
} else {
  // Cuando se importa el módulo (por ejemplo en tests) no arrancamos el listener
  console.log('ℹ️  INFOAPRENDE backend importado como módulo (modo test). No se inicia el listener HTTP automáticamente.');
}

// Exportar app para tests (Supertest)
module.exports = app;
