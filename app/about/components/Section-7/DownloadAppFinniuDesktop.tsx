import React from "react";
import Image from "next/image";
import AppStore from "@/images/About/Section-7/AppStore.png";
import GooglePlay from "@/images/About/Section-7/GooglePlay.png";
import CellPhoneDollar from "@/images/About/Section-7/CellPhoneDollar.png";

const DownloadAppFinniuDesktop = () => {
  return (
    <div className=" p-[30px] min-h-full     xl:w-[1200px] 2xl:w-[1536px]  flex justify-center items-start h-[550px] shadow-md relative bg-lightColorOpcional rounded-3xl flex-col">
      <div className="  flex flex-row justify-center ml-10 items-center">
        <div className=" flex flex-col w-[540px]">
          <p className=" text-[32px] ">
            <strong>Descarga la app de Finniu, </strong>
            crea tu cuenta y comienza a cumplir tus metas financieras.
          </p>
          <div className=" flex flex-row gap-4 mt-3 ">
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
              href="https://apps.apple.com/pe/app/finniu/id6449205870"
              target="_blank"
            >
              <Image src={AppStore} alt="App-Store" width={217} height={67} />
            </a>
          </div>
        </div>

        <Image
          src={CellPhoneDollar}
          alt="Cellphone-Dollar"
          width={600}
          className=" absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default DownloadAppFinniuDesktop;
