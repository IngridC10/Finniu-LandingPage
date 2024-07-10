import React from "react";
import TestimonialsDesktop from "./TestimonialsDesktop";
import TestimonialsMobile from "./TestimonialsMobile";

const TestimonialsSection = () => {
  return (
    <section className="section-custom bg-gradient-light w-full">
      <div className="hidden 2xl:block ">
        <TestimonialsDesktop />
      </div>
      <div className="block 2xl:hidden">
        <TestimonialsMobile />
      </div>
    </section>
  );
};

export default TestimonialsSection;
