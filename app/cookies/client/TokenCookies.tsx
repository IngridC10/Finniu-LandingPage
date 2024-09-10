"use client";

import cookie from "js-cookie";

export const saveTokenCookies = (token: string) => {
  cookie.set("token", token, { expires: 7 });
};

export const getTokenCookies = (request?: unknown): string | undefined => {
  return cookie.get("token");
};

export const removeTokenCookies = () => {
  cookie.remove("token");
};

export const saveRefreshTokenCookies = (refreshToken: string) => {
  cookie.set("refreshToken", refreshToken, { expires: 7 });
};

export const getRefreshTokenCookies = (): string | undefined => {
  return cookie.get("refreshToken");
};

export const removeRefreshTokenCookies = () => {
  cookie.remove("refreshToken");
};
