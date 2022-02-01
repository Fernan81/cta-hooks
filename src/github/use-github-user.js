import { useEffect, useState } from "react";
import { getUser } from "./api";

export const useGithubUser = (name) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("@@@", name);

    const load = async () => {
      setLoading(true);
      setData(null);
      setError(null);

      try {
        const data = await getUser(name);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [name]);

  return {
    error,
    loading,
    data
  };
};
