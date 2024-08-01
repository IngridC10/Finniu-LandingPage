import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import AppsCellphone from "@/images/Section-1/AppsCellphone.png";
const HowItWorksButtonMobile = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Link href="/#HowItWorks">
        <ButtonComponent
          text="¿Cómo funciona?"
          className="bg-blueDarkColor mt-2 rounded-lg text-[14px] text-lightBlueColor border border-lightBlueColor w-[194px] h-[46px]"
        >
          <Image
            src={AppsCellphone}
            alt="apps-cellphone"
            width={20}
            height={20}
            className="ml-3"
          />
        </ButtonComponent>
      </Link>
    </div>
  );
};

export default HowItWorksButtonMobile;
