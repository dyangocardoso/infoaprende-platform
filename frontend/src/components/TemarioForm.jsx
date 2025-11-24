import React, { useState, useEffect } from 'react';
import NivelesSelect from './NivelesSelect';

export default function TemarioForm({ token, form, onChange, onNivelChange, onCancel, onSubmit, loading }) {
  const [plantillas, setPlantillas] = useState([]);
  const [plantillaId, setPlantillaId] = useState('');
  const [previewHtml, setPreviewHtml] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [saveHtml, setSaveHtml] = useState(false);

  // Información del usuario para controlar permisos en este componente
  const currentUser = (() => {
    try { return JSON.parse(localStorage.getItem('user') || 'null'); } catch { return null; }
  })();

  useEffect(() => {
    // Cargar lista de plantillas disponibles sólo si el usuario es docente
    const load = async () => {
      if (!currentUser || currentUser.rol !== 'docente') return;
      try {
        const base = import.meta.env.VITE_API_URL || 'http://localhost:4000';
        const res = await fetch(`${base}/api/docente/plantillas`, { headers: { Accept: 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) } });
        if (!res.ok) return;
        const data = await res.json();
        setPlantillas(Array.isArray(data.plantillas) ? data.plantillas : []);
      } catch {
        // ignorar
      }
    };
    load();
  }, [token, currentUser]);

  const handlePreview = async () => {
    if (!plantillaId) return;
    setPreviewLoading(true);
    setPreviewHtml(null);
    try {
      const base = import.meta.env.VITE_API_URL || 'http://localhost:4000';
      const res = await fetch(`${base}/api/docente/temarios/render`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ plantilla_id: plantillaId, data: { titulo: form.titulo, descripcion: form.descripcion, nivel: form.nivel } })
      });
      if (!res.ok) {
        const txt = await res.text();
        setPreviewHtml(`<div style="padding:12px;color:#a94442;background:#f2dede;border-radius:6px">Error: ${res.status} ${txt}</div>`);
      } else {
        const html = await res.text();
        setPreviewHtml(html);
        // Si el usuario tiene marcada la opción de guardar HTML, sincronizar con el formulario padre
        if (saveHtml && onChange) {
          try { onChange({ target: { name: 'generated_html', value: html } }); } catch { /* ignore */ }
        }
      }
    } catch {
      setPreviewHtml(`<div style="padding:12px;color:#a94442;background:#f2dede;border-radius:6px">Error conexión</div>`);
    } finally {
      setPreviewLoading(false);
    }
  };

  // Cuando el previewHtml cambie y la casilla esté marcada, mantener sincronizado el campo generated_html en el padre
  useEffect(() => {
    if (saveHtml && previewHtml && onChange) {
      try { onChange({ target: { name: 'generated_html', value: previewHtml } }); } catch { /* ignore */ }
    }
  }, [saveHtml, previewHtml, onChange]);

  const handleSaveHtmlToggle = (checked) => {
    setSaveHtml(checked);
    // Si desmarcamos, limpiar el valor en el padre
    if (!checked && onChange) {
      try { onChange({ target: { name: 'generated_html', value: '' } }); } catch { /* ignore */ }
    } else if (checked && previewHtml && onChange) {
      try { onChange({ target: { name: 'generated_html', value: previewHtml } }); } catch { /* ignore */ }
    }
  };

  const handleSubmit = (e) => {
    // Construir payload garantizando generated_html si corresponde
    const payload = {
      titulo: form.titulo,
      descripcion: form.descripcion,
      nivel: form.nivel
    };

    if (saveHtml && previewHtml) {
      payload.generated_html = previewHtml;
      // sincronizar con padre por compatibilidad
      if (onChange) {
        try { onChange({ target: { name: 'generated_html', value: previewHtml } }); } catch { /* ignore */ }
      }
    }

    // Delegar al manejador padre con el payload
    if (onSubmit) onSubmit(e, payload);
  };

  return (
    <div style={{ background: 'white', padding: 16, borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
        <input name="titulo" value={form.titulo} onChange={onChange} placeholder="Título del temario" required style={{ padding: '0.6rem', borderRadius: 6, border: '1px solid #ddd' }} />
        <textarea name="descripcion" value={form.descripcion} onChange={onChange} placeholder="Descripción (opcional)" rows={3} style={{ padding: '0.6rem', borderRadius: 6, border: '1px solid #ddd' }} />

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <NivelesSelect token={token} value={form.nivel} onChange={onNivelChange} />

          {/* Mostrar selector de plantillas y botón de previsualizar solo para docentes */}
          {currentUser && currentUser.rol === 'docente' && (
            <>
              <select value={plantillaId} onChange={(e) => setPlantillaId(e.target.value)} style={{ padding: '0.5rem', borderRadius: 6 }}>
                <option value="">Seleccionar plantilla (opcional)</option>
                {plantillas.map(p => (
                  <option key={p.id} value={p.id}>{p.nombre}</option>
                ))}
              </select>

              <button type="button" onClick={handlePreview} disabled={!plantillaId || previewLoading} style={{ background: '#3498db', color: 'white', border: 'none', padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}>{previewLoading ? '⏳ Generando...' : '👁️ Previsualizar'}</button>
            </>
          )}
        </div>

        {/* Opción para guardar HTML generado junto al temario (sólo docentes) */}
        {currentUser && currentUser.rol === 'docente' && previewHtml && (
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            <input type="checkbox" checked={saveHtml} onChange={(e) => handleSaveHtmlToggle(e.target.checked)} />
            <span>Sí, guardar HTML generado con el temario</span>
          </label>
        )}

        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" disabled={loading} style={{ flex: 1, background: '#6a8cff', color: 'white', border: 'none', padding: '10px', borderRadius: 6 }}>{loading ? '⏳ Creando...' : '✅ Crear Temario'}</button>
          <button type="button" onClick={onCancel} style={{ flex: 1, background: '#95a5a6', color: 'white', border: 'none', padding: '10px', borderRadius: 6 }}>❌ Cancelar</button>
        </div>
      </form>

      {previewHtml && (
        <div style={{ marginTop: 12, border: '1px solid #eee', borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ padding: 8, background: '#f7f7f7', borderBottom: '1px solid #eee' }}><strong>Previsualización</strong></div>
          <div style={{ padding: 12 }} dangerouslySetInnerHTML={{ __html: previewHtml }} />
        </div>
      )}
    </div>
  );
}
