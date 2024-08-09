"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import padlock from "@/images/Dashboard/Login/padlock.png";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { messageNotify } from "@/components/MessageNotification";
import { changePassword } from "@/app/actions/changePassWord";
import { Toaster } from "react-hot-toast";

const ChangePassWordBody = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPasswordState, setShowPasswordState] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      router.push("/password");
    }
  }, [email, router]);

  const togglePasswordVisibility = () => {
    setShowPasswordState(!showPasswordState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newPassword) {
      messageNotify({
        type: "error",
        message: "La contraseña no puede estar vacía",
      });
      return;
    }

    setLoading(true);
    try {
      const result = await changePassword({
        email: email || "",
        newPassword,
      });

      if (result.success) {
        messageNotify({
          type: "success",
          message: "Contraseña cambiada con éxito",
        });

        setRedirect(true);
      } else {
        messageNotify({
          type: "error",
          message: "Error al cambiar la contraseña",
        });
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      messageNotify({
        type: "error",
        message: "Ocurrió un error al cambiar la contraseña",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (redirect) {
      timer = setTimeout(() => {
        router.push("/login");
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [redirect, router]);

  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <div className="flex flex-col items-center justify-start w-full h-screen gap-5 pt-10 m-auto">
        <Image className="w-[120px] h-[90px]" src={padlock} alt="Padlock" />
        <h1 className="text-black text-[37px]">Cambiar tu contraseña</h1>
        <h2 className="text-[23px]">Ingresa tu nueva contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-center justify-center">
            <input
              className="mx-[15px] self-center pl-[22px] w-[295px] h-[60px] rounded-[26px] border-[1.9px] border-solid border-[#3DD0FB] mt-[21px] text-[20px] shadow-lg"
              placeholder="Escribe tu contraseña"
              type={showPasswordState ? "text" : "password"}
              value={newPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <div>
              <FontAwesomeIcon
                className="mb-[-4px] w-[45px] h-[18px] absolute mt-[2px] ml-[-72px] cursor-pointer"
                icon={showPasswordState ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="w-[295px] h-[60px] text-white rounded-[30px] bg-[rgba(13,58,92,1)] font-bold text-lg self-center mt-14"
              style={{ cursor: "pointer" }}
              type="submit"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Cambiar contraseña"}
            </button>
          </div>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default ChangePassWordBody;
