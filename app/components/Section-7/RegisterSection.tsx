import React from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import Google from "/images/Section-7/Google.png";
import IconHand from "@/images/Section-7/IconHand.png";
import EyeClosed from "@/images/Section-7/EyeClosed.png";

const RegisterSection = () => {
  return (
    <section className=" section-custom bg-blueDarkColor">
      <div className="flex flex-col items-center container-section">
        <div className="flex flex-col justify-center items-center text-center w-[309px]  2xl:w-[1050px]">
          <h1 className=" text-[24px]    2xl:text-[50px] text-white">
            Finniu, tu App para lograr tus metas financieras
          </h1>
          <div className="flex flex-row justify-center">
            <h3 className="text-[14px]  2xl:text-[30px] text-white">
              Tus primeros pasos en el mundo de las inversiones
            </h3>

            <div className=" w-[30px] 2xl:w-[50px]">
              <Image src={IconHand} alt="icon-hand" />
            </div>
          </div>
        </div>

        <div className="bg-white  2xl:p-16 flex flex-col justify-center  p-12 rounded-3xl shadow-md   w-[341px]    2xl:w-[545px]   h-[425px] 2xl:h-[568px] mt-4  m-auto ">
          <h2 className="text-2xl mb-6 text-center hidden 2xl:block">
            Regístrate para recibir mayor información
          </h2>
          {/* <button className="w-full bg-white border-t-0 border shadow-md border-gray-300 text-gray-700 py-6 rounded-md flex items-center justify-center mb-4 h-[53px]">
            <Image
              src={Google}
              alt="Google-Logo"
              width={40}
              height={40}
              className="w-6 h-6 mr-2"
            />
            Continúa con Google
          </button> */}
          {/* <div className="flex items-center justify-center mb-4">
            <span className="border-2 border-lightBlueColor w-full"></span>
            <span className="mx-2 text-[14px] text-center text-blackColorText whitespace-nowrap">
              o también
            </span>
            <span className="border-2 border-lightBlueColor w-full"></span>
          </div> */}
          <form className="  leading-[50px]   2xl:leading-[51px]">
            <div className="mb-4">
              <label className="sr-only">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="nombre"
                placeholder="Nombre completo"
                className="w-full px-3 py-2  border-2 border-t-0 border-r-0 border-l-0 border-grayColorLine rounded-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="apellido" className="sr-only">
                Apellido completo
              </label>
              <input
                type="text"
                id="last-name"
                name="apellido"
                placeholder="Apellido completo"
                className="w-full px-3  border-r-0 border-l-0  border-t-0 py-2 border-2 border-grayColorLine rounded-sm "
              />
            </div>
            <div className="mb-10">
              <label className="sr-only">Correo electrónico</label>
              <div className=" relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className="w-full px-3 py-2 border-2 border-l-0 border-t-0 border-r-0 border-grayColorLine rounded-sm focus:outline-none focus:ring focus:border-blue-300"
                />
                <div className="absolute top-4  right-[10px]  2xl:right-0  2xl:left-96 h-[10px] w-[20px]  2xl:w-[30px] 2xl:h-[20px] ">
                  <Image
                    src={EyeClosed}
                    alt="eyes"
                    // width={30}
                    // height={20}
                  ></Image>
                </div>
              </div>
            </div>
            <ButtonComponent
              text="Registrarme"
              className="bg-blueColorButton text-white  text-[16px]    2xl:text-[20px] rounded-md   w-[250px]   2xl:w-[416px]    h-[45px] 2xl:h-[57px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
