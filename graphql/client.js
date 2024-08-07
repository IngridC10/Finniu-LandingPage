import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://finniu.com/api/v1/graph/finniu/",
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
});

export default client;
