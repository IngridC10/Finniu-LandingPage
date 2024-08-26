"use client";
import React from "react";
import { GoBell } from "react-icons/go";
import defaultImageUser from "@/images/Dashboard/UserMenu/userPhoto.jpg";
import Image from "next/image";
import SwitchLightandDark from "./SwitchLightandDark";
import { getProfile } from "@/app/cookies/client/UserProfileCookies";
import { useTheme } from "@/app/contexts/ThemeProvider";

const UserMenu = () => {
  const { imageProfileUrl } = getProfile() ? getProfile() : defaultImageUser;
  const UserPhoto = imageProfileUrl ? imageProfileUrl : defaultImageUser;
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex justify-end gap-10 w-full p-5">
      <SwitchLightandDark />
      <div className="flex items-center iconBell">
        <GoBell
          className="icon"
          style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}
        />
      </div>

      <Image className="w-16 h-16 rounded-full" src={UserPhoto} alt="User" width={50}  height={50}/>
    </div>
  );
};

export default UserMenu;
