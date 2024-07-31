"use server";
import { CALCULATE_INVESTMENT } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://finniu.com/api/v1/graph/finniu/");
export async function calculateInvestment(input: {
  ammount: number;
  deadline: number;
  currency: string;
}) {
  try {
    const variables = {
      ammount: input.ammount,
      deadline: input.deadline,
      currency: input.currency,
    };
    const result = await client.request(CALCULATE_INVESTMENT, variables);

    // console.log("result:", result);

    return { success: true, data: result };
  } catch (error) {
    // console.error("Error calculating investment:", error);
    return { success: false, error: "Failed to calculate investment" };
  }
}
