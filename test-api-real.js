const axios = require('axios');

const API_URL = 'http://localhost:4000/api';

async function testAPI() {
  console.log('🧪 Probando API de InfoAprende con Base de Datos Real');
  console.log('='.repeat(50));

  try {
    // 1. Verificar estado del servidor
    console.log('\n1. 🔍 Verificando estado del servidor...');
    const healthResponse = await axios.get(`${API_URL}/health`);
    console.log('✅ Estado:', healthResponse.data);

    // 2. Datos de prueba para el usuario
    const testUser = {
      nombre: 'Juan Pérez Test',
      email: `test${Date.now()}@infoaprende.com`,
      password: 'password123',
      grado: '5to Grado',
      rol: 'estudiante'
    };

    console.log('\n2. 📝 Registrando nuevo usuario...');
    console.log('Datos del usuario:', {
      nombre: testUser.nombre,
      email: testUser.email,
      grado: testUser.grado,
      rol: testUser.rol
    });

    const registerResponse = await axios.post(`${API_URL}/users/register`, testUser);
    console.log('✅ Registro exitoso:', registerResponse.data);

    // 3. Intentar hacer login
    console.log('\n3. 🔐 Haciendo login...');
    const loginData = {
      email: testUser.email,
      password: testUser.password
    };

    const loginResponse = await axios.post(`${API_URL}/users/login`, loginData);
    console.log('✅ Login exitoso:', {
      message: loginResponse.data.message,
      user: loginResponse.data.user
    });

    const token = loginResponse.data.token;
    console.log('🎫 Token generado (primeros 20 caracteres):', token.substring(0, 20) + '...');

    // 4. Obtener perfil del usuario
    console.log('\n4. 👤 Obteniendo perfil del usuario...');
    const profileResponse = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('✅ Perfil obtenido:', profileResponse.data);

    console.log('\n🎉 ¡Todas las pruebas fueron exitosas!');
    console.log('✅ El registro de usuario funciona correctamente con la base de datos real');
    console.log('✅ El login funciona correctamente');
    console.log('✅ La autenticación con JWT funciona');
    console.log('✅ El acceso al perfil funciona');

  } catch (error) {
    console.error('\n❌ Error durante las pruebas:');
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('URL:', error.config?.url);
    } else if (error.request) {
      console.error('No se pudo conectar al servidor:', error.message);
      console.error('¿Está el servidor ejecutándose en http://localhost:4000?');
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Ejecutar las pruebas
testAPI();
