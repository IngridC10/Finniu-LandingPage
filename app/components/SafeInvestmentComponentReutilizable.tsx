import React from "react";
import Image from "next/image";
import Check from "/images/Check.png";

const SafeInvestmentComponentReutilizable = () => {
  return (
    <div className="flex items-center pb-56 justify-center mt-8 ml-[200px]  md:mt-0">
      <div className="flex flex-col ml-8 p-6 pb-10 pt-10 pr-14 pl-14  text-black bg-[#F0FBFF] text-xl w-[680px]">
        <div className="flex flex-row gap-2">
          <Image src={Check} alt="Logo de Finniu" width={28} height={38} />
          <h2 className="text-darkBlueColor text-xl font-bold">
            Crecer es simple
          </h2>
        </div>
        <p className="text-justify">
          Pero con rentabilidades
          <span className="font-bold"> mensuales </span> y
          <span className="font-bold"> sin comisiones. </span>
          <p>
            Aprovecha las ventajas de invertir con Finniu: obtén rentabilidades
            mensuales sin letras pequeñas, similar a un plazo fijo pero con
            mayores beneficios.
          </p>
          <p className="text-darkBlueColor">
            (1) REVISA LOS TÉRMINOS Y CONDICIONES.
          </p>
        </p>
      </div>
    </div>
  );
};

export default SafeInvestmentComponentReutilizable;
