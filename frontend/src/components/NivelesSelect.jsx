import React from 'react';
import useTemarios from '../hooks/useTemarios';
import '../styles/niveles.css';

export default function NivelesSelect({ token, value, onChange, disabled }) {
  const { niveles, loading, error } = useTemarios(token);

  if (loading) return <select disabled className="niveles-select"><option>Cargando...</option></select>;
  if (error) return <select disabled className="niveles-select"><option>Error</option></select>;

  return (
    <select value={value || ''} onChange={(e) => onChange && onChange(e.target.value)} disabled={disabled} className="niveles-select">
      <option value="">Seleccionar nivel</option>
      {niveles.map((n) => (
        <option key={n} value={n}>{n.charAt(0).toUpperCase() + n.slice(1)}</option>
      ))}
    </select>
  );
}
