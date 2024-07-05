import React from "react";
import Image from "next/image";
import Plane from "/images/about/section-3/Plane.png";

const Purpose = () => {
  return (
    <section className=" section-custom bg-white">
      <div className=" container  container-section flex flex-col ">
        <div className=" flex flex-row justify-between">
          <div className=" text-[64px] font-bold ">
            <Image src={Plane} alt="plane" width={128} height={128} />
            <h1>Nuestro propósito</h1>
          </div>

          <p className="w-[650px] text-justify text-[24px] leading-9">
            Nuestros objetivo es que cada uno de nuestros inversionistas aprenda
            y maneje sus finanzas con facilidad, logrando así sus metas
            financieras. Con un equipo dedicado y una plataforma robusta para
            invertir, estamos aquí para proporcionarte el conocimiento y las
            herramientas necesarias. Queremos que tomes decisiones informadas y
            estratégicas, adaptadas a tus necesidades y objetivos personales. Ya
            sea que estés empezando a invertir o buscando optimizar tu dinero,
            nuestro compromiso es guiarte en cada paso del camino hacia el éxito
            financiero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
