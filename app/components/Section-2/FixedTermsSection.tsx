import React from "react";
import FixedTermCardSectionResponsive from "./FixedTermCardSectionResponsive";
import FixedTermSectionDesktop from "./FixedTermSectionDesktop";

const FixedTermsSection = () => {
  return (
    <>
      <div className="hidden 2xl:block">
        <FixedTermSectionDesktop />
      </div>
      <div className="block 2xl:hidden">
        <FixedTermCardSectionResponsive />
      </div>
    </>
  );
};

export default FixedTermsSection;
