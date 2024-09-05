"use client";
import React from "react";
import Image from "next/image";
import ArrowRight from "@/images/Dashboard/Tour/arrowRight.png";
import { saveShowTourCookies } from "@/app/cookies/client/ShowTourCookies";
import { useRouter } from "next/router";

type TourStepCeroProps = {
  handleContinue: () => void;
  handleCloseTour: () => void;
  setCurrentPage: (pageNumber: number) => void;
};

const TourStepCero: React.FC<TourStepCeroProps> = ({
  handleContinue,
  handleCloseTour,
}) => {
  // const navigate = useNavigate();

  const handleGetOutClick = () => {
    // navigate("/home?forceTour=false");

    handleCloseTour();
    saveShowTourCookies("false");
  };

  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="flex flex-col w-full h-full">
        <div className="h-[151px] text-[25px] ml-[140px] ">
          <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white ">
            ¡Acompáñame a conocer las
          </h1>
          <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            funcionalidades del{" "}
            <span className="text-blueCustom">dashboard!</span>
          </h1>
          <h2 className="sm:text-lg md:text-xl lg:text-2xl text-white ">
            Conoce que puedes visualizar en cada uno de los iconos{" "}
          </h2>
          <Image
            className="fixed w-[152px] ml-8"
            src={ArrowRight}
            alt="arrow-right"
          />
        </div>
      </div>
      <div className="row-content-buttons flex flex-row relative left-[308px] bottom-[-48px] gap-[10px]">
        <button onClick={handleGetOutClick} className="button1">
          Saltar
        </button>

        <button
          onClick={handleContinue}
          className="button2"
          style={{
            fontSize: "24px",
            color: "#0D3A5C",
            backgroundColor: "#A2E6FA",
            border: "none",
            height: "60px",
            width: "180px",
            fontWeight: "normal",
            borderRadius: "26px",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 7px 6px -6px #d3d7de",
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default TourStepCero;
