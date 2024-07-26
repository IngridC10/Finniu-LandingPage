import React from "react";
import Image from "next/image";
import Innovaul from "@/images/About/Section-2/Innovaul.png";
import Incubagraria from "@/images/About/Section-2/Incubagraria.png";
import Emprelatam from "@/images/About/Section-2/Emprelatam.png";
import InversionSimple from "@/images/About/Section-2/InversionSimple.png";

const Sponsored = () => {
  return (
    <section
      className="w-full  justify-center items-center  h-[638px]  2xl:h-[552px] flex flex-col bg-gradientColor"
      style={{ background: "linear-gradient(to bottom, #FDEFDF, #DBF5FF" }}
    >
      <div className=" flex  container flex-col justify-center pt-3 2xl:pt-[66px] items-center w-full min-h-full ">
        <h2 className="text-black text-xl 2xl:text-[48px]">
          Con el respaldo de
        </h2>
        <div className="  flex-col   flex 2xl:flex-row w-full gap-5 2xl:gap-[65px] items-center justify-center p-6 2xl:p-16 ">
          <Image
            src={Innovaul}
            alt="innovaul"
            className=" w-[205px]  2xl:w-[348px]"
          />
          <Image
            src={Incubagraria}
            alt="incubagraria"
            className=" w-[205px]  2xl:w-[348px]"
          />
          <Image
            src={Emprelatam}
            alt="emprelatam"
            className=" w-[205px]  2xl:w-[348px]"
          />

          <Image
            src={InversionSimple}
            alt="inversion-simple"
            className=" w-[205px]  2xl:w-[348px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsored;
