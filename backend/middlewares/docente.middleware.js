// Middleware sencillo para restringir acceso exclusivamente a usuarios con rol 'docente'
module.exports = function (req, res, next) {
<<<<<<< HEAD
  // Bypass en tests/desarrollo controlado por variable de entorno SKIP_AUTH o NODE_ENV=test
  if (process.env.SKIP_AUTH === 'true' || process.env.NODE_ENV === 'test') {
    return next();
  }

=======
>>>>>>> 6b73ea3f6376340add24503b140ad5ac176672e9
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
