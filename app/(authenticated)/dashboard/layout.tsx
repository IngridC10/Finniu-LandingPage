import React, { ReactNode } from "react";
import { ThemeProvider, useTheme } from "../../contexts/ThemeProvider";
// import SideBarComponent from "./(home)/components/SidebarComponent";
// import UserMenu from "./(home)/components/UserMenu";
import { CurrencyProvider } from "@/app/contexts/CurrencyProvider";
import { DMSans } from "@/app/fonts";
import MainContent from "./(home)/components/MainContent";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CurrencyProvider>
      <ThemeProvider>
        <div className={`flex flex-col h-screen w-full ${DMSans.className}`}>
          <MainContent>{children}</MainContent>
        </div>
      </ThemeProvider>
    </CurrencyProvider>
  );
};

export default Layout;
