import React from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
// import Google from "/images/Section-7/Google.png";
import IconHand from "/images/Section-7/IconHand.png";
import EyeClosed from "/images/Section-7/EyeClosed.png";

const RegisterSection = () => {
  return (
    <section className=" section-custom bg-blueDarkColor">
      <div className="flex flex-col items-center container-section">
        <div className="flex flex-col justify-center items-center text-center w-[1050px]">
          <h1 className="text-[50px] text-white">
            Finniu, tu App para lograr tus metas financieras
          </h1>
          <div className="flex flex-row justify-center">
            <h3 className="text-[30px] text-white">
              Tus primeros pasos en el mundo de las inversiones
            </h3>

            <Image src={IconHand} alt="icon-hand" width={50} height={50} />
          </div>
        </div>

        <div className="bg-white p-16 rounded-3xl shadow-md w-[545px] h-[568px] mt-12  m-auto ">
          <h2 className="text-2xl mb-6 text-center">
            Regístrate para obtener tu cuenta
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
          <form className="leading-[67px]">
            <div className="mb-4">
              <label className="sr-only">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="nombre"
                placeholder="Nombre completo"
                className="w-full px-3 py-2  border-2 border-t-0 border-r-0 border-l-0 border-grayColorLine rounded-md"
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
                className="w-full px-3  border-r-0 border-l-0  border-t-0 py-2 border-2 border-grayColorLine rounded-md "
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
                  className="w-full px-3 py-2 border-2 border-l-0 border-t-0 border-r-0 border-grayColorLine rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <div className="absolute top-4 left-96 ">
                  <Image
                    src={EyeClosed}
                    alt="eyes"
                    width={30}
                    height={20}
                  ></Image>
                </div>
              </div>
            </div>
            <ButtonComponent
              text="Registrarme"
              className="bg-blueColorButton text-white text-[20px] rounded-2xl w-[320px] h-[57px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
