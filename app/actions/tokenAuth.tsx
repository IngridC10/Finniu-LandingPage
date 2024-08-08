"use server";
import { LOGIN_USER } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("https://finniu.com/api/v1/graph/finniu/");

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<{ token: string; refreshToken: string } | null> {
  try {
    const parameters = {
      email: input.email,
      password: input.password,
    };

    const result: any = await client.request(LOGIN_USER, parameters);
    console.log("result", result);

    const token = result.loginUser.token;
    const refreshToken = result.loginUser.refreshToken;
    console.log("Token:", token);
    console.log("Refresh Token:", refreshToken);
    return { token, refreshToken };
  } catch (error) {
    console.error("Error al autenticar el usuario:", error);
    return null;
  }
}
