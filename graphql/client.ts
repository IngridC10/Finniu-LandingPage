import { GraphQLClient } from "graphql-request";
import { getServerToken } from "../app/cookies/server/tokenCookieServer"; // Asegúrate de que esta ruta sea correcta
import { cookies } from "next/headers";

const API_URL = process.env.API_URL as string;
console.log("API_URL en el cliente:", API_URL);

export function createGraphQLClient() {
  console.log("All cookies before creating client:", cookies().getAll());

  const token = getServerToken();

  console.log("Token: client", token);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `JWT ${token}`;
  }

  return new GraphQLClient(API_URL, { headers });
}

export function useGraphQLClient() {
  return createGraphQLClient();
}

// const API_URL = process.env.API_URL as string;
// export function createGraphQLClient() {
//   console.log("API_URL en el cliente:", API_URL);
//   console.log("All cookies before creating client:", cookies().getAll());

//   const token = getServerToken();

//   console.log("Token: client", token);

//   const headers: Record<string, string> = {
//     "Content-Type": "application/json",
//   };

//   if (token) {
//     headers["Authorization"] = `JWT ${token}`;
//   }

//   return new GraphQLClient(API_URL, { headers });
// }

// export function useGraphQLClient() {
//   return createGraphQLClient();
// }
