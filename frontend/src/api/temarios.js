// Cliente API para temarios
// Devuelve los niveles permitidos desde el backend
export async function getNiveles(token) {
  const base = import.meta.env.VITE_API_URL || 'http://localhost:4000';
  const res = await fetch(`${base}/api/docente/temarios/niveles`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error ${res.status}: ${text}`);
  }

  return res.json(); // { niveles: [...] }
}
