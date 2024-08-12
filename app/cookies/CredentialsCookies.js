import cookie from "js-cookie";

export const saveCredentials = (email, password) => {
  cookie.set("userEmail", email, { expires: 7 }); // Expira en 7 días
  cookie.set("userPassword", password, { expires: 7 });
};

export const getCredentials = () => {
  const email = cookie.get("userEmail");
  const password = cookie.get("userPassword");
  return { email, password };
};

export const removeCredentials = () => {
  cookie.remove("userEmail");
  cookie.remove("userPassword");
};

export const saveRememberPasswordChecked = (isChecked) => {
  cookie.set("rememberPassword", isChecked, { expires: 7 });
};

export let isRememberPasswordChecked = () => {
  return cookie.get("rememberPassword") === "true";
};
