import React from "react";
import FixedTermCardSectionMobile from "./FixedTermCardSectionMobile";
import FixedTermSectionDesktop from "./FixedTermSectionDesktop";

const FixedTermsSection = () => {
  return (
    <section className=" section-custom flex-col bg-white">
      <div className="hidden 2xl:block container">
        <FixedTermSectionDesktop />
      </div>
      <div className="block 2xl:hidden">
        <FixedTermCardSectionMobile />
      </div>
    </section>
  );
};

export default FixedTermsSection;
