import cookie from "js-cookie";

export const saveUserInfoAllInvestmentCookies = (
  userInfoInvestment: string
) => {
  cookie.set("userInfoInvestment", userInfoInvestment, { expires: 7 });
};

export const getInfoAllInvestmentCookies = () => {
  return cookie.get("userInfoInvestment");
};

export const removeInfoAllInvestmentCookies = () => {
  cookie.remove("userInfoInvestment");
};
