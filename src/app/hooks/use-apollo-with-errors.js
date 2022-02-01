import { useState } from "react";
import { useApolloWithLoading } from "./use-apollo-with-loading";

export const useApolloWithErrors = () => {
  const request = useApolloWithLoading();
  const [error, setError] = useState(null);

  return {
    error,
    ...request,
    get: async (uri) => {
      setError(null);
      try {
        await request.get(uri);
      } catch (err) {
        setError(err);
      }
    }
  };
};
