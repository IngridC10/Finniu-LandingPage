"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [isSoles, setIsSoles] = useState(true);

  const toggleCurrency = () => {
    setIsSoles((prevIsSoles) => !prevIsSoles);
  };

  return (
    <CurrencyContext.Provider value={{ isSoles, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
