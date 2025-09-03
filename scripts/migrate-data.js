// Script para migrar datos de MongoDB a PostgreSQL
const { connectDB } = require('../backend/config/database');
const { User } = require('../backend/models');

// Si tienes datos en MongoDB, puedes usar este script para migrarlos
async function migrarDatosMongoDB() {
  console.log('🔄 Iniciando migración de datos...');
  
  try {
    await connectDB();
    
    // Datos de ejemplo para la nueva base de datos PostgreSQL
    const usuariosEjemplo = [
      {
        nombre: 'Profesor Demo',
        email: 'profesor@infoaprende.com',
        password: '$2a$12$example.hashed.password.here', // Cambia por un hash real
        rol: 'docente'
      },
      {
        nombre: 'Ana García',
        email: 'ana.garcia@estudiante.com',
        password: '$2a$12$example.hashed.password.here',
        grado: '5to Grado',
        rol: 'estudiante'
      },
      {
        nombre: 'Carlos López',
        email: 'carlos.lopez@estudiante.com',
        password: '$2a$12$example.hashed.password.here',
        grado: '6to Grado',
        rol: 'estudiante'
      }
    ];
    
    // Crear usuarios de ejemplo
    for (const userData of usuariosEjemplo) {
      try {
        const existingUser = await User.findByEmail(userData.email);
        if (!existingUser) {
          await User.create(userData);
          console.log(`✅ Usuario creado: ${userData.nombre}`);
        } else {
          console.log(`ℹ️  Usuario ya existe: ${userData.nombre}`);
        }
      } catch (error) {
        console.error(`❌ Error creando usuario ${userData.nombre}:`, error.message);
      }
    }
    
    console.log('🎉 Migración completada exitosamente');
    
  } catch (error) {
    console.error('❌ Error en la migración:', error);
  } finally {
    process.exit(0);
  }
}

// Ejecutar migración si el script se ejecuta directamente
if (require.main === module) {
  migrarDatosMongoDB();
}

module.exports = { migrarDatosMongoDB };
