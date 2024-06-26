"use client";
import Image from "next/image";
import CellphoneImage from "/images/CellphoneImage.png";
import Check from "/images/Check.png";
import SafeInvestmentComponentReutilizable from "./SafeInvestmentComponentReutilizable";
import SafeInvestment from "./SafeInvestment";
import React, { useState } from "react";

const FixedTermComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleTextClick = () => {
    setShowComponent((prevShowComponent) => !prevShowComponent);
  };
  console.log("show", showComponent);
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen bg-white">
      <div className="flex flex-row w-full min-h-screen justify-center">
        <div className="text-left w-[561px] relative z-10 flex flex-col justify-center mb-24 mr-10">
          <p className="text-[54px] mb-4 leading-tight font-bold text-blueDarkColor">
            Como un plazo fijo
          </p>
          <p
            className="text-graySecondaryColor text-[40px] font-bold mb-4 leading-tight cursor-pointer"
            onClick={handleTextClick}
          >
            Inversión segura
          </p>
        </div>
        {showComponent ? (
          <SafeInvestmentComponentReutilizable />
        ) : (
          <SafeInvestment />
        )}
        {/* <div className="flex items-center pb-56 justify-center mt-8 ml-[200px]  md:mt-0">
          <div className="flex flex-col ml-8 p-6 pb-10 pt-10 pr-14 pl-14  text-black bg-[#F0FBFF] text-xl w-[680px]">
            <div className="flex flex-row gap-2">
              <Image src={Check} alt="Logo de Finniu" width={28} height={38} />
              <h2 className="text-darkBlueColor text-xl font-bold">
                Crecer es simple
              </h2>
            </div>
            <p className="text-justify">
              Pero con rentabilidades
              <span className="font-bold"> mensuales </span> y
              <span className="font-bold"> sin comisiones. </span>
              <p>
                Aprovecha las ventajas de invertir con Finniu: obtén
                rentabilidades mensuales sin letras pequeñas, similar a un plazo
                fijo pero con mayores beneficios.
              </p>
              <p className="text-darkBlueColor">
                (1) REVISA LOS TÉRMINOS Y CONDICIONES.
              </p>
            </p>
          </div>
        </div> */}

        {showComponent ? (
          <div className="absolute top-[1100px] right-[650px]">
            <Image
              src={CellphoneImage}
              alt="Contenido dinámico"
              width={575}
              height={575}
              className="object-contain"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default FixedTermComponent;
