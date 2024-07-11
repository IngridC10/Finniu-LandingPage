import React from "react";
import Image from "next/image";
import Check from "@/images/Section-2/Check.png";

const FixedTermCard = () => {
  return (
    <div className="flex flex-col  items-end justify-center mt-8 ml-[200px] ">
      <div className="flex flex-row gap-2 w-[680px] items-center justify-center">
        <Image src={Check} alt="check-icon" width={40} height={40} />
        <h2 className="text-darkBlueColor text-[32px] ">Crecer es simple</h2>
      </div>
      <div className="flex flex-col shadow-md items-end p-3 h-[300px] pb-10  pr-14 pl-14 mt-4 rounded-2xl text-black bg-[#F0FBFF] text-xl w-[644px]">
        <div className=" w-96 ">
          <div className="text-justify leading-relaxed">
            Pero con rentabilidades
            <span className="font-bold"> mensuales </span> y
            <span className="font-bold"> sin comisiones. </span>
            <p>
              Aprovecha las ventajas de invertir con Finniu: obtén
              rentabilidades mensuales sin letras pequeñas, similar a un plazo
              fijo pero con mayores beneficios.
            </p>
            <a
              href="/TermsFinniu/Terminos_Condiciones.pdf"
              target="_blank"
              className="hover:underline text-darkBlueColor text-base mt-4 leading-loose absolute z-20"
            >
              (1) REVISA LOS TÉRMINOS Y CONDICIONES.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedTermCard;
