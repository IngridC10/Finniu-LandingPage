import React from "react";
import Image from "next/image";
import Key from "@/images/Section-2/Key.png";
import BusinessMoney from "@/images/Section-2/BusinessMoney.png";

const SafeInvestment = () => {
  return (
    <div className="flex items-center justify-center relative mt-8 ml-[200px] ">
      <div className="flex flex-col ml-8 p-6 justify-center items-end shadow-md rounded-2xl  h-[300px] text-black bg-[#F0FBFF] text-xl w-[592px]">
        <div className=" w-96 mb-3">
          <div className="flex flex-row gap-2 items-center mb-2">
            <Image src={Key} alt="key-icon" width={40} height={40} />
            <h2 className="text-darkBlueColor text-[32px] leading-relaxed">
              Invierte sin paltas
            </h2>
          </div>
          <div className="text-justify leading-relaxed ">
            <p>
              Contamos con diversas herramientas legales para asegurar tu
              inversión.
            </p>

            <a
              href="/TermsFinniu/Terminos_Condiciones.pdf"
              target="_blank"
              className="hover:underline text-darkBlueColor cursor-pointer text-base mt-4 leading-loose absolute z-20"
            >
              (1) REVISA LOS TÉRMINOS Y CONDICIONES.
            </a>
          </div>
        </div>
      </div>
      <div className=" absolute flex flex-row left-[-200px] top-[5px] w-full  items-start  justify-start   ">
        <Image
          src={BusinessMoney}
          alt="business-icon"
          width={394}
          style={{ height: "299px" }}
        />
      </div>
    </div>
  );
};

export default SafeInvestment;
