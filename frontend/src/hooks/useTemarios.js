import { useState, useEffect, useCallback } from 'react';
import { getNiveles } from '../api/temarios';

export default function useTemarios(token) {
  const [niveles, setNiveles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNiveles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getNiveles(token);
      setNiveles(Array.isArray(data.niveles) ? data.niveles : []);
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchNiveles();
  }, [fetchNiveles]);

  return {
    niveles,
    loading,
    error,
    reload: fetchNiveles
  };
}
