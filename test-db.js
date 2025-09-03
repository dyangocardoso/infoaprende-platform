// Test de conexión simple
require('dotenv').config();

async function testConnection() {
  try {
    console.log('🔍 Probando conexión...');
    
    // Conectar a la base de datos
    const { connectDB } = require('./backend/config/database-smart');
    await connectDB();
    
    // Importar modelo
    const User = require('./backend/models/user.model');
    
    console.log('✅ Conexión y modelo cargados exitosamente');
    
    // Probar creación de usuario
    const testUser = {
      nombre: 'Test User',
      email: `test${Date.now()}@example.com`,
      password: 'hashedpassword123',
      grado: '5to Grado',
      rol: 'estudiante'
    };
    
    console.log('🧪 Creando usuario de prueba...');
    const user = await User.create(testUser);
    console.log('✅ Usuario creado:', user.getPublicData());
    
    // Buscar usuario por email
    console.log('🔍 Buscando usuario por email...');
    const foundUser = await User.findByEmail(testUser.email);
    console.log('✅ Usuario encontrado:', foundUser.getPublicData());
    
    console.log('\n🎉 ¡Prueba de base de datos exitosa!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
  }
  
  process.exit();
}

testConnection();
