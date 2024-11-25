import { useState } from "react";

interface FormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    phonePrefix: string;
    aboutUs: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    aboutUs?: string;
}
interface CustomSelectProps {
    onSelect: (option: string) => void;
    formData: FormData;
    formError: FormErrors;

}

const CustomSelect: React.FC<CustomSelectProps> = ({ onSelect, formData, formError }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("¿Como te enteraste de nosotros?");
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

        onSelect(option);
    };

    return (
        <div className="relative w-full  ">
            <div
                className={`border-2 border-l-0 border-t-0 border-r-0 rounded ${formError.aboutUs ? "border-red-500" : "border-gray-300"
                    } flex justify-between items-center cursor-pointer`}
                onClick={toggleDropdown}
            >
                <span className="text-black">{selectedOption}</span>
                <svg
                    className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>

            </div>
            {formError.aboutUs && (
                <p className="text-red-500 text-sm">{formError.aboutUs}</p>
            )}
            {isOpen && (
                <div className="absolute z-10 mt-1 w-full border border-gray-300 rounded bg-white shadow-lg max-h-64 overflow-y-auto">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => selectOption(option)}
                            className=" m-4 cursor-pointer hover:bg-gray-100 border-b border-gray-200 last:border-none text-black"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CustomSelect
