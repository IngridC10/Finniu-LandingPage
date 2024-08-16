"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/contexts/ThemeProvider";
import { getIsSoles, saveIsSoles } from "@/app/cookies/IsSolesCookies";
import { useRouter } from "next/navigation";
import { getProfile } from "@/app/cookies/UserProfileCookies";
import { getToken } from "@/app/cookies/TokenCookies";
import SideBarComponent from "./(home)/components/SidebarComponent";
import UserMenu from "./(home)/components/UserMenu";
import SwitchSolesComponent from "./(home)/components/SwitchSolesComponent";

const Page = () => {
  const router = useRouter();
  const [isSolesState, setIsSolesState] = useState(
    getIsSoles() === "true" ? true : false
  );
  const [userName, setUserName] = useState("Usuario");
  const { darkMode } = useTheme();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
    } else {
      const profile = getProfile();
      console.log("Perfil del usuario:", profile);

      if (profile && profile.firstName) {
        setUserName(profile.firstName);
      } else {
        console.error("No se pudo recuperar el perfil del usuario.");
      }
    }
  }, []);

  const handleSwitchChange = () => {
    setIsSolesState(!isSolesState);
    saveIsSoles(!isSolesState);
  };

  return (
    <main
      className={`relative flex min-h-screen w-full  ${
        darkMode ? "bg-backgroundDarkColor" : "bg-customBackgroundLight"
      }`}
    >
      <SideBarComponent currentPage={""} />
      <div className="relative z-20 flex flex-col items-end w-full p-8 ">
        <UserMenu />
        <div className="flex items-center w-[87%] justify-between mb-10">
          <p
            className={`text-3xl font-bold flex  w-[237px] flex-row justify-start ${
              darkMode ? "text-customLightBlue" : "text-darkBlueColor"
            }`}
          >
            Hola {userName}
          </p>

          <SwitchSolesComponent
            isSolesState={isSolesState}
            onSwitchChange={handleSwitchChange}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
