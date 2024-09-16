"use client";
import React, { ReactNode } from "react";
import UserMenu from "./UserMenu";
import SideBarComponent from "./SidebarComponent";
import { useTheme } from "@/app/contexts/ThemeProvider";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full ${
        darkMode ? "bg-backgroundDarkColor" : "bg-customBackgroundLight"
      } `}
    >
      <SideBarComponent currentPage={"home"} />
      <main
        className={`mx-auto ${
          darkMode ? "bg-backgroundDarkColor" : "bg-customBackgroundLight"
        }   `}
      >
        <div
          className={`flex-1 flex flex-col items-center justify-center ${
            darkMode ? "bg-backgroundDarkColor" : "bg-customBackgroundLight"
          }max-w-[1800px]
              p-10 mx-auto my-15 h-auto md:h-full`}
        >
          <UserMenu />
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainContent;
