"use client";
import React, { useEffect, useState } from "react";
import { GoBell } from "react-icons/go";
import defaultImageUser from "@/images/Dashboard/UserMenu/userPhoto.jpg";
import Image from "next/image";
import SwitchLightandDark from "./SwitchLightandDark";
import { getProfileCookies } from "@/app/cookies/client/UserProfileCookies";
import { useTheme } from "@/app/contexts/ThemeProvider";
const UserMenu = () => {
  const [userPhoto, setUserPhoto] = useState(defaultImageUser);
  const { darkMode } = useTheme();

  useEffect(() => {
    const profileData = getProfileCookies();
    if (profileData && profileData.imageProfileUrl) {
      setUserPhoto(profileData.imageProfileUrl);
    }
  }, []);

  return (
    <div
      className={`flex justify-end gap-10 w-full ${
        darkMode ? "bg-backgroundDarkColor" : "bg-customBackgroundLight"
      }`}
    >
      <SwitchLightandDark />
      <div className="flex items-center iconBell">
        <GoBell
          className="icon"
          style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}
        />
      </div>

      <Image
        className="w-16 h-16 rounded-full"
        src={userPhoto}
        alt="User"
        width={50}
        height={50}
        priority={true}
      />
    </div>
  );
};

export default UserMenu;
