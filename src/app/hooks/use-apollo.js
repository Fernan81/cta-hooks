import { useState } from "react";
import { useApolloClient } from "../../apollo";

export const useApollo = () => {
  const { client } = useApolloClient();
  const [response, setResponse] = useState("");

  return {
    response,
    get: async (uri) => {
      setResponse(null);
      const res = await client.get(uri);
      setResponse(res);
    }
  };
};
