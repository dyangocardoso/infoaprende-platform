// Helper central para llamadas a la API
const API_BASE = import.meta.env.VITE_API_URL || '';

function buildUrl(path) {
  // If API_BASE is empty, path may be relative (like '/api/health')
  if (!API_BASE) return path;
  // Avoid double slashes
  return API_BASE.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}

async function apiFetch(path, options = {}, { requireAuth = true } = {}) {
  const token = localStorage.getItem('token') || '';
  const headers = options.headers ? { ...options.headers } : {};

  if (requireAuth && token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  if (options.body && !(options.body instanceof FormData)) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    if (typeof options.body !== 'string') options.body = JSON.stringify(options.body);
  }

  const res = await fetch(buildUrl(path), { ...options, headers });
  let data;
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    data = await res.json();
  } else {
    data = await res.text();
  }
  return { ok: res.ok, status: res.status, data };
}

export async function get(path, opts) {
  return apiFetch(path, { method: 'GET', ...opts });
}

export async function post(path, body, opts) {
  return apiFetch(path, { method: 'POST', body, ...opts });
}

export async function put(path, body, opts) {
  return apiFetch(path, { method: 'PUT', body, ...opts });
}

export async function del(path, opts) {
  return apiFetch(path, { method: 'DELETE', ...opts });
}

export default { get, post, put, del };
