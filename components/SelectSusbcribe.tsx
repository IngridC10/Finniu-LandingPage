"use client"

import { useState } from "react";

export function CustomSelectSubscribe() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("¿Cómo te enteraste de nosotros?");
    const options = [
        "Anuncios en Google",
        "Anuncios en Redes Sociales",
        "Artículo de Blog",
        "Búsqueda en Google",
        "Inversión Simple",
        "Influencers",
        "Email",
        "Video Youtube",
        "Evento presencial",
        "Amigo o Familiar"
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectOption = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full  ">
            <div
                className="border-2 border-l-0 border-t-0 border-r-0 rounded border-darkBlueColor flex justify-between items-center cursor-pointer"
                onClick={toggleDropdown}
            >
                <span className="text-white">{selectedOption}</span>
                <svg
                    className={`w-4 h-4 transform transition-transform text-white ${isOpen ? "rotate-180" : "rotate-0"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <div className="absolute z-10 mt-1 w-full border border-darkBlueColor rounded bg-white shadow-lg max-h-64 overflow-y-auto">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => selectOption(option)}
                            className=" m-4 cursor-pointer hover:bg-gray-100 border-b border-darkBlueColor last:border-none text-black"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
