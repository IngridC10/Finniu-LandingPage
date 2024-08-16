import cookie from "js-cookie";
export const saveIsDarkMode = (isDark) => {
  cookie.set("isDark", isDark, { expires: 7 });
};

export const getIsDarkMode = () => {
  return cookie.get("isDark");
};

export const removeIsDarkMode = () => {
  cookie.remove("isDark");
};
