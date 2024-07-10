import React from "react";
import Image from "next/image";
import Check from "@/images/Section-2/Check.png";
import CellphoneImage from "@/images/Section-2/CellphoneImage.png";
import BusinessMoney from "@/images/Section-2/BusinessMoney.png";
import Key from "@/images/Section-2/Key.png";

const FixedTermCardSectionResponsive = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white justify-center items-center">
      <div>
        <h1 className="text-[32px] text-blueDarkColor font-bold">
          Como un plazo fijo
        </h1>
        <div className="flex flex-row">
          <Image src={Check} alt="check" width={24.11} height={19} />
          <h2 className="text-[20px] text-blueDarkColor ml-2">
            Crecer es simple
          </h2>
        </div>
        <div className="w-[333px] h-[516px] flex flex-col justify-end relative">
          <Image
            src={CellphoneImage}
            alt="cellphone-image"
            width={258}
            height={154}
            className="absolute top-0 left-[40px] z-10"
          />
          <div className="bg-lighBlueColorOpcional w-[333px] rounded-xl h-[260px] shadow-lg flex flex-col justify-center p-4 text-justify relative z-0">
            <p className="text-[16px]">
              Pero con Rentabilidades
              <span className="font-bold"> mensuales </span> y
              <span className="font-bold"> sin comisiones. </span>
            </p>
            <p className="text-[13px]">
              Aprovecha las ventajas de invertir con Finniu: obtén
              rentabilidades mensuales sin letras pequeñas, similar a un plazo
              fijo pero con mayores beneficios.
            </p>
            <p className="text-[11px] text-darkBlueColor ">
              (1)REVISA LOS TÉRMINOS Y CONDICIONES
            </p>
          </div>
        </div>
      </div>

      <div className=" m-3">
        <h1 className="text-[32px] text-blueDarkColor font-bold">
          Inversión segura
        </h1>
        <div className="flex flex-row">
          <Image src={Key} alt="business-money" width={25} height={35} />
          <h2 className="text-[20px] text-blueDarkColor ml-2">
            Invierte sin paltas
          </h2>
        </div>
        <div className="">
          <div className=" w-[333px] h-[420px] relative flex justify-end flex-col">
            <div className="flex justify-center">
              <Image
                src={BusinessMoney}
                alt="business-money"
                width={258}
                height={114}
                className="absolute top-10 left-[40px] z-10"
              />
              <div className="bg-lighBlueColorOpcional relative w-[333px] rounded-xl h-[176px] shadow-lg flex flex-col justify-center p-4 text-justify">
                <p className="text-[13px]">
                  Contamos con diversas herramientas legales para asegurar tu
                  inversión.
                </p>
                <p className="text-[11px] text-darkBlueColor mt-3">
                  (1)REVISA LOS TÉRMINOS Y CONDICIONES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedTermCardSectionResponsive;