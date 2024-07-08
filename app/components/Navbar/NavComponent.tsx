"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import LogoFinniu from "/images/Navbar/LogoFinniu.png";

const NavComponent = () => {
  const handleButton = () => {
    window.open("https://app.finniu.com/login");
  };

  return (
    <div className="w-full flex justify-center items-center bg-blueDarkColor p-4">
      <div className="container container-section flex flex-row justify-between items-center">
        <Link href="/components">
          <Image
            src={LogoFinniu}
            alt="Logo de Finniu"
            width={125}
            height={83}
          />
        </Link>

        <ul className="flex text-white text-[24px] space-x-20">
          <li>
            <Link href="/#HowItWorks">¿Cómo funciona?</Link>
          </li>
          <li>
            <Link href="/#simulatorInvestment">Simulador</Link>
          </li>
          <li>
            <Link
              href="https://finniuapp.notion.site/Preguntas-Frecuentes-f7f77872d34a4de3a9e12d5fc58421ff"
              target="_blank"
            >
              Aprende
            </Link>
          </li>
          <li>
            <Link href="https://finantips.substack.com/" target="_blank">
              Finantips
            </Link>
          </li>
          <li>
            <Link href="/about">Nosotros</Link>
          </li>
        </ul>

        <div>
          <ButtonComponent
            text="Ingresar"
            className="h-12 w-36 text-blueDarkColor bg-lightBlueColor text-[24px] rounded-lg"
            onClick={handleButton}
          />
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
