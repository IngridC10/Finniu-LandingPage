import { useTheme } from "@/app/contexts/ThemeProvider";
import React from "react";

const ButtonsComponent = ({
  selectButtonsState,
  setSelectButtonState,
}: {
  selectButtonsState: string;
  setSelectButtonState: Function;
}) => {
  const { darkMode } = useTheme();

  const handleButtonClick = (buttonState: string) => {
    setSelectButtonState(buttonState);
  };

  function getButtonStyles(buttonState: string) {
    const isSelected = selectButtonsState === buttonState;
    const background = isSelected
      ? darkMode
        ? "#A2E6FA"
        : "#18507B"
      : darkMode
      ? "#0D3A5C"
      : "#dbf7ff";
    const color = isSelected
      ? darkMode
        ? "#000000"
        : "#FFFFFF"
      : darkMode
      ? "#FFFFFF"
      : "#000000";
    const border = isSelected ? background : "#dbf7ff";

    return { background, color, border };
  }

  return (
    <div className="flex flex-row gap-5 p-3">
      <div className="mt-4">
        <button
          className="cursor-pointer gap-1.5 rounded-3xl w-28 h-10 mr-2 container-hover text-md font-semibold shadow-lg"
          onClick={() => handleButtonClick("inCourse")}
          style={getButtonStyles("inCourse")}
        >
          En curso
        </button>
        <button
          className="cursor-pointer gap-1.5 rounded-3xl w-28 h-10 mr-2 container-hover text-md font-semibold shadow-lg"
          onClick={() => handleButtonClick("toConfirm")}
          style={getButtonStyles("toConfirm")}
        >
          En proceso
        </button>
        <button
          className="cursor-pointer gap-1.5 rounded-3xl w-28 h-10 mr-2 container-hover text-md font-semibold shadow-lg"
          onClick={() => handleButtonClick("finish")}
          style={getButtonStyles("finish")}
        >
          Finalizadas
        </button>

        <button
          className="cursor-pointer gap-1.5 rounded-3xl w-28 h-10 mr-2 container-hover text-md font-semibold shadow-lg"
          onClick={() => handleButtonClick("rejected")}
          style={getButtonStyles("rejected")}
        >
          Rechazadas
        </button>
      </div>
    </div>
  );
};

export default ButtonsComponent;
