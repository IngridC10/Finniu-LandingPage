// import { jwtDecode } from "jwt-decode";

// export const decodedToken = (token) => {
//   const decoded = jwtDecode(token);

//   return decoded;
// };

// export const getTokenExpiredDate = (token) => {
//   const decoded = decodedToken(token);
//   const expTimestamp = decoded.exp;

//   const expirationDate = new Date(expTimestamp * 1000);

//   return expirationDate;
// };

// export const isTokenExpired = (token) => {
//   const expirationDate = getTokenExpiredDate(token);
//   const currentDate = new Date();
//   const isTokenExpired = expirationDate < currentDate;

//   return isTokenExpired;
// };
