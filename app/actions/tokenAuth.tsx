"use server";
import { LOGIN_USER } from "../../graphql/mutation";
import { client } from "../../graphql/client";

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

    const token = result.loginUser.token;
    const refreshToken = result.loginUser.refreshToken;

    return { token, refreshToken };
  } catch (error) {
    console.error("Error al autenticar el usuario:", error);
    return null;
  }
}
