import React from "react";
import Image from "next/image";
import Key from "/images/Key.png";
import BusinessMoney from "/images/BusinessMoney.png";

const SafeInvestment = () => {
  return (
    <div className="flex items-center pb-56 justify-center mt-8 ml-[200px]  md:mt-0">
      <div className="flex flex-col ml-8 p-6 pb-10 justify-center rounded-2xl pt-10 pr-14 pl-14 h-[280px] text-black bg-[#F0FBFF] text-xl w-[680px]">
        <div className="flex flex-row gap-2">
          <Image src={Key} alt="key-icon" width={28} height={28} />
          <h2 className="text-darkBlueColor text-xl font-bold leading-relaxed">
            Invierte sin paltas
          </h2>
        </div>
        <div className="text-justify leading-relaxed ">
          <p>
            Contamos con diversas herramientas legales para asegurar tu
            inversión.
          </p>
          <p className="text-darkBlueColor leading-loose">
            (1) REVISA LOS TÉRMINOS Y CONDICIONES.
          </p>
        </div>
      </div>
      <div className="absolute top-[1260px] right-[730px]">
        <Image
          src={BusinessMoney}
          alt="business-icon"
          width={260}
          height={575}
        />
      </div>
    </div>
  );
};

export default SafeInvestment;
