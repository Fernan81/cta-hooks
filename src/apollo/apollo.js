export class ApolloClient {
  constructor(url) {
    this.url = url;
  }

  get(uri) {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve([this.url, uri].join("/"));
        } else {
          const error = new Error("buuuuu");
          reject(error);
        }
      }, 300);
    });
  }
}
