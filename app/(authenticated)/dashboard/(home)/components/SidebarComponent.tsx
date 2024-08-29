"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineDollar, AiOutlineHistory } from "react-icons/ai";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import logoSmallDark from "@/images/Dashboard/NavBar/logoSmallDark.png";
import logoSmallLight from "@/images/Dashboard/NavBar/logoSmallLight.png";
import logoTextDark from "@/images/Dashboard/NavBar/logoTextDark.png";
import logoTextlight from "@/images/Dashboard/NavBar/logoTextLight.png";
import { useTheme } from "@/app/contexts/ThemeProvider";
import { removeTokenCookies } from "@/app/cookies/client/TokenCookies";
import { removeProfileCookies } from "@/app/cookies/client/UserProfileCookies";
import { removeInfoAllInvestmentCookies } from "@/app/cookies/client/UserInfoAllInvestmentCookies";
import {
  getIsOpenSidebarCookies,
  getSelectedMenuCookies,
  removeIsOpenSidebarCookies,
  saveIsOpenSidebarCookies,
  saveSelectedMenuCookies,
} from "@/app/cookies/client/SidebarCookies";
import { removeSelectedMenuCookies } from "@/app/cookies/client/SidebarCookies";
import { removeIsSolesCookies } from "@/app/cookies/client/IsSolesCookies";
import { removeIsDarkModeCookies } from "@/app/cookies/client/IsDarkModeCookies";
import { removeShowTourCookies } from "@/app/cookies/client/ShowTourCookies";

interface SideBarComponentProps {
  currentPage: string;
}

