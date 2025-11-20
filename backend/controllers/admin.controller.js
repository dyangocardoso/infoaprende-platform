// Controlador para gestión de usuarios (Panel de Administración)
const bcrypt = require('bcryptjs');

// Obtener todos los usuarios (solo administradores)
const getAllUsers = async (req, res) => {
  try {
    const users = await global.User.findAll({
      attributes: ['id', 'nombre', 'email', 'rol', 'grado', 'created_at', 'updated_at']
    });

    res.json({
      message: 'Usuarios obtenidos exitosamente',
      users: users.map(user => user.getPublicData()),
      total: users.length
    });
  } catch (error) {
    console.error('Error obteniendo usuarios:', error);
    res.status(500).json({
      error: 'Error interno del servidor',
      message: 'No se pudieron obtener los usuarios'
    });
  }
};

// Actualizar rol de usuario (solo administradores)
const updateUserRole = async (req, res) => {
  try {
    const { userId } = req.params;
    const { rol } = req.body;

    // Validar que el rol sea válido
    if (!['estudiante', 'docente', 'administrador'].includes(rol)) {
      return res.status(400).json({
        error: 'Rol inválido',
        message: 'El rol debe ser: estudiante, docente o administrador'
      });
    }

    // Buscar el usuario
    const user = await global.User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado',
        message: 'El usuario especificado no existe'
      });
    }

    // Evitar que se modifique su propio rol si es el único admin
    if (req.user.id === parseInt(userId) && rol !== 'administrador') {
      const adminCount = await User.count({ where: { rol: 'administrador' } });
      if (adminCount <= 1) {
        return res.status(400).json({
          error: 'Acción no permitida',
          message: 'No puedes cambiar tu propio rol de administrador si eres el único administrador'
        });
      }
    }

    // Actualizar el rol
    const oldRole = user.rol;
    user.rol = rol;

    // Si cambia de estudiante a docente/admin, limpiar grado
    if (['docente', 'administrador'].includes(rol)) {
      user.grado = null;
    }

    await user.save();

    res.json({
      message: 'Rol actualizado exitosamente',
      user: user.getPublicData(),
      changes: {
        from: oldRole,
        to: rol
      }
    });
  } catch (error) {
    console.error('Error actualizando rol:', error);
    res.status(500).json({
      error: 'Error interno del servidor',
      message: 'No se pudo actualizar el rol del usuario'
    });
  }
};

// Eliminar usuario (solo administradores)
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Buscar el usuario
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado',
        message: 'El usuario especificado no existe'
      });
    }

    // Evitar que se elimine a sí mismo
    if (req.user.id === parseInt(userId)) {
      return res.status(400).json({
        error: 'Acción no permitida',
        message: 'No puedes eliminar tu propia cuenta'
      });
    }

    // Evitar eliminar el último administrador
    if (user.rol === 'administrador') {
      const adminCount = await User.count({ where: { rol: 'administrador' } });
      if (adminCount <= 1) {
        return res.status(400).json({
          error: 'Acción no permitida',
          message: 'No se puede eliminar el último administrador del sistema'
        });
      }
    }

    await user.destroy();

    res.json({
      message: 'Usuario eliminado exitosamente',
      deletedUser: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol
      }
    });
  } catch (error) {
    console.error('Error eliminando usuario:', error);
    res.status(500).json({
      error: 'Error interno del servidor',
      message: 'No se pudo eliminar el usuario'
    });
  }
};

// Obtener estadísticas del sistema (solo administradores)
const getSystemStats = async (req, res) => {
  try {
    const totalUsers = await User.count();
    const studentCount = await User.count({ where: { rol: 'estudiante' } });
    const teacherCount = await User.count({ where: { rol: 'docente' } });
    const adminCount = await User.count({ where: { rol: 'administrador' } });

    // Estadísticas por grado
    const gradeStats = await User.findAll({
      where: { rol: 'estudiante', grado: { [require('sequelize').Op.not]: null } },
      attributes: ['grado', [require('sequelize').fn('COUNT', 'id'), 'count']],
      group: ['grado'],
      raw: true
    });

    res.json({
      message: 'Estadísticas obtenidas exitosamente',
      stats: {
        totalUsers,
        usersByRole: {
          estudiantes: studentCount,
          docentes: teacherCount,
          administradores: adminCount
        },
        gradeDistribution: gradeStats.map(stat => ({
          grado: stat.grado,
          estudiantes: parseInt(stat.count)
        }))
      }
    });
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    res.status(500).json({
      error: 'Error interno del servidor',
      message: 'No se pudieron obtener las estadísticas'
    });
  }
};

// Crear nuevo usuario (solo administradores)
const createUser = async (req, res) => {
  try {
    const { nombre, email, password, rol, grado } = req.body;

    // Validar campos requeridos
    if (!nombre || !email || !password || !rol) {
      return res.status(400).json({
        error: 'Datos incompletos',
        message: 'Nombre, email, contraseña y rol son obligatorios'
      });
    }

    // Validar que el rol sea válido
    const validRoles = ['estudiante', 'docente', 'administrador'];
    if (!validRoles.includes(rol)) {
      return res.status(400).json({
        error: 'Rol inválido',
        message: 'El rol debe ser: estudiante, docente o administrador'
      });
    }

    // Validar que si es estudiante, debe tener grado
    if (rol === 'estudiante' && !grado) {
      return res.status(400).json({
        error: 'Grado requerido',
        message: 'Los estudiantes deben tener un grado asignado'
      });
    }

    // Verificar que el email no esté en uso
    const existingUser = await global.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({
        error: 'Email en uso',
        message: 'Ya existe un usuario con este email'
      });
    }

    // Encriptar contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Preparar datos del usuario
    const userData = {
      nombre,
      email,
      password: hashedPassword,
      rol,
      grado: rol === 'estudiante' ? grado : null
    };

    // Crear usuario
    const user = await global.User.create(userData);

    res.status(201).json({
      success: true,
      message: `Usuario ${rol} creado exitosamente`,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
        grado: user.grado
      }
    });

  } catch (error) {
    console.error('Error creando usuario:', error);
    
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: error.errors.map(e => e.message).join(', ')
      });
    }
    
    res.status(500).json({
      error: 'Error interno del servidor',
      message: 'No se pudo crear el usuario'
    });
  }
};

module.exports = {
  getAllUsers,
  updateUserRole,
  deleteUser,
  getSystemStats,
  createUser
};
