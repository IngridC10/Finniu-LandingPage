import React from "react";
import Image from "next/image";
import Bill from "/images/Bill.png";
import InvestmentForm from "./InvestmentForm";

const SimulatorInvestment = () => {
  return (
    <section className=" w-full bg-blueDarkColor flex justify-center items-center ">
      <div className=" container  flex min-h-screen items-center justify-center">
        <div className="text-white text-[50px] w-full h-full font-bold text-left flex items-center">
          <p className="w-[471px] text-[50px] ">
            Simula tu inversión y proyecta tus metas.
          </p>
          <div className="ml-4">
            <Image
              src={Bill}
              alt="Logo de Google Play"
              width={40}
              height={40}
              style={{ height: "auto" }}
            />
          </div>
          <InvestmentForm />
        </div>
      </div>
    </section>
  );
};

export default SimulatorInvestment;
