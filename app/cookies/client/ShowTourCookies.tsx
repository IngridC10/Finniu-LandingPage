import cookie from "js-cookie";

export const saveShowTourCookies = (showTour: string) => {
  cookie.set("showTour", showTour, { expires: 7 });
};

export const getShowTourCookies = () => {
  return cookie.get("showTour");
};

export const removeShowTourCookies = () => {
  cookie.remove("showTour");
};
