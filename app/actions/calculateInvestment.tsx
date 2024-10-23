"use server";
import { CALCULATE_INVESTMENT } from "../../graphql/mutation";
// import { GraphQLClient } from "graphql-request";

import {client} from "@/graphql/client";
 
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
    console.log("parameters", parameters)
    const result: any = await client.request(CALCULATE_INVESTMENT, parameters);
    console.log("result", result)
    const investmentData = result.calculateInvestment;
    console.log("investmentData", investmentData)
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
