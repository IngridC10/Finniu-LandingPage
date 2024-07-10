"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import GooglePlay from "@/images/Section-1/GooglePlay.png";
import AppStore from "@/images/Section-1/AppStore.png";
import CellphoneDollar from "@/images/Section-1/CellPhoneDollar.png";

const DownloadAppSectionDesktop = () => {
  return (
    <section className=" flex flex-col justify-center items-center w-full max-h-[90vh] min-h-[100%] bg-blueDarkColor h-screen   ">
      <div className="flex flex-row container container-section justify-center relative h-full">
        <div className="text-left w-[561px] z-10 flex justify-center flex-col ">
          <p className="text-white mb-4 text-[32px] leading-tight ">
            Invierte en tu futuro
          </p>
          <p className="text-white text-[48px] mb-4 leading-tight ">
            <span className="text-lilaColor">Invierte</span> &
            <span className="text-lightBlueColor"> Genera</span>
          </p>
          <p className="text-white text-[48px] mb-4 leading-tight">
            otra fuente de
          </p>
          <p className="text-white text-[48px] mb-4 leading-tight">ingresos</p>
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
                alt="App-Store"
                width={160}
                style={{ height: "auto" }}
              />
            </a>
          </div>
        </div>

        <div className="w-[100px]"></div>

        <div className=" flex items-end pb-10 ml-60 w-[523px] ">
          <div className="flex flex-col items-end justify-center  text-white text-xl  ml-8 ">
            <div className="flex items-center justify-center mb-4 space-x-4 w-[476px] leading-[63px] ">
              <div className="text-center">
                <p className="text-base">Soles invertidos</p>
                +
                <CountUp
                  start={0}
                  end={3.5}
                  duration={2.5}
                  separator=","
                  decimals={1}
                  prefix=""
                  suffix="M"
                  style={{ fontSize: "32px" }}
                />
              </div>
              <div className="border-l-2 border-lightBlueColor h-16"></div>
              <div className="text-center">
                <p className="text-base"> Operaciones</p>
                <CountUp
                  start={0}
                  end={780}
                  duration={2.7}
                  prefix="+"
                  style={{ fontSize: "32px" }}
                ></CountUp>
              </div>
              <div className="border-l-2 border-lightBlueColor h-16"></div>
              <div className="text-center">
                <p className="text-base">Inversionistas</p>
                <CountUp
                  start={0}
                  end={100}
                  duration={2.5}
                  prefix="+"
                  style={{ fontSize: "32px" }}
                ></CountUp>
              </div>
            </div>
            <p className="text-justify leading-10 text-[24px]">
              Descubre las oportunidades de inversión que tenemos para ti y
              genera ingresos adicionales de manera inteligente.
            </p>
          </div>
        </div>

        <div className="absolute right-[75px] top-[96px] flex flex-row items-center  justify-center h-full w-full">
          <Image
            src={CellphoneDollar}
            alt="CellPhone-Dollar"
            width={575}
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSectionDesktop;
