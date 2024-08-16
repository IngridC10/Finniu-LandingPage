import Cookies from "js-cookie";
export const saveIsOpenSidebar = (isOpen) => {
  Cookies.set("isOpen", String(isOpen), { expires: 7 });
};

export const getIsOpenSidebar = () => {
  const value = Cookies.get("isOpen");
  return value === "true";
};

export const removeIsOpenSidebar = () => {
  Cookies.remove("isOpen");
};

export const saveSelectedMenu = (selectedMenu) => {
  Cookies.set("selectedMenu", selectedMenu, { expires: 7 });
};
export const getSelectedMenu = () => {
  return Cookies.get("selectedMenu");
};

export const removeSelectedMenu = () => {
  Cookies.remove("selectedMenu");
};
