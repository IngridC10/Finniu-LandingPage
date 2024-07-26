"use server";
import { SAVE_PRE_REGISTRATION } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("https://finniu.com/api/v1/graph/finniu/");

export async function savePreRegistration(input: {
  documentNumber: string;
  email: string;
  phoneNumber: string;
  phonePrefix: string;
}) {
  try {
    const variables = {
      documentNumber: input.documentNumber,
      email: input.email,
      phoneNumber: input.phoneNumber,
      phonePrefix: input.phonePrefix,
    };
    const result = await client.request(SAVE_PRE_REGISTRATION, variables);

    console.log("Resultado de la mutación GraphQL:", result);

    return { success: true, data: result };
  } catch (error) {
    console.error("Error saving pre-registration:", error);
    return { success: false, error: "Failed to save pre-registration" };
  }
}
