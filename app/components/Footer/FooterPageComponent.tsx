"use client";
import Image from "next/image";
import Link from "next/link";
import Instagram from "/images/Footer/Instagram.png";
import LinkedinIcon from "/images/Footer/LinkedinIcon.png";
import Facebook from "/images/Footer/Facebook.png";
import Message from "/images/Footer/Message.png";
import WhatsappIcon from "/images/Footer/WhatsappIcon.png";

const Footer = () => {
  return (
    <footer className="  bg-grayColor  border-t border-gray-200 py-8 w-full">
      <div className="container mx-auto flex flex-row justify-between items-start  px-4">
        <div className="mb-6 leading-9">
          <h3 className="text-lg font-semibold mb-2">Acerca de Finniu</h3>
          <ul>
            <li className="mb-1">
              <Link
                href="https://finniuapp.notion.site/Preguntas-Frecuentes-f7f77872d34a4de3a9e12d5fc58421ff"
                legacyBehavior
              >
                <a className=" cursor-pointer hover:underline">
                  Preguntas Frecuentes
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#simulatorInvestment" legacyBehavior>
                <a className="hover:underline cursor-pointer">Rentabilidad</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6  leading-9">
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

        <div className="mb-6 leading-9 ">
          <h3 className="text-lg font-semibold mb-2">Contactos</h3>
          <p className="text-gray-700 flex items-center mb-1">
            <Image
              src={WhatsappIcon}
              alt="whatsapp-icon"
              width={38}
              height={96}
            />
            <Link
              href="https://api.whatsapp.com/send?phone=51940206852&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20info%20sobre%20Finniu.%20Mi%20nombre%20es%20"
              legacyBehavior
            >
              <a className="text-darkBlueColor ">+51 940 206 852</a>
            </Link>
          </p>
          <p className="flex items-center text-gray-700">
            <Image src={Message} alt="message" width={38} height={96} />
            <a
              href="mailto:hola@finniu.com"
              className="ml-2 text-darkBlueColor "
            >
              hola@finniu.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Encuéntranos en</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/finniu.app?igsh=MWRsZGRpMzdncXZ1MA=="
              legacyBehavior
            >
              <a>
                <Image src={Instagram} alt="instagram" width={38} height={96} />
              </a>
            </Link>

            <Link
              href="https://www.linkedin.com/company/finniu/"
              legacyBehavior
            >
              <a>
                <Image
                  src={LinkedinIcon}
                  alt="LinkedinIcon"
                  width={38}
                  height={96}
                />
              </a>
            </Link>
            <Link
              href="https://www.facebook.com/finniuapp?mibextid=ZbWKwL"
              legacyBehavior
            >
              <a>
                <Image src={Facebook} alt="Facebook" width={38} height={96} />
              </a>
            </Link>
            <div className=" w-20 h-20"></div>
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
