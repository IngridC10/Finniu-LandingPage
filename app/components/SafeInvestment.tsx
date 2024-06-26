import React from "react";
import Image from "next/image";
import BusinessMoney from "/images/BusinessMoney.png";

const SafeInvestment = () => {
  return (
    <div className="flex items-center pb-56 justify-center mt-8 ml-[200px]  md:mt-0">
      <div className="flex flex-col ml-8 p-6 pb-10 pt-10 pr-14 pl-14  text-black bg-[#F0FBFF] text-xl w-[680px]">
        <div className="flex flex-row gap-2">
          <Image
            src={BusinessMoney}
            alt="Logo de Finniu"
            width={38}
            height={38}
          />
          <h2 className="text-darkBlueColor text-xl font-bold">
            Crecer es simple
          </h2>
        </div>
        <p className="text-justify">
          Invierte sin paltas
          <span className="font-bold"> mensuales </span> y
          <span className="font-bold"> sin comisiones. </span>
          <p>
            Contamos con diversas herramientas legales para asegurar tu
            inversión.
          </p>
          <p className="text-darkBlueColor">
            (1) REVISA LOS TÉRMINOS Y CONDICIONES.
          </p>
        </p>
      </div>
    </div>
  );
};

export default SafeInvestment;
