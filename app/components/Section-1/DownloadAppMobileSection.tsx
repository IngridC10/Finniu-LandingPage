import React from "react";
import Image from "next/image";
import CellphoneDollar from "@/images/Section-1/CellPhoneDollar.png";
import GooglePlay from "@/images/Section-1/GooglePlay.png";
import AppStore from "@/images/Section-1/AppStore.png";
import ArrowLight from "@/images/Section-1/ArrowLight.png";
import HowItWorksButtonMobile from "./HowItWorksButtonMobile";

const DownloadAppMobileSection = () => {
  return (
    <div className="flex flex-col  2xl:justify-center justify-start p-6 items-center bg-blueDarkColor  m-0 2xl:m-3">
      <div className="text-white  text-justify ">
        <p className="text-2xl">Invierte en tu futuro</p>
        <p className=" text-[28px]  lg:text-4xl ">
          <span className="text-lilaColor text-[28px] lg:text-4xl mr-2">
            Invierte
          </span>

          <span>& </span>
          <span className="text-lightBlueColor text-[28px] lg:text-4xl  ">
            Genera
          </span>
        </p>
        <p className="text-[28px] lg:text-4xl">otra fuente de ingresos</p>
      </div>

      <Image
        src={CellphoneDollar}
        alt="cellphone-dollar"
        width={405}
        height={300}
      />

      <div className="flex flex-row ">
        <HowItWorksButtonMobile />
      </div>

      <div className="flex justify-center md:justify-start gap-4 mt-6">
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

      <div className="mt-5">
        <Image src={ArrowLight} alt="arrow-light" height={50} />
      </div>
    </div>
  );
};

export default DownloadAppMobileSection;
