import React from "react";
import Image from "next/image";
import Bill from "/images/Section-5/Bill.png";
import InvestmentForm from "./InvestmentForm";

const SimulatorInvestmentSection = () => {
  return (
    <section
      id="simulatorInvestment"
      className="w-full min-h-screen flex section-custom"
      style={{
        background: "linear-gradient(to right, #051926 50%,#DCF6FF 50%)",
      }}
    >
      <div className="container flex flex-row container-section">
        <div className="flex flex-col items-center justify-center ">
          <div className=" w-[650px] text-left">
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
        <div className="w-3/5 flex items-center justify-end ">
          <InvestmentForm />
        </div>
      </div>
    </section>
  );
};

export default SimulatorInvestmentSection;
