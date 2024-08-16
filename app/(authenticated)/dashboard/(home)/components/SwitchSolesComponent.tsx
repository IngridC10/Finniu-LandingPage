import { useTheme } from "@/app/contexts/ThemeProvider";
import React from "react";

const SwitchSolesComponent = ({
  isSolesState,
  onSwitchChange,
}: {
  isSolesState: boolean;
  onSwitchChange: () => void;
}) => {
  const { darkMode } = useTheme();

  const toggleSwitch = () => {
    onSwitchChange();
  };

  const switchStyles = {
    width: "80px",
    height: "35px",
    borderRadius: "15px",
    backgroundColor: isSolesState
      ? darkMode
        ? "#A2E6FA"
        : "#A2E6FA"
      : darkMode
      ? "#0d3a5c"
      : "#0d3a5c",
    position: "relative" as const,
    cursor: "pointer",
  };

  const circleStyles = {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    backgroundColor: isSolesState
      ? darkMode
        ? "#0d3a5c"
        : "#0d3a5c"
      : darkMode
      ? "#A2E6FA"
      : "#A2E6FA",
    position: "absolute" as const,
    top: "6.5px",
    left: isSolesState ? "50px" : "10px",
    transition: "left 0.1s",
  };

  return (
    <div className="flex flex-row items-center justify-end w-full p-5">
      <div
        style={{
          marginRight: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          color: darkMode ? "#EEEEEE" : "#0D3A5C",
          padding: "15px",
        }}
      >
        {isSolesState ? "Soles" : "Dólares"}
      </div>

      <div style={switchStyles} onClick={toggleSwitch}>
        <div style={circleStyles}></div>
      </div>
    </div>
  );
};

export default SwitchSolesComponent;
