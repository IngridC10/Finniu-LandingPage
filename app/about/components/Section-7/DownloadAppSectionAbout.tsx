import React from "react";
import DownloadAppFinniuDesktop from "./DownloadAppFinniuDesktop";
import DownloadAppFinniuMobile from "./DownloadAppFinniuMobile";

const DownloadAppSectionAbout = () => {
  return (
    <section className="flex flex-col  w-full justify-center items-center  min-h-[530px]  xl:min-h-[80vh] bg-white  ">
      <div className="hidden xl:block h-full">
        <DownloadAppFinniuDesktop />
      </div>
      <div className="block xl:hidden">
        <DownloadAppFinniuMobile />
      </div>
    </section>
  );
};

export default DownloadAppSectionAbout;
