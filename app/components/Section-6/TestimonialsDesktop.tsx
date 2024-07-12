"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomLeftArrow from "@/components/CustomLeftArrow";
import CustomRightArrow from "@/components/CustomRightArrow";
import Plane from "@/images/Section-6/Plane.png";
import InvestorOne from "@/images/Section-6/InvestorOne.png";
import InvestorTwo from "@/images/Section-6/InvestorTwo.png";
import InvestorThree from "@/images/Section-6/InvestorThree.png";

type Testimonial = {
  text?: string;
  name?: string;
  title?: string;
  image?: any;
};

const testimonialGroups: Testimonial[][] = [
  [
    {
      text: "Con Finniu he empezado mi camino a mi objetivo, libertad financiera. Además, ofrece facilidades para el tracking de tus inversiones, ingresos y egresos. Y lo más importante es que te ofrece tasas con puntos extras para maximizar tus ingresos pasivos.",
      name: "Daniel Alberca",
      title: "Analista de Control de Gestión",
      image: InvestorOne,
    },
    {
      text: "Para diversificar mi portafolio de inversiones probé con Finniu y superó mis expectativas, ganaron mi confianza y ahora volví a invertir con ellos, me tranquiliza saber que mi dinero está creciendo.",
      name: "Claudia Salas",
      title: "Diseñadora, Marketing Digital",
      image: InvestorTwo,
    },
  ],
  [
    {
      text: "Mi educación financiera estaba estancada, no sabia por donde empezar para que el dinero trabaje por mi y no trabajar por el dinero hasta que conocí Finniu, siempre presente y dándome la confianza que necesito para sentir que mi dinero esta en buenas manos.",
      name: "Nicole Marsili",
      title: "Comunicadora",
      image: InvestorThree,
    },
    {
      name: " ¡Tú puedes ser el próximo!  🚀 ",
      text: "Envíanos tu testimonio por nuestros canales de comunicación",
    },
  ],
];

const TestimonialsDesktop = () => {
  const [currentIndexState, setCurrentIndexState] = useState(0);
  const [isSelectedButtonRightState, setSelectedButtonRightState] =
    useState(true);

  const handleNext = () => {
    setSelectedButtonRightState(true);
    setCurrentIndexState(
      (prevIndex) => (prevIndex + 1) % testimonialGroups.length
    );
  };

  const handlePrev = () => {
    setSelectedButtonRightState(false);
    setCurrentIndexState((prevIndex) =>
      prevIndex === 0 ? testimonialGroups.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex flex-row container container-section justify-between gap-32">
      <div className="flex flex-col justify-center w-[594px]">
        <h2 className="text-[45px] font-bold">¿Qué dicen de Finniu?</h2>
        <p className="text-[36px] flex justify-end">
          Ellos lograron sus metas, ahora te toca a ti.
        </p>
        <div className="flex flex-col justify-items-end items-center">
          <Image src={Plane} alt="Rocket" width={128} height={128} />
        </div>
      </div>
      <div className="space-y-4 flex flex-col">
        {testimonialGroups[currentIndexState].map((testimonial, index) => (
          <div
            key={index}
            className="bg-lighBlue w-[691px] p-16 h-[332px] rounded-xl shadow-md leading-relaxed"
          >
            <p className="mb-2 text-xl text-justify">{testimonial.text}</p>
            <div className="flex justify-between items-end">
              <div className="flex-col mt-4">
                <p className="font-bold text-2xl">{testimonial.name}</p>
                <p className="text-base">{testimonial.title}</p>
              </div>
              {testimonial.image && (
                <Image
                  src={testimonial.image}
                  alt={`Investor-${index + 1}`}
                  width={60}
                  style={{ height: "60px" }}
                />
              )}
            </div>
          </div>
        ))}
        <div className="flex flex-row justify-end gap-3 mt-10">
          <button onClick={handlePrev}>
            <CustomLeftArrow
              isSelectedButtonRightState={isSelectedButtonRightState}
            />
          </button>
          <button onClick={handleNext}>
            <CustomRightArrow
              isSelectedButtonRightState={isSelectedButtonRightState}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsDesktop;
