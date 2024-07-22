import React from "react";
import Image from "next/image";
import Plane from "@/images/About/Section-3/Plane.png";

const Purpose = () => {
  return (
    <section className=" w-full   min-h-[588px]   2xl:min-h-screen bg-white  flex items-start justify-center 2xl:items-center">
      <div className=" container  container-section flex flex-col h-[502px]  2xl:h-auto ">
        <div className=" flex  flex-col 2xl:flex-row justify-between items-center">
          <div className=" text-[32px] 2xl:text-[64px]  ">
            <div className="  mt-0 2xl:mt-12 flex justify-center 2xl:justify-start">
              <Image
                src={Plane}
                alt="plane"
                className="  w-[64px]  2xl:w-[128px]"
              />
            </div>
            <h1 className="mt-6">Nuestro propósito</h1>
          </div>
          <div className=" mt-4    2xl:mt-0">
            <p className=" w-[314px] 2xl:w-[650px] text-justify text-[14px]  2xl:text-[24px] leading-8 2xl:leading-9">
              Nuestros objetivo es que cada uno de nuestros inversionistas
              aprenda y maneje sus finanzas con facilidad, logrando así sus
              metas financieras. Con un equipo dedicado y una plataforma robusta
              para invertir, estamos aquí para proporcionarte el conocimiento y
              las herramientas necesarias. Queremos que tomes decisiones
              informadas y estratégicas, adaptadas a tus necesidades y objetivos
              personales. Ya sea que estés empezando a invertir o buscando
              optimizar tu dinero, nuestro compromiso es guiarte en cada paso
              del camino hacia el éxito financiero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
