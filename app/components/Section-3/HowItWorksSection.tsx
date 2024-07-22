"use client";
import { useEffect, useState } from "react";
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
  const [activeIndexState, setActiveIndexState] = useState(0);

  const [isWhereToFindButtonActiveState, setWhereToFindButtonActiveState] =
    useState(true);
  const [isSelectedButtonRightState, setSelectedButtonRightState] =
    useState(true);

  const handleButtonClick = () => {
    setWhereToFindButtonActiveState(!isWhereToFindButtonActiveState);
    setActiveIndexState(0);
  };

  const handlePrevClick = () => {
    setSelectedButtonRightState(false);
    setActiveIndexState((prevIndex) =>
      prevIndex === 0 ? itemsSlider.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedButtonRightState(true);
    setActiveIndexState((prevIndex) =>
      prevIndex === itemsSlider.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index: number) => {
    setSelectedButtonRightState(index > activeIndexState);
    setActiveIndexState(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 10000);
    return () => clearInterval(interval);
  }, [isWhereToFindButtonActiveState]);

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
      className="bg-grayColorOpcional w-full min-h-[550px]  2xl:min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col container-section items-center container">
        <div className="flex flex-col 2xl:flex-row items-center justify-between w-full">
          <h1 className="text-[32px] 2xl:text-[55px] font-bold">
            ¿Cómo funciona?
          </h1>
          <div
            className={`flex flex-row m-2 w-[337px] 2xl:w-[805px] items-center h-[51px] 2xl:h-[90px] justify-around rounded-full ${
              isWhereToFindButtonActiveState
                ? "bg-lighBlue"
                : "bg-blueDarkColor"
            }`}
          >
            <ButtonComponent
              text="¿Cómo encontrarlo?"
              onClick={handleButtonClick}
              className={` buttonTransition h-[35px] 2xl:h-16 text-[12px] text-center ml-2 2xl:ml-0 2xl:text-[28px] shadow-md w-[162px] 2xl:w-[333px] gap-2 flex justify-center items-center rounded-full ${
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
              text="¿Cómo invertir?"
              onClick={handleButtonClick}
              className={`buttonTransition  h-[35px] 2xl:h-16 w-[162px] ml-0 2xl:w-[333px] m-1 flex justify-center items-center gap-2 rounded-full text-[12px] 2xl:text-[28px] ${
                isWhereToFindButtonActiveState
                  ? "bg-lighBlue text-blueDarkColor"
                  : "bg-blueColorButton text-white"
              }`}
            >
              {!isWhereToFindButtonActiveState && (
                <Image src={Bill} alt="bill" width={20} height={20} />
              )}
            </ButtonComponent>
          </div>
        </div>
        <h1 className={`text-[24px] 2xl:text-[48px] `}>
          Paso {activeIndexState + 1}
        </h1>
        <div className="flex flex-row rounded-2xl justify-center items-center w-[400px] 2xl:w-[80%]">
          <button onClick={handlePrevClick}>
            <CustomLeftArrow
              isSelectedButtonRightState={isSelectedButtonRightState}
              className="relative left-5 2xl:static 2xl:left-0"
            />
          </button>
          <div
            className={`p-5 w-full h-[416px]  2xl:h-[599px] flex rounded-2xl flex-col justify-center items-center ${containerBackgroundColor}`}
          >
            <p
              className={`mb-4 text-[14px] 2xl:text-[24px] text-center ${textColor}`}
            >
              {itemsSlider[activeIndexState].text}
            </p>
            <div className="flex flex-row justify-center 2xl:w-[200px] w-[140px] items-center ">
              {itemsSlider[activeIndexState].image.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={itemsSlider[activeIndexState].alt}
                  width={200}
                  // className="h-full"
                />
              ))}
            </div>
          </div>
          <button onClick={handleNextClick}>
            <CustomRightArrow
              isSelectedButtonRightState={isSelectedButtonRightState}
              className="relative 2xl:static 2xl:right-0 right-6"
            />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {itemsSlider.map((_, index) => (
            <button
              key={index}
              className={`2xl:w-5  w-3 h-3 2xl:h-5 rounded-full mx-1 ${
                index === activeIndexState
                  ? "bg-blueDarkColor"
                  : "bg-lightBlueColor"
              }`}
              onClick={() => goToIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
