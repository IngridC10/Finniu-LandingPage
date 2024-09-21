"use client";
import React, { useState } from "react";
import Image from "next/image";
import FixedTermCard from "./FixedTermCard";
import SafeInvestmentCard from "./SafeInvestmentCard";

import CellphoneImage from "@/images/Section-2/CellphoneImage.png";

const FixedTermSectionDesktop = () => {
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
    <div className="flex relative container-section">
      <div className="text-left w-[561px] z-10 flex flex-col justify-center mb-24">
        <p
          className={`mb-4 leading-tight font-bold  transition-all duration-300  cursor-pointer ${
            showComponentFixedTermSelectedState
              ? "text-graySecondaryColor text-[40px]"
              : "text-grayColorText text-[40px]"
          }`}
          onClick={handleTextClick}
        >
          Crecer es simple
        </p>
        <p
          className={`font-bold mb-4 leading-tight cursor-pointer ${
            showComponentFixedTermSelectedState
              ? "text-grayColorText text-[36px]"
              : "text-graySecondaryColor text-[45px]"
          }`}
          onClick={handleTextClick}
        >
          Invierte sin paltas
        </p>
      </div>

      {showComponentFixedTermSelectedState ? (
        <FixedTermCard />
      ) : (
        <SafeInvestmentCard />
      )}

      <div
        className={` image-container  ${
          showComponentFixedTermSelectedState ? "" : "hidden"
        }`}
      >
        <Image
          src={CellphoneImage}
          alt="cellphone-image"
          // width={285}
          height={500}
        />
      </div>
    </div>
  );
};

export default FixedTermSectionDesktop;
