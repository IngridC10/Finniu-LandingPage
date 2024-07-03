import React from "react";
import Image from "next/image";
import Bill from "/images/Bill.png";
import InvestmentForm from "./InvestmentForm";

const SimulatorInvestment = () => {
  return (
    <section className="flex w-full  min-h-screen">
      <div className="w-3/5 container flex-col bg-blueDarkColor text-white flex items-center justify-center p-8">
        <div className=" flex flex-center flex-col">
          <p className=" text-[64px] font-bold"> Simula tu inversión</p>
          <p className="text-[64px] font-bold "> y proyecta tus</p>
          <div className="flex flex-row gap-5">
            <p className="text-[64px] font-bold">metas</p>
            <Image
              src={Bill}
              alt="bill"
              width={78}
              height={90}
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="w-4/5 bg-lightColor flex items-center justify-center p-8">
        <InvestmentForm />
      </div>
    </section>
  );
};

export default SimulatorInvestment;
