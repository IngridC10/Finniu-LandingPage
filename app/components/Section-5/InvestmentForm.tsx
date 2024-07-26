"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import LogoFinniuLight from "@/images/Section-5/LogoFinniuLight.png";
import Bill from "@/images/Section-5/Bill.png";
import { calculateInvestment } from "@/app/actions/calculateInvestment";

const InvestmentForm = () => {
  const [investmentAmountState, setInvestmentAmountState] = useState("");
  const [investmentTimeState, setInvestmentTimeState] = useState(6);
  const [isWhereToFindButtonActiveState, setWhereToFindButtonActiveState] =
    useState(true);
  const [currencyState, setCurrencyState] = useState("nuevo sol");
  const [isCalculatedState, setIsCalculatedState] = useState(false);
  const [calculatedResultState, setCalculatedResultState] = useState({
    initialAmount: 0,
    finalAmount: 0,
    investmentTimeState: 0,
  });
  const [errorState, setErrorState] = useState("");

  const steps = [6, 12, 24, 36];

  const handleButtonClick = (currency: string) => {
    setCurrencyState(currency === "Dólares" ? "dolar" : "nuevo sol");
    setWhereToFindButtonActiveState(!isWhereToFindButtonActiveState);
  };

  const currencySymbol = currencyState === "nuevo sol" ? "S/" : "$";

  const handleCalculateClick = async () => {
    const initialAmount =
      parseFloat(investmentAmountState.replace(/,/g, "")) || 0;

    if (isNaN(initialAmount) || initialAmount <= 0) {
      setErrorState("El monto es obligatorio");
      return;
    }

    if (initialAmount < 1000) {
      setErrorState("El monto no es válido");
      return;
    } else {
      setErrorState("");
    }

    try {
      const { success, data } = await calculateInvestment({
        ammount: initialAmount,
        deadline: investmentTimeState,
        currency: currencyState,
      });

      console.log("Datos devueltos:", data);

      if (success) {
        const { calculateInvestment: investmentData } = data as {
          calculateInvestment: any;
        };

        console.log("investmentData:", investmentData);

        setCalculatedResultState({
          initialAmount,
          finalAmount: investmentData.profitability.preInvestmentAmount,
          investmentTimeState,
        });
        setIsCalculatedState(true);
      } else {
        console.error("Failed to calculate investment");
      }
    } catch (error) {
      console.error("Error calculating investment:", error);
    }
  };

  const handleRecalculateClick = () => {
    setIsCalculatedState(false);
    setInvestmentAmountState("");
  };

  return (
    <div className="w-[351px] 2xl:w-[618px] mt-4 2xl:mt-0 bg-white relative flex flex-col justify-center items-center p-12 rounded-3xl h-[474px] 2xl:h-[620px] leading-[49px] shadow-lg">
      {isCalculatedState ? (
        <div className="text-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={LogoFinniuLight} alt="Logo" width={50} />
          </div>
          <p className="text-[16px] text-black ">Si comienzas con</p>
          <p className="text-[23px] font-bold text-black">
            {currencySymbol}{" "}
            {calculatedResultState.initialAmount.toLocaleString()}
          </p>
          <p className="text-[20px] 2xl:text-[32px] text-black font-bold ">
            <span>En </span>
            <span className="text-lighBlueColorSimulador text-[20px] 2xl:text-[32px] font-bold">
              {calculatedResultState.investmentTimeState} meses
            </span>
            <span> recibirás</span>
            <span className="text-[20px] 2xl:text-[32px] ml-[5px] font-bold">
              &#128184;
            </span>
          </p>
          <div className="bg-lighBlue 2xl:w-[298px] w-[210px] h-[62px] flex justify-center items-center  2xl:h-[92px] m-auto p-0 2xl:p-4 rounded-xl my-4">
            <p className="text-[23px] font-bold">
              {currencySymbol}{" "}
              {calculatedResultState.finalAmount.toLocaleString()}
            </p>
          </div>
          <a href="#register">
            <ButtonComponent
              text="Quiero invertir"
              className="w-[314px] 2xl:w-[441px] 2xl:h-[77px] h-12 text-[16px] mt-3 2xl:mt-0 2xl:text-[24px] bg-blueColorButton text-white rounded-xl mb-4"
            />
          </a>
          <button
            onClick={handleRecalculateClick}
            className="text-blueColorButton font-semibold text-[16px] 2xl:text-[24px]"
          >
            Volver a calcular
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-row items-center gap-2 block 2xl:hidden absolute -top-[55px] z-20">
            <h1 className="text-[30px] font-bold">Simula tu inversión</h1>
            <div className="h-[38px] mb-3">
              <Image src={Bill} alt="bill" height={38} />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="text-[16px] 2xl:text-[30px] font-bold text-black">
              Quiero invertir en
            </h2>

            <div
              className={`flex flex-row m-2 w-[162px] 2xl:w-[242px] items-center 2xl:h-[60px] h-[45px] p-2 bg-blueColorBackground justify-around rounded-full ${
                isWhereToFindButtonActiveState
                  ? "bg-lightBlueColor"
                  : "bg-blueDarkColor"
              }`}
            >
              <ButtonComponent
                text="Soles"
                onClick={() => handleButtonClick("Soles")}
                className={`2xl:h-[45px] h-[33px] text-[15px] 2xl:text-[20px] shadow-md w-[73px] 2xl:w-[111px] gap-2 flex justify-center items-center rounded-full ${
                  isWhereToFindButtonActiveState
                    ? "bg-lightColor text-blackColorText"
                    : "bg-blueDarkColor text-white"
                }`}
              ></ButtonComponent>
              <ButtonComponent
                text="Dólares"
                onClick={() => handleButtonClick("Dólares")}
                className={`2xl:h-[45px] h-[37px] w-[73px] 2xl:w-[111px] m-1 flex justify-center items-center gap-2 rounded-full text-[15px] 2xl:text-[20px] ${
                  isWhereToFindButtonActiveState
                    ? "bg-lightBlueColor text-blueDarkColor"
                    : "bg-blueColorButton text-white"
                }`}
              ></ButtonComponent>
            </div>
          </div>

          <div>
            <label
              className="block text-black text-[15px] 2xl:text-[20px] font-bold mb-0 2xl:mb-2"
              htmlFor="investmentAmount"
            >
              ¿Cuánto quiero invertir?
            </label>
            <div className="relative">
              <span className="absolute mt-2 left-0 pl-3  text-lg 2xl:text-2xl text-grayColorBackground flex items-center">
                {currencySymbol}
              </span>
              <input
                id="investmentAmount"
                type="text"
                value={investmentAmountState}
                onChange={(e) => setInvestmentAmountState(e.target.value)}
                className={`pl-10 pr-3 py-2 2xl:text-[18px] border-t-0 border-l-0 border-r-0 text-sm border-b-[5px] ${
                  errorState ? "border-red-500" : "border-grayColorLine"
                } 2xl:w-full w-[320px]`}
                placeholder="Ingrese el monto"
              />

              {errorState && (
                <p className="text-red-500 text-sm mt-1">{errorState}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-row w-full items-center text-center mt-[10px] justify-between">
              <label className="block text-black text-[15px] 2xl:text-[20px] font-bold mb-2">
                ¿Por cuánto tiempo?
              </label>
              <h2 className="text-[15px]">{investmentTimeState} meses</h2>
            </div>
            <div className="flex items-center relative">
              <div className="2xl:w-full w-[320px] mt-0 2xl:mt-[20px]">
                <input
                  type="range"
                  min="0"
                  max={steps.length - 1}
                  step="1"
                  value={steps.indexOf(investmentTimeState)}
                  onChange={(e) =>
                    setInvestmentTimeState(steps[Number(e.target.value)])
                  }
                  className="w-full"
                  style={{ direction: "ltr" }}
                />
                <div className="flex justify-between text-sm text-black mt-1">
                  {steps.map((step) => (
                    <span key={step}>{step} meses</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <ButtonComponent
              text="Calcular"
              onClick={handleCalculateClick}
              className="w-full bg-blueColorButton text-white rounded-full py-2 mt-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentForm;
