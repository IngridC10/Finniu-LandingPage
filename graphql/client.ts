import { GraphQLClient } from "graphql-request";
import { getServerToken } from "../app/cookies/server/tokenCookieServer";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL as string;

export function createGraphQLClient() {
  console.log("All cookies before creating client:", cookies().getAll());

  const token = getServerToken();

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
