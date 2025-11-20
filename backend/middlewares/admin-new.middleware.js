// Middleware mejorado para administración
const jwt = require('jsonwebtoken');

const requireAdmin = async (req, res, next) => {
  try {
    // Extraer token del header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Token requerido',
        message: 'Se requiere un token de autorización'
      });
    }

    const token = authHeader.slice(7); // Remover 'Bearer '
    
    // Verificar token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'mi_clave_secreta_temporal');
    } catch (jwtError) {
      return res.status(401).json({
        error: 'Token inválido',
        message: 'Token malformado o expirado'
      });
    }

    // Buscar usuario usando el modelo global
    const user = await global.User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado',
        message: 'El usuario del token no existe'
      });
    }

    // Verificar rol de administrador
    if (user.rol !== 'administrador') {
      return res.status(403).json({
        error: 'Acceso denegado',
        message: 'Se requieren permisos de administrador'
      });
    }

    // Agregar usuario al request
    req.user = user;
    next();

  } catch (error) {
    console.error('Error en middleware admin:', error);
    res.status(500).json({
      error: 'Error interno',
      message: 'Error procesando la autenticación'
    });
  }
};

module.exports = { requireAdmin };
