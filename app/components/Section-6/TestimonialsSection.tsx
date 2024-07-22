import React from "react";
import TestimonialsDesktop from "./TestimonialsDesktop";
import TestimonialsMobile from "./TestimonialsMobile";

const TestimonialsSection = () => {
  return (
    <section className=" bg-gradient-light  flex justify-center  min-h-[550px]  2xl:min-h-screen items-center w-full">
      <div className="hidden 2xl:block container">
        <TestimonialsDesktop />
      </div>
      <div className="block 2xl:hidden">
        <TestimonialsMobile />
      </div>
    </section>
  );
};

export default TestimonialsSection;
