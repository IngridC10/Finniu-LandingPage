"use client";
import Image from "next/image";
import CellphoneandAppStore from "/images/CellphoneandAppStore.png";
import { Carousel } from "flowbite-react";
import Eyes from "/images/Eyes.png";
import LoginCellphoneFinniu from "/images/LoginCellphoneFinniu.png";
import Register from "/images/Register.png";
import CellPhoneandGooglePlay from "/images/CellPhoneandGooglePlay.png";
import SliderComponent from "./SliderItemComponent";
import { SetStateAction, useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";

const StepDownloadAppComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <section className=" bg-grayColorOpcional w-full flex justify-center items-center ">
      <div
        id="HowItWorks"
        className="flex flex-col justify-start items-center max-w-[1512px] h-[800px]"
      >
        <div className="flex flex-row  p-2 ">
          <h1 className="text-[55px] flex font-bold  ">¿Cómo funciona?</h1>
          <div className=" w-[350px] "></div>

          <div className="flex flex-row m-2 w-[550px] items-center bg-lighBlue ml-[57px] h-[66px] justify-center rounded-3xl bg-lightBlue">
            <ButtonComponent
              text="¿Cómo encontrarlo?"
              className={`h-12 w-[245px] m-1 text-blueDarkColor mr-6 flex justify-center items-center rounded-full bg-lightBlueColor gap-4 py-2 px-5 font-bold`}
            >
              <Image src={Eyes} alt="eyes" width={20} height={20} />
            </ButtonComponent>
            <ButtonComponent
              text="¿Cómo invertir?"
              className={`h-12 w-[245px] m-1 flex justify-center items-center text-blueDarkColor rounded-full bg-lightBlueColor py-2 px-5 font-bold 
            }`}
            />
          </div>
        </div>

        <h1 className="text-blueColorBackground text-3xl font-bold">
          Paso {activeIndex + 1}
        </h1>

        <div className="bg-backgroundLightColor flex flex-row  rounded-2xl justify-center items-center w-[80%] h-[600px]">
          <Carousel onSlideChange={handleSlideChange}>
            {itemsSlider.map((item, index) => (
              <SliderComponent
                key={index}
                text={item.text}
                image={item.image}
                alt={item.alt}
              />
            ))}
          </Carousel>
        </div>

        {/* <div className="flex flex-row justify-center mt-4">
        {itemsSlider.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
      </div>
    </section>
  );
};

// const ButtonSlider = ({
//   text,
//   className,
// }: {
//   text: string;
//   className: string;
// }) => <button className={className}>{text}</button>;

const itemsSlider = [
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
    image: [Register],
    alt: "register",
  },
];

export default StepDownloadAppComponent;
