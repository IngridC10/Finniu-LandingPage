"use server";

import { useGraphQLClient } from "@/graphql/client";
import { GET_NEXT_PAYMENTS } from "@/graphql/querys";

type Payment = {
  planName: string;
  amount: number;
  rentability: number;
  totalAmount: number;
  paymentDate: string;
};

type NextPaymentsResponse = {
  paymentInSoles: Payment[];
  paymentInDolares: Payment[];
};

export async function getNextPaymentsAction(): Promise<NextPaymentsResponse> {
  try {
    const client = useGraphQLClient();

    const result: { nextPayments: NextPaymentsResponse } = await client.request(
      GET_NEXT_PAYMENTS
    );

    if (!result || !result.nextPayments) {
      throw new Error("Invalid API response");
    }

    return result.nextPayments;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Unable to fetch next payments");
  }
}
