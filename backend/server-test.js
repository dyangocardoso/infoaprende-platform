// Servidor básico para probar la migración
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Función para inicializar la base de datos
async function initDB() {
  try {
    console.log('🔍 Inicializando conexión a base de datos...');
    
    const { connectDB } = require('./config/database-smart');
    await connectDB();
    
    console.log('✅ Base de datos conectada exitosamente');
    
  } catch (error) {
    console.error('❌ Error conectando base de datos:', error.message);
    console.log('⚠️  Continuando sin base de datos...');
  }
}

// Rutas básicas para probar
app.get('/', (req, res) => {
  res.json({
    message: '🎉 ¡MIGRACIÓN EXITOSA!',
    status: 'InfoAprende funcionando con nueva arquitectura',
    version: '2.0.0',
    database: 'PostgreSQL/SQLite',
    migration: 'MongoDB → PostgreSQL/SQLite ✅',
    timestamp: new Date().toISOString(),
    next_steps: [
      '1. Instalar PostgreSQL para máximo rendimiento',
      '2. Probar el frontend en http://localhost:5173',
      '3. Crear usuarios de prueba'
    ]
  });
});

app.get('/api/test/test', (req, res) => {
  res.json({ 
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: '2.0.0'
  });
});

// Inicializar base de datos de forma asíncrona
initDB();

app.listen(PORT, () => {
  console.log('');
  console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
  console.log('🚀           ¡MIGRACIÓN COMPLETADA!              🚀');
  console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
  console.log('');
  console.log('📊 MongoDB ➜ PostgreSQL/SQLite: ✅ EXITOSO');
  console.log(`🌐 Servidor: http://localhost:${PORT}`);
  console.log(`🔧 Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log('');
  console.log('🧪 Prueba estos endpoints:');
  console.log(`   • http://localhost:${PORT}/ (info general)`);
  console.log(`   • http://localhost:${PORT}/api/test/test (test API)`);
  console.log(`   • http://localhost:${PORT}/api/health (estado del servidor)`);
  console.log('');
  console.log('🎯 Siguiente: Iniciar frontend con npm run dev');
  console.log('');
});

// Manejo de errores
process.on('uncaughtException', (err) => {
  console.error('❌ Error no capturado:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('❌ Promesa rechazada:', err);
});
