"use client";
import Image from "next/image";
import CellphoneImage from "/images/CellphoneImage.png";
import FixedTermCard from "./FixedTermCard";
import SafeInvestmentCard from "./SafeInvestmentCard";
import React, { useState } from "react";
const FixedTermComponent = () => {
  const [showComponentFixedTermSelected, setShowComponentFixedTermSelected] =
    useState(true);

  console.log("estado me muestra", showComponentFixedTermSelected);

  const handleTextClick = () => {
    setShowComponentFixedTermSelected(
      !showComponentFixedTermSelected
    );
  };

  return (
    <section className="flex flex-col w-full justify-center items-center  min-h-screen bg-white">
      <div className="flex  relative container min-h-screen justify-between">
        <div className="text-left w-[561px] z-10 flex flex-col justify-center mb-24 ">
          <p
            className={` mb-4 leading-tight font-bold ${
              showComponentFixedTermSelected ?
              "text-graySecondaryColor text-[55px]" :
                "text-grayColorText text-[40px]"
                 
            }`}
            onClick={handleTextClick}
          >
            Como un plazo fijo
          </p>
          <p
            className={`font-bold mb-4 leading-tight cursor-pointer ${
              showComponentFixedTermSelected
              ?  "text-grayColorText text-[40px]"
              : "text-graySecondaryColor text-[55px]"
                
            }`}
            onClick={handleTextClick}
          >
            Inversión segura
          </p>
        </div>
        {showComponentFixedTermSelected ? (
          <FixedTermCard />
        ) : (
          <SafeInvestmentCard />
        )}

        {showComponentFixedTermSelected ? (
          <div className="absolute flex left-12 flex-row justify-center w-full items-center h-full ">
            <Image
              src={CellphoneImage}
              alt="cellphone-image"
              width={575}
              height={575}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default FixedTermComponent;
