import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import ArrowLeft from "@/images/Dashboard/Tour/arrowLeft.png";
import Image from "next/image";

const TourCalendar = ({ handleContinue }: { handleContinue: () => void }) => {
  return (
    <div className="flex flex-col w-full h-full pt-40 overflow-y-hidden pr-60">
      <div className="flex items-center justify-center h-screen mt-120">
        <div className="fixed md:top-[360px] lg:top-[394px]  sm:max-w-md  xl:max-w-2xl left-32 ml-[42px]">
          ;
          <div className="bg-customLightBlue rounded-[60%]  w-[74px] h-[79px] fixed left-[16px] top-[387px] flex ">
            <LuCalendarDays className="w-16  m-2.5 ml-[19px] h-[49px] " />
          </div>
          <Image
            className="w-[209px] fixed   md:top-[306px]   lg:top-[336px]   md:left-[92px]   lg:left-[125px] "
            src={ArrowLeft}
            alt="arrow"
          />
          <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            ¡Conoce las novedades que puedes encontrar en tu calendario!
          </h1>
          <h2 className="sm:text-lg md:text-xl lg:text-2xl text-white ">
            Dale click a este ícono para visualizar las fechas de tus pagos de
            rentabilidad y las promociones que lanzamos
          </h2>
          <button
            onClick={handleContinue}
            className="flex items-center justify-center h-16 mt-5 text-2xl font-normal no-underline border-none rounded-full shadow-md text-darkBlueColor bg-customLightBlue w-44"
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

export default TourCalendar;
