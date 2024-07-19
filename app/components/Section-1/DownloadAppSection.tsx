"use client";
import React from "react";
import DownloadAppSectionDesktop from "./DownloadAppSectionDesktop";
import DownloadAppMobileSection from "./DownloadAppMobileSection";

const DownloadAppSection = () => {
  return (
    <section className="flex flex-col  justify-center items-center w-full  2xl:h-[90vh] 2xl:max-h-[90vh] min-h-[100%] bg-blueDarkColor   ">
      <div className="hidden 2xl:block h-full container">
        <DownloadAppSectionDesktop />
      </div>
      <div className="block 2xl:hidden">
        <DownloadAppMobileSection />
      </div>
    </section>
  );
};

export default DownloadAppSection;
