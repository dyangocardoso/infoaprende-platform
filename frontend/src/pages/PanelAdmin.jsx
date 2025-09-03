import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const [createForm, setCreateForm] = useState({
    nombre: '',
    email: '',
    password: '',
    rol: 'docente',
    grado: ''
  });
  const [createLoading, setCreateLoading] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    loadUsers();
    loadStats();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      } else if (response.status === 403) {
        setMsg('❌ Acceso denegado. Solo administradores pueden ver esta página.');
      } else {
        setMsg('❌ Error cargando usuarios');
      }
    } catch (error) {
      setMsg('❌ Error de conexión');
    }
  };

  const loadStats = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error cargando estadísticas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRole = async (userId, newRole) => {
    try {
      const response = await fetch(`http://localhost:4000/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rol: newRole })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMsg(`✅ Rol actualizado exitosamente`);
        loadUsers();
        loadStats();
        setSelectedUser(null);
        setTimeout(() => setMsg(''), 3000);
      } else {
        setMsg(data.message || '❌ Error actualizando rol');
      }
    } catch (error) {
      setMsg('❌ Error de conexión');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      
      if (response.ok) {
        setMsg(`✅ Usuario eliminado exitosamente`);
        loadUsers();
        loadStats();
        setTimeout(() => setMsg(''), 3000);
      } else {
        setMsg(data.message || '❌ Error eliminando usuario');
      }
    } catch (error) {
      setMsg('❌ Error de conexión');
    }
  };

  // Funciones para crear usuario
  const handleCreateFormChange = (e) => {
    const { name, value } = e.target;
    setCreateForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreateLoading(true);
    
    try {
      const response = await fetch('http://localhost:4000/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(createForm)
      });

      const data = await response.json();
      
      if (response.ok) {
        setMsg(`✅ Usuario ${createForm.rol} creado exitosamente: ${createForm.nombre}`);
        setShowCreateForm(false);
        setCreateForm({
          nombre: '',
          email: '',
          password: '',
          rol: 'docente',
          grado: ''
        });
        loadUsers();
        loadStats();
        setTimeout(() => setMsg(''), 4000);
      } else {
        setMsg(data.message || '❌ Error creando usuario');
      }
    } catch (error) {
      setMsg('❌ Error de conexión');
    } finally {
      setCreateLoading(false);
    }
  };

  const cancelCreateUser = () => {
    setShowCreateForm(false);
    setCreateForm({
      nombre: '',
      email: '',
      password: '',
      rol: 'docente',
      grado: ''
    });
  };

  const getRoleColor = (role) => {
    switch(role) {
      case 'administrador': return '#e74c3c';
      case 'docente': return '#f39c12';
      case 'estudiante': return '#27ae60';
      default: return '#95a5a6';
    }
  };

  const getRoleIcon = (role) => {
    switch(role) {
      case 'administrador': return '👑';
      case 'docente': return '👨‍🏫';
      case 'estudiante': return '👨‍🎓';
      default: return '👤';
    }
  };

  if (loading) {
    return (
      <div style={{ 
        maxWidth: 1200, 
        margin: '2rem auto', 
        padding: 20,
        textAlign: 'center'
      }}>
        <div>Cargando panel de administración...</div>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: '2rem auto', 
      padding: 20,
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '2rem',
        borderRadius: 10,
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>
          👑 Panel de Administración
        </h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
          Gestión de usuarios y sistema - InfoAprende
        </p>
      </div>

      {/* Navegación del Panel */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setActiveTab('users')}
          style={{
            background: activeTab === 'users' ? '#667eea' : 'transparent',
            color: activeTab === 'users' ? 'white' : '#667eea',
            border: '2px solid #667eea',
            padding: '0.8rem 1.5rem',
            borderRadius: 20,
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          👥 Gestionar Usuarios
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          style={{
            background: activeTab === 'stats' ? '#667eea' : 'transparent',
            color: activeTab === 'stats' ? 'white' : '#667eea',
            border: '2px solid #667eea',
            padding: '0.8rem 1.5rem',
            borderRadius: 20,
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          📊 Estadísticas
        </button>
      </div>

      {/* Mensaje de estado */}
      {msg && (
        <div style={{
          background: msg.includes('✅') ? '#d4edda' : '#f8d7da',
          color: msg.includes('✅') ? '#155724' : '#721c24',
          padding: '1rem',
          borderRadius: 8,
          marginBottom: '1rem',
          border: `1px solid ${msg.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {msg}
        </div>
      )}

      {/* Tab: Gestión de Usuarios */}
      {activeTab === 'users' && (
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '1rem' 
          }}>
            <h2 style={{ color: '#333', margin: 0 }}>
              👥 Gestión de Usuarios ({users.length} usuarios)
            </h2>
            
            <button
              onClick={() => setShowCreateForm(true)}
              style={{
                background: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(76, 175, 80, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(76, 175, 80, 0.3)';
              }}
            >
              ➕ Crear Usuario
            </button>
          </div>

          {/* Formulario para crear usuario */}
          {showCreateForm && (
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              border: '1px solid #e0e0e0',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ 
                color: '#2c3e50', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}>
                👤 Crear Nuevo Usuario
              </h3>

              <form onSubmit={handleCreateUser} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>
                      👤 Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={createForm.nombre}
                      onChange={handleCreateFormChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: 8,
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4caf50'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>
                      📧 Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={createForm.email}
                      onChange={handleCreateFormChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: 8,
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4caf50'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>
                      � Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={createForm.password}
                      onChange={handleCreateFormChange}
                      required
                      minLength={6}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: 8,
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4caf50'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>
                      🏷️ Rol
                    </label>
                    <select
                      name="rol"
                      value={createForm.rol}
                      onChange={handleCreateFormChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: 8,
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                        boxSizing: 'border-box',
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4caf50'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    >
                      <option value="docente">👨‍🏫 Docente</option>
                      <option value="estudiante">👨‍🎓 Estudiante</option>
                      <option value="administrador">👑 Administrador</option>
                    </select>
                  </div>

                  {createForm.rol === 'estudiante' && (
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#555' }}>
                        🎓 Grado
                      </label>
                      <select
                        name="grado"
                        value={createForm.grado}
                        onChange={handleCreateFormChange}
                        required={createForm.rol === 'estudiante'}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: 8,
                          fontSize: '16px',
                          transition: 'border-color 0.3s ease',
                          boxSizing: 'border-box',
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4caf50'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      >
                        <option value="">Selecciona un grado</option>
                        <optgroup label="📚 Educación Básica">
                          <option value="1° Básica">1° Básica</option>
                          <option value="2° Básica">2° Básica</option>
                          <option value="3° Básica">3° Básica</option>
                          <option value="4° Básica">4° Básica</option>
                          <option value="5° Básica">5° Básica</option>
                          <option value="6° Básica">6° Básica</option>
                          <option value="7° Básica">7° Básica</option>
                        </optgroup>
                        <optgroup label="🎓 Educación Media">
                          <option value="8° Básica">8° Básica</option>
                          <option value="9° Básica">9° Básica</option>
                          <option value="10° Básica">10° Básica</option>
                        </optgroup>
                        <optgroup label="🏆 Bachillerato">
                          <option value="1° Bachillerato">1° Bachillerato</option>
                          <option value="2° Bachillerato">2° Bachillerato</option>
                          <option value="3° Bachillerato">3° Bachillerato</option>
                        </optgroup>
                      </select>
                    </div>
                  )}
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  gap: '1rem',
                  marginTop: '1rem' 
                }}>
                  <button
                    type="button"
                    onClick={cancelCreateUser}
                    disabled={createLoading}
                    style={{
                      background: '#95a5a6',
                      color: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: 8,
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: createLoading ? 'not-allowed' : 'pointer',
                      opacity: createLoading ? 0.6 : 1,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    ❌ Cancelar
                  </button>

                  <button
                    type="submit"
                    disabled={createLoading || !createForm.nombre || !createForm.email || !createForm.password}
                    style={{
                      background: createLoading || !createForm.nombre || !createForm.email || !createForm.password 
                        ? '#bdc3c7' 
                        : 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: 8,
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: createLoading || !createForm.nombre || !createForm.email || !createForm.password 
                        ? 'not-allowed' 
                        : 'pointer',
                      boxShadow: createLoading || !createForm.nombre || !createForm.email || !createForm.password 
                        ? 'none' 
                        : '0 4px 12px rgba(76, 175, 80, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {createLoading ? '⏳ Creando...' : '✅ Crear Usuario'}
                  </button>
                </div>
              </form>
            </div>
          )}
          
          <div style={{
            display: 'grid',
            gap: '1rem'
          }}>
            {users.map(user => (
              <div key={user.id} style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: 10,
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '1.2rem' }}>
                        {getRoleIcon(user.rol)}
                      </span>
                      <strong style={{ fontSize: '1.1rem' }}>
                        {user.nombre}
                      </strong>
                      <span style={{
                        background: getRoleColor(user.rol),
                        color: 'white',
                        padding: '0.2rem 0.8rem',
                        borderRadius: 15,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textTransform: 'uppercase'
                      }}>
                        {user.rol}
                      </span>
                    </div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>
                      📧 {user.email}
                      {user.grado && <span> • 📚 {user.grado}</span>}
                    </div>
                    <div style={{ color: '#999', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                      Registrado: {new Date(user.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setNewRole(user.rol);
                      }}
                      style={{
                        background: '#3498db',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: 5,
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      ✏️ Cambiar Rol
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      style={{
                        background: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: 5,
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      🗑️ Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón para crear usuario */}
          <div style={{
            marginTop: '2rem',
            textAlign: 'center'
          }}>
            <button
              onClick={() => setShowCreateForm(true)}
              style={{
                background: '#27ae60',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: 25,
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              ➕ Crear Nuevo Usuario
            </button>
          </div>

          {/* Formulario para crear usuario */}
          {showCreateForm && (
            <div style={{
              marginTop: '2rem',
              padding: '2rem',
              borderRadius: 10,
              background: 'white',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>
                ➕ Crear Nuevo Usuario
              </h3>
              
              <form onSubmit={handleCreateUser}>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <input
                    type="text"
                    name="nombre"
                    value={createForm.nombre}
                    onChange={handleCreateFormChange}
                    placeholder="Nombre completo"
                    required
                    style={{
                      padding: '0.8rem',
                      borderRadius: 5,
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={createForm.email}
                    onChange={handleCreateFormChange}
                    placeholder="Correo electrónico"
                    required
                    style={{
                      padding: '0.8rem',
                      borderRadius: 5,
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                  <input
                    type="password"
                    name="password"
                    value={createForm.password}
                    onChange={handleCreateFormChange}
                    placeholder="Contraseña"
                    required
                    style={{
                      padding: '0.8rem',
                      borderRadius: 5,
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                  <select
                    name="rol"
                    value={createForm.rol}
                    onChange={handleCreateFormChange}
                    required
                    style={{
                      padding: '0.8rem',
                      borderRadius: 5,
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="docente">👨‍🏫 Docente</option>
                    <option value="administrador">👑 Administrador</option>
                  </select>
                  <input
                    type="text"
                    name="grado"
                    value={createForm.grado}
                    onChange={handleCreateFormChange}
                    placeholder="Grado (opcional)"
                    style={{
                      padding: '0.8rem',
                      borderRadius: 5,
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="submit"
                    disabled={createLoading}
                    style={{
                      background: '#27ae60',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: 5,
                      cursor: createLoading ? 'not-allowed' : 'pointer',
                      flex: 1
                    }}
                  >
                    {createLoading ? '⏳ Creando...' : '✅ Crear Usuario'}
                  </button>
                  <button
                    onClick={cancelCreateUser}
                    style={{
                      background: '#95a5a6',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: 5,
                      cursor: 'pointer',
                      flex: 1
                    }}
                  >
                    ❌ Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Tab: Estadísticas */}
      {activeTab === 'stats' && stats && (
        <div>
          <h2 style={{ color: '#333', marginBottom: '1rem' }}>
            📊 Estadísticas del Sistema
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #3498db, #2980b9)',
              color: 'white',
              padding: '2rem',
              borderRadius: 10,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {stats.totalUsers}
              </div>
              <div>Total de Usuarios</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #27ae60, #229954)',
              color: 'white',
              padding: '2rem',
              borderRadius: 10,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {stats.usersByRole.estudiantes}
              </div>
              <div>👨‍🎓 Estudiantes</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f39c12, #e67e22)',
              color: 'white',
              padding: '2rem',
              borderRadius: 10,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {stats.usersByRole.docentes}
              </div>
              <div>👨‍🏫 Docentes</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
              color: 'white',
              padding: '2rem',
              borderRadius: 10,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {stats.usersByRole.administradores}
              </div>
              <div>👑 Administradores</div>
            </div>
          </div>

          {/* Distribución por grados */}
          {stats.gradeDistribution && stats.gradeDistribution.length > 0 && (
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: 10,
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>📚 Distribución por Grados</h3>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {stats.gradeDistribution.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem',
                    background: '#f8f9fa',
                    borderRadius: 5
                  }}>
                    <span>{item.grado}</span>
                    <span style={{ fontWeight: 600 }}>
                      {item.estudiantes} estudiante{item.estudiantes !== 1 ? 's' : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal para cambiar rol */}
      {selectedUser && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: 10,
            width: '90%',
            maxWidth: 400
          }}>
            <h3 style={{ marginBottom: '1rem' }}>
              Cambiar rol de {selectedUser.nombre}
            </h3>
            
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: 5,
                border: '1px solid #ddd',
                marginBottom: '1rem'
              }}
            >
              <option value="estudiante">👨‍🎓 Estudiante</option>
              <option value="docente">👨‍🏫 Docente</option>
              <option value="administrador">👑 Administrador</option>
            </select>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => handleUpdateRole(selectedUser.id, newRole)}
                style={{
                  background: '#27ae60',
                  color: 'white',
                  border: 'none',
                  padding: '0.8rem 1.5rem',
                  borderRadius: 5,
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                ✅ Confirmar
              </button>
              <button
                onClick={() => setSelectedUser(null)}
                style={{
                  background: '#95a5a6',
                  color: 'white',
                  border: 'none',
                  padding: '0.8rem 1.5rem',
                  borderRadius: 5,
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                ❌ Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botón de regreso */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/perfil">
          <button style={{
            background: '#95a5a6',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: 25,
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            ← Volver al Perfil
          </button>
        </Link>
      </div>
    </div>
  );
}
