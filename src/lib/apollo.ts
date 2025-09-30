import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

/**
 * Apollo Client instance for communicating with the SpaceX GraphQL API.
 */
export const client = new ApolloClient({
  link: new HttpLink({ uri: "https://spacex-production.up.railway.app/" }),
  cache: new InMemoryCache(),
});
