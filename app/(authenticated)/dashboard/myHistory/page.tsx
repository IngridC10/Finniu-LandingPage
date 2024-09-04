"use client";
import React, { useEffect, useState } from "react";
import SwitchSolesComponent from "../(home)/components/SwitchSolesComponent";
import { useTheme } from "@/app/contexts/ThemeProvider";
import { useCurrency } from "@/app/contexts/CurrencyProvider";
import { getUserInfoAllInvestmentAction } from "@/app/actions/userInfoAllInvestmentAction";
import CircleHistory from "./components/CircleHistory";
import HistoryChartComponent from "./components/HistoryChartComponent";
import ButtonsComponent from "./components/ButtonsComponent";
import Transactions from "./components/Transaction";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState(null);

  const { darkMode } = useTheme();
  const { isSoles } = useCurrency();
  const [selectButtonsState, setSelectButtonState] = useState<
    "inCourse" | "toConfirm" | "finish" | "rejected"
  >("inCourse");

  useEffect(() => {
    getUserInfoAllInvestmentAction()
      .then((userInfoAllInvestment) => {
        setData(userInfoAllInvestment);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error.message}</p>;

  if (!data) return <p>No se encontraron datos de inversión.</p>;

  var dataReport = data;

  return (
    <div>
      <div
        className={`w-full h-full min-h-screen ${
          darkMode ? "bg-background-dark" : "bg-custom-background-light"
        }`}
      >
        <div className="flex flex-row h-full min-h-screen gap-4">
          <div className="flex flex-col  mx-auto max-w-1800px my-15">
            <div className="flex items-center justify-between pl-2 ">
              <div className="text-2xl font-bold">
                <p style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}>
                  Mi historial
                </p>
              </div>
              <div>
                <SwitchSolesComponent />
              </div>
            </div>
            <div className="flex flex-col pt-5 pl-3">
              <div className="flex justify-center gap-5 lg:items-center lg:flex-col md:flex-col xl:flex-row md:items-start">
                <div>
                  <CircleHistory dataReport={dataReport} />
                </div>
                <div className="flex flex-col gap-[31px] justify-center">
                  <HistoryChartComponent dataReport={dataReport} />
                </div>
              </div>
              <div className="flex justify-start pl-2 text-2xl font-bold md:mt-6 lg:mt-0">
                <h1 style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}>
                  Mis operaciones
                </h1>
              </div>

              <div className="flex flex-col items-start justify-center lg:m-auto md:m-0 max-w-[1280px]">
                <div className="flex items-start">
                  <ButtonsComponent
                    selectButtonsState={selectButtonsState}
                    setSelectButtonState={setSelectButtonState}
                  />
                </div>

                <div>
                  <Transactions
                    filterSelectedState={selectButtonsState}
                    dataReport={dataReport}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
