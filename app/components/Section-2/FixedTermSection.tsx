"use client";
import React, { useState } from "react";
import Image from "next/image";
import FixedTermCard from "./FixedTermCard";
import SafeInvestmentCard from "./SafeInvestmentCard";

import CellphoneImage from "@/images/Section-2/CellphoneImage.png";

const FixedTermSection = () => {
  const [
    showComponentFixedTermSelectedState,
    setShowComponentFixedTermSelectedState,
  ] = useState(true);

  const handleTextClick = () => {
    setShowComponentFixedTermSelectedState(
      !showComponentFixedTermSelectedState
    );
  };

  return (
    <section className=" section-custom  flex-col bg-white">
      <div className="flex  relative container  container-section">
        <div className="text-left w-[561px] z-10 flex flex-col justify-center mb-24 ">
          <p
            className={` mb-4 leading-tight font-bold ${
              showComponentFixedTermSelectedState
                ? "text-graySecondaryColor text-[55px]"
                : "text-grayColorText text-[40px]"
            }`}
            onClick={handleTextClick}
          >
            Como un plazo fijo
          </p>
          <p
            className={`font-bold mb-4 leading-tight cursor-pointer ${
              showComponentFixedTermSelectedState
                ? "text-grayColorText text-[40px]"
                : "text-graySecondaryColor text-[55px]"
            }`}
            onClick={handleTextClick}
          >
            Inversión segura
          </p>
        </div>
        {showComponentFixedTermSelectedState ? (
          <FixedTermCard />
        ) : (
          <SafeInvestmentCard />
        )}

        {showComponentFixedTermSelectedState ? (
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

export default FixedTermSection;
