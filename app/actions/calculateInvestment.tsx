"use server";
import { CALCULATE_INVESTMENT } from "../../graphql/mutation";
// import { GraphQLClient } from "graphql-request";

import { client } from "@/graphql/client";

export type InvestmentResult = {
  success: boolean;
  investmentTotalAmount?: number;
  finalRestabilityPercent?: string;
  rentabilityPerMonth?: string;
};

export async function calculateInvestment(input: {
  ammount: number;
  deadline: number;
  currency: string;
  phone: string;
  name: string;
  email: string;
}): Promise<InvestmentResult> {
  try {
    const parameters = {
      ammount: input.ammount,
      deadline: input.deadline,
      currency: input.currency,
      phone: input.phone,
      name: input.name,
      email: input.email,
    };
    const result: any = await client.request(CALCULATE_INVESTMENT, parameters);
    const investmentData = result.calculateInvestment;
    return {
      success: investmentData.success,
      investmentTotalAmount: investmentData.profitability.preInvestmentAmount,
      finalRestabilityPercent: investmentData.finalRestabilityPercent,
      rentabilityPerMonth: investmentData.rentabilityPerMonth
    };
  } catch (error) {
    return {
      success: false,
    };
  }
}
