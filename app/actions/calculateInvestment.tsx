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

enum discoverySource {
  GOOGLE_ADDS = "GOOGLE_ADDS",
  SOCIAL_ADDS = "SOCIAL_ADDS",
  BLOG = "BLOG",
  GOOGLE_SEARCH = "GOOGLE_SEARCH",
  INVERSION_SIMPLE = "INVERSION_SIMPLE",
  INFLUENCERS = "INFLUENCERS",
  EMAIL = "EMAIL",
  VIDEO_YOUTUBE = "VIDEO_YOUTUBE",
  PRESENCIAL_EVENTS = "PRESENCIAL_EVENTS",
  FAMILIAR_OR_FRIENDS = "FAMILIAR_OR_FRIENDS",
}

function translateDiscoverySource(discover: string): discoverySource {
  switch (discover) {
    case "Anuncios en Google":
      return discoverySource.GOOGLE_ADDS;
    case "Anuncios en Redes Sociales":
      return discoverySource.SOCIAL_ADDS;
    case "Artículo de Blog":
      return discoverySource.BLOG;
    case "Búsqueda en Google":
      return discoverySource.GOOGLE_SEARCH;
    case "Inversión Simple":
      return discoverySource.INVERSION_SIMPLE;
    case "Influencers":
      return discoverySource.INFLUENCERS;
    case "Email":
      return discoverySource.EMAIL;
    case "Video Youtube":
      return discoverySource.VIDEO_YOUTUBE;
    case "Evento presencial":
      return discoverySource.PRESENCIAL_EVENTS;
    case "Amigo o Familiar":
      return discoverySource.FAMILIAR_OR_FRIENDS;
    default:
      return discoverySource.GOOGLE_ADDS;
  }
}


export async function calculateInvestment(input: {
  ammount: number;
  deadline: number;
  currency: string;
  phone: string;
  name: string;
  email: string;
  discoverySource: string;
}): Promise<InvestmentResult> {

  try {
    const discover = translateDiscoverySource(input.discoverySource);
    const parameters = {
      ammount: input.ammount,
      deadline: input.deadline,
      currency: input.currency,
      phone: input.phone,
      name: input.name,
      email: input.email,
      discoverySource: discover
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
