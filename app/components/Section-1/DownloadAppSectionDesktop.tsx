"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import GooglePlay from "@/images/Section-1/GooglePlay.png";
import AppStore from "@/images/Section-1/AppStore.png";
import CellphoneDollar from "@/images/Section-1/CellPhoneDollar.png";

const DownloadAppSectionDesktop = () => {
  return (
      <div className="flex flex-wrap justify-start">
        <div className="basis-full md:basis-1/2 xl:basis-1/3 p-4">
          <p className="text-white text-[32px] mb-3 leading-tight">
            Invierte en tu futuro
          </p>
          <p className="text-white text-[43px] leading-tight">
            <span>Logra todas tus </span>
            <span className="text-lilaColor"> metas financieras</span>
          </p>
          <p className="text-white text-[43px] leading-tight">
            con
            <span className="text-lightTextNavBar"> Finniu.</span>
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <a
                href="https://play.google.com/store/apps/details?id=com.finniu"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src={GooglePlay}
                  alt="Google-Play"
                  width={160}
                  style={{height: "auto"}}
              />
            </a>
            <a
                href="https://apps.apple.com/pe/app/finniu/id6449205870"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src={AppStore}
                  alt="App-Store"
                  width={160}
                  style={{height: "auto"}}
              />
            </a>
          </div>
        </div>


        <div className="basis-full md:basis-1/2 xl:basis-1/3 p-4">
          <Image
              src={CellphoneDollar}
              alt="CellPhone-Dollar"
              width={670}
              height={0}
              className="w-full max-w-xs md:max-w-md lg:max-w-lg max-h-[450px] object-contain"
              style={{height: "auto"}}
          />
        </div>
        <div className="basis-full md:basis-1/2 xl:basis-1/3 p-4">
          <div className="flex flex-col items-end justify-center text-white text-xl ml-8">
            <div className="flex items-center justify-center mb-4 space-x-4 w-[476px] leading-[43px]">
              <div className="text-center">
                <p className="text-base">Soles invertidos</p>
                <CountUp
                    start={0}
                    end={7.5}
                    duration={2.5}
                    separator=""
                    decimals={1}
                    decimal=","
                    prefix="+"
                    suffix=" M"
                    style={{fontSize: "32px"}}
                />
              </div>
              <div className="border-l-2 border-lightBlueColor h-16"></div>
              <div className="text-center">
                <p className="text-base">Operaciones</p>
                <CountUp
                    start={0}
                    end={550}
                    duration={2.7}
                    prefix="+"
                    style={{fontSize: "32px"}}
                />
              </div>
              <div className="border-l-2 border-lightBlueColor h-16"></div>
              <div className="text-center">
                <p className="text-base">Inversionistas</p>
                <CountUp
                    start={0}
                    end={300}
                    duration={2.5}
                    prefix="+"
                    style={{fontSize: "32px"}}
                />
              </div>
            </div>
            <p className="text-justify leading-10 text-[24px]">
              Descubre las oportunidades de inversión que existen para ti. Genera
              ingresos adicionales de manera inteligente.
            </p>
          </div>
        </div>


      </div>
  );
};

export default DownloadAppSectionDesktop;
