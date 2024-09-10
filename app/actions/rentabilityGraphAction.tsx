"use server";
import { useGraphQLClient } from "@/graphql/client";
import { RENTABILITY_GRAPH } from "@/graphql/querys";

export async function getRentabilityGraphAction(
  timeLine: string,
  fundUUID: string
) {
  try {
    const client = useGraphQLClient();

    const result: {
      rentabilityGraph: {
        rentabilityInPen: {
          month: string;
          date: string;
          year: string;
          amountPoint: number;
          details: string;
        }[];
        rentabilityInUsd: {
          month: string;
          date: string;
          year: string;
          amountPoint: number;
          details: string;
        }[];
      };
    } = await client.request(RENTABILITY_GRAPH, { timeLine, fundUUID });

    if (!result || !result.rentabilityGraph) {
      throw new Error("Invalid API response");
    }

    const rentabilityGraph = result.rentabilityGraph;

    return rentabilityGraph;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Unable to fetch rentability graph");
  }
}
