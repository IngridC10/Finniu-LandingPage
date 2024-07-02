"use client";
import React from "react";
import Image from "next/image";
import GooglePlay from "/images/GooglePlay.png";
import AppStore from "/images/AppStore.png";
import CellphoneDollar from "/images/CellphoneDollar.png";
import CountUp from "react-countup";
const DownloadAppComponent = () => {
  return (
    <section className=" flex flex-col justify-center items-center w-full  min-h-screen bg-blueDarkColor h-screen  ">
      <div className="flex flex-row container min-h-[90%] justify-center ">
        <div className="text-left w-[561px] relative z-10 flex justify-center flex-col ">
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

        <div className=" flex items-end  pb-56 ml-60 w-[400px] ">
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

        <div className="absolute  top-[36%] right-[36.5.3%] h-full">
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
