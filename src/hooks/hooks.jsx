import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          let error = new Error('Ha ocurrido un error en la petición');
          throw { error, status: res.status, text: res.statusText };
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, loading, error };
};
