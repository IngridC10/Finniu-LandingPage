"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import logoTextLight from "@/images/Dashboard/Login/logoTextLight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
// import { messageNotify } from "@/components/MessageNotification";
import { loginUser } from "@/app/actions/tokenAuth";

const LoginPage = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [showPasswordState, setShowPasswordState] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPasswordState(!showPasswordState);
  };

  const handleLogin = async () => {
    try {
      const result = await loginUser({
        email: emailState,
        password: passwordState,
      });
      console.log("Login Result:", result);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-t from-cremeColor w-screen to-customLightBlue">
      <div className="m-auto h-[721px] bg-[white] rounded-[50px] flex flex-col justify-center items-center w-[365px] sm:w-[500px] lg:w-[555px] xl:w-[610px]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className=" w-[90px] h-[90px] mb-[15px] self-center"
            src={logoTextLight}
            alt="logo"
            height={90}
            width={90}
          />

          <p className="text-lg md:text-xl lg:text-2xl font-normal pt-[35px] text-center">
            Hola, ingresa a tu cuenta
          </p>
          <input
            className="mx-[15px] self-center pl-[22px] w-[346px] md:w-[380px] lg:w-[400px] xl:w-[430px] h-[60px]  rounded-[26px] border-[1.9px] border-solid border-[#3DD0FB] mt-[35px] text-[20px] shadow-lg"
            type="text"
            placeholder="Correo electrónico"
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            autoComplete="username"
          />

          <input
            className="mx-[15px] self-center pl-[22px] w-[346px] md:w-[380px] lg:w-[400px] xl:w-[430px] h-[60px] rounded-[26px] border-[1.9px] border-solid border-[#3DD0FB] mt-[35px] text-[20px] shadow-lg "
            type={showPasswordState ? "text" : "password"}
            placeholder="Contraseña"
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
            autoComplete="current-password"
          />

          <div>
            <FontAwesomeIcon
              className=" w-[45px] h-[18px] relative bottom-10  left-28 2xl:left-40 cursor-pointer "
              icon={showPasswordState ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        <Link href="/password" className=" flex justify-end w-[70%]">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal pb-[10px] self-end my-5 cursor-pointer">
            ¿Olvidaste tu contraseña?
          </p>
        </Link>

        <div className="flex ml-[28px] mb-[23px] gap-[5px]">
          <input
            className="w-5 h-5 bg-white border-2 border-gray-300 rounded-md checked:bg-black checked:border-transparent checked:border-2 checked:border-black"
            type="checkbox"
            id="myCheckbox"
          />
          <label htmlFor="myCheckbox"></label>
          <p className="max-w-80 2xl:max-w-[379px]">
            Guardar mis credenciales para los futuros ingresos
          </p>
        </div>
        <Link href="/homePage">
          <button
            className="w-[184px] h-[48px] text-[white] rounded-[20px] bg-[rgba(13,_58,_92,_1)] font-bold text-[18px] self-center"
            style={{ cursor: "pointer" }}
            onClick={handleLogin}
          >
            Entrar
          </button>
        </Link>
        <Toaster />

        <Link href="/download">
          <p className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] font-normal pt-[20px] text-center cursor-pointer">
            ¿Aún no tienes una cuenta?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
