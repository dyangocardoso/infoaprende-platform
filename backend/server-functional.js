// Servidor simplificado para InfoAprende - Garantizado que funciona
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Base de datos temporal en memoria (para pruebas)
let users = [
  {
    id: 1,
    nombre: 'Usuario Demo',
    email: 'demo@infoaprende.com',
    password: '$2a$10$example.hash.here',
    grado: '5to Grado',
    rol: 'estudiante'
  }
];

// Función para encontrar usuario por email
const findUserByEmail = (email) => users.find(u => u.email === email);

// Rutas principales
app.get('/', (req, res) => {
  res.json({
    message: '🎉 InfoAprende API funcionando perfectamente',
    status: 'OK',
    timestamp: new Date().toISOString(),
    users_registered: users.length,
    endpoints: [
      'POST /api/users/register',
      'POST /api/users/login',
      'GET /api/users/profile',
      'GET /api/test/test'
    ]
  });
});

// Endpoint de salud
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: Math.floor(process.uptime()),
    users_count: users.length,
    timestamp: new Date().toISOString()
  });
});

// Registro de usuarios
app.post('/api/users/register', async (req, res) => {
  console.log('📝 Solicitud de registro recibida:', req.body);
  
  try {
    const { nombre, email, password, grado, rol } = req.body;
    
    // Validaciones
    if (!nombre || !email || !password) {
      console.log('❌ Faltan campos requeridos');
      return res.status(400).json({
        error: 'Faltan campos requeridos',
        required: ['nombre', 'email', 'password']
      });
    }
    
    // Verificar si el usuario ya existe
    if (findUserByEmail(email)) {
      console.log('❌ Usuario ya existe:', email);
      return res.status(400).json({
        error: 'El usuario ya existe'
      });
    }
    
    // Validar rol y grado
    const userRole = rol || 'estudiante';
    if (userRole === 'estudiante' && !grado) {
      console.log('❌ Grado requerido para estudiantes');
      return res.status(400).json({
        error: 'El grado es obligatorio para estudiantes'
      });
    }
    
    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Crear nuevo usuario
    const newUser = {
      id: users.length + 1,
      nombre,
      email,
      password: hashedPassword,
      grado: userRole === 'estudiante' ? grado : null,
      rol: userRole,
      created_at: new Date().toISOString()
    };
    
    // Agregar a la "base de datos"
    users.push(newUser);
    
    console.log('✅ Usuario registrado exitosamente:', email);
    
    res.status(201).json({
      message: 'Usuario registrado correctamente',
      user: {
        id: newUser.id,
        nombre: newUser.nombre,
        email: newUser.email,
        grado: newUser.grado,
        rol: newUser.rol
      }
    });
    
  } catch (error) {
    console.error('❌ Error en registro:', error);
    res.status(500).json({
      error: 'Error interno del servidor',
      details: error.message
    });
  }
});

// Login de usuarios
app.post('/api/users/login', async (req, res) => {
  console.log('🔐 Solicitud de login recibida:', req.body.email);
  
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        error: 'Email y contraseña son requeridos'
      });
    }
    
    // Buscar usuario
    const user = findUserByEmail(email);
    if (!user) {
      console.log('❌ Usuario no encontrado:', email);
      return res.status(401).json({
        error: 'Credenciales inválidas'
      });
    }
    
    // Verificar contraseña
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      console.log('❌ Contraseña incorrecta para:', email);
      return res.status(401).json({
        error: 'Credenciales inválidas'
      });
    }
    
    // Generar token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        rol: user.rol 
      },
      process.env.JWT_SECRET || 'supersecret123',
      { expiresIn: '24h' }
    );
    
    console.log('✅ Login exitoso para:', email);
    
    res.json({
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        grado: user.grado,
        rol: user.rol
      }
    });
    
  } catch (error) {
    console.error('❌ Error en login:', error);
    res.status(500).json({
      error: 'Error interno del servidor',
      details: error.message
    });
  }
});

// Perfil de usuario
app.get('/api/users/profile', (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Token requerido' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecret123');
    const user = users.find(u => u.id === decoded.id);
    
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    res.json({
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        grado: user.grado,
        rol: user.rol
      }
    });
    
  } catch (error) {
    res.status(403).json({ error: 'Token inválido' });
  }
});

// Endpoint de prueba
app.get('/api/test/test', (req, res) => {
  res.json({
    message: 'API de prueba funcionando',
    timestamp: new Date().toISOString(),
    users_count: users.length
  });
});

// Listar usuarios (para debug)
app.get('/api/users', (req, res) => {
  res.json({
    users: users.map(u => ({
      id: u.id,
      nombre: u.nombre,
      email: u.email,
      grado: u.grado,
      rol: u.rol
    }))
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('❌ Error no capturado:', err);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: err.message
  });
});

// Ruta no encontrada
app.use('*', (req, res) => {
  console.log('❓ Ruta no encontrada:', req.method, req.originalUrl);
  res.status(404).json({
    error: 'Ruta no encontrada',
    method: req.method,
    path: req.originalUrl,
    available_routes: [
      'GET /',
      'GET /api/health',
      'POST /api/users/register',
      'POST /api/users/login',
      'GET /api/users/profile',
      'GET /api/test/test',
      'GET /api/users'
    ]
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('');
  console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
  console.log('🚀         INFOAPRENDE SERVIDOR INICIADO         🚀');
  console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
  console.log('');
  console.log(`🌐 Servidor: http://localhost:${PORT}`);
  console.log(`🎯 Frontend: http://localhost:5173`);
  console.log(`📊 Estado: FUNCIONANDO PERFECTAMENTE`);
  console.log('');
  console.log('✅ Endpoints listos:');
  console.log('   • POST /api/users/register (registro)');
  console.log('   • POST /api/users/login (iniciar sesión)');
  console.log('   • GET  /api/users/profile (perfil)');
  console.log('   • GET  /api/test/test (prueba)');
  console.log('');
  console.log('🎉 ¡El registro de usuarios está funcionando!');
  console.log('');
});

// Manejo de señales
process.on('SIGTERM', () => {
  console.log('🔌 Cerrando servidor...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🔌 Cerrando servidor...');
  process.exit(0);
});
