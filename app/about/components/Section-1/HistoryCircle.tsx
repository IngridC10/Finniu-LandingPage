import React from "react";
// import Image from "next/image";
import EyesArrow from "/images/about/section-1/EyesArrow.png";

const CircleWithText = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <p className="text-white text-4xl ">Conoce nuestra historia aquí</p> */}
      {/* <Image src={EyesArrow} alt="eyes-arrow" width={65} /> */}
      <div className=" bg-blueDarkColor text-white absolute bottom-[809px]   rounded-full flex items-center justify-center w-[695px] h-[669px]">
        <div className=" w-[529px] flex justify-center items-center ">
          <p className="text-[24px] text-center font-bold leading-9 ">
            Somos un fondo de inversión latinoamericano con la misión de
            democratizar el acceso a las oportunidades financieras. Nuestra
            prioridad es cuidar tu futuro brindándote experiencia y
            tranquilidad, por eso nos esforzamos para invertir sea lo más
            sencillo y transparente posible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircleWithText;
