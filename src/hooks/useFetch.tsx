import { useCallback, useEffect, useState } from "react";

function useFetch(url: string, options = {}) {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setData(undefined);
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.error) {
        setError(true);
      }
      if (!json.error) setData(json);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}

export default useFetch;
