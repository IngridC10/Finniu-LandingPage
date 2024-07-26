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
