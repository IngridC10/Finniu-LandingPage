export type Transaction = {
  operationCode: string;
  rentabilityPercent: number;
  amount: number;
  deadline: { id: string; name: string } | string;
  rentabilityPerMonth: number | null;
  boucherList: Array<{ boucherImage: string }>;
  startDateInvestment: string;
  depositBank: {
    bankLogoUrl: string;
    bankLogo: string;
  };
};
