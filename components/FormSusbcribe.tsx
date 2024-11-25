"use client";

import { saveRegisterStorage } from "@/app/helpers/registrationStorage";
import { useEffect, useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { MuiTelInput } from "mui-tel-input";
import { styled } from '@mui/material/styles';
import { savePreRegistration } from "@/app/actions/register";

const CustomMuiTelInput = styled(MuiTelInput)({
    width: '100%',
    backgroundColor: '#051926',
    color: '#051926',
    '& .MuiInputBase-input': {
        backgroundColor: '#051926',
        color: '#FFFFFF',
        padding: 0,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& .MuiOutlinedInput-root': {
        borderBottom: '2px solid #0D3A5C',
    },
});

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

const FormSusbcribe = () => {
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phoneNumber: "",
        phonePrefix: "+51",
        aboutUs: "¿Cómo te enteraste de nosotros?",
    });
    const [isUpdatingState, setIsUpdatingState] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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


    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const savedData = localStorage.getItem("formData");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setFormData((prev) => ({
                ...prev, ...{
                    fullName: parsedData.fullName,
                    email: parsedData.email,
                    phoneNumber: parsedData.phoneNumber,
                    phonePrefix: parsedData.phonePrefix
                }
            }));
        }
    }, []);

    useEffect(() => {
        if (isUpdatingState) {
            setIsUpdatingState(false);
        }
    }, [isUpdatingState]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({ ...prev, phoneNumber: value }));
        setFormErrors((prev) => ({ ...prev, phoneNumber: undefined }));
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        nextRef: React.RefObject<HTMLInputElement>
    ) => {
        if (e.key === "Enter" && nextRef.current) {
            nextRef.current.focus();
        }
    };

    const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors: FormErrors = {};
        if (formData.fullName === "") errors.fullName = "El nombre completo es obligatorio.";
        if (formData.email === "") errors.email = "El correo electrónico es obligatorio.";
        if (formData.phoneNumber === "") errors.phoneNumber = "El número telefónico es obligatorio.";
        if (formData.aboutUs === "¿Cómo te enteraste de nosotros?") {
            errors.aboutUs = "Debe seleccionar una opcion";

        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        localStorage.setItem("formData", JSON.stringify(formData));
        saveRegisterStorage(JSON.stringify(formData));
        setIsUpdatingState(true);
        savePreRegistration(formData);
    };




    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectOption = (option: string) => {
        setFormData((prev) => ({ ...prev, aboutUs: option }));
        setFormErrors((prev) => ({ ...prev, aboutUs: undefined }));
        setIsOpen(false);
    };

    return (
        <form onSubmit={handleContinue} className="w-4/5 sm:w-3/4 md:w-1/2 p-4 sm:p-6 md:p-8 bg-blueDarkColor rounded-lg flex flex-col gap-4">
            <input
                autoComplete="off"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Nombres y apellidos"
                className={`w-full px-3 py-2  border-2 border-l-0 border-t-0 border-r-0 ${formErrors.fullName ? "border-red-500" : "border-darkBlueColor"} bg-blueDarkColor text-white `}
                value={formData.fullName}
                onChange={handleInputChange}
                onKeyDown={(e) => handleKeyDown(e, emailRef)}
                ref={fullNameRef}
            />
            {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}

            <input
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                className={`w-full px-3 py-2 border-2 border-l-0 border-t-0 border-r-0 ${formErrors.email ? "border-red-500" : "border-darkBlueColor"} bg-blueDarkColor text-white `}
                value={formData.email}
                onChange={handleInputChange}
                onKeyDown={(e) => handleKeyDown(e, phoneInputRef)}
                ref={emailRef}
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            <CustomMuiTelInput value={formData.phoneNumber} onChange={handlePhoneChange} defaultCountry="PE" className="" />
            {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}

            <div className="relative w-full py-3 ">
                <div
                    className={`border-2 border-l-0 border-t-0 border-r-0 rounded ${formErrors.aboutUs ? "border-red-500" : "border-darkBlueColor"
                        } flex justify-between items-center cursor-pointer`}
                    onClick={toggleDropdown}
                >
                    <span className="text-white">{formData.aboutUs}</span>
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
                {formErrors.aboutUs && (
                    <p className="text-red-500 text-sm">{formErrors.aboutUs}</p>
                )}
                {isOpen && (
                    <div className="absolute z-10 mt-1 w-full border border- setFormErrors((prev) => ({ ...prev, phoneNumber: undefined })); rounded bg-white shadow-lg max-h-64 overflow-y-auto">
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

            <div className="text-center mt-6">
                <ButtonComponent
                    text="Suscribirse"
                    type="submit"
                    className="w-full h-12 bg-buttonSuscribe text-blueDarkColor rounded-lg text-lg font-semibold"
                />
            </div>
        </form>
    );
};

export default FormSusbcribe;
