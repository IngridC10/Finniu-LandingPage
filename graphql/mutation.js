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
      plan {
        uuid
        name
        description
        minAmount
        value
        twelveMonthsReturn
        sixMonthsReturn
        returnDateEstimate
        planImageUrl
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
