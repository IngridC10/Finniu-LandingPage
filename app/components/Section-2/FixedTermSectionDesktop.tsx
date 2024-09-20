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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container-section relative">
        {/* Primera columna - Texto */}
        <div className="text-left z-10 flex flex-col justify-center mb-24 w-full lg:w-auto">
          <p
              className={`mb-4 leading-tight font-bold transition-all duration-300 cursor-pointer ${
                  showComponentFixedTermSelectedState
                      ? "text-graySecondaryColor text-[55px]"
                      : "text-grayColorText text-[40px]"
              }`}
              onClick={handleTextClick}
          >
            Crecer es simple
          </p>
          <p
              className={`font-bold mb-4 leading-tight cursor-pointer ${
                  showComponentFixedTermSelectedState
                      ? "text-grayColorText text-[40px]"
                      : "text-graySecondaryColor text-[55px]"
              }`}
              onClick={handleTextClick}
          >
            Invierte sin paltas
          </p>
        </div>

        {/* Segunda columna - Imagen */}
        <div className="flex items-center justify-center w-full lg:w-auto">
          <div className={`image-container ${showComponentFixedTermSelectedState ? "" : "hidden"}`}>
            <Image
                src={CellphoneImage}
                alt="cellphone-image"
                width={575}
                height={575}
                className="max-w-[600px] max-h-[500px] object-contain"
            />
          </div>
        </div>

        {/* Tercera columna - Componente */}
        <div className="flex justify-center items-center w-full lg:w-auto">
          {showComponentFixedTermSelectedState ? (
              <FixedTermCard/>
          ) : (
              <SafeInvestmentCard/>
          )}
        </div>
      </div>
  );
};

export default FixedTermSectionDesktop;
