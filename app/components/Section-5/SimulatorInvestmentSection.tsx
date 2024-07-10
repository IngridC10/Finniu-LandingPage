import React from "react";
import Image from "next/image";
import InvestmentForm from "./InvestmentForm";
import Bill from "@/images/Section-5/Bill.png";

const SimulatorInvestmentSection = () => {
  return (
    <section
      id="simulatorInvestment"
      className="w-full min-h-screen flex section-custom  bg-lightColor 2xl:bg-gradient "
    >
      <div className="container flex flex-row min-h-full p-8 justify-center">
        <div className="flex flex-col items-center  justify-center ">
          <div className=" w-[650px] text-left  hidden 2xl:block">
            <p className="text-[64px] font-bold text-white">
              Simula tu inversión
            </p>
            <p className="text-[64px] font-bold text-white">y proyecta tus</p>
            <div className="flex flex-row gap-4">
              <p className="text-[64px] font-bold text-white">metas</p>
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
        <div className="w-3/5 flex items-center justify-center  2xl:justify-end ">
          <InvestmentForm />
        </div>
      </div>
    </section>
  );
};

export default SimulatorInvestmentSection;
