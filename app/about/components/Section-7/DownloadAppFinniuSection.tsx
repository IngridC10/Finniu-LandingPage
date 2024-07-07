import React from "react";
import Image from "next/image";
import AppStore from "/images/about/section-7/AppStore.png";
import GooglePlay from "/images/about/section-7/GooglePlay.png";
import CellPhoneDollar from "/images/about/section-7/CellPhoneDollar.png";

const DownloadAppSection = () => {
  return (
    <section className=" section-custom bg-white">
      <div className=" container-section w-[1536px] h-[637px] shadow-md bg-lightColorOpcional rounded-3xl flex-col">
        <div className="  flex flex-row justify-center items-center">
          <div className=" flex flex-col w-[540px]">
            <p className=" text-[32px]">
              <strong>Descarga la app de Finniu, </strong>
              crea tu cuenta y comienza a cumplir tus metas financieras.
            </p>
            <div className=" flex flex-row gap-4 mt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.finniu"
                target="_blank"
              >
                <Image
                  src={GooglePlay}
                  alt="Google-Play"
                  width={217}
                  height={67}
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.finniu"
                target="_blank"
              >
                <Image src={AppStore} alt="App-Store" width={217} height={67} />
              </a>
            </div>
          </div>

          <Image src={CellPhoneDollar} alt="Cellphone-Dollar" width={600} />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
