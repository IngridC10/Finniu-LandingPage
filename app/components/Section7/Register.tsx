import ButtonComponent from "@/components/ButtonComponent";
import React from "react";
import Image from "next/image";
import Google from "/images/Google.png";

const Register = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-blueDarkColor">
      <div className="flex flex-col items-center justify-center min-h-screen mt-3">
        <div className="flex flex-col justify-center items-center text-center w-[1050px]">
          <h1 className="text-[50px] text-white">
            Finniu, tu App para lograr tus metas financieras
          </h1>
          <div className="flex flex-row justify-center">
            <h3 className="text-[30px] text-white">
              Tus primeros pasos en el mundo de las inversiones
            </h3>
          </div>
        </div>

        <div className="bg-white p-16 rounded-3xl shadow-md w-[525px] h-[558px] m-auto ">
          <h2 className="text-2xl mb-6 text-center">
            Regístrate para obtener tu cuenta
          </h2>
          <button className="w-full bg-white border-t-0 border shadow-md border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center mb-4 h-[53px]">
            <Image
              src={Google}
              alt="Google-Logo"
              width={40}
              height={40}
              className="w-6 h-6 mr-2"
            />
            Continúa con Google
          </button>
          <div className="flex items-center justify-center mb-4">
            <span className="border-2 border-lightBlueColor w-full"></span>
            <span className="mx-2 text-[14px] text-center text-blackColorText">
              o también
            </span>
            <span className="border-2 border-lightBlueColor w-full"></span>
          </div>
          <form className="leading-[53px]">
            <div className="mb-4">
              <label className="sr-only">Nombre completo</label>
              <input
                type="text"
                id="nombre"
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
                id="apellido"
                name="apellido"
                placeholder="Apellido completo"
                className="w-full px-3  border-r-0 border-l-0  border-t-0 py-2 border-2 border-grayColorLine rounded-md "
              />
            </div>
            <div className="mb-6">
              <label className="sr-only">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                className="w-full px-3 py-2 border-2 border-l-0 border-t-0 border-r-0 border-grayColorLine rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
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

export default Register;
