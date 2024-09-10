import React from "react";
import { FiArrowUp } from "react-icons/fi";
import CountUp from "react-countup";
import { useTheme } from "@/app/contexts/ThemeProvider";

interface PlanInProgressCardProps {
  rentabilityIncreased: number;
  startDateInvestment: string;
  finishDateInvestment: string;
  rentabilityPercent: number;
  planName: string;
  amount: string;
  rentabilityAmmount: string;
  isSoles: boolean;
  deadline: {
    name: string;
  };
}

const PlanInProgressCard = ({
  rentabilityIncreased,
  startDateInvestment,
  finishDateInvestment,
  rentabilityPercent,
  planName,
  amount,
  rentabilityAmmount,
  isSoles,
  deadline,
}: PlanInProgressCardProps) => {
  const { darkMode } = useTheme();

  const rentabilityFloat = parseFloat(rentabilityAmmount);
  const amountFloat = parseFloat(amount);
  const currentMoney = isSoles
    ? amountFloat + rentabilityFloat
    : amountFloat + rentabilityFloat;
  const moneySymbol = isSoles ? String("s/ ") : String("$  ");

  return (
    <div className="flex flex-col gap-10 leading-normal text-left ">
      <div>
        <div
          className={`w-[429px]  ${
            darkMode ? "bg-customBlack" : "bg-white"
          }  p-5 flex flex-col ml-2 mt-2.5 rounded-2xl `}
        >
          <div
            className={`text-lg font-bold flex flex-row justify-between ${
              darkMode ? "text-customLightBlue" : "text-darkBlueColor"
            }`}
          >
            <h1>{planName}</h1>
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-customGreen mr-1.5"></div>
              <div
                className={`${
                  darkMode ? "text-white" : "text-darkBlueColor"
                } text-xs font-normal `}
              >
                <h2>En curso</h2>
              </div>
            </div>
          </div>
          <h2
            className={`${
              darkMode ? "text-white" : "text-customGray"
            } text-xs font-normal `}
          >
            Plazo de {deadline.name} : {rentabilityPercent}%
          </h2>
          <div className="bg-blueCustom w-[390px] h-[128px] rounded-lg flex grid-cols-3 p-1.5 text-sm justify-center items-center ml-2 leading-snug mt-3">
            <div className="flex flex-col gap-2 text-xs font-normal text-black ">
              <h3>Dinero actualizado</h3>

              <h1 className="text-xl font-bold">
                {moneySymbol}
                <CountUp
                  start={0}
                  end={currentMoney}
                  duration={2.75}
                  separator=","
                  decimals={2}
                />
              </h1>

              <h5 className="text-sm font-normal">
                Inicio: <strong>{startDateInvestment}</strong>
              </h5>
            </div>

            <div className="flex flex-row ">
              <div className="pt-3.5 pl-5">
                <FiArrowUp className="w-8 h-10 mb-5 text-2xl text-customGreenPrimary" />
              </div>
              <div className="flex flex-col gap-2 mt-1 ">
                <h2 className="mt-[17.5px] text-xl font-bold text-customGreenPrimary text-center">
                  +
                  <CountUp
                    start={0}
                    end={rentabilityIncreased}
                    duration={2.75}
                    separator=","
                    decimals={2}
                  />
                  %
                </h2>

                <h5 className="text-sm font-normal text-black">
                  Finaliza: <strong>{finishDateInvestment}</strong>
                </h5>
              </div>
            </div>
          </div>
          <div className="text-xs flex grid-cols-4 w-310 h-10  ml-[57px] gap-2.5 mt-2.5 ">
            <div className="w-1 h-[51px] bg-customLightBlue text-15px leading-1.4 rounded-lg border border-black  mb-20 ml-[-29px]">
              {" "}
            </div>
            <div className="text-15px font-normal h-[45px] leading-1.4 flex flex-col items-center ">
              <h4 className={`${darkMode ? "text-white" : "text-black"}`}>
                Dinero Invertido
              </h4>
              <h2
                className={`text-center text-xl ${
                  darkMode ? "text-customLightBlue" : "text-darkBlueColor"
                }`}
              >
                {moneySymbol}
                <CountUp
                  start={0}
                  end={parseFloat(amount)}
                  duration={2.75}
                  separator=","
                  decimals={0}
                />
              </h2>
            </div>
            <div className=" w-1 h-[51px] bg-cremeColor rounded-lg border border-black  mb-20 ml-[69px]"></div>
            <div className="text-15px leading-1.4 h-[45px]">
              <h4
                className={`font-normal ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Intereses Generados
              </h4>
              <h2 className="text-xl font-normal text-center text-customGreen">
                {moneySymbol}
                <CountUp
                  start={0}
                  end={parseFloat(rentabilityAmmount)}
                  duration={2.75}
                  separator=","
                  decimals={0}
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanInProgressCard;
