"use server";
import { SAVE_PRE_REGISTRATION } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";
// const client = new GraphQLClient("https://manage.finniu.com/api/v1/graph/finniu/");
import { client } from "@/graphql/client";


export async function savePreRegistration(input: {
  fullName: string;
  email: string;
  phoneNumber: string;
  phonePrefix: string;
  aboutUs: string;
}): Promise<boolean> {
  console.log("input", input);
  try {
    const parameters = {

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
