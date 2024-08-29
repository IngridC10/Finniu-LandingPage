"use server";
import { useGraphQLClient } from "@/graphql/client";
import { REMAINING_PAYMENT_DAYS } from "@/graphql/querys";

export async function getRemainingPaymentDaysAction(): Promise<any> {
  try {
    const client = useGraphQLClient();

    const result: any = await client.request(REMAINING_PAYMENT_DAYS);

    if (!result || !result.remainingPaymentDays) {
      throw new Error("Invalid API response");
    }

    const remainingPaymentDays = result.remainingPaymentDays;

    return remainingPaymentDays;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Unable to fetch remaining payment days");
  }
}
