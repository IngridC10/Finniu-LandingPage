"use client";
import React from "react";
import DownloadAppSection from "./DownloadAppSection";
import DownloadAppResponsiveSection from "./DownloadAppResponsiveSection";

const DownloadApp = () => {
  return (
    <>
      <div className="hidden 2xl:block">
        <DownloadAppSection />
      </div>
      <div className="block 2xl:hidden">
        <DownloadAppResponsiveSection />
      </div>
    </>
  );
};

export default DownloadApp;
