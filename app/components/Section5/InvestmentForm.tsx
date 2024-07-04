"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import LogoFinniuLight from "/images/LogoFinniuLight.png";

const InvestmentForm = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentTime, setInvestmentTime] = useState(6);
  const [isWhereToFindButtonActive, setWhereToFindButtonActive] =
    useState(false);
  const [currency, setCurrency] = useState("Soles");
  const [isCalculated, setIsCalculated] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState({
    initialAmount: 0,
    finalAmount: 0,
    investmentTime: 0,
  });

  const handleButtonClick = () => {
    setWhereToFindButtonActive(!isWhereToFindButtonActive);
  };

  const calculatePosition = (
    value: number,
    min: number,
    max: number,
    width: number
  ) => {
    return ((value - min) / (max - min)) * width;
  };

  const handleInputChange = (e: {
    target: { value: any; offsetWidth: number };
  }) => {
    const value = Number(e.target.value);
    setInvestmentTime(value);

    const position = calculatePosition(value, 6, 36, e.target.offsetWidth);
  };

  const currencySymbol = currency === "Soles" ? "S/" : "$";

  const calculateInvestment = () => {
    const rate = 0.16;
    const initialAmount = parseFloat(investmentAmount.replace(/,/g, "")) || 0;
    const investmentTimeInYears = investmentTime / 12;

    const finalAmount = initialAmount * (1 + rate * investmentTimeInYears);

    setCalculatedResult({
      initialAmount,
      finalAmount,
      investmentTime,
    });

    setIsCalculated(true);
  };

  const handleCalculateClick = () => {
    calculateInvestment();
  };

  return (
    <div className="w-[643px] bg-white flex flex-col justify-center items-center p-12 rounded-3xl h-[690px] leading-[75px] shadow-lg">
      {isCalculated ? (
        <div className="text-center">
          <div className=" flex flex-col justify-center items-center">
            <Image src={LogoFinniuLight} alt="Logo" width={90} height={60} />
          </div>
          <p className="text-[16px] text-black mt-4">Si comienzas con</p>
          <p className="text-[32px] font-bold text-black">
            {currencySymbol} {calculatedResult.initialAmount.toLocaleString()}
          </p>
          <p className="text-[32px] text-black text-bold mt-4 font-bold">
            En {}
            <span className="text-blueColorBackground text-[32px] font-bold">
              {calculatedResult.investmentTime} meses
            </span>{" "}
            recibirás <span className="text-[32px] font-bold">&#128184;</span>
          </p>
          <div className=" bg-lighBlue w-[298px] h-[92px] m-auto p-4 rounded-xl my-4">
            <p className="text-[32px] font-bold">
              {currencySymbol} {calculatedResult.finalAmount.toLocaleString()}
            </p>
          </div>
          <ButtonComponent
            text="Quiero invertir"
            className="w-[441px] h-[77px] text-[24px] bg-blueColorButton text-white rounded-xl mb-4"
          />
          <button
            onClick={() => setIsCalculated(false)}
            className="text-blueColorButton font-semibold text-[24px]"
          >
            Volver a calcular
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="text-[32px] font-semibold text-black ">
              Quiero invertir en
            </h2>

            <div
              className={`flex flex-row m-2 w-[242px] items-center h-[60px] p-2 bg-blueColorBackground justify-around rounded-full ${
                isWhereToFindButtonActive
                  ? "bg-lightBlueColor"
                  : "bg-blueDarkColor"
              }`}
            >
              <ButtonComponent
                text="Soles"
                onClick={() => handleButtonClick()}
                className={`h-[45px] text-[20px] shadow-md w-[111px] gap-2 flex justify-center items-center rounded-full ${
                  isWhereToFindButtonActive
                    ? "bg-lightColor text-blackColorText"
                    : "bg-blueDarkColor text-white"
                }`}
              ></ButtonComponent>
              <ButtonComponent
                text="Dólares"
                onClick={() => handleButtonClick()}
                className={`h-[45px] w-[111px] m-1 flex justify-center items-center gap-2 rounded-full text-[20px] ${
                  isWhereToFindButtonActive
                    ? "bg-lightBlueColor text-blueDarkColor"
                    : "bg-blueColorButton text-white"
                }`}
              ></ButtonComponent>
            </div>
          </div>

          <div>
            <label
              className="block text-black text-[20px] font-bold mb-2"
              htmlFor="investmentAmount"
            >
              ¿Cuánto quiero invertir?
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 text-2xl text-grayColorBackground flex items-center">
                {currencySymbol}
              </span>
              <input
                style={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  boxShadow: "none",
                }}
                id="investmentAmount"
                type="text"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                className="pl-10 pr-3 py-2 border-b-8  $currency? border-lightBlueColor w-full "
                placeholder="10,000"
              />
            </div>
          </div>

          <div>
            <label className="block text-black text-[20px] font-bold mb-2">
              ¿Por cuánto tiempo?
            </label>
            <div className="flex items-center relative">
              <div className="w-full">
                <input
                  type="range"
                  min="6"
                  max="36"
                  step="6"
                  value={investmentTime}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-black mt-1">
                  <span>6 meses</span>
                  <span>12 meses</span>
                  <span>24 meses</span>
                  <span>36 meses</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <ButtonComponent
              text="Calcular"
              onClick={handleCalculateClick}
              className="w-[538px] h-[77px] text-[24px] bg-blueColorBackground text-white rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentForm;
