import { GraphQLClient } from "graphql-request";

const apiUrl = process.env.API_URL;
console.log("apiUrl", apiUrl);

export const client = new GraphQLClient(apiUrl);

export default client;