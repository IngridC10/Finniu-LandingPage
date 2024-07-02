import React from "react";
import Image from "next/image";
import QuarterlyReports from "/images/QuarterlyReports.png";
import CustomLeftArrow from "../Section4/CustomLeftArrow";
import CustomRightArrow from "../Section4/CustomRightArrow";

const QuarterlyReportsMoney = () => {
  return (
    <section className=" w-full bg-blueDarkColor flex flex-col min-h-screen justify-center items-center">
      <div className=" container flex flex-row justify-center items-center">
        <div className=" w-[621px] text-right ">
          <p className="text-[50px] text-white  font-bold">
            Reportes Trimestrales
          </p>

          <p className="text-[36px] text-white ">Optimizamos tu dinero</p>
          <p className="text-[24px] text-white">
            Maximizamos tu inversión . Es por eso que ofrecemos una visibilidad
            continua sobre el rendimiento de tus inversiones a través de
            informes trimestrales.
          </p>
          <div className="flex flex-row justify-end mt-16 gap-7">
            <CustomLeftArrow />
            <CustomRightArrow />
          </div>
        </div>
        <Image
          src={QuarterlyReports}
          alt="QuarterlyReports"
          width={600}
          style={{ height: "auto" }}
        />
      </div>
    </section>
  );
};

export default QuarterlyReportsMoney;
