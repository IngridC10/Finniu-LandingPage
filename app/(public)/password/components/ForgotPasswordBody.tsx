"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import padlock from "@/images/Dashboard/Login/padlock.png";
import { recoveryPasswordAction } from "@/app/actions/recoveryPasswordAction";
import { messageNotify } from "@/components/MessageNotification";
import { Toaster } from "react-hot-toast";

const ForgotPasswordBody = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRecoveryPassword = async () => {
    if (email.trim() === "") {
      messageNotify({
        message: "Por favor ingresa tu correo electrónico",
      });

      return;
    }

    const response = await recoveryPasswordAction({
      email: email,
    });

    if (response && response.success) {
      router.push(`/code-verification?email=${email}`);
    }

    if (response && !response.success) {
      messageNotify({ message: "El correo ingresado no existe" });
    }
  };

  return (
    <div>
      <div className="h-full pt-10 pb-20">
        <div className="flex w-[400px] h-[600px] flex-col m-auto">
          <h1 className="text-xl font-bold text-center text-black sm:text-2xl md:text-3xl">
            ¿Olvidaste tu contraseña ?
          </h1>
          <h2 className="mt-3 text-lg font-semibold leading-10 text-center text-black">
            No te preocupes es posible recuperarla
          </h2>
          <div className="w-[328px] sm:w-[334px] md:w-[350px] lg:w-[358px] h-[163px] rounded-[20px] bg-[rgba(255,_238,_221,_1)] m-[30px] flex flex-row relative">
            <Image
              className="w-[89px] h-[76px] absolute -left-[44px] bottom-[52px]"
              src={padlock}
              alt="Padlock"
            />
            <h3 className="text-sm font-light flex flex-row pl-[29px] m-[22px] leading-[1.8]">
              Por favor ingresa tu correo electrónico que ingresaste al crear tu
              cuenta en la App, en unos minutos recibirás un correo electrónico
              para recuperar tu contraseña.
            </h3>
          </div>
          <input
            className="m-[15px] self-center pl-[22px] w-[267px] h-[46px] rounded-[26px] border-[1.9px] border-[solid] border-[#0d3a5c] mt-[2px] text-[20px]"
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleRecoveryPassword}
            className="w-[267px] h-[46px] text-white rounded-[20px] bg-[rgba(13,58,92,1)] font-bold text-lg self-center mt-[26px]"
            style={{ cursor: "pointer" }}
          >
            Enviar Correo
          </button>

          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordBody;
