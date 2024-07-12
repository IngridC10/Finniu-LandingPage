"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import LogoFinniu from "@/images/NavBar/LogoFinniu.png";
import LogoFinniuDark from "@/images/NavBar/LogoFinniuDark.png";

const NavComponent = () => {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleButton = () => {
    window.open("https://app.finniu.com/login");
  };

  const toggleMenu = () => {
    setIsMenuOpenState(!isMenuOpenState);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down, close the menu
      setIsMenuOpenState(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="w-full bg-blueDarkColor p-4 sticky top-0 z-50">
      <div className="container min-h-full flex justify-between items-center mx-auto">
        <Link href="/">
          <div className="w-24 2xl:w-[125px]">
            <Image src={LogoFinniu} alt="Logo de Finniu" height={83} />
          </div>
        </Link>
        <div className="hidden 2xl:flex flex-row justify-between items-center space-x-20 text-white text-[24px]">
          <Link href="/#HowItWorks">¿Cómo funciona?</Link>
          <Link href="/#simulatorInvestment">Simulador</Link>
          <Link
            href="https://finniuapp.notion.site/Preguntas-Frecuentes-f7f77872d34a4de3a9e12d5fc58421ff"
            target="_blank"
          >
            FAQ
          </Link>
          <Link href="https://finantips.substack.com/" target="_blank">
            Finantips
          </Link>
          <Link href="/about">Nosotros</Link>
        </div>
        <div className="hidden 2xl:flex">
          <ButtonComponent
            text="Ingresar"
            className="h-12 w-36 text-blueDarkColor bg-lightBlueColor text-[24px] font-bold rounded-lg"
            onClick={handleButton}
          />
        </div>
        <div className="flex items-start space-x-4 2xl:hidden">
          <ButtonComponent
            text="Ingresar"
            className="h-10 2xl:h-12 w-[129px] 2xl:w-36 text-blueDarkColor bg-lightBlueColor text-[15px] 2xl:text-[24px] rounded-lg"
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
        <div className="fixed inset-0 top-0 bg-white h-screen flex flex-col p-4">
          <div className="flex justify-between items-center p-4">
            <Link href="/">
              <div className="w-24 2xl:w-[125px]">
                <Image src={LogoFinniuDark} alt="Logo de Finniu" height={50} />
              </div>
            </Link>
            <ButtonComponent
              text="Ingresar"
              className="h-10 2xl:h-12 w-[129px] 2xl:w-36 text-blueDarkColor bg-lightBlueColor text-[15px] 2xl:text-[24px] rounded-lg"
              onClick={handleButton}
            />
            <button onClick={toggleMenu} className="text-black">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex  mt-10 flex-col items-start space-y-4 text-black text-[24px] p-4">
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
        </div>
      )}
    </div>
  );
};

export default NavComponent;
