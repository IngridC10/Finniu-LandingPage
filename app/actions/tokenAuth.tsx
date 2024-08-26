"use server";
import { LOGIN_USER } from "../../graphql/mutation";
import { useGraphQLClient } from "../../graphql/client";

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<{ token: string; refreshToken: string } | null> {
  const client = useGraphQLClient();

  try {
    const parameters = {
      email: input.email,
      password: input.password,
    };

    const result: any = await client.request(LOGIN_USER, parameters);
    console.log("TOKEN API response:", JSON.stringify(result, null, 2));
    if (result && result.tokenAuth) {
      const token = result.tokenAuth.token;
      const refreshToken = result.tokenAuth.refreshToken;

      return { token, refreshToken };
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
