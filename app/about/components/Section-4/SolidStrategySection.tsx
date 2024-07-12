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
        <h1>
          <span className="text-black text-[64px] font-bold">Estratégia </span>
          <span className="text-blueColorButton text-[64px] font-bold">
            sólida
          </span>
        </h1>

        <div className=" flex justify-center items-center flex-col mt-11">
          <div className=" flex flex-row gap-16 mb-11">
            <div className="w-[472px] flex h-[416px] justify-center items-center  rounded-3xl shadow-md bg-lightBlueColorOpcional ">
              <div className="flex flex-col justify-center  w-[328px] items-center">
                <div className="mb-7">
                  <Image src={Hand} alt="hand" width={192} height={96} />
                </div>

                <h1 className=" text-center font-semibold  text-blueColorButton text-[32px]">
                  Relación empresarial
                </h1>

                <p className="text-[24px] text-center mt-[10px]">
                  Participación directa en la administración de dinero de las
                  empresas en el portafolio.
                </p>
              </div>
            </div>

            <div className="w-[472px] h-[416px] flex justify-center items-center rounded-3xl shadow-md bg-mustardColor">
              <div className="flex flex-col justify-center  w-[300px] items-center">
                <div className=" mb-7">
                  <Image
                    src={DollarIncrease}
                    alt="hand"
                    width={192}
                    height={96}
                  />
                </div>

                <h1 className=" text-center font-semibold  text-blueColorButton text-[27px]">
                  Minimización de riesgos
                </h1>

                <p className="text-[24px] text-center mt-[10px]">
                  Solicitud de garantías en las inversiones que tienen un riesgo
                  medio.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row gap-16 ">
            <div className="w-[472px] h-[416px] flex justify-center items-center rounded-3xl shadow-md bg-mustardColor ">
              <div className="flex flex-col w-[328px] justify-center items-center">
                <div className=" mb-7">
                  <Image src={Docs} alt="hand" width={192} height={96} />
                </div>
                <h1 className=" text-center  text-blueColorButton text-[32px] font-semibold">
                  Gestión eficiente
                </h1>

                <p className="text-[24px] text-center mt-[10px]">
                  Análisis de la capacidad de endeudamiento y pago de las
                  empresas del portafolio.
                </p>
              </div>
            </div>

            <div className="w-[472px]      h-[416px] flex justify-center items-center rounded-3xl shadow-md bg-lightBlueColorOpcional ">
              <div className="flex flex-col w-[328px] justify-center items-center">
                <div className=" mb-7">
                  <Image src={Glass} alt="hand" height={102} />
                </div>

                <h1 className=" text-center  text-blueColorButton text-[32px] font-semibold">
                  Diversificación
                </h1>

                <p className="text-[24px] text-center mt-[10px]">
                  Distribución del capital en los sectores más rentables y con
                  mayor crecimiento.
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
