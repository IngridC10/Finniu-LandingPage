import Image from "next/image";
import AppStoreIcon from "/images/AppStoreIcon.png";
import GooglePlayIcon from "/images/GooglePlayIcon.png";
import CellphoneDownloadFinniu from "/images/CellphoneDownloadFinniu.png";
import CellphoneAppStore from "/images/CellphoneAppStore.png";
import { Carousel } from "flowbite-react";
import Eyes from "/images/Eyes.png";
import LoginCellphoneFinniu from "/images/LoginCellphoneFinniu.png";
import Register from "/images/Register.png";
import SliderItemComponent from "./SliderItemComponent";

const StepDownloadAppComponent = () => {
  return (
    <div className="flex flex-col bg-grayColorOpcional justify-start items-center w-full h-[800px]">
      <div className="flex flex-row p-20">
        <h1 className="text-3xl font-bold">¿Cómo funciona?</h1>
        <div className="flex flex-row m-2 w-[550px] ml-[57px] h-[50px] justify-center rounded-2xl bg-lighBlue">
          <ButtonComponent
            text="¿Cómo encontrarlo?"
            className="h-10 w-[245px] m-1  text-blueDarkColor mr-6 flex justify-center items-center rounded-xl bg-lightBlueColor gap-4 py-2 px-5 font-bold"
          />
          <ButtonComponent
            text="¿Cómo invertir?"
            className="h-10  w-[245px] m-1 flex justify-center items-center  text-blueDarkColor rounded-xl bg-lightBlueColor py-2 px-5 font-bold"
          />
        </div>
      </div>

      <h1 className="text-blueColorBackground text-2xl font-bold">Paso 1</h1>

      <div className="bg-backgroundLightColor flex flex-col p-10 rounded-2xl justify-center items-center w-[800px] h-[450px]">
        <Carousel>
          {itemsSlider.map((item, index) => (
            <SliderItemComponent
              key={index}
              text={item.text}
              imgSrc={item.image}
              alt={item.alt}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const ButtonComponent = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => <button className={className}>{text}</button>;

// Ejemplo de uso del componente
const itemsSlider = [
  {
    text: "Busca Finniu App en la AppStore o Google play.",
    image: CellphoneDownloadFinniu,
    alt: "app-store-icon",
  },
  {
    text: "Descarga la aplicación de Finniu.",
    image: LoginCellphoneFinniu,
    alt: "login-cellphone-finniu",
  },
  // {
  //   text: "Inicia sesión en la app.",
  //   image: LoginCellphoneFinniu,
  //   alt: "login-cellphone-finniu",
  // },
  {
    text: "¡Regístrate y listo!",
    image: Register,
    alt: "register",
  },
];

export default StepDownloadAppComponent;
