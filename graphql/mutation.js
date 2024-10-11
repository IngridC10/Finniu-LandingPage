import { gql } from "@apollo/client";
export const CALCULATE_INVESTMENT = gql`
  mutation calculateInvestment(
    $ammount: Int!
    $deadline: Int!
    $currency: String!
    $name: String!
    $email: String!
    $phone: String!
  ) {
    calculateInvestment(
      input: {
        ammount: $ammount
        deadline: $deadline
        currency: $currency
        name: $name
        email: $email
        phone: $phone
      }
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
