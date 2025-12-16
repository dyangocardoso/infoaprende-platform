#!/usr/bin/env node
require('dotenv').config();
const bcrypt = require('bcryptjs');

(async () => {
  try {
    const args = process.argv.slice(2);
    const email = args[0] || 'admin@infoaprende.com';
    const newPass = args[1] || 'Admin123!';

    // Conectar a la base de datos usando la configuración existente
    const { connectDB } = require('./config/database-smart');
    const sequelize = await connectDB();

    // Definir el modelo User con la función existente
    const defineUserModel = require('./models/user.model');
    const User = defineUserModel(sequelize);

    // Asegurar que las tablas estén sincronizadas
    await sequelize.sync();

    // Buscar usuario por email
    let user = await User.findOne({ where: { email } });

    if (!user) {
      console.log(`Usuario ${email} no encontrado. Creando administrador con la contraseña proporcionada...`);
      const hashed = await bcrypt.hash(newPass, 10);
      user = await User.create({
        nombre: 'Administrador',
        email,
        password: hashed,
        rol: 'administrador',
        grado: null
      });
      console.log('✅ Administrador creado.');
    } else {
      user.password = await bcrypt.hash(newPass, 10);
      await user.save();
      console.log(`✅ Contraseña actualizada para ${email}`);
    }

    console.log('🔐 Credenciales actuales:');
    console.log(`   email: ${email}`);
    console.log(`   password: ${newPass}`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error actualizando/creando administrador:', err.message || err);
    process.exit(1);
  }
})();
