import cookie from "js-cookie";
export const saveNextPaymentsCookies = (nextPayments: any) => {
  cookie.set("nextPayments", JSON.stringify(nextPayments), { expires: 7 });
};

export const getNextPaymentsCookies = () => {
  const nextPaymentsString = cookie.get("nextPayments");
  return nextPaymentsString ? JSON.parse(nextPaymentsString) : null;
};

export const removeNextPaymentsCookies = () => {
  cookie.remove("nextPayments");
};
