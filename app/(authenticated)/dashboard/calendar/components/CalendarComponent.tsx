import { useTheme } from "@/app/contexts/ThemeProvider";
import React, { useState } from "react";
import Calendar from "react-calendar";
interface CalendarComponentProps {
  setCurrentMonthState: React.Dispatch<React.SetStateAction<number>>;
  setCurrentYearState: React.Dispatch<React.SetStateAction<number>>;
  importantDays: {
    pastPaymentDays: { date: string }[];
    remainingPaymentDays: { date: string }[];
  };
  onSelectDay: (date: Date) => void; // Añadido onSelectDay
  selectedDateState: Date; // Añadido selectedDateState
}

const CalendarComponent = ({
  setCurrentMonthState,
  setCurrentYearState,
  importantDays,
  onSelectDay, // Añadido onSelectDay
  selectedDateState, // Añadido selectedDateState
}: CalendarComponentProps) => {
  const { darkMode } = useTheme();
  const pastPaymentDates = importantDays.pastPaymentDays.map((day) => {
    let parts = day.date.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  });

  const remainingPaymentDates = importantDays.remainingPaymentDays.map(
    (day) => {
      let parts = day.date.split("-");
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
  );

  const importantDates: any[] = [];
  const specialDate = ["2024-03-27", "2025-03-27", "2026-03-27", "2027-03-27"];

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    const dateWithoutTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    ).getTime();
    if (
      view === "month" &&
      importantDates.some((d) => d.getTime() === dateWithoutTime)
    ) {
      return "important-date";
    }
    if (pastPaymentDates.includes(date.toISOString().split("T")[0])) {
      return darkMode ? "market-past-date-dark " : "market-past-date-light";
    }
    if (remainingPaymentDates.includes(date.toISOString().split("T")[0])) {
      return darkMode ? "marked-date-dark" : "marked-date-light";
    }

    if (specialDate.includes(date.toISOString().split("T")[0])) {
      return darkMode ? "special-date-dark" : "special-date-light";
    }
  };

  const getTileClass = (date?: Date, view?: string) => {
    return darkMode ? "dark-mode-tile" : "light-mode-tile";
  };

  const formatMonthYear = (locale: string | undefined, date: Date) => {
    const formattedDate = date.toLocaleDateString(locale, {
      month: "long",
      year: "numeric",
    });
    const capitalizedMonth =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    return capitalizedMonth;
  };

  return (
    <div
      className={` md:w-[468px] lg:w-[550px] lg:h-[619px] md:h-[517px] md:pb-0 md:pt-0  overflow-hidden cursor-pointer relative rounded-3xl 
        shadow-md hover:shadow-lg
        bg-${
          darkMode ? "darkBlueColor" : "white"
        } rounded-20 p-20 flex flex-col justify-center shadow-none`}
    >
      <Calendar
        tileClassName={({ date, view }) =>
          `${getTileClass(date, view)} ${tileClassName({ date, view })}`
        }
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: "short" })[0].toUpperCase()
        }
        onActiveStartDateChange={({ activeStartDate }) => {
          if (activeStartDate) {
            setCurrentMonthState(activeStartDate.getMonth());
            setCurrentYearState(activeStartDate.getFullYear());
          }
        }}
        value={selectedDateState} // Utilizando selectedDateState aquí
        onClickDay={onSelectDay} // Utilizando onSelectDay aquí
        selectRange={false}
        prev2Label={
          <span style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}>«</span>
        }
        prevLabel={
          <span style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}>‹</span>
        }
        nextLabel={
          <span style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}>›</span>
        }
        next2Label={
          <span style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}>»</span>
        }
        formatMonth={formatMonthYear}
      />

      <div className="flex flex-row items-center justify-center p-3 md:p-0 mb-7">
        <div className="flex items-center justify-center ">
          <div
            className="ml-1 mr-1 border rounded-full lg:h-6 md:h-5 w-7 border-custom-blue"
            style={{ background: darkMode ? "#A2E6FA" : "#0D3A5C" }}
          ></div>
          <h3
            className={`md:text-[13px] lg:text-[16px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Fecha de pago
          </h3>
        </div>

        <div className="flex items-center justify-center md:ml-3 lg:ml-0 ">
          <div
            className="h-6 ml-1 mr-1 border border-black rounded-full lg:h-6 md:h-5 w-7"
            style={{ background: "#9381FF" }}
          ></div>
          <h3
            className={`md:text-[13px] lg:text-[16px]  ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Pagos pasados{" "}
          </h3>
        </div>
        <div className="flex items-center justify-center ">
          <div
            className="h-6 ml-1 mr-1 border rounded-full w-7 lg:h-6 md:h-5 border-custom-blue"
            style={{
              background: darkMode ? "#EEEEEE" : "#A2E6FA",
            }}
          ></div>
          <h3
            className={`md:text-[13px] lg:text-[16px]  ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Fechas importantes{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
