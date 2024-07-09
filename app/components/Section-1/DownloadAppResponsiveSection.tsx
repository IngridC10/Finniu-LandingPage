import React from "react";
import Image from "next/image";
import CellphoneDollar from "@/images/Section-1/CellPhoneDollar.png";
import HowItWorksButtonResponsive from "./HowItWorksButtonResponsive";
import GooglePlay from "@/images/Section-1/GooglePlay.png";
import AppStore from "@/images/Section-1/AppStore.png";
import ArrowLight from "@/images/Section-1/ArrowLight.png";
import AppsCellphone from "@/images/Section-1/AppsCellphone.png";

const DownloadAppResponsiveSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-blueDarkColor h-screen m-3">
      <div className="text-white  text-justify ">
        <p className="text-2xl">Invierte en tu futuro</p>
        <p className=" text-[28px]  lg:text-4xl ">
          <span className="text-lilaColor text-[28px] lg:text-4xl">
            Invierte
          </span>{" "}
          &
          <span className="text-lightBlueColor text-[28px] lg:text-4xl  ">
            {" "}
            Genera
          </span>
        </p>
        <p className="text-[28px] lg:text-4xl">otra fuente de ingresos</p>
      </div>

      <div className="mt-8">
        <Image
          src={CellphoneDollar}
          alt="cellphone-dollar"
          width={405}
          height={300}
        />
      </div>

      <div className="flex flex-row mt-8">
        <HowItWorksButtonResponsive />
      </div>

      <div className="flex justify-center md:justify-start gap-4 mt-8">
        <a
          href="https://play.google.com/store/apps/details?id=com.finniu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GooglePlay} alt="Google-Play" width={120} />
        </a>
        <a
          href="https://apps.apple.com/pe/app/finniu/id6449205870"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={AppStore} alt="App-Store" width={120} />
        </a>
      </div>

      <div className="mt-8">
        <Image src={ArrowLight} alt="arrow-light" height={50} />
      </div>
    </div>
  );
};

export default DownloadAppResponsiveSection;
