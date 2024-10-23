"use server";
import { CALCULATE_INVESTMENT } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  "https://manage.finniu.com/api/v1/graph/finniu/"
);

export type InvestmentResult = {
  success: boolean;
  investmentTotalAmount?: number;
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
    };
  } catch (error) {
    return {
      success: false,
    };
  }
}
