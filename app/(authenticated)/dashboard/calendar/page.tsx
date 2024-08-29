"use client";
import React, { useEffect, useState } from "react";
import CalendarComponent from "./components/CalendarComponent";
import { useTheme } from "@/app/contexts/ThemeProvider";
import CardRentability from "./components/CardRentability";
import ImportantDayListComponent from "./components/ImportantDayListComponent";
import { getRemainingPaymentDaysAction } from "@/app/actions/remainingPaymentDays";
import { getPastPaymentDaysAction } from "@/app/actions/pastPaymentDays";
import { getIsDarkModeCookies } from "@/app/cookies/client/IsDarkModeCookies";

type PageProps = {
  handleDaySelect: (date: Date) => void;
  selectedDateState: Date;
};

const Page: React.FC<PageProps> = ({ handleDaySelect, selectedDateState }) => {
  const { darkMode } = useTheme();
  const [currentMonthState, setCurrentMonthState] = useState(
    new Date().getMonth()
  );
  const [currentYearState, setCurrentYearState] = useState(
    new Date().getFullYear()
  );
  const [showPassRentabilityState, setPassRentabilityState] = useState(false);
  const [importantDays, setImportantDays] = useState({
    remainingPaymentDays: [],
    pastPaymentDays: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDarkModeFromCookies = () => {
      const darkModeFromCookies = getIsDarkModeCookies();
      if (darkModeFromCookies !== undefined) {
        darkMode(darkModeFromCookies === "true");
      }
    };
    getDarkModeFromCookies();

    const fetchData = async () => {
      try {
        const remainingPaymentDays = await getRemainingPaymentDaysAction();
        const pastPaymentDays = await getPastPaymentDaysAction();

        setImportantDays({
          remainingPaymentDays: remainingPaymentDays || [],
          pastPaymentDays: pastPaymentDays || [],
        });
      } catch (err) {
        setError("Hubo un problema al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  if (
    !importantDays ||
    (importantDays.remainingPaymentDays.length === 0 &&
      importantDays.pastPaymentDays.length === 0)
  ) {
    return <p>No hay datos disponibles.</p>;
  }

  const handleButtonClick = (buttonStateRentability: boolean) => {
    setPassRentabilityState(buttonStateRentability);
  };

  const getButtonStylesRentability = (isSelectedButton: boolean) => {
    const fontWeight = isSelectedButton ? "font-bold" : "";
    const textColor = isSelectedButton
      ? darkMode
        ? "text-customLightBlue"
        : "text-darkBlueColor"
      : darkMode
      ? "text-gray-200"
      : "text-gray-700";

    return { fontWeight, textColor };
  };

  return (
    <div>
      <div
        className={`flex items-center h-full justify-between mb-10 sm:p-5 ${
          darkMode ? "bg-customBackgroundLight" : "bg-customBackgroundLight"
        }`}
      >
        <p
          className={`text-2xl font-bold ${
            darkMode ? "text-customLightBlue" : "text-darkBlueColor"
          }`}
        >
          Mi calendario
        </p>
      </div>
      <div className="flex flex-row sm:flex-col lg:flex-col xl:flex-row justify-evenly">
        <div className="flex items-center justify-center">
          <CalendarComponent
            onSelectDay={handleDaySelect}
            selectedDateState={selectedDateState}
            setCurrentMonthState={setCurrentMonthState}
            setCurrentYearState={setCurrentYearState}
            importantDays={importantDays}
          />
        </div>
        <div className="flex flex-col md:ml-0 xl:ml-20 xl:mt-2 sm:mt-10 md:mt-10 md:items-center md:content-center">
          <div
            className={`flex rentability-text md:justify-center md:mr-12 ${
              darkMode ? "text-customLightBlue" : "text-darkBlueColor"
            }`}
          >
            <p className="text-2xl font-bold">Pagos de mi Rentabilidad</p>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col">
              <button
                className={`button-rentability px-5 py-2 m-10 ${
                  getButtonStylesRentability(!showPassRentabilityState)
                    .textColor
                } ${
                  getButtonStylesRentability(!showPassRentabilityState)
                    .fontWeight
                }`}
                onClick={() => setPassRentabilityState(false)}
              >
                Próximos
              </button>
              {!showPassRentabilityState && (
                <div className="w-32 border-4 rounded-xl line-chart border-customLightBlue mt-[-34px] ml-[29px]"></div>
              )}
            </div>
            <div className="flex flex-col">
              <button
                className={`button-rentability px-5 py-2 m-10 ${
                  getButtonStylesRentability(showPassRentabilityState).textColor
                } ${
                  getButtonStylesRentability(showPassRentabilityState)
                    .fontWeight
                }`}
                onClick={() => setPassRentabilityState(true)}
              >
                Pasados
              </button>
              {showPassRentabilityState && (
                <div className="w-32 border-4 rounded-xl line-chart mt-[-34px] ml-[29px] border-customLightBlue"></div>
              )}
            </div>
          </div>

          <div
            className={`relative w-full md:w-[453px] max-h-[350px] z-0 ${
              darkMode ? "bg-backgroundDarkColor" : "bg-customBackgroundLight"
            }`}
          >
            <div className="relative h-full p-3 overflow-x-hidden overflow-y-auto">
              <div>
                <CardRentability
                  showPassRentabilityState={showPassRentabilityState}
                  currentMonthState={currentMonthState}
                  currentYearState={currentYearState}
                  importantDays={importantDays}
                />
              </div>
            </div>
          </div>

          <div>
            <p
              className={`${
                darkMode ? "text-blueCustom" : "text-darkBlueColor"
              } text-2xl font-bold mt-6 ml-9 p-2`}
            >
              Fechas importantes
            </p>
            <div
              className={`relative w-full md:w-[453px] max-h-[350px] z-0 ${
                darkMode ? "bg-backgroundDarkColor" : "bg-customBackgroundLight"
              }`}
            >
              <ImportantDayListComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
