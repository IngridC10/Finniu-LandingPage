"use server";
import { USER_PROFILE } from "../../graphql/querys";
import { useGraphQLClient } from "../../graphql/client";

export async function getUserProfileAction(): Promise<any> {
  try {
    const client = useGraphQLClient();

    const result: any = await client.request(USER_PROFILE);

    if (!result || !result.userProfile) {
      throw new Error("Invalid API response");
    }

    const userProfile = result.userProfile;

    return userProfile;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Unable to fetch user profile");
  }
}
