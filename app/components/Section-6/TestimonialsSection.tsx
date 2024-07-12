import React from "react";
import TestimonialsDesktop from "./TestimonialsDesktop";
import TestimonialsMobile from "./TestimonialsMobile";

const TestimonialsSection = () => {
  return (
    <section className=" bg-gradient-light  flex justify-center items-center w-full">
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
