"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import BillHand from "/images/BillHand.png";

const InvestmentForm = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentTime, setInvestmentTime] = useState(6);
  const [isWhereToFindButtonActive, setWhereToFindButtonActive] =
    useState(false);
  const [currency, setCurrency] = useState("Soles");
  const [imagePosition, setImagePosition] = useState(0);

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
    setImagePosition(position);
  };

  const currencySymbol = currency === "Soles" ? "S/" : "$";

  return (
    <div className="w-[643px] bg-white flex flex-col justify-center p-12 rounded-3xl h-[690px] leading-[75px] shadow-lg">
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
          {/* <Image
            src="/images/money-icon.png"
            alt="icon-money"
            className="w-8 h-8 mr-2"
          /> */}

          <Image
            src={BillHand}
            alt="Ícono de dinero"
            width={50}
            height={50}
            className="mr-2"
            style={{
              position: "absolute",
              left: `${imagePosition}px`,
              top: "7px",
            }}
          ></Image>
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
          className="w-[5380px] h-[77px] text-[24px] bg-blueColorBackground text-white rounded-xl"
        ></ButtonComponent>
      </div>
    </div>
  );
};

export default InvestmentForm;
