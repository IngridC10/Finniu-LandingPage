import React from "react";
import Image from "next/image";
import Hand from "@/images/about/section-4/Hand.png";
import DollarIncrease from "@/images/about/section-4/DollarIncrease.png";
import Glass from "@/images/about/section-4/Glass.png";

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

        <div className=" flex justify-center items-center flex-col">
          <div className=" flex flex-row gap-16 mb-7">
            <div className="w-[472px] flex h-[416px] justify-center items-center rounded-3xl shadow-md bg-lightBlueColorOpcional ">
              <div className="flex flex-col justify-center items-center">
                <Image src={Hand} alt="hand" width={192} height={96} />

                <h1 className=" text-center font-semibold  text-blueColorButton text-[32px]">
                  Relación empresarial
                </h1>

                <p className="text-[24px] text-center">
                  Participación directa en la administración de dinero de las
                  empresas en el portafolio.
                </p>
              </div>
            </div>

            <div className="w-[472px] h-[416px] flex justify-center items-center rounded-3xl shadow-md bg-mustardColor">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={DollarIncrease}
                  alt="hand"
                  width={192}
                  height={96}
                />

                <h1 className=" text-center font-semibold  text-blueColorButton text-[32px]">
                  Minimización de riesgos
                </h1>

                <p className="text-[24px] text-center">
                  Solicitud de garantías en las inversiones que tienen un riesgo
                  medio.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row gap-16 ">
            <div className="w-[472px] h-[416px] flex justify-center items-center rounded-3xl shadow-md bg-mustardColor ">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={DollarIncrease}
                  alt="hand"
                  width={192}
                  height={96}
                />

                <h1 className=" text-center  text-blueColorButton text-[32px] font-semibold">
                  Gestión eficiente
                </h1>

                <p className="text-[24px] text-center">
                  Análisis de la capacidad de endeudamiento y pago de las
                  empresas del portafolio.
                </p>
              </div>
            </div>

            <div className="w-[472px] h-[416px] flex justify-center items-center rounded-3xl shadow-md bg-lightBlueColorOpcional ">
              <div className="flex flex-col justify-center items-center">
                <Image src={Glass} alt="hand" height={102} />

                <h1 className=" text-center  text-blueColorButton text-[32px] font-semibold">
                  Diversificación
                </h1>

                <p className="text-[24px] text-center">
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
