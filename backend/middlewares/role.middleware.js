function requireRole(requiredRole) {
  return (req, res, next) => {
    // No autenticado
    if (!req.user) {
      return res.status(401).json({ error: 'No autenticado' });
    }

    const userRole = req.user.role || req.user.rol || null;
    if (!userRole) {
      return res.status(403).json({ error: 'Rol no disponible' });
    }

    if (Array.isArray(requiredRole)) {
      if (!requiredRole.includes(userRole)) {
        return res.status(403).json({ error: 'Acceso denegado: rol insuficiente' });
      }
    } else {
      if (userRole !== requiredRole) {
        return res.status(403).json({ error: 'Acceso denegado: rol insuficiente' });
      }
    }

    next();
  };
}

module.exports = requireRole;
