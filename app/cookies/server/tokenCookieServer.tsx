import { cookies } from "next/headers";

export const getServerToken = (): string | undefined => {
  const serverCookies = cookies();
  return serverCookies.get("token")?.value;
};

export const getServerRefreshToken = (): string | undefined => {
  const serverCookies = cookies();
  return serverCookies.get("refreshToken")?.value;
};

export const getAllServerCookies = () => {
  const serverCookies = cookies();
  return serverCookies.getAll();
};