const SideBarComponent: React.FC<SideBarComponentProps> = ({ currentPage }) => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const [isSidebarOpenState, setSidebarOpen] = useState(false);

  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const { darkMode } = useTheme();

  useEffect(() => {
    const isOpenStorage = getIsOpenSidebarCookies();

    if (isOpenStorage !== null) {
      if (Boolean(isOpenStorage)) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    } else {
      setSidebarOpen(false);
    }
    // check the selected menu stored in local storage

    const selectedMenu = getSelectedMenuCookies();

    if (selectedMenu !== null) {
      setSelectedMenu(selectedMenu as string);
    }
  }, []);

  useEffect(() => {
    if (currentPage) {
      setSelectedMenu(currentPage);
    }
  }, [currentPage]);

  let handleLogout = () => {
    removeTokenCookies();
    // removeRefreshToken();
    removeProfileCookies();
    removeInfoAllInvestmentCookies();
    removeIsOpenSidebarCookies();
    removeSelectedMenuCookies();
    removeIsSolesCookies();
    removeIsDarkModeCookies();
    removeShowTourCookies();
  };

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    saveSelectedMenuCookies(menu);
  };
  const handleMouseEnter = (id: string) => {
    setHoverStates((prev) => ({ ...prev, [id]: true }));
  };
  const handleMouseLeave = (id: string) => {
    setHoverStates((prev) => ({ ...prev, [id]: false }));
  };

  const handleOpenIconClick = () => {
    setSidebarOpen(!isSidebarOpenState);
    saveIsOpenSidebarCookies(!isSidebarOpenState);
  };
  const getContainerMenuStyle = (menuID: string): React.CSSProperties => {
    const isSelected = selectedMenu === menuID;
    const isHovered = hoverStates[menuID];

    if (isSidebarOpenState) {
      return {
        display: "flex",
        width: "100%",
        flexDirection: "row" as "row",
        justifyContent: "left",
        alignItems: "center",
        height: "80px",
        background: isSelected
          ? darkMode
            ? "#18507b"
            : "#A2E6FA"
          : isHovered
          ? darkMode
            ? "#18507b"
            : "#A2E6FA"
          : darkMode
          ? "inherit"
          : "inherit",
        marginBottom: "30px",
      };
    } else {
      return {
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60px",
        gap: "40px",
        marginBottom: "50px",
      };
    }
  };

  const getIconStyle = (menuID: string) => {
    const isSelected = selectedMenu === menuID;
    const isHovered = hoverStates[menuID];

    if (isSidebarOpenState) {
      return {
        color: darkMode ? "#A2E6FA" : "#0D3A5C",
      };
    } else {
      return {
        color:
          isSelected || isHovered
            ? darkMode
              ? "#0D3A5C"
              : "#0D3A5C"
            : darkMode
            ? "#A2E6FA"
            : "inherit",
      };
    }
  };

  return (
    <div
      className="flex flex-col sidebar h-screen"
      style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}
    >
      <div
        className={`${darkMode ? "bg-darkBlueColor" : "bg-lighBlue"}  pt-24 
        
        
        
        ${isSidebarOpenState ? "w-80" : "w-28"} duration-300 relative`}
      >
        <div className="flex items-center justify-center h-6 ">
          <img
            src={
              darkMode
                ? isSidebarOpenState
                  ? logoTextDark.src
                  : logoSmallDark.src
                : isSidebarOpenState
                ? logoTextlight.src
                : logoSmallLight.src
            }
            alt="Logo"
            height={50}
            width={43}
            className={` ${isSidebarOpenState ? "h-10" : "h-6"}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-[45px] ">
          <RiLogoutCircleLine
            className={`bg-customDarkblue text-darkBlueColor text-3xl w-10 h-10 rounded-full absolute right-[-56px] top-[170px] cursor-pointer z-10 ${
              !isSidebarOpenState && "rotate-180"
            }`}
            onClick={handleOpenIconClick}
          />
          <div
            className={`flex w-full containerMenu ${
              isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
            } ${isSidebarOpenState ? "" : "justify-center"} items-center`}
            style={{ ...getContainerMenuStyle("home"), flexDirection: "row" }}
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={() => handleMouseLeave("home")}
            id="home"
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "center",
              }}
              onClick={() => {
                handleMenuClick("home");
              }}
            >
              <div
                className={`${
                  isSidebarOpenState ? "containerIconOpen" : "containerIcon"
                } ${
                  selectedMenu === "home" && isSidebarOpenState === false
                    ? "containerIconHover"
                    : ""
                }`}
              >
                <AiOutlineDollar
                  className={`cursor-pointer block  mr-2  text-3xl ml-[10px]  iconCloseSidebar      color-${
                    darkMode ? "text-#a2e6fa" : "text-#0d3a5c"
                  } ${isSidebarOpenState && "rotate-[360deg]"} `}
                  style={getIconStyle("home")}
                />
              </div>

              <h1
                className={`text-black origin-left font-medium text-xl duration-300 
                  ${darkMode ? "text-white" : "text-black"}
                
                  
                  ${!isSidebarOpenState && "hidden"}`}
              >
                Mis Inversiones
              </h1>
            </Link>
          </div>
          <div
            className={` ${
              isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
            } items-center  containerMenu`}
            style={{
              ...getContainerMenuStyle("history"),
              flexDirection: "row",
            }}
            onMouseEnter={() => handleMouseEnter("history")}
            onMouseLeave={() => handleMouseLeave("history")}
            id="history"
          >
            <Link
              href="/my-history"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "center",
              }}
              onClick={() => {
                handleMenuClick("history");
              }}
            >
              <div
                className={`${
                  isSidebarOpenState ? "containerIconOpen" : "containerIcon"
                } ${
                  selectedMenu === "history" && isSidebarOpenState === false
                    ? "containerIconHover"
                    : ""
                }`}
              >
                <AiOutlineHistory
                  className={`cursor-pointer block  mr-2 iconCloseSidebar  text-3xl ml-[10px]
                      } ${isSidebarOpenState && "rotate-[360deg]"} `}
                  style={getIconStyle("history")}
                />
              </div>
              <h1
                className={`text-black origin-left font-medium text-xl duration-300 
                  ${darkMode ? "text-white" : "text-black"}
                
                  
                  ${!isSidebarOpenState && "hidden"}`}
              >
                Mi Historial
              </h1>
            </Link>
          </div>
          <div
            className={`flex w-full justify-center containerMenu ${
              isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
            } ${isSidebarOpenState ? "" : "justify-center"} items-center`}
            style={{
              ...getContainerMenuStyle("calendar"),
              flexDirection: "row",
            }}
            onMouseEnter={() => handleMouseEnter("calendar")}
            onMouseLeave={() => handleMouseLeave("calendar")}
            id="calendar"
          >
            <Link
              href="/dashboard/calendar"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "center",
              }}
              onClick={() => {
                handleMenuClick("calendar");
              }}
            >
              <div
                className={`${
                  isSidebarOpenState ? "containerIconOpen" : "containerIcon"
                } ${
                  selectedMenu === "calendar" && isSidebarOpenState === false
                    ? "containerIconHover"
                    : ""
                }`}
              >
                <LuCalendarDays
                  className={`cursor-pointer block  mr-2  iconCloseSidebar text-3xl ml-[10px] color-${
                    darkMode ? "text-custom-lightblue" : "text-custom-blue"
                  } ${isSidebarOpenState && " rotate-[360deg]"} `}
                  style={getIconStyle("calendar")}
                />
              </div>

              <h1
                className={` text-black origin-left font-medium text-xl duration-300
                       ${darkMode ? "text-white" : "text-black"}
                
                  
                       ${!isSidebarOpenState && "hidden"}`}
              >
                Mi Calendario
              </h1>
            </Link>
          </div>
          <div
            className={`flex w-full justify-center containerMenu ${
              isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
            } ${isSidebarOpenState ? "" : "justify-center"} items-center`}
            style={getContainerMenuStyle("tour")}
            onMouseEnter={() => handleMouseEnter("tour")}
            onMouseLeave={() => handleMouseLeave("tour")}
            id="tour"
          >
            <Link
              href="/home?forceTourVisible=true"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "left",
              }}
              onClick={() => {
                handleMenuClick("tour");
                window.location.href = "/home?forceTourVisible=true";
              }}
            >
              <div
                className={`${
                  isSidebarOpenState ? "containerIconOpen" : "containerIcon"
                } ${
                  selectedMenu === "tour" && isSidebarOpenState === false
                    ? "containerIconHover"
                    : ""
                }`}
              >
                <HiMiniComputerDesktop
                  className={`cursor-pointer block  mr-2  iconCloseSidebar text-3xl ml-[10px] color-${
                    darkMode ? "text-custom-lightblue" : "text-custom-blue"
                  } ${isSidebarOpenState && "rotate-[360deg]"} `}
                  style={getIconStyle("tour")}
                />
              </div>
              <h1
                className={`text-black origin-left font-medium text-xl duration-300
                    ${darkMode ? "text-white" : "text-black"}
                    ${!isSidebarOpenState && "hidden"}`}
              >
                Tour
              </h1>
            </Link>
          </div>
          <div
            className={`flex ${
              isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
            } items-center  containerMenu`}
            style={getContainerMenuStyle("logout")}
            onMouseEnter={() => handleMouseEnter("logout")}
            onMouseLeave={() => handleMouseLeave("logout")}
            id="logout"
          >
            <Link
              href="/login"
              className="containerMenu"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "center",
              }}
              onClick={() => {
                handleMenuClick("logout");
                handleLogout();
              }}
            >
              <div
                className={`${
                  isSidebarOpenState ? "containerIconOpen" : "containerIcon"
                } ${
                  selectedMenu === "logout" && isSidebarOpenState === false
                    ? "containerIconHover"
                    : ""
                }`}
              >
                <FaArrowRightToBracket
                  className={`cursor-pointer block  mr-2  iconCloseSidebar text-3xl ml-[10px] color-${
                    darkMode ? "text-custom-lightblue" : "text-custom-blue"
                  } ${isSidebarOpenState && "rotate-[360deg]"} `}
                  style={getIconStyle("logout")}
                />
              </div>
              <h1
                className={`text-black origin-left font-medium text-xl duration-300 ${
                  darkMode ? "text-white" : "text-black"
                }  ${!isSidebarOpenState && "hidden"}`}
              >
                Cerrar sesión
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;
