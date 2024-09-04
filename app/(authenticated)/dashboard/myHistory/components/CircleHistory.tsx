"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CountUp from "react-countup";
import { useTheme } from "@/app/contexts/ThemeProvider";
import { useCurrency } from "@/app/contexts/CurrencyProvider";

type InvestmentData = {
  invesmentInCourse: any[];
  invesmentFinished: any[];
  invesmentInProcess: any[];
  countPlanesActive: number;
};

type DataReport = {
  invesmentInSoles: InvestmentData[];
  invesmentInDolares: InvestmentData[];
};

const CircleHistory = ({ dataReport }: { dataReport: DataReport }) => {
  const { darkMode } = useTheme();
  const { isSoles } = useCurrency();

  const reportSoles = dataReport?.invesmentInSoles || [];

  const reportDollars = dataReport?.invesmentInDolares || [];

  const selectedReport = isSoles ? reportSoles : reportDollars;

  const calculateTotal = (investmentData: InvestmentData[]) => {
    let totalInCourse = 0;
    let totalFinished = 0;
    let totalInProcess = 0;

    investmentData.forEach((currency) => {
      totalInCourse += currency.invesmentInCourse.length;
      totalFinished += currency.invesmentFinished.length;
      totalInProcess += currency.invesmentInProcess.length;
    });

    const countInvestment = investmentData.reduce((total, current) => {
      return total + (current.countPlanesActive || 0);
    }, 0);

    return {
      invesmentInCourse: totalInCourse,
      invesmentFinished: totalFinished,
      invesmentInProcess: totalInProcess,
      countInvestment: countInvestment,
    };
  };

  const totalInvestment = calculateTotal(selectedReport);

  let chartData = [];
  let COLORS = [];
  if (totalInvestment?.countInvestment === 0) {
    chartData = [
      {
        name: "Inversiones en soles",
        value: 100,
      },
    ];

    COLORS = ["#B9B9B9"];
  } else {
    chartData = [{ name: "Inversiones en soles", value: 100 }];

    COLORS = totalInvestment.countInvestment === 0 ? ["#B9B9B9"] : ["#A2E6FA"];
  }

  return (
    <div
      className={`lg:w-[602px] xl:w-[481px] xxl:w-[567px] md:w-full h-[268px] ${
        darkMode ? "bg-customBlack" : "bg-white"
      } rounded-[30px] flex content-center cursor-pointer items-center hover:shadow-lg`}
    >
      <div className="grid grid-cols-3 general-container">
        <div className="h-[200px] w-[200px] rounded-full flex content-center items-center text-sm relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={67}
                outerRadius={84}
                paddingAngle={4}
                dataKey="value"
                stroke="transparent"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <span
            className={`${
              darkMode ? "text-white" : "text-black"
            } chart-text absolute top-[70px] right-[99px] flex flex-col content-center items-center text-center text-sm transform translate-x-1/2 translate-y-1/3`}
          >
            Inversiones &nbsp;
            <span
              style={{
                color: darkMode ? "#EEEEEE" : "#000000",
                fontWeight: "bold",
              }}
            >
              <CountUp
                start={0}
                end={totalInvestment.countInvestment}
                duration={2.75}
                separator=","
              />
            </span>
          </span>
        </div>

        {isSoles && (
          <div className="flex flex-col justify-center gap-5 lg:w-[360px] md:w-[299px] lg:items-start md:items-start column-state lg:p-0 md:p-6">
            <div className="flex flex-row items-center justify-center gap-5 xl:ml-6 lg:ml-0 xxl:ml-0">
              <div
                className={`${
                  totalInvestment.countInvestment === 0
                    ? "bg-[#B9B9B9] h-4 w-4 rounded-full mt-1"
                    : " bg-[#A2E6FA] h-4 w-4 rounded-full mt-1"
                }`}
              ></div>
              <h1 className={`${darkMode ? "text-white" : "text-black"}`}>
                <CountUp
                  start={0}
                  end={totalInvestment.countInvestment}
                  duration={2.75}
                  separator=","
                />
              </h1>
              <h2
                className={`${
                  darkMode ? "text-white" : "text-black"
                } lg:text-lg md:text-sm font-normal mr-[14px]`}
              >
                Inversiones en soles
              </h2>
            </div>
          </div>
        )}

        {!isSoles && (
          <div className="flex flex-col justify-center gap-5 lg:w-[360px] md:w-[299px] lg:items-start md:items-start column-state lg:p-0 md:p-6">
            <div className="flex flex-row items-center justify-center gap-5">
              <div
                className={`${
                  totalInvestment.countInvestment === 0
                    ? "h-4 w-4 rounded-full mt-1 bg-[#B9B9B9]"
                    : "h-4 w-4 rounded-full mt-1 bg-[#A2E6FA]"
                }`}
              ></div>
              <h1 className={`${darkMode ? "text-white" : "text-black"}`}>
                {totalInvestment.countInvestment}
              </h1>
              <h2
                className={`lg:text-lg md:text-sm font-normal ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Inversiones en dólares
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircleHistory;
