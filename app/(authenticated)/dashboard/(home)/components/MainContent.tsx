import React, { ReactNode } from "react";
import UserMenu from "./UserMenu";
import SideBarComponent from "./SidebarComponent";
import { useTheme } from "@/app/contexts/ThemeProvider";
interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  // Llama a useTheme dentro del componente
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex h-full w-full ${darkMode ? "bg-red-300" : "bg-white"}`}
    >
      <SideBarComponent currentPage={"home"} />
      <main className="mx-auto">
        <div
          className="flex-1 flex flex-col items-center justify-center bg-customBackgroundLight max-w-[1800px]
              p-10 mx-auto my-15 h-auto md:h-full"
        >
          <UserMenu />
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainContent;
