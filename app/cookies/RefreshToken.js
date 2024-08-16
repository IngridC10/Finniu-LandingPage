// import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import { redirect } from "react-router-dom";

// export const refreshToken = async (refreshToken) => {
//   return new Promise(async (resolve, _) => {
//     const client = new ApolloClient({
//       link: createHttpLink({
//         uri: "https://finniu.com/api/v1/graph/finniu/",
//       }),
//       cache: new InMemoryCache(),
//     });
//     console.log("refreshToken", refreshToken);
//     try {
//       const { data: refreshTokenResponse } = await client.mutate({
//         mutation: REFRESH_TOKEN,
//         variables: { refreshToken },
//       });

//       if (refreshTokenResponse?.refreshToken?.token) {
//         saveToken(refreshTokenResponse.refreshToken.token);
//         saveRefreshToken(refreshTokenResponse.refreshToken.refreshToken);
//         resolve(refreshTokenResponse.refreshToken.token);
//       }
//     } catch (error) {
//       localStorage.removeItem("token");

//       setTimeout(() => {
//         redirect("/login");
//       }, 1000);
//     }
//   });
// };
