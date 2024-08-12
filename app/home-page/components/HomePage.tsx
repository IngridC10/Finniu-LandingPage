"use client";
import React, { useState } from "react";
import SideBarComponent from "./SidebarComponent";
import UserMenu from "./UserMenu";

const HomePage = () => {
  const [isDarkModeState, setIsDarkModeState] = useState<boolean>(false);
  return (
    <div className=" bg-lightBlueColor">
      {/* <SideBarComponent isDarkModeState={false} currentPage={""} />
      <UserMenu
        isDarkModeState={false}
        setIsDarkModeState={function (
          value: React.SetStateAction<boolean>
        ): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
    </div>
  );
};

export default HomePage;
