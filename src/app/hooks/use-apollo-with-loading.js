import { useState } from "react";
import { useApollo } from "./use-apollo";

export const useApolloWithLoading = () => {
  const request = useApollo();
  const [loading, setLoading] = useState(false);

  // Preparing building blocks
  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return {
    loading,
    ...request,
    get: (uri) => {
      showLoader();
      return request.get(uri).finally(hideLoader);
    }
  };
};
