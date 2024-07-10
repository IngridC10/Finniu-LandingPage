import React from "react";
import TestimonialsDesktop from "./TestimonialsDesktop";
import TestimonialsMobile from "./TestimonialsMobile";

const TestimonialsSection = () => {
  return (
    <>
      <div className="hidden 2xl:block">
        <TestimonialsDesktop />
      </div>
      <div className="block 2xl:hidden">
        <TestimonialsMobile />
      </div>
    </>
  );
};

export default TestimonialsSection;
