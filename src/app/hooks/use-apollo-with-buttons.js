import { useApolloWithErrors } from "./use-apollo-with-errors";

export const useApolloWithButtons = () => {
  const request = useApolloWithErrors();

  return {
    ...request,
    handleGet: (uri) => () => request.get(uri)
  };
};
