function requireRole(requiredRole) {
  return (req, res, next) => {
    // No autenticado
    if (!req.user) {
      const msg = 'No autenticado';
      return res.status(401).json({ message: msg, error: { message: msg } });
    }

    const userRole = req.user.role || req.user.rol || null;
    if (!userRole) {
      const msg = 'Rol no disponible';
      return res.status(403).json({ message: msg, error: { message: msg } });
    }

    if (Array.isArray(requiredRole)) {
      if (!requiredRole.includes(userRole)) {
        const msg = 'Acceso denegado: rol insuficiente';
        return res.status(403).json({ message: msg, error: { message: msg } });
      }
    } else {
      if (userRole !== requiredRole) {
        const msg = 'Acceso denegado: rol insuficiente';
        return res.status(403).json({ message: msg, error: { message: msg } });
      }
    }

    next();
  };
}

module.exports = requireRole;
