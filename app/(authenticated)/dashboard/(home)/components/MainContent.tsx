import React, { ReactNode } from "react";
import UserMenu from "./UserMenu";
import SideBarComponent from "./SidebarComponent";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="flex h-full w-full bg-customBackgroundLight">
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
