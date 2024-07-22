"use client";
import Image from "next/image";
import Link from "next/link";
import Instagram from "@/images/Footer/Instagram.png";
import LinkedinIcon from "@/images/Footer/LinkedinIcon.png";
import Facebook from "@/images/Footer/Facebook.png";
import Message from "@/images/Footer/Message.png";
import WhatsappIcon from "@/images/Footer/WhatsappIcon.png";
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t      border-gray-200 py-8 w-full">
      <div className="container mx-auto flex flex-col 2xl:flex-row justify-between items-start px-12 2xl:px-48">
        <div className="flex flex-col 2xl:flex-row w-full leading-9">
          <div className="flex-1 mb-6 md:mb-0 md:pr-4">
            <h3 className="text-lg font-semibold mb-2">Acerca de Finniu</h3>
            <ul>
              <li className="mb-1">
                <Link
                  target="_blank"
                  href="https://finniuapp.notion.site/Preguntas-Frecuentes-f7f77872d34a4de3a9e12d5fc58421ff"
                  className="cursor-pointer hover:underline"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/#simulatorInvestment"
                  className="hover:underline cursor-pointer"
                >
                  Rentabilidad
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 leading-9  pl-0 2xl:pl-4">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li className="mb-1">
                <a
                  href="/TermsFinniu/Terminos_Condiciones.pdf"
                  target="_blank"
                  className="hover:underline"
                >
                  Términos & Condiciones
                </a>
              </li>
              <li>
                <a
                  href="/TermsFinniu/Politica_Finniu.pdf"
                  target="_blank"
                  className="hover:underline"
                >
                  Política & Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col 2xl:flex-row w-full leading-9 mt-6 md:mt-0">
          <div className="flex-1 mb-6 md:mb-0 md:pr-4">
            <h3 className="text-lg font-semibold mb-2">Contactos</h3>
            <div className="flex items-center mb-1">
              <Image
                src={WhatsappIcon}
                alt="whatsapp-icon"
                width={24}
                height={24}
              />
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=51940206852&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20info%20sobre%20Finniu.%20Mi%20nombre%20es%20"
                className="ml-2 text-darkBlueColor hover:underline"
              >
                +51 940 206 852
              </Link>
            </div>
            <div className="flex items-center">
              <Image src={Message} alt="message" width={24} height={24} />
              <a
                target="_blank"
                href="mailto:hola@finniu.com"
                className="ml-2 text-darkBlueColor hover:underline"
              >
                hola@finniu.com
              </a>
            </div>
          </div>

          <div className="flex-1 leading-9  pl-0 2xl:pl-4">
            <h3 className="text-lg font-semibold mb-4">Encuéntranos en</h3>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://www.instagram.com/finniu.app?igsh=MWRsZGRpMzdncXZ1MA=="
              >
                <Image src={Instagram} alt="instagram" width={24} height={24} />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/company/finniu/"
              >
                <Image
                  src={LinkedinIcon}
                  alt="LinkedinIcon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/finniuapp?mibextid=ZbWKwL"
              >
                <Image src={Facebook} alt="Facebook" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-darkBlueColor text-[11px]   2xl:text-sm">
        Finniu © 2024 | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
