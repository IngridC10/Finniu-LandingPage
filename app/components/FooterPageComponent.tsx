"use client";
import Image from "next/image";
import Link from "next/link";
import Instagram from "/images/Instagram.png";
import LinkedinIcon from "/images/LinkedinIcon.png";
import Facebook from "/images/Facebook.png";
import Message from "/images/Message.png";
import WhatsappIcon from "/images/WhatsappIcon.png";

const Footer = () => {
  return (
    <footer className="  bg-grayColor  border-t border-gray-200 py-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Acerca de Finniu</h3>
          <ul>
            <li className="mb-1">
              <Link href="/preguntas-frecuentes" legacyBehavior>
                <a className=" cursor-pointer hover:underline">
                  Preguntas Frecuentes
                </a>
              </Link>
            </li>
            <li>
              <Link href="/rentabilidad" legacyBehavior>
                <a className="hover:underline cursor-pointer">Rentabilidad</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul>
            <li className="mb-1">
              <Link href="/terminos-condiciones" legacyBehavior>
                <a className=" hover:underline">Términos & Condiciones</a>
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidad" legacyBehavior>
                <a className=" hover:underline">Política & Privacidad</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contactos</h3>
          <p className="text-gray-700 flex items-center mb-1">
            <Image
              src={WhatsappIcon}
              alt="Logo de Finniu"
              width={38}
              height={96}
            />
            <a href="tel:+51940206852" className="text-darkBlueColor ">
              +51 940 206 852
            </a>
          </p>
          <p className="flex items-center text-gray-700">
            <Image src={Message} alt="Logo de Finniu" width={38} height={96} />
            <a
              href="mailto:hola@finniu.com"
              className="ml-2 text-darkBlueColor "
            >
              hola@finniu.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Encuéntranos en</h3>
          <div className="flex space-x-4">
            <Image
              src={Instagram}
              alt="Logo de Finniu"
              width={38}
              height={96}
            />

            <Image
              src={LinkedinIcon}
              alt="Logo de Finniu"
              width={38}
              height={96}
            />
            <Image src={Facebook} alt="Logo de Finniu" width={38} height={96} />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-darkBlueColor text-sm">
        Finniu © 2024 | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
