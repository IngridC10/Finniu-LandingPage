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
        <Image src={LogoFinniu} alt="Logo de Finniu" width={98} height={96} />
      </div>

      <ul className="flex space-x-20 text-white text-[28px]">
        <li>
          <Link href="/como-funciona" legacyBehavior>
            <a> ¿Cómo funciona?</a>
          </Link>
        </li>
        <li>
          <Link href="/aprende" legacyBehavior>
            <a>Aprende</a>
          </Link>
        </li>
        <li>
          <Link href="/finantips" legacyBehavior>
            <a>Finantips</a>
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
          className="h-12 w-36 text-blueDarkColor bg-lightBlueColor py-2 px-5 font-bold"
          onClick={handleButton}
        />
      </div>
    </div>
  );
};

export default NavComponent;
