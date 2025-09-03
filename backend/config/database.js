// Configuración de la base de datos PostgreSQL con Sequelize
const { Sequelize } = require('sequelize');

// Configurar la conexión a PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME || 'infoaprende',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

// Función para conectar y sincronizar la base de datos
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a PostgreSQL exitosamente');
    
    // En desarrollo, sincronizar modelos (¡Cuidado en producción!)
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('🔄 Modelos sincronizados con la base de datos');
    }
  } catch (error) {
    console.error('❌ Error conectando a PostgreSQL:', error);
    process.exit(1);
  }
}

// Función para cerrar la conexión
async function closeDB() {
  try {
    await sequelize.close();
    console.log('🔌 Conexión a PostgreSQL cerrada');
  } catch (error) {
    console.error('❌ Error cerrando conexión:', error);
  }
}

module.exports = {
  sequelize,
  connectDB,
  closeDB
};
