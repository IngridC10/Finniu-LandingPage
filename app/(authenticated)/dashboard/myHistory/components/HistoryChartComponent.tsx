import { useCurrency } from "@/app/contexts/CurrencyProvider";
import { useTheme } from "@/app/contexts/ThemeProvider";
import React from "react";
import CountUp from "react-countup";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
function sum_amount_plans(amountList: { amount: string }[]) {
  if (!amountList) {
    return 0;
  }

  let sum = 0;
  amountList.forEach((plan: { amount: string }) => {
    sum = sum + parseFloat(plan.amount);
  });
  return sum;
}
interface HistoryChartComponentProps {
  dataReport: any;
}

const HistoryChartComponent: React.FC<HistoryChartComponentProps> = ({
  dataReport,
}) => {
  const { darkMode } = useTheme();
  const { isSoles } = useCurrency();

  const userInvestmentData = dataReport || {};
  const investmentDataInDollar =
    userInvestmentData.invesmentInDolares?.[0] || {};
  const investmentDataInSoles = userInvestmentData.invesmentInSoles?.[0] || {};

  let countFinished = 0;
  let countInCourse = 0;
  let countInProcess = 0;
  let countTotal = 0;

  const investmentFinishedList = isSoles
    ? investmentDataInSoles.invesmentFinished
    : investmentDataInDollar.invesmentFinished;

  const investmentInCourseList = isSoles
    ? investmentDataInSoles.invesmentInCourse
    : investmentDataInDollar.invesmentInCourse;

  const investmentInProcessList = isSoles
    ? investmentDataInSoles.invesmentInProcess
    : investmentDataInDollar.invesmentInProcess;

  countTotal = isSoles
    ? investmentDataInSoles.countPlanesActive || 0
    : investmentDataInDollar.countPlanesActive || 0;

  countFinished = sum_amount_plans(investmentFinishedList || []);
  countInCourse = sum_amount_plans(investmentInCourseList || []);
  countInProcess = sum_amount_plans(investmentInProcessList || []);

  const totalInvestments = countInCourse + countFinished;
  let chartData = [];
  let COLORS = [];
  if (countTotal === 0) {
    chartData = [
      {
        name: "Inversiones finalizadas",
        value: 100,
      },
    ];

    COLORS = ["#B9B9B9"];
  } else {
    chartData = [
      {
        name: "Inversiones finalizadas",
        value: Math.round((countFinished / totalInvestments) * 100),
      },
      {
        name: "Inversiones en curso",
        value: Math.round((countInCourse / totalInvestments) * 100),
      },

      {
        name: "Inversiones en proceso",
        value: Math.round((countInProcess / totalInvestments) * 100),
      },
    ];
    COLORS = ["#9381FF", "#0D3A5C", "#A2E6FA"];
  }

  return (
    <div
      className={`lg:w-[602px] xl:w-[567px] md:w-full h-[268px] ${
        darkMode ? "bg-customBlack" : "bg-white"
      } rounded-[30px] flex content-center cursor-pointer items-center hover:shadow-lg`}
    >
      <div className="grid grid-cols-3 general-container">
        <div className="column-circle h-[200px] w-[200px] rounded-full flex content-center items-center mr-[51px] text-sm text-black col-span-1">
          <ResponsiveContainer width="100%" height={200}>
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
            }        chart-text top-[261px] right-[661px]absolute flex content-center items-center text-center  text-sm transform translate-x-1/2 translate-y-1/3 text-black mt-[-18px] ml-[-173px] flex-col `}
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
                end={countTotal}
                duration={2.75}
                separator=","
              />
            </span>
          </span>
        </div>

        <div className="column-state flex flex-col lg:items-start md:items-start justify-center lg: w-[360px] md-[299px] gap-5 lg:pr-0 lg:p-0 md:p-6">
          <div className="flex flex-row items-center content-center gap-5">
            <div
              className={`circle h-4 w-4 rounded-full mt-[5px] ${
                countInCourse === 0
                  ? "h-4 w-4 rounded-full mt-1 bg-[#B9B9B9]"
                  : "h-4 w-4 rounded-full mt-1 bg-[#0D3A5C]"
              }`}
            ></div>
            <h2
              className={`md:text-sm lg:text-lg font-normal ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Inversiones en curso
            </h2>
            <h3
              className={`font-normal md:text-sm lg:text-[20px] ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {isSoles ? "S/" : "$"}
              <CountUp
                start={0}
                end={countInCourse ?? 0}
                duration={2.75}
                separator=","
                decimals={2}
              />
            </h3>
          </div>

          <div className="flex flex-row items-center content-center gap-5">
            <div
              className={`circle h-4 w-4 rounded-full mt-[5px] ${
                countFinished === 0
                  ? "h-4 w-4 rounded-full mt-1 bg-[#B9B9B9]"
                  : "h-4 w-4 rounded-full mt-1 bg-[#9381FF]"
              }`}
            ></div>
            <h2
              className={`md:text-sm lg:text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Inversiones finalizadas
            </h2>
            <h3
              className={`font-normal md:text-sm ml-[-11px] lg:text-[20px] ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {isSoles ? "S/" : "$"}
              <CountUp
                start={0}
                end={countFinished ?? 0}
                duration={2.75}
                separator=","
                decimals={2}
              />
            </h3>
          </div>

          <div className="flex flex-row items-center content-center gap-5">
            <div
              className={`circle h-4 w-4 rounded-full mt-[5px] ${
                countInProcess === 0
                  ? "h-4 w-4 rounded-full mt-1 bg-[#B9B9B9]"
                  : "h-4 w-4 rounded-full mt-1 bg-[#A2E6FA]"
              }`}
            ></div>
            <h2
              className={`md:text-sm lg:text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Inversiones en proceso
            </h2>
            <h3
              className={`font-normal md:text-sm ml-[-11px] lg:text-[20px] ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {isSoles ? "S/" : "$"}
              <CountUp
                start={0}
                end={countInProcess ?? 0}
                duration={2.75}
                separator=","
                decimals={2}
              />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryChartComponent;
