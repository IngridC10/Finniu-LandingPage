"use client";
import ButtonComponent from "@/components/ButtonComponent";
import NavComponent from "@/components/NavComponent";
import React from "react";
import Image from "next/image";
import LogoFinniu from "/images/LogoFinniu.png";
import GooglePlay from "/images/GooglePlay.png";
import AppStore from "/images/AppStore.png";
import CellphoneDollars from "/images/CellphoneDollars.png";

const DownloadAppComponent = () => {
  const handleButton = () => {
    window.open("https://app.finniu.com/login", "_blank");
  };
  return (
    <div className="flex flex-col items-center bg-blueDarkColor min-h-screen py-8 ">
      <div className="flex justify-between items-center w-full max-w-7xl mb-12">
        <div className="flex items-center">
          <Image src={LogoFinniu} alt="Logo de Finniu" width={98} height={96} />
        </div>
        <div className="flex-grow mx-4">
          <NavComponent />
        </div>
        <ButtonComponent
          text="Ingresar"
          className="h-12 w-36 text-blueDarkColor bg-lightBlueColor py-2 px-5 font-bold"
          onClick={handleButton}
        />
      </div>

      <section className="about-finniu">
        <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
          <div className="text-center md:text-left md:w-1/2 leading-tight">
            <p className="text-white text-2xl mb-4 leading-tight">
              Invierte en tu futuro
            </p>
            <p className="text-white text-[40px] mb-4 leading-tight">
              <span className=" text-lightBlueColor">Invierte</span> &
              <span className="text-lightBlueColor">Genera</span>
            </p>
            <p className="text-white text-[40px] mb-4 leading-tight ">
              otra fuente de
            </p>
            <p className="text-white text-[40px] mb-4 leading-tight">
              ingresos
            </p>
            <div className="flex justify-center md:justify-start gap-4 mb-8 ">
              <a
                href="https://play.google.com/store/apps/details?id=com.finniu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GooglePlay}
                  alt="Logo de Google Play"
                  width={240}
                  height={50}
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
                  width={240}
                  height={50}
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center relative">
            <Image
              src={CellphoneDollars}
              alt="Celular con dólares"
              height={800}
              width={375}
            />
            <div className="flex flex-col justify-center ml-8 text-white text-xl">
              <div className="flex items-center mb-4 space-x-4">
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
              <p className="text-left max-w-xs">
                Descubre las oportunidades de inversión que tenemos para ti y
                genera ingresos adicionales de manera inteligente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadAppComponent;
