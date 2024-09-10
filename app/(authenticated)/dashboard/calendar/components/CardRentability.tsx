import { useTheme } from "@/app/contexts/ThemeProvider";
import React, { useEffect } from "react";

interface CardRentabilityProps {
  currentMonthState: number;
  currentYearState: number;
  importantDays: {
    pastPaymentDays: Array<{ date: string; description: string }>;
    remainingPaymentDays: Array<{ date: string; description: string }>;
  };
  showPassRentabilityState: boolean;
}
const CardRentability = ({
  currentMonthState,
  currentYearState,
  importantDays,
  showPassRentabilityState,
}: CardRentabilityProps) => {
  useEffect(() => {}, [currentMonthState, currentYearState]);

  const data = showPassRentabilityState
    ? importantDays.pastPaymentDays
    : importantDays.remainingPaymentDays;

  return (
    <div className="flex flex-col justify-center">
      {data.map((payDay, index) => (
        <div
          key={index}
          className={`${
            showPassRentabilityState
              ? "bg-customLilac border-customBorderLilac "
              : "bg-customChartRentability border-customBlueRentability"
          } border-4 rounded-xl p-4 mt-1 w-[422px]`}
        >
          <div className="text-container">
            <div className="flex justify-between date">
              <h1 className="font-bold  text-black">{payDay.date}</h1>
            </div>
            <div className="flex justify-between amount">
              <h2 className="text-black">{payDay.description}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRentability;
