import cookie from "js-cookie";

export const saveUserInfoAllInvestment = (userInfoInvestment) => {
  cookie.set("userInfoInvestment", userInfoInvestment, { expires: 7 });
};

export const getInfoAllInvestment = () => {
  return cookie.get("userInfoInvestment");
};

export const removeInfoAllInvestment = () => {
  cookie.remove("userInfoInvestment");
};
