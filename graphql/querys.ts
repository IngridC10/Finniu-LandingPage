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

export const RENTABILITY_GRAPH = gql`
  query rentabilityGraph($timeLine: TimeLineEnum) {
    rentabilityGraph(timeLine: $timeLine) {
      rentabilityInPen {
        month
        date
        year
        amountPoint
        details
      }
      rentabilityInUsd {
        month
        date
        year
        amountPoint
        details
      }
    }
  }
`;

export const GET_CALENDAR = gql`
  query getImportantDays {
    importantDays {
      month
      date
      description
    }
  }
`;

export const PAYMENT_DAY = gql`
  query getPaymentDays {
    paymentDays {
      month
      date
      description
    }
  }
`;

export const IMPORTANT_DAYS = gql`
  query getImportantDays {
    importantDays {
      month
      date
      description
    }
  }
`;

export const REMAINING_PAYMENT_DAYS = gql`
  query getRemainingPaymentDays {
    remainingPaymentDays {
      month
      date
      description
    }
  }
`;

export const PAST_PAYMENT_DAYS = gql`
  query pastPaymentDays {
    pastPaymentDays {
      month
      date
      description
    }
  }
`;

export const GET_NEXT_PAYMENTS = gql`
  query getNextPayments {
    nextPayments {
      paymentInSoles {
        planName
        amount
        rentability
        totalAmount
        paymentDate
      }
      paymentInDolares {
        planName
        amount
        rentability
        totalAmount
        paymentDate
      }
    }
  }
`;

export const USER_INFO_ALL_INVESTMENT = gql`
  query UserInfoAllInvestment {
    userInfoAllInvestment {
      invesmentInSoles {
        totalBalanceAmmount
        countPlanesActive
        capitalInCourse
        totalBalanceRentability
        totalBalanceRentabilityIncreased
        invesmentInCourse {
          rentabilityIncreased
          startDateInvestment
          finishDateInvestment
          rentabilityPercent
          rentabilityPerMonth
          operationCode
          depositBank {
            bankLogoUrl
          }
          boucherList {
            boucherImage
          }

          planName
          amount
          rentabilityAmmount
          deadline {
            id
            name
          }
        }
        invesmentInProcess {
          startDateInvestment
          rentabilityPercent
          planName
          amount
          rentabilityPerMonth
          rentabilityAmmount
          operationCode
          depositBank {
            bankLogoUrl
          }

          boucherList {
            boucherImage
          }

          deadline {
            id
            name
          }
        }

        invesmentInCourse {
          startDateInvestment
          rentabilityPercent
          planName
          rentabilityPerMonth
          amount
          operationCode
          depositBank {
            bankLogo
          }

          boucherList {
            boucherImage
          }

          rentabilityAmmount
          deadline {
            id
            name
          }
        }

        invesmentFinished {
          startDateInvestment
          rentabilityPercent
          rentabilityPerMonth
          operationCode
          depositBank {
            bankLogo
          }

          boucherList {
            boucherImage
          }

          planName
          amount
          rentabilityAmmount
          deadline {
            id
            name
          }
        }

        invesmentCanceled {
          startDateInvestment
          rentabilityPercent
          operationCode
          rentabilityPerMonth
          depositBank {
            bankLogo
          }

          boucherList {
            boucherImage
          }

          planName
          amount
          rentabilityAmmount
          deadline {
            id
            name
          }
        }
      }
      invesmentInDolares {
        totalBalanceAmmount
        countPlanesActive
        totalBalanceRentability
        invesmentInCourse {
          startDateInvestment
          rentabilityPerMonth
          rentabilityPercent
          planName
          operationCode
          depositBank {
            bankLogo
          }

          boucherList {
            boucherImage
          }

          amount
          rentabilityAmmount
          deadline {
            id
            name
          }
        }
        invesmentInProcess {
          startDateInvestment
          rentabilityPerMonth
          rentabilityPercent
          operationCode
          depositBank {
            bankLogo
          }

          boucherList {
            boucherImage
          }

          planName
          amount
          rentabilityAmmount
          deadline {
            id
            name
          }
        }

        invesmentInCourse {
          startDateInvestment
          rentabilityPercent
          planName
          rentabilityPerMonth
          operationCode
          amount
          depositBank {
            bankLogo
          }

          boucherList {
            boucherImage
          }

          rentabilityAmmount
          deadline {
            id
            name
          }
        }

        invesmentFinished {
          startDateInvestment
          rentabilityPercent
          rentabilityPerMonth
          planName
          operationCode
          depositBank {
            bankLogo
          }

          boucherList {
            boucherImage
          }

          amount
          rentabilityAmmount
          deadline {
            id
            name
          }
        }

        invesmentCanceled {
          startDateInvestment
          rentabilityPercent
          rentabilityPerMonth
          planName
          operationCode
          amount
          depositBank {
            bankLogo
          }

          boucherList {
            boucherImage
          }

          rentabilityAmmount
          deadline {
            id
            name
          }
        }
      }
    }
  }
`;
