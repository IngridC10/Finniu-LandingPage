"use client";
import React from "react";
import OurDirectoryMobile from "./OurDirectoryMobile";
import OurDirectoryDesktop from "./OurDirectoryDesktop";

const OurDirectorySection = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center  min-h-[100%] bg-white  ">
      <div className="hidden xl:flex h-full w-full items-center justify-center">
        <OurDirectoryDesktop />
      </div>
      <div className="block xl:hidden">
        <OurDirectoryMobile />
      </div>
    </section>
  );
};

export default OurDirectorySection;
