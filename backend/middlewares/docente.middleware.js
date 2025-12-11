// Middleware sencillo para restringir acceso exclusivamente a usuarios con rol 'docente'
module.exports = function (req, res, next) {
  // Bypass controlado únicamente por la variable de entorno SKIP_AUTH
  if (process.env.SKIP_AUTH === 'true') {
    return next();
  }

  // Se asume que un middleware de autenticación previo ha poblado req.user
  if (!req.user) {
    return res.status(401).json({ error: { message: 'No autenticado' } });
  }

  // Normalizar la propiedad de rol y verificar
  const userRole = req.user.role || req.user.rol || req.user.rol_usuario || null;
  if (userRole !== 'docente') {
    return res.status(403).json({ error: { message: 'Acceso permitido solo a usuarios con rol docente' } });
  }
  next();
};
