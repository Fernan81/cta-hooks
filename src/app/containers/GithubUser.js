import { useGithubUser } from "../../github";

export const GithubUser = ({ name }) => {
  const { loading, error, data } = useGithubUser(name);

  if (loading) {
    return `Loading: ${name}`;
  }

  if (error) {
    return `Error: ${error.message}`;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
