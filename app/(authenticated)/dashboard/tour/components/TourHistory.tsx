import React from "react";
import { AiOutlineHistory } from "react-icons/ai";
import Image from "next/image";
import ArrowLeft from "@/images/Dashboard/Tour/arrowLeft.png";
const TourHistory = ({ handleContinue }: { handleContinue: () => void }) => {
  return (
    <div className="overflow-y-hidden w-[94px] h-[88px] flex flex-col pr-[60px] pt-[40px]">
      <div className="flex items-center justify-center h-screen mt-120">
        <div className="fixed top-[334px] sm:left-[195px]  lg:left-[248px]">
          <div className="bg-customLightBlue rounded-[60%] mt-9 w-[74px] h-[79px] fixed left-[16px] top-[214px] flex items-center justify-center">
            <AiOutlineHistory className="w-16  m-2.5 ml-[19px] h-[49px] " />
          </div>
          <Image
            className="w-[209px] fixed top-[241px] left-32"
            src={ArrowLeft}
            alt="arrow"
          />
          <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            ¡Puedes visualizar el historial de tus
          </h1>
          <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            tus inversiones desde la web!
          </h1>
          <h2 className="sm:text-lg md:text-xl lg:text-2xl text-white ">
            Dale click a este ícono para visualizar a detalle el historial de
          </h2>
          <h2 className="text-lg md:text-xl lg:text-2xl text-white">
            tus inversiones
          </h2>

          <button
            onClick={handleContinue}
            // to="/home"
            className="flex flex-col items-center justify-center h-16 mt-5 font-normal no-underline border-none rounded-full shadow-md sm:text-lg md:text-xl lg:text-2xl text-darkBlueColor bg-customLightBlue w-44"
            style={{
              boxShadow: "0 7px 6px -6px #d3d7de",
            }}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourHistory;
