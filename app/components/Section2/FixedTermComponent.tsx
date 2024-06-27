"use client";
import Image from "next/image";
import CellphoneImage from "/images/CellphoneImage.png";
import FixedTermCard from "./FixedTermCard";
import SafeInvestmentCard from "./SafeInvestmentCard";
import React, { useState } from "react";
const FixedTermComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleTextClick = () => {
    setShowComponent((prevShowComponent) => !prevShowComponent);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen bg-white">
      <div className="flex flex-row w-full min-h-screen justify-center">
        <div className="text-left w-[561px] relative z-10 flex flex-col justify-center mb-24 mr-10">
          <p
            className={`text-[54px] mb-4 leading-tight font-bold ${
              showComponent ? "text-grayColorText" : "text-graySecondaryColor"
            }`}
            onClick={handleTextClick}
          >
            Como un plazo fijo
          </p>
          <p
            className={`text-[40px] font-bold mb-4 leading-tight cursor-pointer ${
              showComponent ? "text-graySecondaryColor" : "text-grayColorText"
            }`}
            onClick={handleTextClick}
          >
            Inversión segura
          </p>
        </div>
        {showComponent ? <FixedTermCard /> : <SafeInvestmentCard />}

        {showComponent ? (
          <div className="absolute top-[1100px] right-[650px]">
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
