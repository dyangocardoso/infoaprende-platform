const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Bypass de autenticación en entorno de desarrollo/tests
  if (process.env.SKIP_AUTH === 'true') {
    req.user = { id: 1, email: 'admin@infoaprende.com', rol: 'administrador', role: 'administrador' };
    return next();
  }
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET || 'default-secret', (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    // Normalizar propiedades: algunos controladores/middlewares usan 'role', otros 'rol'
    req.user = decoded || {};
    // mapear 'rol' <-> 'role'
    if (decoded && decoded.rol && !decoded.role) {
      req.user.role = decoded.rol;
    }
    if (decoded && decoded.role && !decoded.rol) {
      req.user.rol = decoded.role;
    }
    next();
  });
};

module.exports = {
  verifyToken
};
