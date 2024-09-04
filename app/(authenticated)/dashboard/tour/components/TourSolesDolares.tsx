import React, { useState } from "react";
import ArrowRightSoles from "@/images/Dashboard/Tour/arrowRightSoles.png";
import SwitchSolesTour from "./SwitchSolesTour";
import Image from "next/image";

const TourSolesDolares = ({
  handleContinue,
}: {
  handleContinue: () => void;
}) => {
  return (
    <div className="flex flex-col w-full h-full pt-40 m-auto overflow-y-hidden ">
      <div className="max-w-[1800px] md:w-[678px] xl:w-[1252px] mx-auto ">
        <div className="flex items-start justify-end h-screen ">
          <div className="text-right mt-9 ">
            <div>
              <div className="flex items-end justify-end">
                {" "}
                <Image
                  className="w-[209px]"
                  src={ArrowRightSoles}
                  alt="arrow"
                />{" "}
                <div className="w-[220px] h-[76px] bg-customLightBlue rounded-[150px] ml-4">
                  {" "}
                  <SwitchSolesTour />
                </div>
              </div>

              <div className="pt-6 ">
                <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
                  ¡Cambia con un click y visualiza tus
                </h1>
                <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
                  inversiones en dólares y soles!
                </h1>
                <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl text-white">
                  Dale click al círculo para poder cambiar tu moneda y
                </h1>
                <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl text-white">
                  visualizar tus inversiones por cada moneda
                </h1>
              </div>
            </div>

            <button
              onClick={handleContinue}
              className="flex flex-col items-center justify-center h-16 mt-5 sm:text-lg md:text-xl lg:text-2xl font-normal text-darkBlueColor no-underline border-none rounded-full shadow-md bg-customLightBlue w-44 ml-[412px]"
              style={{
                boxShadow: "0 7px 6px -6px #d3d7de",
              }}
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSolesDolares;
