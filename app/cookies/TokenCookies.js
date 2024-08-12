import cookie from "js-cookie";

export const saveToken = (token) => {
  cookie.set("token", token, { expires: 7 }); //expired seven days
};

export const getToken = () => {
  return cookie.get("token");
};

export const removeToken = () => {
  cookie.remove("token");
};

export const saveRefreshToken = (refreshToken) => {
  cookie.set("refreshToken", refreshToken, { expires: 7 }); // expired seven days
};

export const getRefreshToken = () => {
  return cookie.get("refreshToken");
};
export const removeRefreshToken = () => {
  cookie.remove("refreshToken");
};
