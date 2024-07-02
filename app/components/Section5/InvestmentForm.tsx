"use client";
import React, { useState } from "react";
import Image from "next/image";

const InvestmentForm = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentTime, setInvestmentTime] = useState(6);
  const [currency, setCurrency] = useState("Soles");

  const handleCurrencyChange = (
    selectedCurrency: React.SetStateAction<string>
  ) => {
    setCurrency(selectedCurrency);
  };

  return (
    <div className=" w-[756px] h-[995px] bg-lightColor">
      <div className=" w-[643px] h-[675px] mx-auto bg-white p-6 rounded-2xl shadow-md">
        <div className=" flex flex-row items-center justify-between">
          <h2 className="text-2xl mr-3 text-black font-bold text-center mb-4 gap-[12px]">
            Quiero invertir en
          </h2>
          <div className="flex justify-center h-[50px] w-[90px]  bg-lightBlueColor">
            <button
              onClick={() => handleCurrencyChange("Soles")}
              className={`px-4 py-2  text-lg h-[52px] text-black ${
                currency === "Soles" ? "bg-blue-200" : ""
              } rounded-l-full border`}
            >
              Soles
            </button>
            <button
              onClick={() => handleCurrencyChange("Dólares")}
              className={`px-4 py-2 text-lg h-[52px] text-black ${
                currency === "Dólares" ? "bg-blue-200" : ""
              } rounded-r-full border`}
            >
              Dólares
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="investmentAmount"
          >
            ¿Cuánto quiero invertir?
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 text-[20px] flex items-center text-grayColorBackground">
              {currency === "Soles" ? "S/" : "$"}
            </span>
            <input
              id="investmentAmount"
              type="text"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              className="pl-10 pr-3 py-2 border border-grayColorBackground rounded w-full focus:outline-none focus:border-blue-500"
              placeholder="10,000"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2">
            ¿Por cuánto tiempo?
          </label>
          <div className="flex items-center">
            <img
              src="/images/money-icon.png"
              alt="Money Icon"
              className="w-8 h-8 mr-2"
            />
            <div className="w-full">
              <input
                type="range"
                min="6"
                max="36"
                step="6"
                value={investmentTime}
                onChange={(e) => setInvestmentTime(Number(e.target.value))}
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

        <div className="text-center">
          <button className="bg-blueColorBackground text-lg  py-2 text-[20px] text-white px-4 w-[404px] h-[60px] rounded-xl">
            Calcular
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentForm;
