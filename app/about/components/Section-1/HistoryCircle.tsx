import React from "react";
import Image from "next/image";
import EyesArrow from "@/images/About/Section-1/EyesArrow.png";

const HistoryCircle = () => {
  return (
    <div className="flex flex-col items-center h-full relative  top-0 2xl:top-[65px] justify-center  mt-0  2xl:mt-[11vh] ">
      <p className="text-white  text-[20px] mt-[48px]  2xl:mt-0 2xl:text-4xl ">
        Conoce nuestra historia aquí
      </p>
      {/* <div className=" mt-10">
        <Image src={EyesArrow} alt="eyes-arrow" height={170} />
      </div> */}
      <div className=" bg-blueDarkColor text-white rounded-full  mb-[45px] 2xl:mb-0 flex items-center justify-center  w-[408px] 2xl:w-[675px] h-[645px] 2xl:h-[735px]">
        <Image
          src={EyesArrow}
          alt="eyes-arrow"
          height={140}
          className="absolute  2xl:top-[56px] top-24  h-[130px] 2xl:h-[140px] "
        />
        <div className=" w-[529px] flex justify-center items-center ">
          <div className=" w-[287px]     2xl:w-[407px]">
            <p className=" text-[15px]  2xl:text-[20px] text-center font-bold mt-0  2xl:mt-[36%]  leading-9  2xl:leading-10 ">
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
