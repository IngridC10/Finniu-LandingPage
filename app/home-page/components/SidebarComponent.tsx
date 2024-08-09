"use client";
import React, { useState } from "react";
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

interface SideBarComponentProps {
  isDarkModeState: boolean;
  currentPage: string;
}

const SideBarComponent: React.FC<SideBarComponentProps> = ({
  isDarkModeState,
  currentPage,
}) => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const [isSidebarOpenState, setSidebarOpen] = useState(false);
  const [hoverStates, setHoverStates] = useState({});

  //   useEffect(() => {
  //     const isOpenStorage = getIsOpenSidebarStorage();

  //     if (isOpenStorage !== null) {
  //       if (isOpenStorage === "true") {
  //         setSidebarOpen(true);
  //       } else {
  //         setSidebarOpen(false);
  //       }
  //     } else {
  //       setSidebarOpen(false);
  //     }
  //     // check the selected menu stored in local storage

  //     const selectedMenuStorage = getSelectedMenuStorage();

  //     if (selectedMenuStorage !== null) {
  //       setSelectedMenu(selectedMenuStorage);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (currentPage) {
  //       setSelectedMenu(currentPage);
  //     }
  //   }, [currentPage]);

  //   let handleLogout = () => {
  //     removeToken();
  //     removeRefreshToken();
  //     removeProfile();
  //     removeInfoAllInvestment();
  //     removeIsOpenSidebarStorage();
  //     removeSelectedMenuStorage();
  //     removeIsSoles();
  //     removeIsDarkModeStorage();
  //     // removeShowTourStorage();
  //   };

  //   const handleMenuClick = (menu) => {
  //     setSelectedMenu(menu);
  //     saveSelectedMenuStorage(menu);
  //   };
  //   const handleMouseEnter = (id) => {
  //     setHoverStates((prev) => ({ ...prev, [id]: true }));
  //   };
  //   const handleMouseLeave = (id) => {
  //     setHoverStates((prev) => ({ ...prev, [id]: false }));
  //   };

  //   const handleOpenIconClick = () => {
  //     setSidebarOpen(!isSidebarOpenState);
  //     saveIsOpenSidebarStorage(!isSidebarOpenState);
  //   };

  //   const getContainerMenuStyle = (menuID) => {
  //     const isHovered = hoverStates[menuID];
  //     const isSelected = selectedMenu === menuID;

  //     if (isSidebarOpenState) {
  //       return {
  //         display: "flex",
  //         width: "100%",
  //         flexDirection: "row",
  //         justifyContent: "left",
  //         alignItems: "center",
  //         height: "80px",
  //         background: isSelected
  //           ? isDarkModeState
  //             ? "#18507b"
  //             : "#A2E6FA"
  //           : isHovered
  //           ? isDarkModeState
  //             ? "#18507b"
  //             : "#A2E6FA"
  //           : isDarkModeState
  //           ? "inherit"
  //           : "inherit",
  //         marginBottom: "30px",
  //       };
  //     } else {
  //       return {
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         width: "100%",
  //         height: "60px",
  //         gap: "40px",
  //         marginBottom: "50px",
  //       };
  //     }
  //   };

  //   const getIconStyle = (menuID) => {
  //     const isSelected = selectedMenu === menuID;
  //     const isHovered = hoverStates[menuID];

  //     if (isSidebarOpenState) {
  //       return {
  //         color: isDarkModeState ? "#A2E6FA" : "#0D3A5C",
  //       };
  //     } else {
  //       return {
  //         color:
  //           isSelected || isHovered
  //             ? isDarkModeState
  //               ? "#0D3A5C"
  //               : "#0D3A5C"
  //             : isDarkModeState
  //             ? "#A2E6FA"
  //             : "inherit",
  //       };
  //     }
  //   };

  return (
    <div className="flex flex-col sidebar h-screen">
      <div
        className={`${
          isDarkModeState ? "bg-custom-blue" : "bg-custom-light-blue"
        } h-full pt-24 ${
          isSidebarOpenState ? "w-80" : "w-28"
        } duration-300 relative`}
      >
        <div className="flex items-center justify-center h-6 ">
          <Image
            src={logoSmallLight}
            alt="Logo"
            height={47}
            width={43}
            className={` ${isSidebarOpenState ? "h-10" : "h-6"}`}
            // src={
            //   isDarkModeState
            //     ? isSidebarOpenState
            //       ? logoTextDark.toString()
            //       : logoSmallDark.toString()
            //     : isSidebarOpenState
            //     ? logoTextlight.toString()
            //     : logoSmallLight.toString()
            // }
            // alt="Logo"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-[75px]">
          <RiLogoutCircleLine
            className={`bg-custom-dark-blue text-custom-blue text-3xl w-8 h-10 rounded-full absolute right-[-56px] top-[157px] cursor-pointer ${
              !isSidebarOpenState && "rotate-180"
            }`}
            // onClick={() => handleOpenIconClick()}
          />
          <div
            // className="style{}"
            className={`flex w-full containerMenu ${
              isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
            } ${isSidebarOpenState ? "" : "justify-center"} items-center`}
            // style={getContainerMenuStyle("home")}
            // onMouseEnter={() => handleMouseEnter("home")}
            // onMouseLeave={() => handleMouseLeave("home")}
            // id="home"
          >
            <Link
              href="/home"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "center",
              }}
              onClick={() => {
                // handleMenuClick("home");
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
                    isDarkModeState
                      ? "text-custom-lightblue"
                      : "text-custom-blue"
                  } ${isSidebarOpenState && "rotate-[360deg]"} `}
                  //   style={getIconStyle("home")}
                />
              </div>

              <h1
                className={`text-black origin-left font-medium text-xl duration-300 
                  ${isDarkModeState ? "text-white" : "text-black"}
                
                  
                  ${!isSidebarOpenState && "hidden"}`}
              >
                Mis Inversiones
              </h1>
            </Link>
          </div>
          <div
          // className={` ${
          //   isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
          // } items-center  containerMenu`}
          // style={getContainerMenuStyle("history")}
          // onMouseEnter={() => handleMouseEnter("history")}
          // onMouseLeave={() => handleMouseLeave("history")}
          // id="history"
          >
            {/* <Link
              to="/my-history"
              // to="/"

              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "center",
              }}
              onClick={() => {
                // handleMenuClick("history");
              }}
            > */}
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
                //   style={getIconStyle("history")}
              />
            </div>
            <h1
              className={`text-black origin-left font-medium text-xl duration-300 
                  ${isDarkModeState ? "text-white" : "text-black"}
                
                  
                  ${!isSidebarOpenState && "hidden"}`}
            >
              Mi Historial
            </h1>
            {/* </Link> */}
          </div>
          <div
            // className="style{}"
            className={`flex w-full justify-center containerMenu ${
              isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
            } ${isSidebarOpenState ? "" : "justify-center"} items-center`}
            // style={getContainerMenuStyle("calendar")}
            // onMouseEnter={() => handleMouseEnter("calendar")}
            // onMouseLeave={() => handleMouseLeave("calendar")}
            // id="calendar"
          >
            <Link
              // to="/"
              href="/calendar"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "center",
              }}
              //   onClick={() => {
              //     handleMenuClick("calendar");
              //   }}
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
                    isDarkModeState
                      ? "text-custom-lightblue"
                      : "text-custom-blue"
                  } ${isSidebarOpenState && " rotate-[360deg]"} `}
                  //   style={getIconStyle("calendar")}
                />
              </div>

              <h1
                className={` text-black origin-left font-medium text-xl duration-300
                       ${isDarkModeState ? "text-white" : "text-black"}
                
                  
                       ${!isSidebarOpenState && "hidden"}`}
              >
                Mi Calendario
              </h1>
            </Link>
          </div>
          <div
            // className="style{}"
            className={`flex w-full justify-center containerMenu ${
              isSidebarOpenState ? "flex-row mb-24" : "flex-col mb-1"
            } ${isSidebarOpenState ? "" : "justify-center"} items-center`}
            // style={getContainerMenuStyle("tour")}
            // onMouseEnter={() => handleMouseEnter("tour")}
            // onMouseLeave={() => handleMouseLeave("tour")}
            id="tour"
          >
            <Link
              href="/home?forceTourVisible=true"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isSidebarOpenState ? "left" : "center",
                alignItems: "center",
              }}
              onClick={() => {
                // handleMenuClick("tour");
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
                    isDarkModeState
                      ? "text-custom-lightblue"
                      : "text-custom-blue"
                  } ${isSidebarOpenState && "rotate-[360deg]"} `}
                  //   style={getIconStyle("tour")}
                />
              </div>
              <h1
                className={`text-black origin-left font-medium text-xl duration-300
                    ${isDarkModeState ? "text-white" : "text-black"}
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
            // style={getContainerMenuStyle("logout")}
            // onMouseEnter={() => handleMouseEnter("logout")}
            // onMouseLeave={() => handleMouseLeave("logout")}
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
                // handleMenuClick("logout");
                // handleLogout();
                // handleOpenIconClick();
                // resetStates();
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
                    isDarkModeState
                      ? "text-custom-lightblue"
                      : "text-custom-blue"
                  } ${isSidebarOpenState && "rotate-[360deg]"} `}
                  //   style={getIconStyle("logout")}
                />
              </div>
              <h1
                className={`text-black origin-left font-medium text-xl duration-300 ${
                  isDarkModeState ? "text-white" : "text-black"
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
