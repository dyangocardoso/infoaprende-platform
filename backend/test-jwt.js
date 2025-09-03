// Prueba simplificada del JWT
const jwt = require('jsonwebtoken');

// Simular crear un token como lo hace el login
const payload = {
  id: 1,
  email: 'admin@infoaprende.com',
  rol: 'administrador'
};

const secret = process.env.JWT_SECRET || 'mi_clave_secreta_temporal';

console.log('🔍 JWT Secret:', secret);

// Crear token
const token = jwt.sign(payload, secret, { expiresIn: '24h' });
console.log('✅ Token creado:', token);

// Verificar token
try {
  const decoded = jwt.verify(token, secret);
  console.log('✅ Token verificado exitosamente:');
  console.log('   • ID:', decoded.id);
  console.log('   • Email:', decoded.email);
  console.log('   • Rol:', decoded.rol);
} catch (error) {
  console.log('❌ Error verificando token:', error.message);
}
