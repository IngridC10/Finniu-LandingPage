import React from "react";
import Image from "next/image";
import Innovaul from "/images/about/section-2/Innovaul.png";
import Incubagraria from "/images/about/section-2/Incubagraria.png";
import Emprelatam from "/images/about/section-2/Emprelatam.png";

const Sponsored = () => {
  return (
    <section
      className="w-full  justify-center items-center h-[552px] flex flex-col bg-gradientColor"
      style={{ background: "linear-gradient(to bottom, #FDEFDF, #DBF5FF" }}
    >
      <div className=" flex  container flex-col justify-center items-center w-full min-h-full ">
        <h2 className="text-black text-[48px] font-bold  ">
          Con el respaldo de
        </h2>
        <div className=" flex flex-row w-full gap-[65px] justify-center p-8 ">
          <Image src={Innovaul} alt="innovaul" width={348} height={200} />
          <Image
            src={Incubagraria}
            alt="incubagraria"
            width={348}
            height={200}
          />
          <Image src={Emprelatam} alt="emprelatam" width={348} height={200} />
        </div>
      </div>
    </section>
  );
};

export default Sponsored;
