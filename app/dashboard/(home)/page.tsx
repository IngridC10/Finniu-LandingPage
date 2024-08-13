"use client";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import SideBarComponent from "./components/SidebarComponent";
import UserMenu from "./components/UserMenu";
import SwitchSolesComponent from "./components/SwitchSolesComponent";

const page = () => {
  return (
    <main className=" flex min-h-screen flex-col items-start bg-customBackgroundLight">
      <HomePage />
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
