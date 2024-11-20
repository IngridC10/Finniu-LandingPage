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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl flex rounded-[35px]">
        {/* Imagen */}
        <div className="w-1/2 hidden md:block">
          <Image
            src={PopupImage}
            alt="Popup"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-[#A2E6FA] text-[#0D3A5C] rounded-r-[35px]">
          <button
            onClick={closePopup}
            className="text-gray-500 hover:text-gray-800 text-end"
          >
            ✕
          </button>
          <div>
            <div className="flex items-end mb-4">
              <h2 className="text-2xl md:text-3xl font-black">
                ¡Asegura tu inversión con garantía inmobiliaria!
              </h2>
              <Image
                src={HouseImage}
                alt="Casa"
                className="w-8 h-8 mr-16" // Ajusta el tamaño y el margen izquierdo
              />

            </div>
            <p className="text-gray-700 mb-4">
              Invierte desde S/50,000 y
              <strong> obtén un retorno anual del 16% </strong>
              respaldado por propiedades reales. Disfruta de seguridad,
              competitividad y diversificación con Finniu.
            </p>
            <p className="mb-4 font-black text-xl">
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