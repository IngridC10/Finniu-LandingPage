import React, { ReactNode } from "react";
// import HomePage from "./components/HomePage";
import { ThemeProvider } from "../../contexts/ThemeProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
