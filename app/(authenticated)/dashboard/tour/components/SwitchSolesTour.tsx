import { useCurrency } from "@/app/contexts/CurrencyProvider";
import React from "react";

const SwitchSolesTour = () => {
  const { isSoles, toggleCurrency } = useCurrency();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <label style={{ fontSize: "18px", marginRight: "10px" }}></label>
      <span
        style={{
          marginRight: "37px",
          marginBottom: "-17px",
          display: "flex",
          width: "29px",
          color: "#0D3A5C",
          whiteSpace: "nowrap",
        }}
      >
        {isSoles ? "Soles" : "Dólares"}
      </span>
      <div
        style={{
          position: "relative",
          width: "134px",
          height: "55px",
          borderRadius: "30px",
          backgroundColor: isSoles ? "#A2E6FA" : "#18507B",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginLeft: "-10px",
          bottom: "-9px",
        }}
        onClick={toggleCurrency}
      >
        <div
          style={{
            position: "absolute",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: isSoles ? "#18507B" : "#DBF7FF",
            left: isSoles ? "calc(100% - 35px)" : "0px",
            top: "50%",
            transform: "translateY(-50%)",
            transition: "left 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default SwitchSolesTour;
