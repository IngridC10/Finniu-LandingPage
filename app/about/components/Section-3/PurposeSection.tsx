import React from "react";
import Image from "next/image";
import Plane from "@/images/About/Section-3/Plane.png";

const Purpose = () => {
  return (
    <section className=" w-full   min-h-[588px]   xl:min-h-screen bg-white  flex items-start justify-center xl:items-center">
      <div className=" container  container-section flex flex-col h-[502px]  xl:h-auto ">
        <div className=" flex  flex-col xl:flex-row justify-between items-center">
          <div className=" text-[32px] xl:text-[50px]  ">
            <div className="  mt-0 xl:mt-12 flex justify-center xl:justify-start">
              <Image
                src={Plane}
                alt="plane"
                className="  w-[64px]  xl:w-[128px]"
              />
            </div>
            <h1 className="mt-6">Nuestro propósito</h1>
          </div>
          <div className=" mt-4    xl:mt-0">
            <p className=" w-[314px] xl:w-[540px] text-justify text-[14px]  xl:text-[24px] leading-8 xl:leading-[3rem]">
              Nuestro objetivo es que las personas aprendan y manejen sus
              finanzas con facilidad y autonomía. Con un equipo experto y una
              plataforma robusta para invertir, estamos listos para crecer
              contigo. Queremos que tomes decisiones informadas y estratégicas,
              adaptadas a tus necesidades y objetivos personales. Ya sea que
              estés empezando a invertir o buscando optimizar tu dinero, nuestro
              compromiso es guiarte en cada paso del camino hacia tu éxito
              financiero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
