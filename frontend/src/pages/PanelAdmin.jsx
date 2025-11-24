import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import TemarioForm from '../components/TemarioForm';

export default function PanelAdmin() {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState('');
  const [activeTab, setActiveTab] = useState('users');
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState('');

  // Estados para crear usuario
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createForm, setCreateForm] = useState({ nombre: '', email: '', password: '', rol: 'docente', grado: '' });
  const [createLoading, setCreateLoading] = useState(false);

  // Estados para crear temario
  const [temarioForm, setTemarioForm] = useState({ titulo: '', descripcion: '', nivel: '' });
  const [showTemarioForm, setShowTemarioForm] = useState(false);
  const [temarioLoading, setTemarioLoading] = useState(false);
  const [temarios, setTemarios] = useState([]);
  const [temariosLoading, setTemariosLoading] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewModalHtml, setPreviewModalHtml] = useState(null);
  // Estado para mostrar helper al hacer hover sobre el botón Crear Temario
  const [showTemarioHelperHover, setShowTemarioHelperHover] = useState(false);

  const token = localStorage.getItem('token');
  // Información del usuario (almacenada en login): se usa para controlar permisos en UI
  const currentUser = (() => {
    try {
      return JSON.parse(localStorage.getItem('user') || 'null');
    } catch {
      return null;
    }
  })();

  useEffect(() => {
    loadUsers();
    loadStats();
    loadTemarios();
  }, []);

  // Si el usuario no es docente, asegurarse de que el formulario de temario esté oculto
  useEffect(() => {
    if (!currentUser || currentUser.rol !== 'docente') setShowTemarioForm(false);
  }, [currentUser]);

  const loadUsers = async () => {
    try {
      const res = await api.get('/api/admin/users');
      if (res.ok) setUsers(res.data.users || []);
      else if (res.status === 403) setMsg('❌ Acceso denegado. Solo administradores pueden ver esta página.');
      else setMsg((res.data && res.data.message) || '❌ Error cargando usuarios');
    } catch {
      setMsg('❌ Error de conexión');
    }
  };

  const loadTemarios = async () => {
    setTemariosLoading(true);
    try {
      const res = await api.get('/api/docente/temarios');
      if (res.ok) setTemarios(res.data.temarios || []);
      else setMsg((res.data && res.data.message) || '❌ Error cargando temarios');
    } catch {
      setMsg('❌ Error de conexión');
    } finally {
      setTemariosLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const res = await api.get('/api/admin/stats');
      if (res.ok) setStats(res.data.stats);
    } catch (error) {
      console.error('Error cargando estadísticas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRole = async (userId, role) => {
    try {
      const res = await api.put(`/api/admin/users/${userId}/role`, { rol: role });
      if (res.ok) {
        setMsg('✅ Rol actualizado exitosamente');
        loadUsers();
        loadStats();
        setSelectedUser(null);
        setTimeout(() => setMsg(''), 3000);
      } else setMsg((res.data && res.data.message) || '❌ Error actualizando rol');
    } catch {
      setMsg('❌ Error de conexión');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) return;
    try {
      const res = await api.del(`/api/admin/users/${userId}`);
      if (res.ok) {
        setMsg('✅ Usuario eliminado exitosamente');
        loadUsers();
        loadStats();
        setTimeout(() => setMsg(''), 3000);
      } else setMsg((res.data && res.data.message) || '❌ Error eliminando usuario');
    } catch {
      setMsg('❌ Error de conexión');
    }
  };

  const handleCreateFormChange = (e) => {
    const { name, value } = e.target;
    setCreateForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreateLoading(true);
    try {
      const res = await api.post('/api/admin/users', createForm);
      if (res.ok) {
        setMsg(`✅ Usuario ${createForm.rol} creado exitosamente: ${createForm.nombre}`);
        setShowCreateForm(false);
        setCreateForm({ nombre: '', email: '', password: '', rol: 'docente', grado: '' });
        loadUsers();
        loadStats();
        setTimeout(() => setMsg(''), 4000);
      } else setMsg((res.data && res.data.message) || '❌ Error creando usuario');
    } catch {
      setMsg('❌ Error de conexión');
    } finally {
      setCreateLoading(false);
    }
  };

  // Temario handlers
  const handleTemarioChange = (e) => {
    const { name, value } = e.target;
    setTemarioForm(prev => ({ ...prev, [name]: value }));
  };

  const handleTemarioNivelChange = (value) => setTemarioForm(prev => ({ ...prev, nivel: value }));

  const handleCreateTemario = async (e, payload) => {
    // payload: optional object provided by TemarioForm (includes generated_html when requested)
    if (e && e.preventDefault) e.preventDefault();
    setTemarioLoading(true);
    // Protección en UI: solo docentes pueden enviar
    if (!currentUser || currentUser.rol !== 'docente') {
      setMsg('❌ No tienes permisos para crear temarios');
      setTemarioLoading(false);
      return;
    }
    const body = payload || temarioForm;
    try {
      const res = await api.post('/api/docente/temarios', body);
      if (res.ok) {
        // Detectar si se incluyó HTML generado en el payload o en la respuesta
        const created = res.data && res.data.temario;
        const hasHtmlInPayload = payload && payload.generated_html;
        const hasHtmlInResponse = created && created.metadata && created.metadata.generated_html;
        setMsg(hasHtmlInPayload || hasHtmlInResponse ? '✅ Temario creado (HTML incluido)' : '✅ Temario creado');
        setShowTemarioForm(false);
        setTemarioForm({ titulo: '', descripcion: '', nivel: '' });
        // Recargar lista de temarios para reflejar la nueva entrada
        loadTemarios();
        setTimeout(() => setMsg(''), 3000);
      } else {
        setMsg((res.data && res.data.message) || '❌ Error creando temario');
      }
    } catch {
      setMsg('❌ Error de conexión');
    } finally {
      setTemarioLoading(false);
    }
  };

  const cancelCreateTemario = () => {
    setShowTemarioForm(false);
    setTemarioForm({ titulo: '', descripcion: '', nivel: '' });
  };

  // Abrir la previsualización HTML en un modal interno
  const openTemarioModal = (temario) => {
    try {
      const html = temario && temario.metadata && temario.metadata.generated_html;
      if (!html) return;
      setPreviewModalHtml(html);
      setShowPreviewModal(true);
    } catch (err) {
      console.error('Error al abrir modal de previsualización:', err);
    }
  };

  const closePreviewModal = () => {
    setShowPreviewModal(false);
    setPreviewModalHtml(null);
  };

  // Abrir la previsualización en una nueva pestaña (usa Blob/ObjectURL)
  const openPreviewInNewTab = () => {
    try {
      const html = previewModalHtml;
      if (!html) return;
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const win = window.open(url, '_blank');
      // revocar después
      setTimeout(() => { try { URL.revokeObjectURL(url); } catch { /* ignore */ } }, 20000);
      if (!win) window.location.href = url;
    } catch (err) {
      console.error('No se pudo abrir en nueva pestaña:', err);
    }
  };

  // Descargar el HTML como archivo .html
  const downloadPreviewHtml = () => {
    try {
      const html = previewModalHtml;
      if (!html) return;
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `temario_docente.html`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => { try { URL.revokeObjectURL(url); } catch { /* ignore */ } }, 20000);
    } catch (err) {
      console.error('Error al descargar HTML:', err);
    }
  };

  const getRoleColor = role => {
    switch (role) {
      case 'administrador': return '#e74c3c';
      case 'docente': return '#f39c12';
      case 'estudiante': return '#27ae60';
      default: return '#95a5a6';
    }
  };

  const getRoleIcon = role => {
    switch (role) {
      case 'administrador': return '👑';
      case 'docente': return '👨‍🏫';
      case 'estudiante': return '👨‍🎓';
      default: return '👤';
    }
  };

  if (loading) return (
    <div style={{ maxWidth: 1200, margin: '2rem auto', padding: 20, textAlign: 'center' }}>
      <div>Cargando panel de administración...</div>
    </div>
  );

  return (
    <div style={{ maxWidth: 1200, margin: '2rem auto', padding: 20, fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: 10, marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>👑 Panel de Administración</h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>Gestión de usuarios y sistema - InfoAprende</p>
      </div>

      {/* Navegación del Panel */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
        <button onClick={() => setActiveTab('users')} style={{ background: activeTab === 'users' ? '#667eea' : 'transparent', color: activeTab === 'users' ? 'white' : '#667eea', border: '2px solid #667eea', padding: '0.8rem 1.5rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600 }}>👥 Gestionar Usuarios</button>
        <button onClick={() => setActiveTab('stats')} style={{ background: activeTab === 'stats' ? '#667eea' : 'transparent', color: activeTab === 'stats' ? 'white' : '#667eea', border: '2px solid #667eea', padding: '0.8rem 1.5rem', borderRadius: 20, cursor: 'pointer', fontWeight: 600 }}>📊 Estadísticas</button>
      </div>

      {/* Mensaje de estado */}
      {msg && (
        <div style={{ background: msg.includes('✅') ? '#d4edda' : '#f8d7da', color: msg.includes('✅') ? '#155724' : '#721c24', padding: '1rem', borderRadius: 8, marginBottom: '1rem', border: `1px solid ${msg.includes('✅') ? '#c3e6cb' : '#f5c6cb'}` }}>{msg}</div>
      )}

      {/* Tab: Gestión de Usuarios */}
      {activeTab === 'users' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ color: '#333', margin: 0 }}>👥 Gestión de Usuarios ({users.length} usuarios)</h2>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <button onClick={() => setShowCreateForm(true)} style={{ background: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 8, fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}>➕ Crear Usuario</button>

              {/* Botón Crear Temario: helper aparece sólo al hacer hover, con estilo prominente */}
              <div style={{ position: 'relative' }} onMouseEnter={() => setShowTemarioHelperHover(true)} onMouseLeave={() => setShowTemarioHelperHover(false)}>
                <button
                  onClick={() => (currentUser && currentUser.rol === 'docente') && setShowTemarioForm(true)}
                  disabled={!(currentUser && currentUser.rol === 'docente')}
                  aria-disabled={!(currentUser && currentUser.rol === 'docente')}
                  title={currentUser && currentUser.rol === 'docente' ? 'Crear Temario' : 'Solo docentes pueden crear temarios'}
                  style={{
                    background: 'linear-gradient(135deg, #6a8cff, #5a6bf0)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 18px',
                    borderRadius: 8,
                    fontSize: '16px',
                    cursor: (currentUser && currentUser.rol === 'docente') ? 'pointer' : 'not-allowed',
                    opacity: (currentUser && currentUser.rol === 'docente') ? 1 : 0.6
                  }}
                >
                  ➕ Crear Temario
                </button>

                {/* Helper mostrado al hacer hover: mensaje distinto según rol y con icono/estilos */}
                {showTemarioHelperHover && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, minWidth: 220, background: (currentUser && currentUser.rol === 'docente') ? '#e8f7ff' : '#fff4e5', color: (currentUser && currentUser.rol === 'docente') ? '#0b5fa5' : '#8a5800', border: `1px solid ${(currentUser && currentUser.rol === 'docente') ? '#cfeefc' : '#ffe8b3'}`, padding: '8px 10px', borderRadius: 6, boxShadow: '0 6px 18px rgba(0,0,0,0.08)', whiteSpace: 'nowrap', zIndex: 50 }}>
                    <span style={{ marginRight: 8 }}>{(currentUser && currentUser.rol === 'docente') ? 'ℹ️' : '🚫'}</span>
                    {(currentUser && currentUser.rol === 'docente') ? 'Haz clic para crear un temario' : 'Sólo docentes pueden crear temarios.'}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Crear Temario (renderizado cuando showTemarioForm es true) */}
          {currentUser && currentUser.rol === 'docente' && showTemarioForm && (
            <div style={{ marginBottom: '1.5rem' }}>
              <TemarioForm token={token} form={temarioForm} onChange={handleTemarioChange} onNivelChange={handleTemarioNivelChange} onCancel={cancelCreateTemario} onSubmit={handleCreateTemario} loading={temarioLoading} />
            </div>
          )}

          {/* Crear Usuario - formulario compacto */}
          {showCreateForm && (
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.08)', marginBottom: '1rem' }}>
              <form onSubmit={handleCreateUser} style={{ display: 'grid', gap: '0.5rem' }}>
                <input name="nombre" value={createForm.nombre} onChange={handleCreateFormChange} placeholder="Nombre completo" required style={{ padding: '0.75rem', borderRadius: 6, border: '1px solid #ddd' }} />
                <input type="email" name="email" value={createForm.email} onChange={handleCreateFormChange} placeholder="Correo electrónico" required style={{ padding: '0.75rem', borderRadius: 6, border: '1px solid #ddd' }} />
                <input type="password" name="password" value={createForm.password} onChange={handleCreateFormChange} placeholder="Contraseña" required minLength={6} style={{ padding: '0.75rem', borderRadius: 6, border: '1px solid #ddd' }} />
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <select name="rol" value={createForm.rol} onChange={handleCreateFormChange} style={{ padding: '0.6rem', borderRadius: 6 }}>
                    <option value="docente">👨‍🏫 Docente</option>
                    <option value="administrador">👑 Administrador</option>
                  </select>
                  <input name="grado" value={createForm.grado} onChange={handleCreateFormChange} placeholder="Grado (opcional)" style={{ padding: '0.6rem', borderRadius: 6 }} />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button type="submit" disabled={createLoading} style={{ flex: 1, background: '#27ae60', color: 'white', borderRadius: 6, padding: '0.6rem' }}>{createLoading ? '⏳ Creando...' : '✅ Crear Usuario'}</button>
                  <button type="button" onClick={() => setShowCreateForm(false)} style={{ flex: 1, background: '#95a5a6', color: 'white', borderRadius: 6, padding: '0.6rem' }}>❌ Cancelar</button>
                </div>
              </form>
            </div>
          )}

          {/* Lista de usuarios */}
          <div style={{ display: 'grid', gap: '1rem' }}>
            {users.map(user => (
              <div key={user.id} style={{ background: 'white', padding: '1rem', borderRadius: 8, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: '1.1rem' }}>{getRoleIcon(user.rol)}</span>
                      <strong>{user.nombre}</strong>
                      <span style={{ background: getRoleColor(user.rol), color: 'white', padding: '0.15rem 0.6rem', borderRadius: 12, marginLeft: 8, fontSize: '0.75rem' }}>{user.rol}</span>
                    </div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>📧 {user.email}{user.grado ? ` • 📚 ${user.grado}` : ''}</div>
                  </div>

                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={() => { setSelectedUser(user); setNewRole(user.rol); }} style={{ background: '#3498db', color: 'white', border: 'none', padding: '0.5rem 0.8rem', borderRadius: 6 }}>✏️</button>
                    <button onClick={() => handleDeleteUser(user.id)} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '0.5rem 0.8rem', borderRadius: 6 }}>🗑️</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lista de temarios */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2 style={{ marginBottom: 8 }}>📚 Temarios ({temarios.length})</h2>
            {temariosLoading ? (
              <div>Cargando temarios...</div>
            ) : (
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {temarios.map(t => (
                  <div key={t.id || t.temario_id || Math.random()} style={{ background: 'white', padding: '0.9rem', borderRadius: 8, boxShadow: '0 1px 8px rgba(0,0,0,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong>{t.titulo}</strong>
                      <div style={{ color: '#666', fontSize: '0.9rem' }}>{t.descripcion}</div>
                      <div style={{ color: '#888', fontSize: 12 }}>{t.nivel}{t.autor_id ? ` • Autor ID: ${t.autor_id}` : ''}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      {t.metadata && t.metadata.generated_html ? (
                        <>
                          <button onClick={() => openTemarioModal(t)} style={{ background: '#4caf50', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>👁️ Abrir HTML</button>
                          <span style={{ background: '#fff4e0', color: '#8a5800', padding: '6px 10px', borderRadius: 14, fontSize: 12 }}>HTML incluido</span>
                        </>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'stats' && stats && (
        <div>
          <h2>📊 Estadísticas del Sistema</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            <div style={{ background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', padding: 16, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 28 }}>{stats.totalUsers}</div>
              <div>Total de Usuarios</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #27ae60, #229954)', color: 'white', padding: 16, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 28 }}>{stats.usersByRole.estudiantes}</div>
              <div>👨‍🎓 Estudiantes</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', padding: 16, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 28 }}>{stats.usersByRole.docentes}</div>
              <div>👨‍🏫 Docentes</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', padding: 16, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 28 }}>{stats.usersByRole.administradores}</div>
              <div>👑 Administradores</div>
            </div>
          </div>
        </div>
      )}

      {/* Modal para cambiar rol */}
      {selectedUser && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: 20, borderRadius: 8, width: '90%', maxWidth: 420 }}>
            <h3>Cambiar rol de {selectedUser.nombre}</h3>
            <select value={newRole} onChange={(e) => setNewRole(e.target.value)} style={{ width: '100%', padding: '0.6rem', marginBottom: 12 }}>
              <option value="estudiante">👨‍🎓 Estudiante</option>
              <option value="docente">👨‍🏫 Docente</option>
              <option value="administrador">👑 Administrador</option>
            </select>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => handleUpdateRole(selectedUser.id, newRole)} style={{ flex: 1, background: '#27ae60', color: 'white', padding: '0.6rem', borderRadius: 6 }}>✅ Confirmar</button>
              <button onClick={() => setSelectedUser(null)} style={{ flex: 1, background: '#95a5a6', color: 'white', padding: '0.6rem', borderRadius: 6 }}>❌ Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para previsualizar HTML guardado en un temario */}
      {showPreviewModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1500 }} onClick={closePreviewModal}>
          <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} style={{ background: 'white', width: '95%', maxWidth: 980, maxHeight: '90%', borderRadius: 8, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', borderBottom: '1px solid #eee', background: '#f7f7f7' }}>
              <strong>Previsualización del temario</strong>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={downloadPreviewHtml} style={{ background: '#2ecc71', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6 }}>⬇️ Descargar</button>
                <button onClick={openPreviewInNewTab} style={{ background: '#3498db', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6 }}>🔗 Abrir en pestaña</button>
                <button onClick={closePreviewModal} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6 }}>❌ Cerrar</button>
              </div>
            </div>
            <div style={{ padding: 12, overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: previewModalHtml || '<div style="color:#666;padding:12px">No hay contenido</div>' }} />
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Link to="/perfil"><button style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: 8 }}>🔙 Volver a mi perfil</button></Link>
      </div>
    </div>
  );
}