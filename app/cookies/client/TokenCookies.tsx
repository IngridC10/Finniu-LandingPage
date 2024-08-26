"use client";

import cookie from "js-cookie";

export const saveToken = (token: string) => {
  cookie.set("token", token, { expires: 7 });
};

export const getToken = (): string | undefined => {
  return cookie.get("token");
};

export const removeToken = () => {
  cookie.remove("token");
};

export const saveRefreshToken = (refreshToken: string) => {
  cookie.set("refreshToken", refreshToken, { expires: 7 });
};

export const getRefreshToken = (): string | undefined => {
  return cookie.get("refreshToken");
};

export const removeRefreshToken = () => {
  cookie.remove("refreshToken");
};


