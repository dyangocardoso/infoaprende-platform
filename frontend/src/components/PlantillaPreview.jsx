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
        const t = token || localStorage.getItem('token');
        if (!t) throw new Error('Token no disponible');
        const res = await fetch(`/api/docente/plantillas/${id}/preview`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${t}` },
          signal
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const raw = await res.text();
        const clean = DOMPurify.sanitize(raw, { USE_PROFILES: { html: true } });
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
