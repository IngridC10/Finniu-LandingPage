import cookie from "js-cookie";

export const setProfile = (profile) => {
  cookie.set("userProfile", JSON.stringify(profile), { expires: 7 });
};

export const getProfile = () => {
  const userProfileString = cookie.get("userProfile");
  console.log("Perfil recuperado de cookies:", userProfileString);
  return userProfileString ? JSON.parse(userProfileString) : null;
};

export const removeProfile = () => {
  cookie.remove("userProfile");
};
