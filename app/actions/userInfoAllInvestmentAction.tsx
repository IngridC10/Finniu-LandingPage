"use server";
import { useGraphQLClient } from "@/graphql/client";
import { USER_INFO_ALL_INVESTMENT } from "@/graphql/querys";

export async function getUserInfoAllInvestmentAction() {
  try {
    const client = useGraphQLClient();

    const result: { userInfoAllInvestment: any } = await client.request(
      USER_INFO_ALL_INVESTMENT
    );

    if (!result || !result.userInfoAllInvestment) {
      throw new Error("Invalid API response");
    }

    const userInfoAllInvestment = result.userInfoAllInvestment;

    return userInfoAllInvestment;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Unable to fetch user info all investment");
  }
}
