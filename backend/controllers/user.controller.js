// Controlador para usuarios con PostgreSQL

exports.getAllUsers = async (req, res) => {
  try {
    // Usar el modelo global
    const User = global.User;
    if (!User) {
      return res.status(503).json({ error: 'Base de datos no inicializada' });
    }
    
    const { page = 1, limit = 10, rol, search } = req.query;
    const offset = (page - 1) * limit;
    
    // Construir condiciones de búsqueda
    const whereConditions = {};
    
    if (rol) {
      whereConditions.rol = rol;
    }
    
    if (search) {
      whereConditions[Op.or] = [
        { nombre: { [Op.iLike]: `%${search}%` } },
        { email: { [Op.iLike]: `%${search}%` } }
      ];
    }
    
    const { count, rows: users } = await User.findAndCountAll({
      where: whereConditions,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['created_at', 'DESC']],
      attributes: { exclude: ['password'] } // No incluir contraseña
    });
    
    res.json({
      users: users.map(user => user.getPublicData()),
      pagination: {
        current_page: parseInt(page),
        total_pages: Math.ceil(count / limit),
        total_users: count,
        per_page: parseInt(limit)
      }
    });
    
  } catch (err) {
    console.error('Error obteniendo usuarios:', err);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Curso,
          as: 'cursosImpartidos',
          where: { activo: true },
          required: false
        },
        {
          model: ProgresoUsuario,
          as: 'progresos',
          include: [
            {
              model: Curso,
              as: 'curso'
            }
          ]
        }
      ]
    });
    
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    res.json({ user: user.getPublicData() });
    
  } catch (err) {
    console.error('Error obteniendo usuario:', err);
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, grado, rol } = req.body;
    
    // Verificar que el usuario existe
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Verificar permisos (solo el propio usuario o un docente puede actualizar)
    if (req.user.id !== parseInt(id) && req.user.rol !== 'docente') {
      return res.status(403).json({ error: 'No tienes permisos para actualizar este usuario' });
    }
    
    // Actualizar datos
    const updateData = {};
    if (nombre) updateData.nombre = nombre;
    if (grado && rol !== 'docente') updateData.grado = grado;
    if (rol && req.user.rol === 'docente') updateData.rol = rol;
    
    await user.update(updateData);
    
    res.json({
      message: 'Usuario actualizado correctamente',
      user: user.getPublicData()
    });
    
  } catch (err) {
    console.error('Error actualizando usuario:', err);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Solo docentes pueden eliminar usuarios
    if (req.user.rol !== 'docente') {
      return res.status(403).json({ error: 'Solo los docentes pueden eliminar usuarios' });
    }
    
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    await user.destroy();
    
    res.json({ message: 'Usuario eliminado correctamente' });
    
  } catch (err) {
    console.error('Error eliminando usuario:', err);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    // Usar el modelo global
    const User = global.User;
    if (!User) {
      return res.status(503).json({ error: 'Base de datos no inicializada' });
    }
    
    const userId = req.user.id;
    
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] }
    });
    
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    res.json({ 
      user: user.getPublicData(),
      message: 'Perfil obtenido correctamente'
    });
    
  } catch (err) {
    console.error('Error obteniendo perfil:', err);
    res.status(500).json({ error: 'Error al obtener perfil del usuario' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    // Usar el modelo global
    const User = global.User;
    if (!User) {
      return res.status(503).json({ error: 'Base de datos no inicializada' });
    }
    
    const userId = req.user.id;
    const { nombre, email, grado } = req.body;
    
    // Buscar el usuario
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Validar que el email no esté en uso por otro usuario
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'El email ya está en uso por otro usuario' });
      }
    }
    
    // Preparar datos de actualización
    const updateData = {};
    if (nombre && nombre.trim()) updateData.nombre = nombre.trim();
    if (email && email.trim()) updateData.email = email.trim();
    
    // Solo permitir actualizar grado si es estudiante
    if (user.rol === 'estudiante' && grado !== undefined) {
      updateData.grado = grado.trim() || null;
    }
    
    // Actualizar usuario
    await user.update(updateData);
    
    // Recargar usuario con datos actualizados
    await user.reload();
    
    res.json({
      message: 'Perfil actualizado correctamente',
      user: user.getPublicData()
    });
    
  } catch (err) {
    console.error('Error actualizando perfil:', err);
    
    // Manejar errores de validación de Sequelize
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Datos inválidos',
        details: err.errors.map(e => e.message)
      });
    }
    
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }
    
    res.status(500).json({ error: 'Error al actualizar el perfil' });
  }
};

exports.changePassword = async (req, res) => {
  try {
    // Usar el modelo global
    const User = global.User;
    if (!User) {
      return res.status(503).json({ error: 'Base de datos no inicializada' });
    }
    
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;
    
    // Validar que se proporcionen las contraseñas
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Se requiere la contraseña actual y la nueva' });
    }
    
    // Validar longitud de la nueva contraseña
    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'La nueva contraseña debe tener al menos 6 caracteres' });
    }
    
    // Buscar el usuario
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Verificar la contraseña actual
    const bcrypt = require('bcryptjs');
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'La contraseña actual es incorrecta' });
    }
    
    // Encriptar la nueva contraseña
    const saltRounds = 10;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
    
    // Actualizar la contraseña
    await user.update({ password: hashedNewPassword });
    
    res.json({
      message: 'Contraseña actualizada correctamente'
    });
    
  } catch (err) {
    console.error('Error cambiando contraseña:', err);
    res.status(500).json({ error: 'Error al cambiar la contraseña' });
  }
};
