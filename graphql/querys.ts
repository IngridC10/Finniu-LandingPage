import { gql } from "@apollo/client";
export const USER_PROFILE = gql`
  query Userprofile {
    userProfile {
      firstName
      nickName
      occupation
      phoneNumber
      email
      imageProfileUrl
    }
  }
`;
