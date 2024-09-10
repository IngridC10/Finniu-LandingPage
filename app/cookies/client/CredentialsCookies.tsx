import secureLocalStorage from "react-secure-storage";
import cookie from "js-cookie";

export const saveCredentialsCookies = (
  email: string,
  password: string | number | boolean | object
) => {
  cookie.set("userEmail", email, { expires: 7 });
  secureLocalStorage.setItem("userPassword", password);
};

export const getCredentialsCookies = () => {
  const email = cookie.get("userEmail");
  const password = secureLocalStorage.getItem("userPassword");

  return { email, password };
};

export const removeCredentialsCookies = () => {
  const { email, password } = getCredentialsCookies();

  cookie.remove("userEmail");
  secureLocalStorage.removeItem("userPassword");
};

export const saveRememberPasswordCheckedCookies = (
  isChecked: string | boolean
) => {
  cookie.set("rememberPassword", String(isChecked), { expires: 7 });
};

export let isRememberPasswordCheckedCookies = () => {
  return cookie.get("rememberPassword") === "true";
};
