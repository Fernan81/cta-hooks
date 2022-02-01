// Providers
import { ApolloProvider } from "../apollo";

// Containers
import { HooksConsumer } from "./containers/HooksConsumer";
import { GithubUser } from "./containers/GithubUser";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <HooksConsumer />

      <ApolloProvider target="facebook.com">
        <HooksConsumer />

        <ApolloProvider target="delsol.com">
          <HooksConsumer />
        </ApolloProvider>
      </ApolloProvider>

      <hr />
      <GithubUser name="marcopeg" />
      <hr />
      <GithubUser name="silviabooks" />
    </div>
  );
}
