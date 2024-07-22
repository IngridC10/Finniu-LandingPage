"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomLeftArrow from "@/components/CustomLeftArrow";
import CustomRightArrow from "@/components/CustomRightArrow";
import Plane from "@/images/Section-6/Plane.png";
import InvestorOne from "@/images/Section-6/InvestorOne.png";
import InvestorTwo from "@/images/Section-6/InvestorTwo.png";
import InvestorThree from "@/images/Section-6/InvestorThree.png";
import InvestorFour from "@/images/Section-6/InvestorFour.png";
import InvestorFive from "@/images/Section-6/InvestorFive.png";
import InvestorSix from "@/images/Section-6/InvestorSix.png";

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
      text: "Mi educación financiera estaba estancada, no sabía por donde empezar para que el dinero trabaje por mi y no trabajar por el dinero hasta que conocí Finniu, siempre presente y dándome la confianza que necesito para sentir que mi dinero esta en buenas manos.",
      name: "Nicole Marsili",
      title: "Comunicadora",
      image: InvestorThree,
    },

    {
      text: "No sabía dónde invertir mis ahorros, debido a la baja rentabilidad en varios bancos; sin embargo, Finniu me ha retornado hasta el 18% en un año y además, me ofrece las mejores herramientas para hacerle seguimiento a mis inversiones.",
      name: "Araceli Ramos",
      title: "Analista Senior de Reclutamiento",
      image: InvestorFour,
    },
  ],

  [
    {
      text: "Estoy muy satisfecho con Finniu y los retornos que he obtenido en comparación con muchos bancos tradicionales. La plataforma es fácil de usar y ha sido una excelente manera de hacer crecer mi dinero de manera segura y confiable.",
      name: "Guillermo Rosas",
      title: "Ingeniero de Planeamiento",
      image: InvestorFive,
    },
    {
      text: "Antes desconfiaba en dónde invertir mi dinero, hasta que conocí Finniu. Con ellos, encontré la seguridad de que mi inversión está trabajándose para obtener altos intereses. Además, que permiten hacer seguimiento a todas tus inversiones de manera fácil en su App.",
      name: "Alexis Pariente",
      title: "Contadora y Empresaria",
      image: InvestorSix,
    },
  ],
  [
    {
      name: " ¡Tú puedes ser el próximo!  🚀 ",
      text: "Envíanos tu testimonio por nuestros canales de comunicación",
    },
  ],
];
const TestimonialsDesktop = () => {
  const [currentIndexState, setCurrentIndexState] = useState(0);

  const handleNext = () => {
    setCurrentIndexState((prevIndex) => {
      if (prevIndex === testimonialGroups.length - 1) {
        return prevIndex;
      } else {
        return (prevIndex + 1) % testimonialGroups.length;
      }
    });
  };
  const handlePrev = () => {
    setCurrentIndexState((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-row container-section gap-32">
      <div className="flex flex-col justify-center relative w-[594px]">
        <h2 className="text-[45px] font-semibold">¿Qué dicen de Finniu?</h2>

        <p className="text-[36px] flex justify-end">
          Ellos lograron sus metas, ahora te toca a ti.
        </p>
        <div className=" flex absolute inset-0 justify-center items-center top-[217px] right-16 ">
          <Image src={Plane} alt="Rocket" height={128} />
        </div>
      </div>
      <div className="space-y-4 flex flex-col">
        {testimonialGroups[currentIndexState].map((testimonial, index) => (
          <div
            key={index}
            className="bg-lighBlue w-[691px] p-16 h-[332px] min-h-[332px] rounded-xl shadow-md leading-relaxed"
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
                  height={60}
                />
              )}
            </div>
          </div>
        ))}
        <div className="flex flex-row justify-end gap-3 mt-10">
          <button onClick={handlePrev}>
            <CustomLeftArrow
              isFirstSlide={currentIndexState === 0}
              isLastSlide={currentIndexState === testimonialGroups.length - 1}
            />
          </button>
          <button onClick={handleNext}>
            <CustomRightArrow
              isFirstSlide={currentIndexState === 0}
              isLastSlide={currentIndexState === testimonialGroups.length - 1}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsDesktop;
