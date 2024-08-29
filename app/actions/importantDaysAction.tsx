"use server";
import { useGraphQLClient } from "@/graphql/client";
import { IMPORTANT_DAYS } from "@/graphql/querys";

export async function getImportantDaysAction(): Promise<any> {
  try {
    const client = useGraphQLClient();

    const result: any = await client.request(IMPORTANT_DAYS);

    if (!result || !result.importantDays) {
      throw new Error("Invalid API response");
    }

    const importantDays = result.importantDays;

    return importantDays;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Unable to fetch important days");
  }
}
