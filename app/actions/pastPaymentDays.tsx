"use server";
import { useGraphQLClient } from "@/graphql/client";
import { PAST_PAYMENT_DAYS } from "@/graphql/querys";

export async function getPastPaymentDaysAction(): Promise<any> {
  try {
    const client = useGraphQLClient();

    const result: any = await client.request(PAST_PAYMENT_DAYS);

    if (!result || !result.pastPaymentDays) {
      throw new Error("Invalid API response");
    }

    const pastPaymentDays = result.pastPaymentDays;

    return pastPaymentDays;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Unable to fetch past payment days");
  }
}
