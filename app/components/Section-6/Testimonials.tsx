import React from "react";
import TestimonialsSection from "./TestimonialsSection";
import TestimonialsResponsive from "./TestimonialsResponsive";

const Testimonials = () => {
  return (
    <>
      <div className="hidden 2xl:block">
        <TestimonialsSection />
      </div>
      <div className="block 2xl:hidden">
        <TestimonialsResponsive />
      </div>
    </>
  );
};

export default Testimonials;
