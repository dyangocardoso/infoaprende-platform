// Servidor de emergencia para testing inmediato
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Log todas las peticiones
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Body:', req.body);
  next();
});

// Rutas
app.get('/', (req, res) => {
  res.json({
    message: '🎉 InfoAprende Test Server',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/users/register', (req, res) => {
  console.log('📝 Registro recibido:', req.body);
  const { nombre, email, password, grado, rol } = req.body;
  
  if (!nombre || !email || !password) {
    return res.status(400).json({
      error: 'Faltan campos requeridos'
    });
  }
  
  res.status(201).json({
    message: 'Usuario registrado exitosamente',
    user: {
      id: Math.floor(Math.random() * 1000),
      nombre,
      email,
      grado: grado || null,
      rol: rol || 'estudiante'
    }
  });
});

app.post('/api/users/login', (req, res) => {
  console.log('🔐 Login recibido:', req.body);
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email y contraseña requeridos'
    });
  }
  
  const jwt = require('jsonwebtoken');
  const token = jwt.sign({ id: 1, email }, 'secret', { expiresIn: '24h' });
  
  res.json({
    message: 'Login exitoso',
    token,
    user: { id: 1, nombre: 'Usuario Test', email, rol: 'estudiante' }
  });
});

app.get('/api/users/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }
  
  res.json({
    user: { id: 1, nombre: 'Usuario Test', email: 'test@test.com', rol: 'estudiante' }
  });
});

app.use('*', (req, res) => {
  console.log(`❌ Ruta no encontrada: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Ruta no encontrada', path: req.originalUrl });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Servidor test iniciado en http://localhost:${PORT}`);
  console.log('✅ Listo para recibir peticiones\n');
});

console.log('🔄 Iniciando servidor...');
