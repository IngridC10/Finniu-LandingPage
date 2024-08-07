import React from "react";
import Image from "next/image";
import logoTextLight from "@/images/Dashboard/Login/Logo/logo-text-light.png";

const login = () => {
  return (
    <div className="flex h-screen bg-gradient-to-t from-creme-color to-custom-light-blue">
      <div className="m-auto h-[721px] bg-[pink] rounded-[50px] flex flex-col justify-center items-center w-[365px] sm:w-[500px] lg:w-[555px] xl:w-[610px]">
        {/* <Image
          className="w-[90px] h-[90px] mb-[15px] self-center"
          src={logoTextLight}
          alt="logo"
          height={90}
          width={90}
        /> */}
      </div>
    </div>
  );
};

export default login;
