import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  "https://finniu.com/api/v1/graph/finniu/"
);
