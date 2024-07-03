import React from "react";
import Image from "next/image";
import Plane from "/images/Plane.png";
import InvestorOne from "/images/InvestorOne.png";
import InvestorTwo from "/images/InvestorTwo.png";

const Testimonials = () => {
  return (
    <section className=" items-center justify-center flex w-full min-h-screen bg-gradient-light">
      <div className="container flex flex-row justify-between   ">
        <div className="  flex flex-col justify-center w-[535px]">
          <h2 className="text-[48px] font-bold ">¿Qué dicen de Finniu?</h2>
          <p className=" text-[36px]  flex justify-end">
            Ellos lograron sus metas, ahora te toca a ti.
          </p>
          <div className=" flex flex-col justify-items-end items-center">
            <Image src={Plane} alt="Rocket" width={128} height={128} />
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="bg-lighBlue w-[691px] p-16 h-[332px] rounded-xl shadow-md leading-relaxed">
            <p className="mb-2 text-xl text-justify ">
              Con Finniu he empezado mi camino a mi objetivo, libertad
              financiera. Además, ofrece facilidades para el tracking de tus
              inversiones, ingresos y egresos. Y lo más importante es que te
              ofrece tasas con puntos extras para maximizar tus ingresos
              pasivos.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex-col mt-4">
                <p className="font-bold text-2xl">Daniel Alberca</p>
                <p className="text-base">Analista de Control de Gestión</p>
              </div>

              <Image
                src={InvestorOne}
                alt="Investor-one"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="bg-lighBlue w-[691px] h-[332px] p-16 rounded-xl shadow-md leading-relaxed">
            <p className="mb-2 text-xl text-justify">
              Para diversificar mi portafolio de inversiones probé con Finniu y
              superó mis expectativas, ganaron mi confianza y ahora volví a
              invertir con ellos, me tranquiliza saber que mi dinero está
              creciendo.
            </p>
            <div className=" flex justify-between items-center">
              <div className=" flex flex-col mt-4">
                <p className="font-bold text-2xl">Claudia Salas</p>
                <p className="text-base">Diseñadora, Marketing Digital</p>
              </div>
              <Image
                src={InvestorTwo}
                alt="Investor-two"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
