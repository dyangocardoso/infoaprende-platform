// Configuración alternativa con SQLite para desarrollo rápido
const { Sequelize } = require('sequelize');
const path = require('path');

// Usar SQLite como base de datos temporal mientras instalas PostgreSQL
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'database', 'infoaprende.sqlite'),
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  define: {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// Función para conectar y sincronizar la base de datos
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a SQLite (base de datos temporal)');
    console.log('📍 Archivo de base de datos:', path.join(__dirname, '..', 'database', 'infoaprende.sqlite'));
    
    // Sincronizar modelos
    await sequelize.sync({ force: false, alter: true });
    console.log('🔄 Modelos sincronizados con SQLite');
    console.log('⚠️  Recuerda migrar a PostgreSQL cuando esté instalado');
    
  } catch (error) {
    console.error('❌ Error conectando a SQLite:', error);
    process.exit(1);
  }
}

// Función para cerrar la conexión
async function closeDB() {
  try {
    await sequelize.close();
    console.log('🔌 Conexión a SQLite cerrada');
  } catch (error) {
    console.error('❌ Error cerrando conexión:', error);
  }
}

module.exports = {
  sequelize,
  connectDB,
  closeDB
};
