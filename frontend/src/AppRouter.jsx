import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import AuthDemo from './AuthDemo';
import Perfil from './pages/Perfil';
import PanelAdmin from './pages/PanelAdmin';
import { getProfile } from './api/auth';

// Importar componentes de cursos
import NocionesComputador from './pages/cursos/NocionesComputador';
import IntroInformatica from './pages/cursos/IntroInformatica';
import IntroWindows from './pages/cursos/IntroWindows';
import Paint from './pages/cursos/Paint';
import Paint3D from './pages/cursos/Paint3D';
import Word from './pages/cursos/Word';
import PowerPoint from './pages/cursos/PowerPoint';
import Excel from './pages/cursos/Excel';
import LeccionTema from './pages/cursos/LeccionTema';

// Importar componentes de evaluaciones
import Quiz from './pages/evaluaciones/Quiz';

// Importar componentes de contenido teórico
import ContenidoTeorico from './pages/contenido/ContenidoTeorico';

function NavBar() {
  const location = window.location.pathname;
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    if (token) {
      getProfile(token).then(res => {
        if (res.user) setUser(res.user);
        else setUser(null);
      });
    } else {
      setUser(null);
    }
  }, [token]);

  const navStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
    padding: '16px 24px',
    marginBottom: 32,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(25,118,210,0.15)',
    fontFamily: 'Segoe UI, sans-serif',
    position: 'relative',
    minHeight: '60px'
  };

  const leftSection = {
    display: 'flex',
    alignItems: 'center',
    gap: 32
  };

  const rightSection = {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    minWidth: '200px',
    justifyContent: 'flex-end'
  };

  const linkStyle = isActive => ({
    color: isActive ? '#ffd600' : '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 18,
    padding: '8px 20px',
    borderRadius: 8,
    background: isActive ? 'rgba(255,214,0,0.15)' : 'transparent',
    transition: 'all 0.3s ease',
    border: isActive ? '2px solid #ffd600' : '2px solid transparent',
    whiteSpace: 'nowrap'
  });

  const userInfoStyle = {
    color: '#fff',
    fontWeight: 500,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    background: 'rgba(255,255,255,0.1)',
    padding: '8px 16px',
    borderRadius: 20,
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)'
  };

  const roleBadge = {
    background: 'linear-gradient(135deg, #ffd600 0%, #ffb300 100%)',
    color: '#1976d2',
    borderRadius: 12,
    padding: '4px 12px',
    fontWeight: 700,
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 8px rgba(255,214,0,0.3)'
  };

  return (
    <nav style={navStyle}>
      <div style={leftSection}>
        <Link to="/" style={linkStyle(location === '/')}>🏠 Inicio</Link>
        <Link to="/login" style={linkStyle(location === '/login')}>🔐 Registro / Login</Link>
        <Link to="/perfil" style={linkStyle(location === '/perfil')}>👤 Perfil</Link>
      </div>
      
      {user && (
        <div style={rightSection}>
          <div style={userInfoStyle}>
            <span style={roleBadge}>
              {user.rol === 'estudiante' ? '🎓 Estudiante' : 
               user.rol === 'docente' ? '👨‍🏫 Docente' : '🛡️ Administrador'}
            </span>
            {user.nombre && (
              <span style={{ 
                fontWeight: 600, 
                maxWidth: '150px', 
                overflow: 'hidden', 
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {user.nombre}
              </span>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthDemo />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/panel-admin" element={<PanelAdmin />} />
        
        {/* Rutas de cursos */}
        <Route path="/curso/nociones-computador" element={<NocionesComputador />} />
        <Route path="/curso/intro-informatica" element={<IntroInformatica />} />
        <Route path="/curso/intro-windows" element={<IntroWindows />} />
        <Route path="/curso/paint" element={<Paint />} />
        <Route path="/curso/paint-3d" element={<Paint3D />} />
        <Route path="/curso/word" element={<Word />} />
        <Route path="/curso/powerpoint" element={<PowerPoint />} />
        <Route path="/curso/excel" element={<Excel />} />
        
        {/* Rutas de lecciones individuales */}
        <Route path="/leccion/:cursoId/:temaId" element={<LeccionTema />} />
        
        {/* Rutas de evaluaciones */}
        <Route path="/quiz/:cursoId/:temaId" element={<Quiz />} />
        
        {/* Rutas de contenido teórico */}
        <Route path="/contenido/:cursoId/:temaId" element={<ContenidoTeorico />} />
        <Route path="/contenido/:cursoId/:temaId/:seccionId" element={<ContenidoTeorico />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
