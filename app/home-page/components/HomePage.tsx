"use client";
import React, { useState } from "react";
import SideBarComponent from "./SidebarComponent";

const HomePage = () => {
  const [isDarkModeState, setIsDarkModeState] = useState(false);
  return (
    <div className=" bg-lightBlueColor">
      <SideBarComponent isDarkModeState={false} currentPage={""} />
    </div>
  );
};

export default HomePage;
