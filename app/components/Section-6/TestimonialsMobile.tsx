"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Plane from "@/images/Section-6/Plane.png";
import InvestorOne from "@/images/Section-6/InvestorOne.png";
import InvestorTwo from "@/images/Section-6/InvestorTwo.png";
import InvestorThree from "@/images/Section-6/InvestorThree.png";
import InvestorFour from "@/images/Section-6/InvestorFour.png";
import InvestorFive from "@/images/Section-6/InvestorFive.png";
import InvestorSix from "@/images/Section-6/InvestorSix.png";
const TestimonialsMobile = () => {
  type Testimonial = {
    text?: string;
    name?: string;
    title?: string;
    image?: any;
  };

  const [currentIndexState, setCurrentIndexState] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const touchDiff = touchStartXRef.current - touchEndXRef.current;

      if (touchDiff > 50) {
        // swipe left
        goToIndex((currentIndexState + 1) % testimonials.length);
      }

      if (touchDiff < -50) {
        // swipe right
        goToIndex(
          (currentIndexState - 1 + testimonials.length) % testimonials.length
        );
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const goToIndex = (index: number) => {
    setCurrentIndexState(index);
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
      text: "No sabía dónde invertir mis ahorros, debido a la baja rentabilidad en varios bancos; sin embargo, Finniu me ha retornado hasta el 18% en un año y además, me ofrece las mejores herramientas para hacerle seguimiento a mis inversiones.",
      name: "Araceli Ramos",
      title: "Analista Sr. de Reclutamiento",
      image: InvestorFour,
    },
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

    {
      name: " ¡Tú puedes ser el próximo! 🚀 ",
      text: "Envíanos tu testimonio por nuestros canales de comunicación",
    },
  ];

  return (
    <div className="container flex container-section flex-col justify-center items-center">
      <div className="flex flex-col justify-center 2xl:w-[594px] w-full items-center">
        <h2 className=" text-[32px] text-center  font-bold">
          ¿Qué dicen de Finniu?
        </h2>
        <div className=" w-[308px] mt-5 ">
          <p className="text-[16px] flex text-center">
            &quot;Ellos también cumplieron sus metas financieras con
            Finniu&quot;.
          </p>
        </div>
        <div className="flex flex-col w-[176px] justify-items-end items-end mt-[-22px] ml-20">
          <Image src={Plane} alt="Rocket" width={40} height={40} />
        </div>
      </div>
      <div
        className="space-y-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
        <div className="flex flex-row  justify-center  2xl:justify-start gap-3 mt-10 "></div>
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
