"use server";
import { useGraphQLClient } from "@/graphql/client";
import {
  saveRefreshTokenCookies,
  saveTokenCookies,
} from "../cookies/client/TokenCookies";
import { REFRESH_TOKEN } from "@/graphql/mutation";
import { redirect } from "next/navigation";

export async function refreshToken(
  refreshToken: string
): Promise<string | null> {
  try {
    const client = useGraphQLClient();

    const { refreshToken: refreshTokenResponse } = await client.request<{
      refreshToken: { token: string; refreshToken: string };
    }>(REFRESH_TOKEN, { refreshToken });

    if (refreshTokenResponse?.token) {
      saveTokenCookies(refreshTokenResponse.token);
      saveRefreshTokenCookies(refreshTokenResponse.refreshToken);

      console.log("Token actualizado con éxito:", refreshTokenResponse.token);
      return refreshTokenResponse.token;
    } else {
      throw new Error("No se pudo refrescar el token");
    }
  } catch (error) {
    const errorMessage = (error as Error).message || error;
    console.error("Error al refrescar el token:", errorMessage);

    setTimeout(() => {
      redirect("/login");
    }, 1000);

    return null;
  }
}
