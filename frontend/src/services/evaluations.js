import api from '../api/client.js';

const API = '/api/evaluations';

export async function listEvaluations() {
  const res = await api.get(API, { requireAuth: false });
  if (!res.ok) throw new Error(res.data && res.data.error ? res.data.error : 'Error fetching evaluations');
  return res.data;
}

export async function getEvaluation(id) {
  const res = await api.get(`${API}/${id}`, { requireAuth: false });
  if (!res.ok) throw new Error(res.data && res.data.error ? res.data.error : 'Error fetching evaluation');
  return res.data;
}

export async function submitEvaluation(id, answers) {
  // require auth: token será añadido automáticamente por client.js
  const res = await api.post(`${API}/${id}/submit`, { answers }, { requireAuth: true });
  if (!res.ok) throw new Error(res.data && res.data.error ? res.data.error : 'Error submitting evaluation');
  return res.data;
}

export default { listEvaluations, getEvaluation, submitEvaluation };
