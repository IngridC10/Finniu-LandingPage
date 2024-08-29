import cookie from "js-cookie";

export const setProfileCookies = (profile: any) => {
  cookie.set("userProfile", JSON.stringify(profile), { expires: 7 });
};

export const getProfileCookies = () => {
  const userProfileString = cookie.get("userProfile");

  return userProfileString ? JSON.parse(userProfileString) : null;
};

export const removeProfileCookies = () => {
  cookie.remove("userProfile");
};
