import cookie from "js-cookie";
export const saveIsSoles = (isSoles) => {
  cookie.set("isSoles", isSoles, { expires: 7 });
};

export const getIsSoles = () => {
  return cookie.get("isSoles") ?? "true";
};

export const removeIsSoles = () => {
  cookie.remove("isSoles");
};
