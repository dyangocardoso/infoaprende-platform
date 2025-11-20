// Funciones de autenticación para el frontend
// Usar rutas relativas por defecto para aprovechar el proxy Nginx en Docker/producción.
// Si necesitas apuntar a una URL externa en despliegues específicos, puedes usar Vite env var VITE_API_URL.
import api from './client';

export async function login(data) {
  try {
    const res = await api.post('/api/users/login', data, { requireAuth: false });
    return res.data;
  } catch (err) {
    console.error('Error en login:', err);
    return { error: 'Error de conexión' };
  }
}

export async function register(data) {
  try {
    const res = await api.post('/api/users/register', data, { requireAuth: false });
    return res.data;
  } catch (err) {
    console.error('Error en registro:', err);
    return { error: 'Error de conexión' };
  }
}

export async function getProfile(token) {
  try {
    // El helper añade Authorization automáticamente desde localStorage
    const res = await api.get('/api/users/profile');
    return res.data;
  } catch (err) {
    console.error('Error en perfil:', err);
    return { error: 'Error de conexión' };
  }
}
