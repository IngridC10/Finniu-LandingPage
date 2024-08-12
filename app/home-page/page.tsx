import React from "react";
import HomePage from "./components/HomePage";
import SideBarComponent from "./components/SidebarComponent";

const page = () => {
  return (
    <main className=" flex min-h-screen flex-col items-start bg-customBackgroundLight">
      <HomePage />
      <SideBarComponent isDarkModeState={false} currentPage={""} />
    </main>
  );
};

export default page;
