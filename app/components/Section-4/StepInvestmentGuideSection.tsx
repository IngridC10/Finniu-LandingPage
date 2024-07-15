"use client";
import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import CustomLeftArrow from "@/components/CustomLeftArrow";
import CustomRightArrow from "@/components/CustomRightArrow";
import HandCellPhone from "@/images/Section-4/HandCellphone.png";
import VirtualWallet from "@/images/Section-4/VirtualWallet.png";
import QuarterlyReports from "@/images/Section-4/QuarterlyReports.png";
import ProjectYourGoals from "@/images/Section-4/ProjectYourGoals.png";

const StepInvestmentGuideSection = () => {
  const [currentIndexState, setCurrentIndexState] = useState(0);
  const [isSelectedButtonRightState, setSelectedButtonRightState] =
    useState(true);

  const slidesData = [
    {
      title: "Todas tus inversiones en la palma de tu mano",
      subtitle: "Finanzas fácil",
      description:
        "Visualiza y gestiona todas tus inversiones de manera rápida y sencilla con nuestra aplicación, que te ofrece un vistazo completo de tu historial y activos.",
      imageSrc: HandCellPhone,
      bgColor: "bg-whiteColor text-blackColorText",
    },
    {
      title: "Reportes Trimestrales",
      subtitle: "Optimizamos tu dinero",
      description:
        "Maximizamos tu inversión. Es por eso que ofrecemos una visibilidad continua sobre el rendimiento de tus inversiones a través de informes trimestrales.",
      imageSrc: QuarterlyReports,
      bgColor: "bg-blueDarkColor text-white",
    },
    {
      title: "Proyecta tus metas",
      subtitle: "Estamos listos para crecer contigo",
      description:
        "Podrás proyectar los rendimientos mensuales y totales de tu inversión de manera rápida y sencilla.",
      imageSrc: ProjectYourGoals,
      bgColor: "bg-white text-blackColorText",
    },
    {
      title: "Billetera Virtual",
      description:
        "Pronto podrás disfrutar de nuestra billetera virtual, una herramienta adicional para gestionar de manera conveniente tus inversiones.",
      imageSrc: VirtualWallet,
      bgColor: "bg-lightSkyBlue text-blackColorText",
    },
  ];

  const handleNextSlide = () => {
    setSelectedButtonRightState(true);
    setCurrentIndexState((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setSelectedButtonRightState(false);
    setCurrentIndexState((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: SetStateAction<number>) => {
    setCurrentIndexState(index);
    // setSelectedButtonRightState(index > currentIndexState);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`section-custom flex justify-center w-full items-center py-10 ${slidesData[currentIndexState].bgColor}`}
    >
      <div className="container relative container-section">
        <div className="flex flex-col-reverse  2xl:flex-row items-center justify-between">
          <div className=" 2xl:w-[611px]  w-[210px] text-left  2xl:text-right mb-0">
            <p className=" text-[21px]   2xl:text-[44px] font-bold  mb-0 2xl:mb-2">
              {slidesData[currentIndexState].title} <br />
            </p>
            <p className=" text-[21px]  2xl:text-[36px] mb-0 2xl:mb-4">
              {slidesData[currentIndexState].subtitle}
            </p>
            <p className=" text-[16px] 2xl:text-[24px] font-medium mb-0  2xl:mb-6 2xl:text-right  text-justify ">
              {slidesData[currentIndexState].description}
            </p>
            <div className="flex flex-row gap-8 justify-center 2xl:justify-end 2xl:gap-3">
              <button onClick={handlePrevSlide}>
                <CustomLeftArrow
                  isSelectedButtonRightState={isSelectedButtonRightState}
                />
              </button>
              <button onClick={handleNextSlide}>
                <CustomRightArrow
                  isSelectedButtonRightState={isSelectedButtonRightState}
                />
              </button>
            </div>
          </div>
          <div className="relative flex justify-end">
            <Image
              src={slidesData[currentIndexState].imageSrc}
              alt={`slide-${currentIndexState + 1}`}
              className="object-cover w-[218px]   2xl:w-[532px]"
              // height={650}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === currentIndexState
                  ? "bg-blueDarkColor"
                  : "bg-lightBlueColor"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepInvestmentGuideSection;
