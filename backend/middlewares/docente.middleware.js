// Middleware sencillo para restringir acceso exclusivamente a usuarios con rol 'docente'
module.exports = function (req, res, next) {
  // Se asume que un middleware de autenticación previo ha poblado req.user
  if (!req.user) {
    return res.status(401).json({ message: 'No autenticado' });
  }

  // Normalizar la propiedad de rol y verificar
  const userRole = req.user.role || req.user.rol || req.user.rol_usuario || null;
  if (userRole !== 'docente') {
    return res.status(403).json({ message: 'Acceso permitido solo a usuarios con rol docente' });
  }
  next();
};
