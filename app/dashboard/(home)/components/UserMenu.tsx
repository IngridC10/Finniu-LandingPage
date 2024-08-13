import React from "react";
import { GoBell } from "react-icons/go";
import UserPhoto from "@/images/Dashboard/UserMenu/userPhoto.jpg";
import Image from "next/image";
import SwitchLightandDark from "./SwitchLightandDark";
// import { getProfile } from "../helpers/UserProfileStorage";

const UserMenu = ({
  isDarkModeState,
  setIsDarkModeState,
}: {
  isDarkModeState: boolean;
  setIsDarkModeState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //   const { imageProfileUrl } = getProfile() ? getProfile() : defaultImageUser;
  //   const UserPhoto = imageProfileUrl ? imageProfileUrl : defaultImageUser;

  return (
    <div className="flex justify-end gap-10 w-full p-5">
      <SwitchLightandDark
        // className="ml-auto"
        isDarkModeState={isDarkModeState}
        setIsDarkModeState={setIsDarkModeState}
      />
      <div className="flex items-center iconBell">
        <GoBell
          className="icon"
          style={{ color: isDarkModeState ? "#A2E6FA" : "#0D3A5C" }}
        />
      </div>

      <Image className="w-16 h-16 rounded-full" src={UserPhoto} alt="User" />
    </div>
  );
};

export default UserMenu;
