"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import SliderComponent from "./SliderItemComponent";
import ButtonComponent from "@/components/ButtonComponent";
import CellphoneandAppStore from "@/images/Section-3/CellphoneandAppStore.png";
import Eyes from "@/images/Section-3/Eyes.png";
import LoginCellphoneFinniu from "@/images/Section-3/LoginCellphoneFinniu.png";
import RegisterLight from "@/images/Section-3/RegisterLight.png";
import RegisterDark from "@/images/Section-3/RegisterDark.png";
import CellPhoneandGooglePlay from "@/images/Section-3/CellPhoneandGooglePlay.png";
import ChoosePlan from "@/images/Section-3/ChoosePlan.png";
import Step3 from "@/images/Section-3/Step3.png";
import Step4 from "@/images/Section-3/Step4.png";
import Bill from "@/images/Section-3/Bill.png";

const HowItWorksSection = () => {
  const [activeIndexState, setActiveIndexState] = useState(0);
  const [isWhereToFindButtonActiveState, setWhereToFindButtonActiveState] =
    useState(true);

  const handleSlideChange = (index: SetStateAction<number>) => {
    setActiveIndexState(index);
  };

  const handleButtonClick = (): void => {
    setWhereToFindButtonActiveState(!isWhereToFindButtonActiveState);
    setActiveIndexState(0);
  };

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
      text: "Registrate en la App de Finniu.",
      image: [RegisterDark],
      alt: "register",
    },

    {
      text: "Elige el  plan de inversión que más se ajuste a ti (soles o dólares). ",
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

  const itemsSlider =
    isWhereToFindButtonActiveState === true
      ? itemsSliderWhereFindIt
      : itemsSliderInvest;

  const containerBackgroundColor = isWhereToFindButtonActiveState
    ? "bg-backgroundLightColor"
    : "bg-blueDarkColor";

  const textColor = isWhereToFindButtonActiveState
    ? "text-blueColorBackground"
    : "text-white";

  return (
    <section className="bg-grayColorOpcional section-custom ">
      <div
        id="HowItWorks"
        className="flex flex-col container-section  items-center container"
      >
        <div className="flex flex-row  items-center justify-between w-full">
          <div>
            <h1 className="text-[55px] flex font-bold">¿Cómo funciona?</h1>
          </div>

          <div
            className={`flex flex-row m-2 w-[805px] items-center  h-[90px] justify-around rounded-full ${
              isWhereToFindButtonActiveState
                ? "bg-lighBlue"
                : "bg-blueDarkColor "
            }`}
          >
            <ButtonComponent
              text="¿Cómo encontrarlo?"
              onClick={() => handleButtonClick()}
              className={`h-16 text-[28px] shadow-md  w-[333px] gap-2 flex justify-center items-center rounded-full ${
                isWhereToFindButtonActiveState === true
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
              onClick={() => handleButtonClick()}
              className={`h-16 w-[333px] m-1 flex justify-center items-center gap-2 rounded-full text-[28px] ${
                isWhereToFindButtonActiveState === false
                  ? "bg-blueColorButton text-white"
                  : "bg-lighBlue text-blueDarkColor"
              }`}
            >
              {!isWhereToFindButtonActiveState && (
                <Image src={Bill} alt="bill" width={20} height={20} />
              )}
            </ButtonComponent>
          </div>
        </div>

        <h1 className="text-blueColorBackground text-[48px] font-bold">
          Paso {activeIndexState + 1}
        </h1>

        <div className="flex flex-row rounded-2xl justify-center items-center w-[80%] h-[800px]">
          <Carousel
            className="p-5"
            key={isWhereToFindButtonActiveState ? "findIt" : "invest"}
            onSlideChange={handleSlideChange}
            indicators={false}
            slide={true}
          >
            {itemsSlider.map((item, index) => (
              <SliderComponent
                key={index}
                text={item.text}
                image={item.image}
                alt={item.alt}
                backgroundColor={containerBackgroundColor}
                textColor={textColor}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
