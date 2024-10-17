"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FloatingWhatsappButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <a
        href="https://api.whatsapp.com/send?phone=51983796139&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20info%20sobre%20Finniu.%20Mi%20nombre%20es%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative">
          {/* Ícono de WhatsApp con borde blanco y relleno verde */}
          <div className="w-16 h-16 bg-green-500 rounded-full border-4 border-white flex items-center justify-center hover:scale-105 transition-transform duration-300 animate-bounce-slow">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
          </div>

          {/* Tooltip que aparece al pasar el mouse */}
          <div className="absolute right-full -translate-x-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-base px-3 py-2 rounded-md transition-opacity duration-300 shadow-lg whitespace-nowrap">
            <span className="relative">
              Conversa con nosotros
              {/* Flecha que apunta al ícono */}
              <span className="absolute top-1/2 left-full w-0 h-0 -mt-2 border-l-8 border-t-4 border-b-4 border-l-white"></span>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsappButton;