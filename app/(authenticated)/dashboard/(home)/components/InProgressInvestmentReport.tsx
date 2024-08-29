"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { getUserInfoAllInvestmentAction } from "@/app/actions/userInfoAllInvestmentAction";
import { saveUserInfoAllInvestmentCookies } from "@/app/cookies/client/UserInfoAllInvestmentCookies";
import { useCurrency } from "@/app/contexts/CurrencyProvider";
const InprogressInvestmentReport = () => {
  const [dataReport, setDataReport] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { isSoles } = useCurrency();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getUserInfoAllInvestmentAction();
        const reportSoles = userInfo["invesmentInSoles"][0];
        const reportDollar = userInfo["invesmentInDolares"][0];

        const selectedReport = isSoles ? reportSoles : reportDollar;

        saveUserInfoAllInvestmentCookies(JSON.stringify(userInfo));

        setDataReport(selectedReport);
      } catch (err) {
        setError("Unable to fetch data");
        console.error(err);
      }
    };

    fetchData();
  }, [isSoles]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dataReport) {
    return <div>Loading...</div>;
  }

  const getMoneySymbol = (isSoles: boolean) => (isSoles ? "S/ " : "$ ");

  const {
    totalBalanceAmmount = 0,
    totalBalanceRentability = 0,
    totalBalanceRentabilityIncreased = 0,
    capitalInCourse = 0,
  } = dataReport;

  return (
    <div
      className={`cursor-pointer ${
        isSoles ? "bg-blueCustom" : "bg-cremeColor"
      } p-10 w-[550px] h-[319px] rounded-[20px] shadow-md hover:shadow-lg`}
    >
      <div className="flex justify-start text-xl font-bold text-custom-blue">
        <h1>Mi inversión en curso</h1>
      </div>
      <div className="grid-container">
        <div className="flex flex-col gap-4">
          <div className="text-lg text-start">
            <h2>Inversión Histórica</h2>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {getMoneySymbol(isSoles)}
              <CountUp
                start={0}
                end={totalBalanceAmmount}
                duration={2.75}
                separator=","
                decimals={2}
              />
            </h1>
          </div>
          <div className="text-lg text-start">
            <h2>Intereses Históricos</h2>
          </div>
          <div>
            <h4 className="text-2xl">
              {getMoneySymbol(isSoles)}
              <CountUp
                start={0}
                end={totalBalanceRentability}
                duration={2.75}
                separator=","
                decimals={2}
              />
            </h4>
          </div>
        </div>

        <div
          className={`${
            isSoles ? "border-customLightBlue" : "border-darkBlueColor"
          } h-44 w-0 flex items-center justify-center rounded-xl border-4`}
        ></div>

        <div className="flex flex-col justify-center gap-4">
          <div className="text-lg text-start">
            <h1> Inversión en Curso</h1>
          </div>
          <div>
            <h4 className="text-2xl text-customGreenSecondary">
              {getMoneySymbol(isSoles)}
              <CountUp
                start={0}
                end={capitalInCourse}
                duration={2.75}
                separator=","
                decimals={2}
              />
            </h4>
          </div>

          <div className="text-lg text-start">
            <h2>Total intereses generados</h2>
          </div>
          <div>
            <h4 className="text-2xl text-customGreenSecondary">
              {getMoneySymbol(isSoles)}
              <CountUp
                start={0}
                end={totalBalanceRentabilityIncreased}
                duration={2.75}
                separator=","
                decimals={2}
              />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InprogressInvestmentReport;
