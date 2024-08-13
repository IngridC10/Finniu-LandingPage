import secureLocalStorage from "react-secure-storage";
import cookie from "js-cookie";

export const saveCredentials = (email, password) => {
  cookie.set("userEmail", email, { expires: 7 });
  secureLocalStorage.setItem("userPassword", password);
  console.log("Saving email:", email);
  console.log("Saving password:", password);
};

export const getCredentials = () => {
  const email = cookie.get("userEmail");
  const password = secureLocalStorage.getItem("userPassword");

  return { email, password };
};

export const removeCredentials = () => {
  const { email, password } = getCredentials();

  cookie.remove("userEmail");
  secureLocalStorage.removeItem("userPassword");
  console.log("Retrieved email:", email);
  console.log("Retrieved password:", password);
};

export const saveRememberPasswordChecked = (isChecked) => {
  cookie.set("rememberPassword", isChecked, { expires: 7 });
};

export let isRememberPasswordChecked = () => {
  return cookie.get("rememberPassword") === "true";
};
