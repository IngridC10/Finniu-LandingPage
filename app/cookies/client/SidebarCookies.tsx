import Cookies from "js-cookie";
export const saveIsOpenSidebarCookies = (isOpen: any) => {
  Cookies.set("isOpen", String(isOpen), { expires: 7 });
};

export const getIsOpenSidebarCookies = () => {
  const value = Cookies.get("isOpen");
  return value === "true";
};

export const removeIsOpenSidebarCookies = () => {
  Cookies.remove("isOpen");
};

export const saveSelectedMenuCookies = (selectedMenu: string) => {
  Cookies.set("selectedMenu", selectedMenu, { expires: 7 });
};
export const getSelectedMenuCookies = () => {
  return Cookies.get("selectedMenu");
};

export const removeSelectedMenuCookies = () => {
  Cookies.remove("selectedMenu");
};
