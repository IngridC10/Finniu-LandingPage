"use server";
import { SAVE_PRE_REGISTRATION } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";
// const client = new GraphQLClient("https://manage.finniu.com/api/v1/graph/finniu/");
import { client } from "@/graphql/client";

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
export async function savePreRegistration(input: {
  fullName: string;
  email: string;
  phoneNumber: string;
  phonePrefix: string;
  aboutUs: string;
}): Promise<boolean> {
  console.log("input", input);
  try {
    const discover = translateDiscoverySource(input.aboutUs);
    const parameters = {
      email: input.email,
      phoneNumber: input.phoneNumber,
      phonePrefix: input.phonePrefix,
      discoverySource: discover
    };
    const result: any = await client.request(SAVE_PRE_REGISTRATION, parameters);
    console.log("result", result);
    const success = result.savePreRegistration.success;

    return success;
  } catch (error) {
    const success = false;
    return success;
  }
}
