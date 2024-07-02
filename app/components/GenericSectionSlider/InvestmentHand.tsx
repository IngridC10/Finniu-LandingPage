import React from "react";
import Image from "next/image";

import HandCellPhone from "/images/HandCellPhone.png";
import CustomLeftArrow from "../Section4/CustomLeftArrow";
import CustomRightArrow from "../Section4/CustomRightArrow";

const InvestmentHand = () => {
  return (
    <section
      className=" w-full bg-#
    #F7FAFB flex flex-col min-h-screen justify-center items-center"
    >
      <div className=" container flex flex-row justify-center items-center">
        <div className=" w-[621px] text-right ">
          <p className="text-[48px]">Todas tus inversiones en la</p>
          <p className=" font-bold text-[50px] text-blackColorText">
            palma de tu mano
          </p>
          <p className="text-[36px] text-blackColorText "> Finanzas fácil</p>
          <p className="text-[24px]">
            Visualiza y gestiona tus inversiones de manera rápida y sencilla con
            nuestra aplicación que te ofrece un vistazo completo de tu historial
            y activos.
          </p>
          <div className="flex flex-row justify-end mt-16 gap-7">
            <CustomLeftArrow />
            <CustomRightArrow />
          </div>
        </div>
        <Image
          src={HandCellPhone}
          alt="HandCellPhone"
          width={600}
          style={{ height: "auto" }}
        />
      </div>
    </section>
  );
};

export default InvestmentHand;
