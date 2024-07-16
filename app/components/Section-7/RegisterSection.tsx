import React from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
// import Google from "/images/Section-7/Google.png";
import IconHand from "@/images/Section-7/IconHand.png";
// import EyeClosed from "@/images/Section-7/EyeClosed.png";

const RegisterSection = () => {
  return (
    <section className="section-custom bg-blueDarkColor">
      <div className="flex flex-col items-center container-section">
        <div className="flex flex-col justify-center items-center text-center w-[309px] 2xl:w-[1050px]">
          <h1 className="text-[24px] 2xl:text-[50px] text-white">
            Finniu, tu App para lograr tus metas financieras
          </h1>
          <div className="flex flex-row justify-center">
            <h3 className="text-[14px] 2xl:text-[30px] text-white">
              Tus primeros pasos en el mundo de las inversiones
            </h3>
            <div className="w-[30px] 2xl:w-[50px]">
              <Image src={IconHand} alt="icon-hand" />
            </div>
          </div>
        </div>
        <div className="bg-white 2xl:p-16 flex flex-col justify-center p-12 rounded-3xl shadow-md w-[341px] 2xl:w-[545px] h-auto mt-4 m-auto overflow-y-auto">
          <h2 className="text-[18px] 2xl:text-2xl mb-6 text-center">
            Regístrate para recibir mayor información
          </h2>
          <form className="leading-[50px] 2xl:leading-[51px] relative">
            <div className="mb-4 relative z-10">
              <select
                id="type-document"
                name="type-document"
                className="w-full px-3 py-2 border-2 border-t-0 border-r-0 border-l-0 border-grayColorLine rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blueColorButton"
              >
                <option value="DNI">DNI</option>
                <option value="Carnet de Extranjería">
                  Carnet de Extranjería
                </option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="dni"
                name="dni"
                placeholder="Nº de documento"
                className="w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 border-grayColorLine rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blueColorButton"
              />
            </div>
            <div className="mb-10">
              <div className="relative">
                <input
                  type="tel"
                  id="telephone"
                  name="telephone-number"
                  placeholder="Número telefónico"
                  className="w-full px-3 border-2 border-l-0 border-t-0 border-r-0 border-grayColorLine rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blueColorButton"
                />
              </div>
            </div>
            <ButtonComponent
              text="Enviar"
              className="bg-blueColorButton text-white text-[16px] 2xl:text-[20px] rounded-md w-[250px] 2xl:w-[416px] h-[45px] 2xl:h-[57px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
