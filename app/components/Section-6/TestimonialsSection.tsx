import React from "react";
import TestimonialsDesktop from "./TestimonialsDesktop";
import TestimonialsMobile from "./TestimonialsMobile";

const TestimonialsSection = () => {
  return (
    <section className=" bg-gradient-light  flex justify-center  min-h-[550px]  2xl:min-h-[80vh] items-center w-full">
      <div className="hidden xl:block container">
        <TestimonialsDesktop />
      </div>
      <div className="block xl:hidden">
        <TestimonialsMobile />
      </div>
    </section>
  );
};

export default TestimonialsSection;
