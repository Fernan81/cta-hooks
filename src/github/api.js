export const getUser = (name) =>
  fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json()
  );
