import React, { useState, useEffect } from 'react';
import { login, register, getProfile } from './api/auth';

export default function AuthDemo() {
  const [form, setForm] = useState({ email: '', password: '', nombre: '', grado: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Verificar si el usuario ya está logueado al cargar el componente
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verificar si el token es válido
      getProfile(token).then(res => {
        if (res.user) {
          // Si el token es válido, redirigir al perfil
          window.location.replace('/perfil');
        } else {
          // Si el token no es válido, eliminarlo y permitir el acceso
          localStorage.removeItem('token');
          setIsLoading(false);
        }
      }).catch(() => {
        // En caso de error, eliminar token y permitir acceso
        localStorage.removeItem('token');
        setIsLoading(false);
      });
    } else {
      // No hay token, permitir acceso
      setIsLoading(false);
    }
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    if (isLogin) {
      const res = await login({ email: form.email, password: form.password });
      if (res.token) {
        localStorage.setItem('token', res.token);
        setMsg('Login exitoso');
        window.location.replace('/perfil');
      } else {
        setMsg(res.error || 'Error al iniciar sesión');
      }
    } else {
      // Registro: asignar automáticamente rol de estudiante
      const data = { ...form, rol: 'estudiante' };
      const res = await register(data);
      if (res.message && !res.error) {
        setMsg('Registro exitoso, ahora puedes iniciar sesión');
        setIsLogin(true);
      } else {
        setMsg(res.error || 'Error al registrarse');
      }
    }
  };

  // Mostrar pantalla de carga mientras se verifica la sesión
  if (isLoading) {
    return (
      <div style={{
        maxWidth: 420,
        margin: '2rem auto',
        padding: 32,
        borderRadius: 18,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        background: '#fff',
        border: '1px solid #e0e0e0',
        fontFamily: 'Segoe UI, sans-serif',
        textAlign: 'center'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 16 
        }}>
          <div style={{
            width: 40,
            height: 40,
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #1976d2',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ color: '#666', margin: 0 }}>
            Verificando sesión...
          </p>
        </div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: 420,
      margin: '2rem auto',
      padding: 32,
      borderRadius: 18,
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      background: '#fff',
      border: '1px solid #e0e0e0',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24, color: '#1976d2', letterSpacing: 1 }}>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {!isLogin && (
          <input
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
            style={{ borderRadius: 8, border: '1px solid #ccc', padding: 10 }}
          />
        )}
        <input
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          type="email"
          style={{ borderRadius: 8, border: '1px solid #ccc', padding: 10 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          style={{ borderRadius: 8, border: '1px solid #ccc', padding: 10 }}
        />
        {!isLogin && (
          <select
            name="grado"
            value={form.grado}
            onChange={handleChange}
            required
            style={{ 
              borderRadius: 8, 
              border: '1px solid #ccc', 
              padding: 10,
              borderColor: !form.grado ? '#d32f2f' : '#ccc',
              background: !form.grado ? '#ffebee' : '#fff' 
            }}
          >
            <option value="">Selecciona tu grado</option>
            
            {/* Educación Básica */}
            <optgroup label="📚 Educación Básica">
              <option value="1° Básica">1° Básica</option>
              <option value="2° Básica">2° Básica</option>
              <option value="3° Básica">3° Básica</option>
              <option value="4° Básica">4° Básica</option>
              <option value="5° Básica">5° Básica</option>
              <option value="6° Básica">6° Básica</option>
              <option value="7° Básica">7° Básica</option>
            </optgroup>
            
            {/* Educación Media */}
            <optgroup label="🎓 Educación Media">
              <option value="8° Básica">8° Básica</option>
              <option value="9° Básica">9° Básica</option>
              <option value="10° Básica">10° Básica</option>
            </optgroup>
            
            {/* Bachillerato */}
            <optgroup label="🏆 Bachillerato">
              <option value="1° Bachillerato">1° Bachillerato</option>
              <option value="2° Bachillerato">2° Bachillerato</option>
              <option value="3° Bachillerato">3° Bachillerato</option>
            </optgroup>
          </select>
        )}
        {!isLogin && !form.grado && (
          <span style={{ color: '#d32f2f', fontSize: 13, marginTop: -10, marginBottom: 6 }}>
            Por favor selecciona tu grado académico
          </span>
        )}
        <button
          type="submit"
          style={{
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '12px 0',
            fontWeight: 600,
            fontSize: 16,
            marginTop: 8,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(25,118,210,0.08)'
          }}
        >
          {isLogin ? 'Entrar' : 'Registrar'}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{
          marginTop: 18,
          background: 'none',
          color: '#1976d2',
          border: 'none',
          fontWeight: 500,
          cursor: 'pointer',
          textDecoration: 'underline',
          fontSize: 15
        }}
      >
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
      {msg && (
        <div style={{
          marginTop: 16,
          color: msg.includes('exitoso') ? '#388e3c' : '#d32f2f',
          background: msg.includes('exitoso') ? '#e8f5e9' : '#ffebee',
          borderRadius: 8,
          padding: 10,
          textAlign: 'center',
          fontWeight: 500
        }}>{msg}</div>
      )}
    </div>
  );
}
