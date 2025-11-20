// Script para crear el primer usuario administrador
require('dotenv').config();
const bcrypt = require('bcryptjs');

async function createFirstAdmin() {
  try {
    // Importar la configuración de la base de datos
    const { connectDB } = require('./config/database-smart');
    const sequelizeInstance = await connectDB();
    
    // Importar y configurar el modelo de Usuario
    const defineUserModel = require('./models/user.model');
    const User = defineUserModel(sequelizeInstance);
    
    // Sincronizar el modelo
    await sequelizeInstance.sync();
    
    // Verificar si ya existe un administrador
    const existingAdmin = await User.findOne({ where: { rol: 'administrador' } });
    
    if (existingAdmin) {
      console.log('✅ Ya existe un usuario administrador en el sistema');
      console.log(`📧 Email: ${existingAdmin.email}`);
      console.log(`👤 Nombre: ${existingAdmin.nombre}`);
      process.exit(0);
    }
    
    // Datos del primer administrador
    const adminData = {
      nombre: 'Administrador Principal',
      email: 'admin@infoaprende.com',
      password: 'Admin123!',
      rol: 'administrador',
      grado: null // Los administradores no tienen grado
    };
    
    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    adminData.password = await bcrypt.hash(adminData.password, salt);
    
    // Crear el administrador
    const admin = await User.create(adminData);
    
    console.log('🎉 ¡Primer administrador creado exitosamente!');
    console.log('');
    console.log('📋 CREDENCIALES DE ACCESO:');
    console.log('┌──────────────────────────────────────┐');
    console.log('│  👤 Email: admin@infoaprende.com     │');
    console.log('│  🔑 Contraseña: Admin123!            │');
    console.log('│  🏆 Rol: Administrador               │');
    console.log('└──────────────────────────────────────┘');
    console.log('');
    console.log('⚠️  IMPORTANTE:');
    console.log('• Cambia la contraseña después del primer login');
    console.log('• Mantén estas credenciales seguras');
    console.log('• Puedes crear más administradores desde el panel');
    console.log('');
    console.log('🚀 Para acceder:');
    console.log('1. Inicia InfoAprende con: iniciar-infoaprende-completo.bat');
    console.log('2. Ve a: http://localhost:5173/login');
    console.log('3. Inicia sesión con las credenciales de arriba');
    console.log('4. Accede al Panel de Administración desde el perfil');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creando el administrador:', error);
    process.exit(1);
  }
}

// Ejecutar el script
createFirstAdmin();
