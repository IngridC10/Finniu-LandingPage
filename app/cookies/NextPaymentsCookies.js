import cookie from "js-cookie";
export const saveNextPayments = (nextPayments) => {
  cookie.set("nextPayments", JSON.stringify(nextPayments), { expires: 7 });
};

export const getNextPayments = () => {
  const nextPaymentsString = cookie.get("nextPayments");
  return nextPaymentsString ? JSON.parse(nextPaymentsString) : null;
};

export const removeNextPayments = () => {
  cookie.remove("nextPayments");
};
