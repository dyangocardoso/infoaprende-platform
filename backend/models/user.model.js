// Modelo de Usuario para PostgreSQL/SQLite con Sequelize
const { DataTypes } = require('sequelize');

function defineUserModel(sequelizeInstance) {
  const User = sequelizeInstance.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 255]
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [6, 255]
    }
  },
  grado: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: {
      isValidGrade(value) {
        if (this.rol === 'estudiante' && !value) {
          throw new Error('El grado es obligatorio para estudiantes');
        }
      }
    }
  },
  rol: {
    type: DataTypes.ENUM('estudiante', 'docente', 'administrador'),
    defaultValue: 'estudiante',
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  indexes: [
    {
      unique: true,
      fields: ['email']
    },
    {
      fields: ['rol']
    }
  ],
  hooks: {
    beforeValidate: (user, options) => {
      // Si es docente, no necesita grado
      if (user.rol === 'docente') {
        user.grado = null;
      }
    }
  }
});

  // Método de instancia para obtener datos públicos del usuario
  User.prototype.getPublicData = function() {
    return {
      id: this.id,
      nombre: this.nombre,
      email: this.email,
      grado: this.grado,
      rol: this.rol,
      created_at: this.created_at,
      updated_at: this.updated_at
    };
  };

  // Método estático para buscar por email
  User.findByEmail = function(email) {
    return this.findOne({ where: { email } });
  };

  return User;
}

module.exports = defineUserModel;
