import cookie from "js-cookie";

export const saveShowTour = (showTour) => {
  cookie.set("showTour", showTour, { expires: 7 });
};

export const getShowTour = () => {
  return cookie.get("showTour");
};

export const removeShowTour = () => {
  cookie.remove("showTour");
};
