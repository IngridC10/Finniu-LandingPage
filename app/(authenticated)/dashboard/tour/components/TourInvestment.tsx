import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import ArrowLeft from "@/images/Dashboard/Tour/arrowLeft.png";
import Image from "next/image";

const TourInvestment = ({ handleContinue }: { handleContinue: () => void }) => {
  return (
    <div className="overflow-y-hidden w-full h-full flex flex-col pr-[60px] pt-[40px]">
      <div className="flex items-center justify-center h-screen mt-120">
        <div className="fixed top-[270px] left-[300px]">
          <div className="bg-lighBlue rounded-[60%] mt-[-7.5rem] w-[74px] h-[79px] fixed left-[16px] top-[275px] flex justify-center items-center">
            <AiOutlineDollar className="w-16  m-2.5 ml-[15px] h-[49px] " />
          </div>
          <Image
            className="w-[209px] fixed top-[163px] left-32 "
            src={ArrowLeft}
            alt="arrow"
          />

          <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            ¡Ahora puedes ver el detalle de{" "}
          </h1>
          <h1 className="font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            tus inversiones desde la web!
          </h1>
          <h2 className="sm:text-lg md:text-xl lg:text-2xl text-white ">
            Dale click a este ícono para visualizar tus inversiones{" "}
          </h2>

          <button
            onClick={handleContinue}
            className="flex flex-col items-center justify-center h-16 mt-5 font-normal no-underline border-none rounded-full sm:text-lg md:text-xl lg:text-2xl text-darkBlueColor bg-lighBlue  w-44"
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

export default TourInvestment;
