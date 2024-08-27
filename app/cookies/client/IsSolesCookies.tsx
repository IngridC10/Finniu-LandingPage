import cookie from "js-cookie";
export const saveIsSolesCookies = (isSoles: string | boolean) => {
  cookie.set("isSoles", String(isSoles), { expires: 7 });
};

export const getIsSolesCookies = () => {
  return cookie.get("isSoles") ?? "true";
};

export const removeIsSolesCookies = () => {
  cookie.remove("isSoles");
};
