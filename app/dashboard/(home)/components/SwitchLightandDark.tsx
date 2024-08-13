import React from "react";
// import { saveIsDarkModeStorage } from "../helpers/IsDarkModeStorage";
const SwitchLightandDark = ({
  isDarkModeState,
  setIsDarkModeState,
}: {
  isDarkModeState: boolean;
  setIsDarkModeState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleSwitch = () => {
    setIsDarkModeState(!isDarkModeState);
    // saveIsDarkModeStorage(!isDarkModeState);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "relative",
      }}
    >
      <label style={{ fontSize: "16px", marginRight: "10px" }}></label>
      <span
        style={{
          marginRight: "34px",
          display: "flex",
          width: "29px",
          color: isDarkModeState ? "white" : "#0d3a5c",
          whiteSpace: "nowrap",
        }}
      >
        {/* {isDarkModeState ? "DarkMode" : "LightMode"} */}
      </span>
      <input
        type="checkbox"
        style={{
          appearance: "none",
          width: "100px",
          height: "40px",
          left: "18px",
          borderRadius: "15px",
          backgroundColor: isDarkModeState ? "#18507B" : "#DBF7FF",
          position: "relative",
          cursor: "pointer",
          opacity: isDarkModeState ? "0.8" : "1",
          transition: "background-color 0.3s ease, opacity 0.3s ease",
        }}
        checked={isDarkModeState}
        onChange={toggleSwitch}
      />
      <button
        onClick={toggleSwitch}
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: isDarkModeState ? "#0D3A5C" : "#A2E6FA",
          left: isDarkModeState ? "calc(100% - 84px)" : "154px",
          transition: "left 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isDarkModeState ? "#FFFFFF" : "#0D3A5C",
          fontSize: "24px",
          zIndex: "0",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isDarkModeState ? "\u263E" : "\u2600"}
      </button>
    </div>
  );
};

export default SwitchLightandDark;
