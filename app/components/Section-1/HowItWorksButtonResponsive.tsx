import React from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import AppsCellphone from "@/images/Section-1/AppsCellphone.png";
const HowItWorksButtonResponsive = () => {
  return (
    <div className=" flex flex-row sm:hidden 2xl:block">
      <ButtonComponent
        text={"¿Cómo funciona?"}
        className=" bg-blueDarkColor rounded-lg text-[14px] text-lightBlueColor border border-lightBlueColor w-[194px] h-[46px]  "
      />
      <Image src={AppsCellphone} alt="apps-cellphone" width={20} height={20} />
    </div>
  );
};

export default HowItWorksButtonResponsive;
