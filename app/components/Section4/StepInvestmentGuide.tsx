"use client";
import Image from "next/image";
import HandCellPhone from "/images/HandCellPhone.png";
import { Carousel } from "flowbite-react";
import VirtualWallet from "/images/VirtualWallet.png";
import QuarterlyReports from "/images/QuarterlyReports.png";
import ProjectYourGoals from "/images/ProjectYourGoals.png";
import { SetStateAction, useState } from "react";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
const InvestmentHand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesData = [
    {
      title: "Todas tus inversiones en la palma de tu mano",
      subtitle: "Finanzas fácil",
      description:
        "Visualiza y gestiona todas tus inversiones de manera rápida y sencilla con nuestra aplicación, que te ofrece un vistazo completo de tu historial y activos.",
      imageSrc: [HandCellPhone],
      bgColor: "bg-whiteColor text-blackColorText",
    },
    {
      title: "Reportes Trimestrales",
      subtitle: "Optimizamos tu dinero",
      description:
        "Maximizamos tu inversión. Es por eso que ofrecemos una visibilidad continua sobre el rendimiento de tus inversiones a través de informes trimestrales.",
      imageSrc: [QuarterlyReports],
      bgColor: "bg-blueDarkColor text-white",
    },
    {
      title: "Proyecta tus metas",
      subtitle: "Estamos listos para crecer contigo",
      description:
        "Podrás proyectar los rendimientos mensuales y totales de tu inversión de manera rápida y sencilla.",
      imageSrc: [ProjectYourGoals],
      bgColor: "bg-white text-blackColorText",
    },
    // {
    //   title: "Billetera Virtual",
    //   description:
    //     "Pronto podrás disfrutar de nuestra billetera virtual, una herramienta adicional para gestionar de manera conveniente tus inversiones.",
    //   imageSrc: [VirtualWallet],
    //   bgColor: "bg-lightSkyBlue text-blackColorText",
    // },
  ];

  const handleSlideChange = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className={`flex justify-center w-full items-center py-10  ${slidesData[currentIndex].bgColor}`}
    >
      <div className="container">
        <Carousel
          slideInterval={10000}
          // leftControl={<CustomLeftArrow />}
          // rightControl={<CustomRightArrow />}
          onSlideChange={handleSlideChange}
          indicators={false}
          className="w-full h-[861px]"
        >
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-center p-6 ${slide.bgColor}`}
            >
              <div className="w-[480px] text-right mb-0">
                <CustomLeftArrow />
                <CustomRightArrow />
                <p className="text-3xl font-bold mb-2">
                  {slide.title.split(" en ")[0]} <br />
                  {slide.title.split(" en ")[1]}
                </p>
                <p className="text-[34px] mb-4">{slide.subtitle}</p>
                <p className="text-base font-medium mb-6">
                  {slide.description}
                </p>
              </div>

              <div className="relative w-1/2 flex justify-center">
                {/* <div>
                  <Image
                    src={slide.imageSrc[0]}
                    alt={`slide-${index + 1}`}
                    className="object-cover"
                    width={670}
                    style={{ height: "770px" }}
                  />
                </div> */}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default InvestmentHand;
