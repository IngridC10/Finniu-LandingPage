import { gql } from "@apollo/client";
export const CALCULATE_INVESTMENT = gql`
  mutation calculateInvestment(
    $ammount: Int!
    $deadline: Int!
    $currency: String!
  ) {
    calculateInvestment(
      input: { ammount: $ammount, deadline: $deadline, currency: $currency }
    ) {
      success
      profitability {
        preInvestmentAmount
      }
    }
  }
`;

export const SAVE_PRE_REGISTRATION = gql`
  mutation savePreRegistration(
    $documentNumber: String!
    $email: String!
    $phoneNumber: String!
    $phonePrefix: String!
  ) {
    savePreRegistration(
      documentNumber: $documentNumber
      email: $email
      phoneNumber: $phoneNumber
      phonePrefix: $phonePrefix
    ) {
      success
    }
  }
`;

export const LOGIN_USER = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      refreshToken
    }
  }
`;

export const RECOVERY_PASSWORD = gql`
  mutation RecoveryPassword($email: String!) {
    recoveryPassword(email: $email) {
      success
      successSendCode
    }
  }
`;

export const VALIDATE_OTP = gql`
  mutation validateOtp($email: String!, $otpCode: String!, $action: String!) {
    validOtpUser(input: { otpCode: $otpCode, email: $email, action: $action }) {
      success
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePasswordMinimal($email: String!, $newPassword: String!) {
    changePasswordMinimal(input: { email: $email, newPassword: $newPassword }) {
      success
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String) {
    refreshToken(refreshToken: $refreshToken) {
      refreshToken
      payload
      token
      refreshExpiresIn
    }
  }
`;
