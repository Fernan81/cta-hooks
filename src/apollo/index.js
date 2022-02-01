import { ApolloProvider } from "./ApolloProvider";

export { useApolloClient, ApolloProvider } from "./ApolloProvider";

export default {
  hook: "$REACT_ROOT_WRAPPER",
  handler: { component: ApolloProvider }
};
