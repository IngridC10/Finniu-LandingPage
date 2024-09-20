"use client";
import React from "react";
import DownloadAppSectionDesktop from "./DownloadAppSectionDesktop";
import DownloadAppMobileSection from "./DownloadAppMobileSection";

const DownloadAppSection = () => {
  return (
    <section className="flex flex-col  justify-center items-center w-full  xl:h-[90vh] xl:max-h-[90vh] min-h-[100%] bg-blueDarkColor   ">
      <div className="hidden xl:block h-full container">
        <DownloadAppSectionDesktop />
      </div>
      <div className="block xl:hidden">
        <DownloadAppMobileSection />
      </div>
    </section>
  );
};

export default DownloadAppSection;
