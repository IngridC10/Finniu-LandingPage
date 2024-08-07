"use client";
import React from "react";
import OurDirectoryMobile from "./OurDirectoryMobile";
import OurDirectoryDesktop from "./OurDirectoryDesktop";

const OurDirectorySection = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center  min-h-[100%] bg-white  ">
      <div className="hidden 2xl:flex h-full w-full items-center justify-center">
        <OurDirectoryDesktop />
      </div>
      <div className="block 2xl:hidden">
        <OurDirectoryMobile />
      </div>
    </section>
  );
};

export default OurDirectorySection;
