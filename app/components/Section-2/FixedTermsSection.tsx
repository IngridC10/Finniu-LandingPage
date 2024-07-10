import React from "react";
import FixedTermCardSectionMobile from "./FixedTermCardSectionMobile";
import FixedTermSectionDesktop from "./FixedTermSectionDesktop";

const FixedTermsSection = () => {
  return (
    <>
      <div className="hidden 2xl:block">
        <FixedTermSectionDesktop />
      </div>
      <div className="block 2xl:hidden">
        <FixedTermCardSectionMobile />
      </div>
    </>
  );
};

export default FixedTermsSection;
