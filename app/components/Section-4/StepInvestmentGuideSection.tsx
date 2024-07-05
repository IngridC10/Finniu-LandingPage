"use client";
import Image from "next/image";
import HandCellPhone from "/images/Section-4/HandCellPhone.png";
import VirtualWallet from "/images/Section-4/VirtualWallet.png";
import QuarterlyReports from "/images/Section-4/QuarterlyReports.png";
import ProjectYourGoals from "/images/Section-4/ProjectYourGoals.png";
import { useState, useEffect } from "react";
import CustomLeftArrow from "@/components/CustomLeftArrow";
import CustomRightArrow from "@/components/CustomRightArrow";

const StepInvestmentGuideSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`section-custom flex justify-center w-full items-center py-10 ${slidesData[currentIndex].bgColor}`}
    >
      <div className="container relative container-section">
        <div className="flex flex-row items-center justify-between ">
          <div className="w-[611px] text-right mb-0">
            <p className="text-[44px] font-bold mb-2">
              {slidesData[currentIndex].title.split(" en ")[0]} <br />
              {slidesData[currentIndex].title.split(" en ")[1]}
            </p>
            <p className="text-[36px] mb-4">
              {slidesData[currentIndex].subtitle}
            </p>
            <p className="text-[24px] font-medium mb-6">
              {slidesData[currentIndex].description}
            </p>
            <div className="flex flex-row justify-end gap-3">
              <button onClick={handlePrevSlide}>
                <CustomLeftArrow />
              </button>
              <button onClick={handleNextSlide}>
                <CustomRightArrow />
              </button>
            </div>
          </div>
          <div className="relative w-1/2 flex justify-end">
            <Image
              src={slidesData[currentIndex].imageSrc}
              alt={`slide-${currentIndex + 1}`}
              className="object-cover"
              height={650}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepInvestmentGuideSection;
