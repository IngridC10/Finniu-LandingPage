"use client";
import React from "react";
import DownloadAppResponsiveSection from "./DownloadAppResponsiveSection";
import DownloadAppSectionDesktop from "./DownloadAppSectionDesktop";

const DownloadAppSection = () => {
  return (
    <>
      <div className="hidden 2xl:block">
        <DownloadAppSectionDesktop />
      </div>
      <div className="block 2xl:hidden">
        <DownloadAppResponsiveSection />
      </div>
    </>
  );
};

export default DownloadAppSection;
