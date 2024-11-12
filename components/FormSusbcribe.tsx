"use client";

import { saveRegisterStorage } from "@/app/helpers/registrationStorage";
import { useEffect, useRef, useState } from "react";

import ButtonComponent from "./ButtonComponent";
import { CustomSelectSubscribe } from "./SelectSusbcribe";
import { MuiTelInput } from "mui-tel-input";
import { styled } from '@mui/material/styles';

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
}

interface FormErrors {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
}

const FormSusbcribe = () => {
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phoneNumber: "",
        phonePrefix: "+51",
    });
    const [isUpdatingState, setIsUpdatingState] = useState(false);

    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const savedData = localStorage.getItem("formData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
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
        if (!formData.fullName) errors.fullName = "El nombre completo es obligatorio.";
        if (!formData.email) errors.email = "El correo electrónico es obligatorio.";
        if (!formData.phoneNumber) errors.phoneNumber = "El número telefónico es obligatorio.";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        localStorage.setItem("formData", JSON.stringify(formData));
        saveRegisterStorage(JSON.stringify(formData));
        setIsUpdatingState(true);
    };

    const selectAbout = [
        "Anuncios en Google",
        "Anuncios en Redes Sociales",
        "Artículo de Blog",
        "Búsqueda en Google",
        "Inversión Simple",
        "Influencers",
        "Email",
        "Video Youtube",
        "Evento presencial",
        "Amigo o Familiar",
    ];

    return (
        <form onSubmit={handleContinue} className="w-4/5 sm:w-3/4 md:w-1/2 p-4 sm:p-6 md:p-8 bg-blueDarkColor rounded-lg flex flex-col gap-4">
            <input
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
            {/* <PhoneInput
                country="pe"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                enableSearch
                inputProps={{
                    name: "phoneNumber",
                    placeholder: "Número telefónico",
                    required: true,
                    className: `w-full px-3 py-2 border-2 border-l-0 border-t-0 border-r-0 ${formErrors.phoneNumber ? "border-red-500" : "border-darkBlueColor"} bg-blueDarkColor text-white`,
                }}
                containerStyle={{ width: "100%", position: "relative" }}
                inputStyle={{ width: "100%", paddingLeft: "58px", height: "40px" }}
                buttonStyle={{ backgroundColor: "red" }}
            /> */}
            {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}

            <CustomSelectSubscribe />

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
