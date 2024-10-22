"use server";
import { SAVE_PRE_REGISTRATION } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("https://manage.finniu.com/api/v1/graph/finniu/");

export async function savePreRegistration(input: {
  documentNumber: string;
  email: string;
  phoneNumber: string;
  phonePrefix: string;
}): Promise<boolean> {
  try {
    const parameters = {
      documentNumber: input.documentNumber,
      email: input.email,
      phoneNumber: input.phoneNumber,
      phonePrefix: input.phonePrefix,
    };
    const result: any = await client.request(SAVE_PRE_REGISTRATION, parameters);

    const success = result.savePreRegistration.success;

    return success;
  } catch (error) {
    const success = false;
    return success;
  }
}
