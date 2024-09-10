import cookie from "js-cookie";
export const saveIsDarkModeCookies = (isDark: string) => {
  cookie.set("isDark", isDark, { expires: 7 });
};

export const getIsDarkModeCookies = () => {
  return cookie.get("isDark");
};

export const removeIsDarkModeCookies = () => {
  cookie.remove("isDark");
};
