// Script para probar la API de InfoAprende
async function probarAPI() {
  const baseURL = 'http://localhost:4000';
  
  console.log('🧪 Probando API de InfoAprende...');
  console.log('================================');
  
  try {
    // Probar endpoint principal
    console.log('1️⃣ Probando endpoint principal...');
    const response = await fetch(`${baseURL}/`);
    const data = await response.json();
    console.log('✅ Respuesta:', data.message);
    
    // Probar endpoint de test
    console.log('\n2️⃣ Probando endpoint de test...');
    const testResponse = await fetch(`${baseURL}/api/test/test`);
    const testData = await testResponse.json();
    console.log('✅ Test API:', testData.message);
    
    // Probar registro de usuario
    console.log('\n3️⃣ Probando registro de usuario...');
    const userData = {
      nombre: 'Usuario Prueba',
      email: 'prueba@infoaprende.com',
      password: '123456',
      grado: '5to Grado',
      rol: 'estudiante'
    };
    
    const registerResponse = await fetch(`${baseURL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    
    if (registerResponse.ok) {
      const registerData = await registerResponse.json();
      console.log('✅ Usuario registrado:', registerData.message);
    } else {
      const errorData = await registerResponse.json();
      console.log('ℹ️ Registro:', errorData.error || 'Usuario posiblemente ya existe');
    }
    
    // Probar login
    console.log('\n4️⃣ Probando login...');
    const loginResponse = await fetch(`${baseURL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'prueba@infoaprende.com',
        password: '123456'
      })
    });
    
    if (loginResponse.ok) {
      const loginData = await loginResponse.json();
      console.log('✅ Login exitoso para:', loginData.user?.nombre);
      
      // Probar endpoint protegido
      console.log('\n5️⃣ Probando endpoint protegido...');
      const profileResponse = await fetch(`${baseURL}/api/users/profile`, {
        headers: {
          'Authorization': `Bearer ${loginData.token}`
        }
      });
      
      if (profileResponse.ok) {
        const profileData = await profileResponse.json();
        console.log('✅ Perfil obtenido:', profileData.user?.nombre);
      }
    } else {
      const loginError = await loginResponse.json();
      console.log('❌ Error en login:', loginError.error);
    }
    
  } catch (error) {
    console.error('❌ Error probando API:', error.message);
    console.log('\n💡 Asegúrate de que el backend esté corriendo en http://localhost:4000');
  }
  
  console.log('\n🎉 Prueba completada!');
}

// Ejecutar si está en el navegador
if (typeof window !== 'undefined') {
  console.log('🌐 Ejecutando en el navegador...');
  probarAPI();
} else {
  // Ejecutar en Node.js
  const fetch = require('node-fetch');
  probarAPI();
}
