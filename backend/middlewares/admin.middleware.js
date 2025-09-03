// Middleware para verificar rol de administrador
const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Verificar si el usuario es administrador
const requireAdmin = async (req, res, next) => {
  try {
    console.log('🔍 Admin middleware - Authorization header:', req.headers.authorization);
    const token = req.headers.authorization?.replace('Bearer ', '');
    console.log('🔍 Admin middleware - Token extracted:', token ? 'Token present' : 'No token');
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Token de acceso requerido',
        message: 'Debe iniciar sesión para realizar esta acción'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'mi_clave_secreta_temporal');
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(404).json({ 
        error: 'Usuario no encontrado',
        message: 'El usuario asociado al token no existe'
      });
    }

    if (user.rol !== 'administrador') {
      return res.status(403).json({ 
        error: 'Acceso denegado',
        message: 'Solo los administradores pueden realizar esta acción'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ 
      error: 'Token inválido',
      message: 'El token de acceso es inválido o ha expirado'
    });
  }
};

// Verificar si el usuario es administrador o docente
const requireAdminOrTeacher = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Token de acceso requerido',
        message: 'Debe iniciar sesión para realizar esta acción'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'mi_clave_secreta_temporal');
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(404).json({ 
        error: 'Usuario no encontrado',
        message: 'El usuario asociado al token no existe'
      });
    }

    if (!['administrador', 'docente'].includes(user.rol)) {
      return res.status(403).json({ 
        error: 'Acceso denegado',
        message: 'Solo administradores y docentes pueden realizar esta acción'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ 
      error: 'Token inválido',
      message: 'El token de acceso es inválido o ha expirado'
    });
  }
};

module.exports = {
  requireAdmin,
  requireAdminOrTeacher
};
