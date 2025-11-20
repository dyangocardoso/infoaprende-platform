import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

export default function PlantillaPreview({ id, token }) {
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const controller = new AbortController();
    const signal = controller.signal;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        // Obtener token de forma segura (localStorage puede estar bloqueado por Tracking Prevention)
        let t = token || null;
        try {
          if (!t && typeof window !== 'undefined' && window.localStorage) {
            t = localStorage.getItem('token');
          }
        } catch (lsErr) {
          console.warn('PlantillaPreview: localStorage inaccesible:', lsErr && lsErr.message);
        }

        const headers = t ? { Authorization: `Bearer ${t}` } : {};
        const res = await fetch(`/api/docente/plantillas/${id}/preview`, {
          method: 'GET',
          headers,
          signal
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const raw = await res.text();

        // Usar DOMPurify importado estáticamente; si falla, usar HTML crudo
        let clean = raw;
        try {
          if (DOMPurify && typeof DOMPurify.sanitize === 'function') {
            clean = DOMPurify.sanitize(raw, { USE_PROFILES: { html: true } });
          }
        } catch (dpErr) {
          console.warn('PlantillaPreview: error sanitizando con DOMPurify, usando HTML sin sanitizar:', dpErr && dpErr.message);
        }

        setHtml(clean);
      } catch (e) {
        if (e.name !== 'AbortError') setError(e.message || 'Error cargando plantilla');
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [id, token]);

  if (loading) return <div>Cargando plantilla...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
