import React from "react";
import Image from "next/image";
import logoTextLight from "@/images/Dashboard/Login/logoTextLight.png";
import googlePlay from "@/images/Dashboard/Login/googlePlay.png";
import appStore from "@/images/Dashboard/Login/appStore.png";

const DownloadBody = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="overflow-hidden lg:h-auto w-screen"
    >
      <div className="flex flex-col h-screen bg-gradient-to-t from-cremeColor to-blueCustom lg:overflow-auto">
        <div className="flex flex-col items-center h-full text-center">
          <div className="mt-20 xs:mt-20 sm:mt-[79px] md:mt-[79px] lg:mt-[128px] xl:mt-[128px] p-2">
            <h1 className="font-bold text-[16px] xs:text-[16px] sm:text-xl md:text-[29px] lg:text-[39px] xl:text-[39px] xxl:text-[39px] text-[#0b3257]">
              Dale una oportunidad a tu dinero que trabaje por ti
            </h1>
            <h2 className="text-[16px] xs:text-[16px] sm:text-lg md:text-xl lg:text-3xl xl:text-3xl xxl:text-3xl text-[#0b3257] font-normal lg:mt-12">
              Tu yo del futuro te lo agradecerá mucho.
            </h2>
          </div>

          <div className="flex flex-col items-center h-full mt-2 sm:items-center md:items-center lg:items-center xl:items-end xxl:items-end xs:h-auto sm:h-auto md:h-auto lg:h-full xxl:h-full sm:flex-col lg:flex-col xl:flex-row xxl:flex-row lg:mt-10 xl:mt-35">
            <img
              className="h-[299.73px] w-[237px] md:w-[374px] md:h-[518px] lg:w-[442px] lg:h-[625.14px] sm:relative lg:relative xl:relative animationPreview"
              src="https://finniu-statics.s3.amazonaws.com/images/logos/DpreviewApp.gif"
              alt="animation-app"
            />

            <div className="flex flex-col items-center justify-start h-full p-5 sm:justify-center md:justify-center lg:justify-start xl:justify-center xxl:justify-center xl:mt-32 ">
              <Image
                className="w-[63px] h-[53px] xs:w-[63px] xs:h-[53px] sm:w-[105px] md:w-[89px] md:h-[64px] lg:w-[109px]  self-center"
                src={logoTextLight}
                alt="logo-text"
              />
              <h3 className=" max-w-[439px] text-[16px] sm:text-[12px] md:text-[20px] lg:text-[22px] xs:mt-[2px] xs:mb-5 sm:mt-5 sm:mb-5 md:mt-5  md:mb-5  lg:mt-5 lg:mb-5   xl:mt-5 xl:mb-5 xxl:mb-5 xxl:mt-5 font-normal text-black text-center leading-normal ">
                Descarga la app, crea tu cuenta y comienza a cumplir tus metas
                financieras.
              </h3>
              <div className="flex flex-row justify-center gap-5">
                <a href="https://play.google.com/store/apps/details?id=com.finniu&pli=1">
                  <Image
                    className=" xs:w-[119px]  sm:w-[175px] md:w-[206px] lg:w-[239px] xl:w-[239px] xxl:w-[239px] xs:h-[42px] sm:h-[54px] md:h-[65px] lg:h-[79px] xl:h-[79px] xxl:h-[79px]"
                    src={googlePlay}
                    alt="google-play"
                  />
                </a>
                <a href="https://apps.apple.com/pe/app/finniu/id6449205870">
                  <Image
                    className=" xs:w-[119px] sm:w-[175px] md:w-[206px] lg:w-[239px] xl:w-[239px] xxl:w-[239px] xs:h-[42px] sm:h-[54px] md:h-[65px] lg:h-[79px] xl:h-[79px] xxl:h-[79px]"
                    src={appStore}
                    alt="app-store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBody;
