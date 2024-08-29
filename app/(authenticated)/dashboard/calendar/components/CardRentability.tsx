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
  const { darkMode } = useTheme();

  useEffect(() => {}, [currentMonthState, currentYearState]);

  const data = showPassRentabilityState
    ? importantDays.pastPaymentDays
    : importantDays.remainingPaymentDays;

  return (
    <div className="flex flex-col justify-center">
      {data.map(
        (
          payDay: {
            date:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            description:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
          },
          index: React.Key | null | undefined
        ) => (
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
                <h1
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {payDay.date}
                </h1>
              </div>
              <div className="flex justify-between amount">
                <h2 className={`${darkMode ? "text-white" : "text-black"}`}>
                  {payDay.description}
                </h2>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CardRentability;
