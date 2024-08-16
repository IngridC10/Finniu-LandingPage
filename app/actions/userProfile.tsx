"use server";
import { USER_PROFILE } from "../../graphql/querys";
import { client } from "../../graphql/client";

export async function getUserProfile(): Promise<any> {
  try {
    const result: any = await client.request(USER_PROFILE);
    console.log("User profile:", result);

    const userProfile = result.userProfile;
    console.log("User profile:", userProfile);

    return userProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw new Error("Unable to fetch user profile");
  }
}
