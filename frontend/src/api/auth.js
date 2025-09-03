// Funciones de autenticación para el frontend

const API_BASE = 'http://localhost:4000';

export async function login(data) {
  try {
    console.log('🔐 Enviando petición de login a:', `${API_BASE}/api/users/login`);
    console.log('Datos:', data);
    
    const res = await fetch(`${API_BASE}/api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    console.log('Response status:', res.status);
    const result = await res.json();
    console.log('Response data:', result);
    
    return result;
  } catch (err) {
    console.error('Error en login:', err);
    return { error: 'Error de conexión' };
  }
}

export async function register(data) {
  try {
    console.log('📝 Enviando petición de registro a:', `${API_BASE}/api/users/register`);
    console.log('Datos:', data);
    
    const res = await fetch(`${API_BASE}/api/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    console.log('Response status:', res.status);
    const result = await res.json();
    console.log('Response data:', result);
    
    return result;
  } catch (err) {
    console.error('Error en registro:', err);
    return { error: 'Error de conexión' };
  }
}

export async function getProfile(token) {
  try {
    console.log('👤 Enviando petición de perfil a:', `${API_BASE}/api/users/profile`);
    
    const res = await fetch(`${API_BASE}/api/users/profile`, {
      headers: { 'Authorization': 'Bearer ' + token },
    });
    
    console.log('Response status:', res.status);
    const result = await res.json();
    console.log('Response data:', result);
    
    return result;
  } catch (err) {
    console.error('Error en perfil:', err);
    return { error: 'Error de conexión' };
  }
}
