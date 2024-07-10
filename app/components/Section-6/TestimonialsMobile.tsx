"use client";
import { useState } from "react";
import Image from "next/image";
import Plane from "@/images/Section-6/Plane.png";
import InvestorOne from "@/images/Section-6/InvestorOne.png";
import InvestorTwo from "@/images/Section-6/InvestorTwo.png";
import InvestorThree from "@/images/Section-6/InvestorThree.png";
import CustomLeftArrow from "@/components/CustomLeftArrow";
import CustomRightArrow from "@/components/CustomRightArrow";

const TestimonialsMobile = () => {
  type Testimonial = {
    text?: string;
    name?: string;
    title?: string;
    image?: any;
  };

  const [currentIndexState, setCurrentIndexState] = useState(0);
  const [isSelectedButtonRightState, setSelectedButtonRightState] =
    useState(true);

  const handleNext = () => {
    setSelectedButtonRightState(true);
    setCurrentIndexState((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setSelectedButtonRightState(false);
    setCurrentIndexState((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndexState(index);
    setSelectedButtonRightState(index > currentIndexState);
  };

  const testimonials: Testimonial[] = [
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
    {
      text: "Mi educación financiera estaba estancada, no sabia por donde empezar para que el dinero trabaje por mi y no trabajar por el dinero hasta que conocí Finniu, siempre presente y dándome la confianza que necesito para sentir que mi dinero esta en buenas manos.",
      name: "Nicole Marsili",
      title: "Comunicadora",
      image: InvestorThree,
    },
    {
      name: " ¡Tú puedes ser el próximo! 🚀 ",
      text: "Envíanos tu testimonio por nuestros canales de comunicación",
    },
  ];

  return (
    <div className="container flex container-section flex-col justify-center items-center">
      <div className="flex flex-col justify-center w-[594px] items-center">
        <h2 className=" text-[32px] font-bold">¿Qué dicen de Finniu?</h2>
        <div className=" w-[308px] ">
          <p className="text-[16px] flex text-center">
            "Ellos también cumplieron sus metas financieras con Finniu".
          </p>
        </div>
        <div className="flex flex-col w-[300px] justify-items-end items-end">
          <Image src={Plane} alt="Rocket" width={40} height={40} />
        </div>
      </div>
      <div className="space-y-4">
        <div
          key={currentIndexState}
          className="bg-lighBlue w-[333px] mt-5 p-8 h-[268px] rounded-xl shadow-md leading-relaxed"
        >
          <p className="mb-2 text-[13px] text-justify">
            {testimonials[currentIndexState].text}
          </p>
          <div className="flex justify-between items-end">
            <div className="flex-col mt-4">
              <p className="font-bold text-[14px]">
                {testimonials[currentIndexState].name}
              </p>
              <p className="text-base">
                {testimonials[currentIndexState].title}
              </p>
            </div>
            {testimonials[currentIndexState].image && (
              <Image
                src={testimonials[currentIndexState].image}
                alt={`Investor-${currentIndexState + 1}`}
                width={35}
                style={{ height: "35px" }}
              />
            )}
          </div>
        </div>
        <div className="flex flex-row  justify-center  2xl:justify-start gap-3 mt-10 ">
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
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full mx-1 ${
                index === currentIndexState
                  ? "bg-blueDarkColor"
                  : "bg-lightBlueColor"
              }`}
              onClick={() => goToIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsMobile;
