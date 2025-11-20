// Servidor de prueba simplificado
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Función de inicialización simple
async function startServer() {
  try {
    console.log('🚀 Iniciando InfoAprende Server...');
    
    // Conectar a la base de datos
    const { connectDB } = require('./config/database-smart');
    await connectDB();
    console.log('✅ Base de datos conectada');
    
    // Importar modelos
    const User = require('./models/user.model');
    console.log('✅ Modelos cargados');
    
    // Rutas básicas
    app.get('/', (req, res) => {
      res.json({
        message: '🎉 InfoAprende API funcionando',
        status: 'OK',
        database: 'Conectada',
        version: '2.0.0'
      });
    });
    
    app.get('/api/health', (req, res) => {
      res.json({
        status: 'healthy',
        database: 'connected',
        uptime: Math.floor(process.uptime()),
        timestamp: new Date().toISOString()
      });
    });
    
    // Ruta de registro simple
    app.post('/api/users/register', async (req, res) => {
      try {
        const { nombre, email, password, grado, rol } = req.body;
        
        // Verificar si el usuario ya existe
        const userExists = await User.findByEmail(email);
        if (userExists) {
          return res.status(400).json({ error: 'El usuario ya existe' });
        }
        
        // Crear el usuario
        const bcrypt = require('bcryptjs');
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const userData = {
          nombre,
          email,
          password: hashedPassword,
          rol: rol || 'estudiante'
        };
        
        if (userData.rol === 'estudiante') {
          userData.grado = grado;
        }
        
        const user = await User.create(userData);
        
        res.status(201).json({ 
          message: 'Usuario registrado correctamente',
          user: user.getPublicData()
        });
        
      } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ 
          error: 'Error interno del servidor',
          details: error.message
        });
      }
    });
    
    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`✅ Servidor funcionando en http://localhost:${PORT}`);
      console.log('📚 Endpoints disponibles:');
      console.log('  GET  / - Información del servidor');
      console.log('  GET  /api/health - Estado del servidor');
      console.log('  POST /api/users/register - Registro de usuarios');
    });
    
  } catch (error) {
    console.error('❌ Error iniciando servidor:', error);
    process.exit(1);
  }
}

startServer();
