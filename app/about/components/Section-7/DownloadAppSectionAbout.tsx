import React from "react";
import DownloadAppFinniuDesktop from "./DownloadAppFinniuDesktop";
import DownloadAppFinniuMobile from "./DownloadAppFinniuMobile";

const DownloadAppSectionAbout = () => {
  return (
    <section className="flex flex-col  w-full justify-center items-center  min-h-[530px] 2xl:min-h-screen bg-white  ">
      <div className="hidden 2xl:block h-full">
        <DownloadAppFinniuDesktop />
      </div>
      <div className="block 2xl:hidden">
        <DownloadAppFinniuMobile />
      </div>
    </section>
  );
};

export default DownloadAppSectionAbout;
