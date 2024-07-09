import React from "react";
import FixedTermSection from "./FixedTermSection";
import FixedTermCardSectionResponsive from "./FixedTermCardSectionResponsive";

const FixedTerms = () => {
  return (
    <>
      <div className="hidden 2xl:block">
        <FixedTermSection />
      </div>
      <div className="block 2xl:hidden">
        <FixedTermCardSectionResponsive />
      </div>
    </>
  );
};

export default FixedTerms;
