import React from "react";
import TestimonialsDesktop from "./TestimonialsDesktop";
import TestimonialsResponsive from "./TestimonialsResponsive";

const TestimonialsSection = () => {
  return (
    <>
      <div className="hidden 2xl:block">
        <TestimonialsDesktop />
      </div>
      <div className="block 2xl:hidden">
        <TestimonialsResponsive />
      </div>
    </>
  );
};

export default TestimonialsSection;
