"use client";

import React, { useState, useEffect } from "react";
import PopupImage from "@/images/Popup/popup.png";
import HouseImage from "@/images/Popup/casa.png";
import Image from "next/image";

export default function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsPopupOpen(true); // Mostrar el Popup al cargar
  }, []);

  const closePopup = () => setIsPopupOpen(false);

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[60%] lg:w-[40%] max-w-2xl flex flex-col md:flex-row rounded-[25px] overflow-hidden">
        {/* Imagen */}
        <div className="md:w-1/2 w-full h-40 md:h-auto hidden md:block">
          <Image
            src={PopupImage}
            alt="Popup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between bg-[#A2E6FA] text-[#0D3A5C]">
          <button
            onClick={closePopup}
            className="text-gray-500 hover:text-gray-800 self-end"
          >
            ✕
          </button>
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black flex-1">
                ¡Asegura tu inversión con garantía inmobiliaria!
              </h2>
              <div className="flex-shrink-0 ml-2">
                <Image
                  src={HouseImage}
                  alt="Casa"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Invierte desde S/50,000 y
              <strong> obtén un retorno anual del 16% </strong>
              respaldado por propiedades reales. Disfruta de seguridad,
              competitividad y diversificación con Finniu.
            </p>
            <p className="text-sm md:text-lg mb-4 font-black">
              ¿Listo para hacer crecer tus ahorros?
            </p>
          </div>
          <div className="mt-4">
            <button
              onClick={closePopup}
              className="w-full px-4 py-3 bg-[#0D3A5C] text-white rounded hover:bg-[#104D7C] text-center font-bold"
            >
              ¡Me interesa!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}