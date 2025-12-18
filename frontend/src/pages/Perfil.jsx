import React, { useState, useEffect } from 'react';
import { getProfile } from '../api/auth';
import api from '../api/client';

export default function Perfil() {
  const [profile, setProfile] = useState(null);
  const [msg, setMsg] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswordEdit, setShowPasswordEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    if (!token) {
      setMsg('Debes iniciar sesión para ver tu perfil.');
      setProfile(null);
      return;
    }
    setMsg('');
    getProfile(token).then(res => {
      if (res.user) {
        setProfile(res.user);
        setEditForm({
          nombre: res.user.nombre || '',
          email: res.user.email || '',
          grado: res.user.grado || ''
        });
      } else {
        setMsg(res.error || 'No se pudo obtener el perfil');
      }
    });
  }, [token]);

  const handleEditClick = () => {
    setIsEditing(true);
    setMsg('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditForm({
      nombre: profile.nombre || '',
      email: profile.email || '',
      grado: profile.grado || ''
    });
    setMsg('');
  };

  const handleInputChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value
    });
  };

  const handleChangePassword = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setMsg('❌ Las contraseñas nuevas no coinciden');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setMsg('❌ La nueva contraseña debe tener al menos 6 caracteres');
      return;
    }

    setIsLoading(true);
    setMsg('');
    
    try {
      const resultObj = await api.put('/api/users/change-password', {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      });

      const result = resultObj.data;
      
      if (resultObj.ok) {
        setMsg('✅ Contraseña actualizada correctamente');
        setPasswordForm({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setShowPasswordEdit(false);
        setTimeout(() => setMsg(''), 3000);
      } else {
        setMsg((result && result.error) || 'Error al cambiar la contraseña');
      }
    } catch (error) {
      setMsg('Error de conexión al cambiar la contraseña');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    setMsg('');
    
    try {
      const resultObj = await api.put('/api/users/profile', editForm);
      const result = resultObj.data;

      if (resultObj.ok && result && result.user) {
        setProfile(result.user);
        setIsEditing(false);
        setMsg('✅ Perfil actualizado correctamente');
        setTimeout(() => setMsg(''), 3000);
      } else {
        setMsg((result && result.error) || 'Error al actualizar el perfil');
      }
    } catch (error) {
      setMsg('Error de conexión al actualizar el perfil');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: 600, 
      margin: '2rem auto', 
      padding: '2rem', 
      borderRadius: 12, 
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 
      fontFamily: 'Segoe UI, Roboto, sans-serif' 
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        padding: '2rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem', 
          color: '#2c3e50',
          fontSize: '28px',
          fontWeight: '700',
          letterSpacing: '1px',
          borderBottom: '3px solid #3498db',
          paddingBottom: '1rem'
        }}>
          Mi Perfil
        </h2>
        
        {msg && (
          <div style={{ 
            marginBottom: '1.5rem', 
            color: msg.includes('✅') ? '#2e7d32' : '#e74c3c', 
            background: msg.includes('✅') ? 
              'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' : 
              'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)', 
            borderRadius: 8, 
            padding: '1rem', 
            textAlign: 'center', 
            fontWeight: '500',
            border: msg.includes('✅') ? '1px solid #4caf50' : '1px solid #ef5350'
          }}>
            {msg}
          </div>
        )}
        
        {profile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Header del perfil con avatar */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 12,
              color: 'white'
            }}>
              <div style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: '1rem',
                border: '4px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                {profile.nombre ? profile.nombre.charAt(0).toUpperCase() : 'U'}
              </div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '24px', 
                fontWeight: '600',
                textAlign: 'center'
              }}>
                {profile.nombre || 'Usuario'}
              </h3>
            </div>

            {/* Información del usuario */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr',
              gap: '1rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                padding: '1rem',
                borderRadius: 10,
                color: 'white',
                boxShadow: '0 4px 16px rgba(240, 147, 251, 0.3)'
              }}>
                <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '0.5rem' }}>
                  📧 Correo Electrónico
                </div>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: '600',
                      background: 'rgba(255,255,255,0.9)',
                      color: '#333'
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '16px', fontWeight: '600' }}>
                    {profile.email}
                  </div>
                )}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                padding: '1rem',
                borderRadius: 10,
                color: 'white',
                boxShadow: '0 4px 16px rgba(79, 172, 254, 0.3)'
              }}>
                <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '0.5rem' }}>
                  👤 Nombre Completo
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name="nombre"
                    value={editForm.nombre}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: '600',
                      background: 'rgba(255,255,255,0.9)',
                      color: '#333'
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '16px', fontWeight: '600' }}>
                    {profile.nombre}
                  </div>
                )}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '1rem',
                borderRadius: 10,
                color: 'white',
                boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)'
              }}>
                <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '0.5rem' }}>
                  🎯 Rol
                </div>
                <div style={{ fontSize: '16px', fontWeight: '600', textTransform: 'capitalize' }}>
                  {profile.rol === 'estudiante' ? '🎓 Estudiante' : '👨‍🏫 Docente'}
                  <span style={{ fontSize: '12px', opacity: 0.7, display: 'block', marginTop: '4px' }}>
                    (No modificable)
                  </span>
                </div>
              </div>

              {profile.rol === 'estudiante' && (
                <div style={{
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  padding: '1rem',
                  borderRadius: 10,
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(250, 112, 154, 0.3)'
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '0.5rem' }}>
                    📚 Grado Académico
                  </div>
                  {isEditing ? (
                    <select
                      name="grado"
                      value={editForm.grado}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: 6,
                        border: 'none',
                        fontSize: '16px',
                        fontWeight: '600',
                        background: 'rgba(255,255,255,0.9)',
                        color: '#333'
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
                  ) : (
                    <div style={{ fontSize: '16px', fontWeight: '600' }}>
                      {profile.grado || 'No especificado'}
                    </div>
                  )}
                </div>
              )}

              <div style={{
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                padding: '1rem',
                borderRadius: 10,
                color: '#2c3e50',
                boxShadow: '0 4px 16px rgba(168, 237, 234, 0.3)'
              }}>
                <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '0.5rem' }}>
                  📅 Fecha de Registro
                </div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>
                  {new Date(profile.created_at).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>

            {/* Sección de cambio de contraseña */}
            {!isEditing && (
              <div style={{
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                padding: '1rem',
                borderRadius: 12,
                color: 'white',
                boxShadow: '0 4px 16px rgba(255, 107, 107, 0.3)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: showPasswordEdit ? '1rem' : '0'
                }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem' }}>
                      🔒 Seguridad de la Cuenta
                    </div>
                    <div style={{ fontSize: '14px', opacity: 0.9 }}>
                      Cambiar contraseña para mayor seguridad
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowPasswordEdit(!showPasswordEdit);
                      setPasswordForm({
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: ''
                      });
                      setMsg('');
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: 20,
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {showPasswordEdit ? '❌ Cancelar' : '🔑 Cambiar Contraseña'}
                  </button>
                </div>

                {showPasswordEdit && (
                  <div style={{ 
                    background: 'rgba(255,255,255,0.1)',
                    padding: '1rem',
                    borderRadius: 8,
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '14px', 
                          marginBottom: '0.5rem',
                          fontWeight: '600'
                        }}>
                          🔐 Contraseña Actual
                        </label>
                        <input
                          type="password"
                          name="currentPassword"
                          value={passwordForm.currentPassword}
                          onChange={handlePasswordChange}
                          placeholder="Ingresa tu contraseña actual"
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 8,
                            border: 'none',
                            fontSize: '16px',
                            background: 'rgba(255,255,255,0.9)',
                            color: '#333'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '14px', 
                          marginBottom: '0.5rem',
                          fontWeight: '600'
                        }}>
                          🆕 Nueva Contraseña
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          value={passwordForm.newPassword}
                          onChange={handlePasswordChange}
                          placeholder="Mínimo 6 caracteres"
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 8,
                            border: 'none',
                            fontSize: '16px',
                            background: 'rgba(255,255,255,0.9)',
                            color: '#333'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '14px', 
                          marginBottom: '0.5rem',
                          fontWeight: '600'
                        }}>
                          ✅ Confirmar Nueva Contraseña
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={passwordForm.confirmPassword}
                          onChange={handlePasswordChange}
                          placeholder="Repite la nueva contraseña"
                          style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 8,
                            border: 'none',
                            fontSize: '16px',
                            background: 'rgba(255,255,255,0.9)',
                            color: '#333'
                          }}
                        />
                      </div>

                      <button
                        onClick={handleChangePassword}
                        disabled={isLoading || !passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword}
                        style={{
                          background: isLoading || !passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword 
                            ? 'rgba(255,255,255,0.3)' 
                            : 'rgba(255,255,255,0.9)',
                          color: isLoading || !passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword 
                            ? 'rgba(255,255,255,0.6)' 
                            : '#ff6b6b',
                          border: 'none',
                          borderRadius: 25,
                          padding: '12px 24px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: isLoading || !passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword 
                            ? 'not-allowed' 
                            : 'pointer',
                          transition: 'all 0.3s ease',
                          alignSelf: 'center'
                        }}
                      >
                        {isLoading ? '🔄 Cambiando...' : '🔒 Cambiar Contraseña'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Botones de acción */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem',
              marginTop: '1rem',
              flexWrap: 'wrap'
            }}>
              {!isEditing ? (
                <>
                  <button style={{
                    background: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: 25,
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(76, 175, 80, 0.4)',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 24px rgba(76, 175, 80, 0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 16px rgba(76, 175, 80, 0.4)';
                  }}
                  onClick={handleEditClick}>
                    ✏️ Editar Perfil
                  </button>
                  
                  {/* Botón Panel de Administración - Solo para administradores */}
                  {profile.rol === 'administrador' && (
                    <button style={{
                      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: 25,
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(255, 107, 107, 0.4)',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 24px rgba(255, 107, 107, 0.6)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 16px rgba(255, 107, 107, 0.4)';
                    }}
                    onClick={() => {
                      window.location.href = '/panel-admin';
                    }}>
                      🛡️ Panel de Administración
                    </button>
                  )}
                  
                  <button style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: 25,
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.4)';
                  }}
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                  }}>
                    🚪 Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <button style={{
                    background: isLoading ? '#ccc' : 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: 25,
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 16px rgba(33, 150, 243, 0.4)',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onClick={handleSaveProfile}
                  disabled={isLoading}>
                    {isLoading ? '💾 Guardando...' : '💾 Guardar Cambios'}
                  </button>
                  
                  <button style={{
                    background: 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: 25,
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(244, 67, 54, 0.4)',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 24px rgba(244, 67, 54, 0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 16px rgba(244, 67, 54, 0.4)';
                  }}
                  onClick={handleCancelEdit}>
                    ❌ Cancelar
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
