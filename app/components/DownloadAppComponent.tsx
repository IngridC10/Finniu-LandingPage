import React from "react";
import Image from "next/image";
import GooglePlay from "/images/GooglePlay.png";
import AppStore from "/images/AppStore.png";
import CellphoneDollar from "/images/CellphoneDollar.png";
const DownloadAppComponent = () => {
  return (
    <section className=" flex flex-col justify-center items-center w-full min-h-screen bg-blueDarkColor h-screen  ">
      <div className="flex flex-row  w-full min-h-screen justify-center">
        <div className="text-left w-[561px]  relative z-10 flex justify-center flex-col mb-24">
          <p className="text-white text-2xl mb-4 leading-tight ">
            Invierte en tu futuro
          </p>
          <p className="text-white text-[40px] mb-4 leading-tight ">
            <span className="text-lilaColor">Invierte</span> &{" "}
            <span className="text-lightBlueColor">Genera</span>
          </p>
          <p className="text-white text-[40px] mb-4 leading-tight">
            otra fuente de
          </p>
          <p className="text-white text-[40px] mb-4 leading-tight">ingresos</p>
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.finniu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={GooglePlay}
                alt="Logo de Google Play"
                width={160}
                style={{ height: "auto" }}
              />
            </a>
            <a
              href="https://apps.apple.com/pe/app/finniu/id6449205870"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={AppStore}
                alt="Logo de App Store"
                width={160}
                style={{ height: "auto" }}
              />
            </a>
          </div>
        </div>

        <div className=" flex items-end  pb-56 mt-8  ml-[200px] w-[400px] md:mt-0">
          <div className="flex flex-col items-end justify-center ml-8 text-white text-xl w-[570px] ">
            <div className="flex items-center mb-4 space-x-4 w-[476px]">
              <div className="text-center">
                <p>Soles invertidos</p>
                <p className="font-bold">+3,5M</p>
              </div>
              <div className="border-l-2 border-lightBlueColor h-16"></div>
              <div className="text-center">
                <p>Operaciones</p>
                <p className="font-bold">+780</p>
              </div>
              <div className="border-l-2 border-lightBlueColor h-16"></div>
              <div className="text-center">
                <p>Inversionistas</p>
                <p className="font-bold">+100</p>
              </div>
            </div>
            <p className="text-justify">
              Descubre las oportunidades de inversión que tenemos para ti y
              genera ingresos adicionales de manera inteligente.
            </p>
          </div>
        </div>

        <div className="absolute  top-[264px] right-1/3 h-full">
          <Image
            src={CellphoneDollar}
            alt="CellPhone Dollar"
            width={575}
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppComponent;
