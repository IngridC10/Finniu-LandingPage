import { GraphQLClient } from 'graphql-request';
import { getServerToken } from '../app/cookies/server/tokenCookieServer'; // Asegúrate de que esta ruta sea correcta
import { cookies } from "next/headers";

// import { cookies } from 'next/headers';
// import { Token } from 'graphql';

const API_URL = 'https://finniu.com/api/v1/graph/finniu/';

export function createGraphQLClient() {
  console.log("All cookies before creating client:", cookies().getAll());

  const token = getServerToken();

  console.log('Token: client', token);

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `JWT ${token}`;
  }

  return new GraphQLClient(API_URL, { headers });
}

export function useGraphQLClient() {
  return createGraphQLClient();
}
// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import { getRefreshToken, getToken } from "./helpers/TokenStorage";
// // import { isTokenExpired } from "./helpers/JwtUtils";
// // import { refreshToken } from "./helpers/RefreshToken";
// ​
// const httpLink = new HttpLink({
//   uri: "https://finniu.com/api/v1/graph/finniu/",
// });
// ​
// // Configuración del enlace de autorización
// const authLink = setContext((_, { headers }) => {
//   const token = getToken();
//   console.log("Token:", token);
// ​
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `JWT ${token}` : "",
//     },
//   };
// });
// ​
// // Creación del cliente de Apollo
// const client = new ApolloClient({
//   link: ApolloLink.from([authLink, httpLink]),
//   cache: new InMemoryCache(),
// });
// ​
// export default client;