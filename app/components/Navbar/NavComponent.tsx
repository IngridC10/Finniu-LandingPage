"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoFinniu from "/images/LogoFinniu.png";
import ButtonComponent from "@/components/ButtonComponent";

const NavComponent = () => {
  const handleButton = () => {
    window.open("https://app.finniu.com/login", "_blank");
  };
  return (
    <div className="flex justify-around items-center w-full bg-blueDarkColor p-4">
      <div className="flex ">
        <Image src={LogoFinniu} alt="Logo de Finniu" width={125} height={83} />
      </div>

      <ul className="flex space-x-20 text-white text-[24px]">
        <li>
          <Link href={"/#HowItWorks"} legacyBehavior>
            <a>¿Cómo funciona?</a>
          </Link>
        </li>

        <li>
          <Link href="StepDownLoaddComponent" legacyBehavior>
            <a> Simulador</a>
          </Link>
        </li>
        <li>
          <Link
            href="https://finniuapp.notion.site/Preguntas-Frecuentes-f7f77872d34a4de3a9e12d5fc58421ff"
            legacyBehavior
          >
            <a target="_blank">Aprende</a>
          </Link>
        </li>
        <li>
          <Link href="https://finantips.substack.com/" legacyBehavior>
            <a target="_blank">Finantips</a>
          </Link>
        </li>
        <li>
          <Link href="/nosotros" legacyBehavior>
            <a>Nosotros</a>
          </Link>
        </li>
      </ul>

      <div>
        <ButtonComponent
          text="Ingresar"
          className="h-12 w-36 text-blueDarkColor bg-lightBlueColor py-2 text-[24px] rounded-lg px-5 "
          onClick={handleButton}
        />
      </div>
    </div>
  );
};

export default NavComponent;
