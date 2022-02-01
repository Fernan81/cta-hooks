import { createContext, useContext } from "react";
import { useGetConfig } from "@forrestjs/react-root";
import { ApolloClient } from "./apollo";

const ApolloContext = createContext({
  client: new ApolloClient("google.com")
});

export const ApolloProvider = ({ children, target }) => {
  // Retrieve the default target from the app configurations
  const myTarget = target || useGetConfig("apollo.target", null);
  if (!myTarget) {
    throw new Error("Your ApolloClient needs a targer url!");
  }

  // Build the client and provide the app
  const client = new ApolloClient(myTarget);
  return <ApolloContext.Provider value={{ client }} children={children} />;
};

export const useApolloClient = () => useContext(ApolloContext);
