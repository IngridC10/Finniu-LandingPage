"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import LogoFinniu from "@/images/NavBar/LogoFinniu.png";

const NavComponent = () => {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false);

  const handleButton = () => {
    window.open("https://app.finniu.com/login");
  };

  const toggleMenu = () => {
    setIsMenuOpenState(!isMenuOpenState);
  };

  return (
    <div className="w-full bg-blueDarkColor p-4 sticky top-0 z-50">
      <div className="container container-section flex justify-between items-center mx-auto">
        <Link href="/components">
          <Image
            src={LogoFinniu}
            alt="Logo de Finniu"
            width={125}
            height={83}
          />
        </Link>
        <div className=" hidden lg:flex flex-row justify-between items-center space-x-20 text-white text-[24px]">
          <Link href="/#HowItWorks">¿Cómo funciona?</Link>
          <Link href="/#simulatorInvestment">Simulador</Link>
          <Link
            href="https://finniuapp.notion.site/Preguntas-Frecuentes-f7f77872d34a4de3a9e12d5fc58421ff"
            target="_blank"
          >
            Aprende
          </Link>
          <Link href="https://finantips.substack.com/" target="_blank">
            Finantips
          </Link>
          <Link href="/about">Nosotros</Link>
        </div>
        <div className="hidden lg:flex">
          <ButtonComponent
            text="Ingresar"
            className="h-12 w-36 text-blueDarkColor bg-lightBlueColor text-[24px] rounded-lg"
            onClick={handleButton}
          />
        </div>
        <div className="flex items-center space-x-4 lg:hidden">
          <ButtonComponent
            text="Ingresar"
            className="h-12 w-36 text-blueDarkColor bg-lightBlueColor text-[24px] rounded-lg"
            onClick={handleButton}
          />
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpenState && (
        <div className="fixed inset-0 top-16 z-40 bg-blueDarkColor">
          <ul className="flex flex-col items-center space-y-4 text-white text-[24px] p-4">
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
        </div>
      )}
    </div>
  );
};

export default NavComponent;
