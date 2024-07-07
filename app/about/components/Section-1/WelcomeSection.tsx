import React from "react";
import HistoryCircle from "./HistoryCircle";
import Image from "next/image";
import TeamFinniu from "/images/about/section-1/TeamFinniu.png";

const WelcomeSection = () => {
  return (
    <section className=" section-custom relative bg-blueDarkColor flex flex-col ">
      <div className=" min-h-full container  flex justify-center flex-col items-center  ">
        <h1 className="text-[96px] text-white"> ¿Quiénes somos ?</h1>
        <h2 className="text-xl font-mono flex justify-center text-blue-500 typing-effect">
          Somos Finniu Crecimiento de tu patrimonio
        </h2>

        <HistoryCircle />
      </div>

      <Image src={TeamFinniu} alt="team-finniu" width={1915} />
    </section>
  );
};

export default WelcomeSection;
