"use server";
import { useGraphQLClient } from "@/graphql/client";
import { CALCULATE_INVESTMENT } from "../../graphql/mutation";

const client = useGraphQLClient();

export type InvestmentResult = {
  success: boolean;
  investmentTotalAmount?: number;
};

export async function calculateInvestment(input: {
  ammount: number;
  deadline: number;
  currency: string;
}): Promise<InvestmentResult> {
  try {
    const parameters = {
      ammount: input.ammount,
      deadline: input.deadline,
      currency: input.currency,
    };

    const result: any = await client.request(CALCULATE_INVESTMENT, parameters);

    const investmentData = result.calculateInvestment;

    return {
      success: investmentData.success,
      investmentTotalAmount: investmentData.profitability.preInvestmentAmount,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
}
