import React from "react";
import Image from "next/image";
import CellphoneDollar from "@/images/Section-1/CellPhoneDollar.png";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from '@fortawesome/free-solid-svg-icons/faCalculator';

const DownloadAppMobileSection = () => {
  return (
    <div className=" flex flex-col  2xl:justify-center justify-start m-10 items-center bg-blueDarkColor ">
      <div className=" text-left z-10 flex justify-center flex-col ">


        <p className="text-white text-[34px] leading-tight">
          Haz crecer tus <span className="text-lightTextNavBar">Ahorros</span> y logra tus
          <span className="text-lilaColor "> metas </span>
          <span className="text-lilaColor capitalize"> Financieras </span>
          con Finniu
        </p>
        <div className="h-[20px]">
        </div>


        <Image
            src={CellphoneDollar}
            alt="cellphone-dollar"
            height={260}
            className="ml-20 m-8"
        />
        <div className="text-center text-white px-8 py-5">
          Somos un Fondo de Inversión Privado, con un Producto de Renta Fija
        </div>
        <Link href={"/#simulatorInvestment"}
              className="w-[314px] h-[55px] flex flex-row justify-center items-center border rounded-lg border-lightTextNavBar  ">
          <p className=" text-[25px] mr-4 text-lightBlueColor">Simula tu inversión</p>
          <FontAwesomeIcon icon={faCalculator} className="text-lightTextNavBar text-2xl"/>
        </Link>
      </div>

    </div>
  );
};

export default DownloadAppMobileSection;
