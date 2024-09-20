"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import CellphoneandAppStore from "@/images/Section-3/CellphoneandAppStore.png";
import Eyes from "@/images/Section-3/Eyes.png";
import LoginCellphoneFinniu from "@/images/Section-3/LoginCellphoneFinniu.png";
import RegisterLight from "@/images/Section-3/RegisterLight.png";
import RegisterDark from "@/images/Section-3/RegisterDark.png";
import CellPhoneandGooglePlay from "@/images/Section-3/CellphoneandGooglePlay.png";
import ChoosePlan from "@/images/Section-3/ChoosePlan.png";
import Step3 from "@/images/Section-3/Step3.png";
import Step4 from "@/images/Section-3/Step4.png";
import Bill from "@/images/Section-3/Bill.png";
import CustomLeftArrow from "@/components/CustomLeftArrow";
import CustomRightArrow from "@/components/CustomRightArrow";
const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndexState, setActiveIndexState] = useState(0);
  const [isWhereToFindButtonActiveState, setWhereToFindButtonActiveState] =
    useState(true);
  const [animationClassState, setAnimationClassState] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setWhereToFindButtonActiveState(!isWhereToFindButtonActiveState);
    setActiveIndexState(0);
  };

  const handlePrevClick = () => {
    setActiveIndexState((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndexState((prevIndex) =>
      prevIndex === itemsSlider.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            setActiveIndexState(0);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isVisible) {
      interval = setInterval(handleNextClick, 10000); // change 10 seconds
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible, isWhereToFindButtonActiveState]);

  useEffect(() => {
    setAnimationClassState("fade-in-right");

    const timeout = setTimeout(() => {
      setAnimationClassState("");
    }, 800);

    return () => clearTimeout(timeout);
  }, [activeIndexState]);

  const itemsSliderWhereFindIt = [
    {
      text: "Busca Finniu App en la AppStore o Google play.",
      image: [CellphoneandAppStore, CellPhoneandGooglePlay],
      alt: "app-store-icon",
    },
    {
      text: "Descarga la aplicación de Finniu.",
      image: [LoginCellphoneFinniu],
      alt: "login-cellphone-finniu",
    },
    {
      text: "¡Regístrate y listo!",
      image: [RegisterLight],
      alt: "register",
    },
  ];

  const itemsSliderInvest = [
    {
      text: "Regístrate en la App de Finniu.",
      image: [RegisterDark],
      alt: "register",
    },
    {
      text: "Elige el plan de inversión que más se ajuste a ti (soles o dólares).",
      image: [ChoosePlan],
      alt: "choose-plan",
    },
    {
      text: "Ingresa el monto, el plazo y el banco.",
      image: [Step3],
      alt: "step-3",
    },
    {
      text: "Realiza la inversión a la cuenta corriente de Finniu y adjunta tu comprobante.",
      image: [Step4],
      alt: "step-4",
    },
  ];

  const itemsSlider = isWhereToFindButtonActiveState
    ? itemsSliderWhereFindIt
    : itemsSliderInvest;

  const containerBackgroundColor = isWhereToFindButtonActiveState
    ? "bg-backgroundLightColor"
    : "bg-blueDarkColor";
  const textColor = isWhereToFindButtonActiveState
    ? "text-blueColorBackground"
    : "text-white";

  return (
    <section
      id="HowItWorks"
      ref={sectionRef}
      className="bg-grayColorOpcional w-full min-h-[550px] xl:min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col container-section items-center container">
        <div className="flex flex-col xl:flex-row items-center justify-between w-full">
          <h1 className="text-[28px] xl:text-[40px] font-bold">
            ¿Cómo funciona?
          </h1>
          <div
            className={`flex flex-row m-2 w-[337px] xl:w-[805px] items-center h-[51px] xl:h-[90px] justify-around rounded-full ${
              isWhereToFindButtonActiveState
                ? "bg-lightBlue"
                : "bg-blueDarkColor"
            }`}
          >
            <ButtonComponent
              text="Descarga la app"
              onClick={handleButtonClick}
              className={`buttonTransition h-[35px] xl:h-16 text-[12px] text-center ml-2 xl:ml-0 xl:text-[28px] shadow-md w-[162px] xl:w-[333px] gap-2 flex justify-center items-center rounded-full ${
                isWhereToFindButtonActiveState
                  ? "bg-lightBlueColor text-blackColorText"
                  : "bg-blueDarkColor text-white"
              }`}
            >
              {isWhereToFindButtonActiveState && (
                <Image src={Eyes} alt="eyes" width={20} height={20} />
              )}
            </ButtonComponent>
            <ButtonComponent
              text="¿Cómo empezar?"
              onClick={handleButtonClick}
              className={`buttonTransition h-[35px] xl:h-16 w-[162px] ml-0 xl:w-[333px] m-1 flex justify-center items-center gap-2 rounded-full text-[12px] xl:text-[28px] ${
                isWhereToFindButtonActiveState
                  ? "bg-lightBlue text-blueDarkColor"
                  : "bg-blueColorButton text-white"
              }`}
            >
              {!isWhereToFindButtonActiveState && (
                <Image src={Bill} alt="bill" width={20} height={20} />
              )}
            </ButtonComponent>
          </div>
        </div>
        <h1 className="text-[24px] xl:text-[40px]">
          Paso {activeIndexState + 1}
        </h1>
        <div className="flex flex-row rounded-2xl justify-center items-center w-[400px] xl:w-[80%]">
          <button
            onClick={handlePrevClick}
            disabled={activeIndexState === 0}
            className={`mr-4 ${
              activeIndexState === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <CustomLeftArrow
              isFirstSlide={activeIndexState === 0}
              isLastSlide={activeIndexState === itemsSlider.length - 1}
              className="relative left-5 xl:static xl:left-0"
            />
          </button>
          <div
            className={`slider-container p-5 w-full h-[416px] xl:h-[599px] flex rounded-2xl flex-col justify-center items-center ${containerBackgroundColor}`}
          >
            <p
              className={`mb-4 text-[14px] xl:text-[24px] text-center ${textColor} ${animationClassState}`}
            >
              {itemsSlider[activeIndexState].text}
            </p>
            <div className="flex flex-row justify-center xl:w-[200px] w-[140px] items-center ">
              {itemsSlider[activeIndexState].image.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={itemsSlider[activeIndexState].alt}
                  className={`w-[140px] xl:w-[350px]`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={handleNextClick}
            disabled={activeIndexState === itemsSlider.length - 1}
            className={`ml-4 ${
              activeIndexState === itemsSlider.length - 1
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          >
            <CustomRightArrow
              isFirstSlide={activeIndexState === 0}
              isLastSlide={activeIndexState === itemsSlider.length - 1}
              className="relative right-5 xl:static xl:right-0"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
