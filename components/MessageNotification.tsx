import React from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slickRed from "@/images/Dashboard/Login/slickRed.png";
import slickGreen from "@/images/Dashboard/Login/slickGreen.png";
import sadIcon from "@/images/Dashboard/Login/sadIcon.png";
import happyIcon from "@/images/Dashboard/Login/happyIcon.png";

const MessageNotification = ({ type = "error", message = "Hubo un error" }) => {
  const handleDismiss = () => {
    toast.dismiss();
  };

  return (
    <div
      className={`relative flex flex-row rounded-tl-[50px] rounded-br-[27px] rounded-tr-[15px] rounded-bl-[20px] border-[2px] ${
        type === "error" ? "border-customRed" : "border-customGreen"
      } w-[306px] h-[90px] bg-[white]`}
    >
      <div className="relative">
        <Image
          src={type === "error" ? slickRed : slickGreen}
          alt="SlickIcon"
          className="w-[110px] h-[90px] relative -left-[3px] -top-[3px]"
        />
        <Image
          className="w-[50px] h-[50px] absolute left-[38px] bottom-[10px]"
          src={type === "error" ? sadIcon : happyIcon}
          alt="Icono"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col relative mt-[2px] items-baseline">
        <FontAwesomeIcon
          className="absolute text-[black] h-[20px] w-[20px] left-[170px] top-[5px] cursor-pointer"
          icon={faTimes}
          onClick={handleDismiss}
        />
        <h1
          className={`text-[13px] ${
            type === "error" ? "text-customRed" : "text-customGreen"
          } font-bold leading-[2.0]`}
        >
          {type === "error" ? "Upss, algo salió mal" : "Completado con éxito"}
        </h1>
        <h2 className="text-[13px] text-[#000000] font-bold">{message}</h2>
      </div>
    </div>
  );
};

import { ToastPosition } from "react-hot-toast";

export const messageNotify = ({
  message = "Hubo un error",
  type = "error",
  position = "bottom-center" as ToastPosition,
  duration = 3000,
}) => {
  toast.custom(<MessageNotification type={type} message={message} />, {
    position,
    duration,
  });
};

export default MessageNotification;
