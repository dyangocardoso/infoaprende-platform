const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ValidationError, UniqueConstraintError } = require('sequelize');

exports.register = async (req, res) => {
  try {
    const { nombre, email, password, grado, rol } = req.body;
    
    // Usar el modelo global
    const User = global.User;
    if (!User) {
      return res.status(503).json({ error: 'Base de datos no inicializada' });
    }
    
    // Verificar si el usuario ya existe
    const userExists = await User.findByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }
    
    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Crear el usuario
    const userData = {
      nombre,
      email,
      password: hashedPassword,
      rol: rol || 'estudiante'
    };
    
    // Solo agregar grado si es estudiante
    if (userData.rol === 'estudiante') {
      userData.grado = grado;
    }
    
    const user = await User.create(userData);
    
    res.status(201).json({ 
      message: 'Usuario registrado correctamente',
      user: user.getPublicData()
    });
    
  } catch (err) {
    console.error('Error en registro:', err);
    
    if (err instanceof ValidationError) {
      return res.status(400).json({ 
        error: 'Datos de registro inválidos',
        details: err.errors.map(e => e.message)
      });
    }
    
    if (err instanceof UniqueConstraintError) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }
    
    res.status(500).json({ error: 'Error interno del servidor al registrar usuario' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Usar el modelo global
    const User = global.User;
    if (!User) {
      return res.status(503).json({ error: 'Base de datos no inicializada' });
    }
    
    // Buscar usuario por email
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    
    // Verificar contraseña
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    
    // Generar token JWT
    const tokenPayload = {
      id: user.id,
      email: user.email,
      rol: user.rol,
      grado: user.grado
    };
    
    const token = jwt.sign(
      tokenPayload, 
      process.env.JWT_SECRET || 'mi_clave_secreta_temporal', 
      { expiresIn: '24h' }
    );
    
    res.json({ 
      token,
      user: user.getPublicData(),
      message: 'Inicio de sesión exitoso'
    });
    
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ error: 'Error interno del servidor al iniciar sesión' });
  }
};
