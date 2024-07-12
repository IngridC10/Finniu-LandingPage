import React from "react";
import Image from "next/image";
import EyesArrow from "@/images/About/Section-1/EyesArrow.png";

const HistoryCircle = () => {
  return (
    <div className="flex flex-col items-center h-full relative top-[65px] justify-center mt-[11vh] ">
      <p className="text-white text-4xl ">Conoce nuestra historia aquí</p>
      {/* <div className=" mt-10">
        <Image src={EyesArrow} alt="eyes-arrow" height={170} />
      </div> */}
      <div className=" bg-blueDarkColor text-white rounded-full flex items-center justify-center w-[675px] h-[735px]">
        <Image
          src={EyesArrow}
          alt="eyes-arrow"
          height={140}
          className="absolute top-[56px] "
        />
        <div className=" w-[529px] flex justify-center items-center ">
          <div className=" w-[407px]">
            <p className="text-[20px] text-center font-bold mt-[36%] leading-9 ">
              Somos un fondo de inversión latinoamericano con la misión de
              democratizar el acceso a las oportunidades financieras. Nuestra
              prioridad es cuidar tu futuro brindándote experiencia y
              tranquilidad, por eso nos esforzamos para invertir sea lo más
              sencillo y transparente posible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCircle;
