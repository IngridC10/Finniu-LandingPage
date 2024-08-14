"use client";
import React, { useState } from "react";
import SideBarComponent from "./components/SidebarComponent";
import UserMenu from "./components/UserMenu";
import SwitchSolesComponent from "./components/SwitchSolesComponent";
import { useTheme } from "@/app/contexts/ThemeProvider";

const page = () => {
  const { darkMode } = useTheme();
  return (
    <main className=" flex min-h-screen flex-col items-start bg-customBackgroundLight">
      <UserMenu
        isDarkModeState={false}
        setIsDarkModeState={function (
          value: React.SetStateAction<boolean>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <SwitchSolesComponent
        isSolesState={false}
        onSwitchChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        isDarkModeState={false}
      />
      <SideBarComponent isDarkModeState={false} currentPage={""} />
    </main>
  );
};

export default page;
