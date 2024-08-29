import React, { ReactNode } from "react";
import { ThemeProvider, useTheme } from "../../contexts/ThemeProvider";
import SideBarComponent from "./(home)/components/SidebarComponent";
import UserMenu from "./(home)/components/UserMenu";
import { CurrencyProvider } from "@/app/contexts/CurrencyProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CurrencyProvider>
      <ThemeProvider>
        <div className="flex flex-col h-screen w-full">
          <div className="flex h-full w-full">
            <SideBarComponent currentPage={""} />
            <main className="flex-1 flex flex-col items-center justify-center bg-customBackgroundLight max-w-[1800px]">
              <div className="w-full max-w-7xl h-full mx-auto px-4 bg-customBackgroundLight">
                <UserMenu />
                {children}
              </div>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </CurrencyProvider>
  );
};

export default Layout;
