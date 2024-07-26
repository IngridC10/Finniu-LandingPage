import React from "react";
import Image from "next/image";
import Check from "@/images/Section-2/Check.png";
import CellphoneImage from "@/images/Section-2/CellphoneImage.png";
import BusinessMoney from "@/images/Section-2/BusinessMoney.png";
import Key from "@/images/Section-2/Key.png";

const FixedTermCardSectionMobile = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white justify-center items-center">
      <div>
        <h1 className="text-[32px] text-center mt-5 text-blueDarkColor font-bold">
          Como un plazo fijo
        </h1>
        <div className="flex flex-row justify-center items-center">
          <Image src={Check} alt="check" height={23} />
          <h2 className="text-[20px]  text-blueDarkColor ml-2">
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
              <span className="font-extrabold"> mensuales </span> y
              <span className="font-extrabold"> sin comisiones. </span>
            </p>
            <p className="text-[13px]">
              Disfruta de los beneficios de inversiones como un plazo fijo, pero
              con la ventaja de obtener rentabilidades mensuales sin letras
              pequeñas.
            </p>
            <a
              href="/TermsFinniu/Terminos_Condiciones.pdf"
              target="_blank"
              className="hover:underline cursor-pointer text-[11px] text-darkBlueColor mt-4 "
            >
              (1)REVISA LOS TÉRMINOS Y CONDICIONES
            </a>
          </div>
        </div>
      </div>

      <div className=" m-3">
        <h1 className="text-[32px] text-blueDarkColor text-center mt-5 font-bold">
          Invierte sin paltas
        </h1>
        <div className="flex flex-row justify-center">
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

                <a
                  href="/TermsFinniu/Terminos_Condiciones.pdf"
                  target="_blank"
                  className="hover:underline text-[11px] cursor-pointer text-darkBlueColor mt-4 "
                >
                  (1)REVISA LOS TÉRMINOS Y CONDICIONES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedTermCardSectionMobile;
