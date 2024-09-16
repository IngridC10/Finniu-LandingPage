import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  const decoded = jwtDecode(token);

  return decoded;
};

export const getTokenExpiredDate = (token: string) => {
  const decoded = decodedToken(token);
  const expTimestamp = decoded.exp;

  const expirationDate = expTimestamp ? new Date(expTimestamp * 1000) : null;

  return expirationDate;
};

export const isTokenExpired = (token: string) => {
  const expirationDate = getTokenExpiredDate(token);
  const currentDate = new Date();
  const isTokenExpired = expirationDate ? expirationDate < currentDate : true;

  return isTokenExpired;
};
