import React from "react";
import { useTheme } from "@/app/contexts/ThemeProvider";
const SwitchLightandDark = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleSwitch = () => {
    toggleDarkMode();
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
          color: darkMode ? "white" : "#0d3a5c",
          whiteSpace: "nowrap",
        }}
      ></span>
      <input
        type="checkbox"
        style={{
          appearance: "none",
          width: "100px",
          height: "40px",
          border: "none",
          left: "18px",
          borderRadius: "15px",
          backgroundColor: darkMode ? "#18507B" : "#DBF7FF",
          position: "relative",
          cursor: "pointer",
          opacity: darkMode ? "0.8" : "1",
          transition: "background-color 0.3s ease, opacity 0.3s ease",
        }}
        checked={darkMode}
        onChange={toggleSwitch}
      />
      <button
        onClick={toggleSwitch}
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: darkMode ? "#0D3A5C" : "#A2E6FA",
          left: darkMode ? "calc(100% - 84px)" : "154px",
          transition: "left 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: darkMode ? "#FFFFFF" : "#0D3A5C",
          fontSize: "24px",
          zIndex: "0",
          border: "none",
          cursor: "pointer",
        }}
      >
        {darkMode ? "\u263E" : "\u2600"}
      </button>
    </div>
  );
};

export default SwitchLightandDark;
