import React, { ReactNode } from "react";
import { ThemeProvider, useTheme } from "../../contexts/ThemeProvider";
import SideBarComponent from "./(home)/components/SidebarComponent";
import UserMenu from "./(home)/components/UserMenu";
import { CurrencyProvider } from "@/app/contexts/CurrencyProvider";
import { DMSans } from "@/app/fonts";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CurrencyProvider>
      <ThemeProvider>
        <div className={`flex flex-col h-screen w-full ${DMSans.className}`}>
          <div className="flex h-full w-full">
            <SideBarComponent currentPage={"home"} />
            <main className="mx-auto">
              <div
                className="flex-1 flex flex-col items-center justify-center bg-customBackgroundLight max-w-[1800px]
                   p-10 mx-auto my-15 h-full"
              >
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
