import React from "react";
import Image from "next/image";
import Hand from "@/images/About/Section-4/Hand.png";
import DollarIncrease from "@/images/About/Section-4/DollarIncrease.png";
import Glass from "@/images/About/Section-4/Glass.png";
import Docs from "@/images/About/Section-4/Docs.png";

const SolidStrategySection = () => {
  return (
    <section className="section-custom bg-white flex flex-col">
      <div className="container-section container w-full flex-col">
        <h1 className="text-center xl:text-start ">
          <span className="text-black text-[32px]  xl:text-[50px] ">
            Estrategia {}
          </span>
          <span className="text-blueColorButton  text-[32px] xl:text-[50px]  ">
            sólida
          </span>
        </h1>

        <div className=" flex justify-center items-center flex-col mt-11">
          <div className=" flex  flex-col xl:flex-row gap-16 mb-11">
            <div className="  w-[333px] xl:w-[472px] flex xl:h-[416px] h-[288px] justify-center items-center  rounded-3xl shadow-md bg-lightBlueColorOpcional ">
              <div className="flex flex-col justify-center w-[265px]  xl:w-[328px] items-center">
                <div>
                  <Image
                    src={Hand}
                    alt="hand"
                    className=" xl:w-[192px] w-[100px]"
                  />
                </div>

                <h1 className=" text-center  text-blueColorButton text-[24px] mt-5  xl:text-[32px]">
                  Finanzas para todos
                </h1>

                <p className=" text-[18px] xl:text-[24px] text-center mt-[10px]">
                  Sabemos encontrar las mejores oportunidades de inversión y
                  creamos productos sencillos para que todos puedan invertir.
                </p>
              </div>
            </div>

            <div className="  w-[333px] xl:w-[472px] xl:h-[416px] h-[288px] flex justify-center items-center rounded-3xl shadow-md bg-mustardColor ">
              <div className="flex flex-col justify-center  w-[265px]  xl:w-[300px] items-center">
                <div className="mt-4 2xl:mt-0">
                  <Image
                    src={DollarIncrease}
                    alt="hand"
                    className="xl:w-[192px] w-[100px]"
                  />
                </div>

                <h1 className=" text-center  text-blueColorButton  text-[24px] mt-5 xl:text-[32px]">
                  Invierte sin paltas
                </h1>

                <p className=" text-[18px]    xl:text-[24px] text-center mt-[10px]">
                  Velamos por tu seguridad, por eso ofrecemos
                  diversificación,información y transparencia en nuestra
                  comunicación .
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col  xl:flex-row gap-16 ">
            <div className=" w-[333px] xl:w-[472px] xl:h-[416px] h-[288px] flex justify-center items-center rounded-3xl shadow-md   bg-lightBlueColorOpcional xl:bg-mustardColor ">
              <div className="flex flex-col w-[265px]  xl:w-[328px] justify-center items-center">
                <div>
                  <Image
                    src={Docs}
                    alt="hand"
                    className="xl:w-[192px] w-[100px]"
                  />
                </div>
                <h1 className=" text-center  text-blueColorButton text-[24px]  mt-5  xl:text-[32px] ">
                  Crecer es simple
                </h1>

                <p className=" text-[18px]   xl:text-[24px] text-center mt-[10px]">
                  Facilitamos toda la información que necesitas para tomar una
                  decisión dentro de la App Finniu.
                </p>
              </div>
            </div>

            <div className="  w-[333px] xl:w-[472px] xl:h-[416px] h-[288px] flex justify-center items-center rounded-3xl shadow-md bg-mustardColor xl:bg-lightBlueColorOpcional ">
              <div className="flex flex-col w-[265px]    xl:w-[328px] justify-center items-center">
                <div>
                  <Image
                    src={Glass}
                    alt="hand"
                    className="xl:h-[102px] h-[43px] w-16 xl:w-[160px]"
                    height={102}
                  />
                </div>

                <h1 className=" text-center  text-blueColorButton text-[24px] mt-5  xl:text-[32px] ">
                  Maximiza tu dinero
                </h1>

                <p className=" text-[18px] xl:text-[24px] text-center mt-[10px]">
                  Ayudamos a sacar el máximo potencial de tu dinero generando
                  valor a través de nuestra experiencia y productos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolidStrategySection;
