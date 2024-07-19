"use client";
import { useState } from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
// import Google from "/images/Section-7/Google.png";
import IconHand from "@/images/Section-7/IconHand.png";
import IconCheck from "@/images/Section-7/IconCheck.png";
// import EyeClosed from "@/images/Section-7/EyeClosed.png";

interface FormData {
  typeDocument: string;
  dni: string;
  telephoneNumber: string;
}

interface FormErrors {
  typeDocument?: string;
  dni?: string;
  telephoneNumber?: string;
}

const RegisterSection = () => {
  const [isPopupVisibleState, setPopupVisibleState] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    typeDocument: "DNI",
    dni: "",
    telephoneNumber: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.typeDocument) {
      errors.typeDocument = "El tipo de documento es obligatorio";
    }
    if (!formData.dni) {
      errors.dni = "El número de documento es obligatorio";
    } else if (formData.dni.length !== 8) {
      errors.dni = "Verifique sus datos";
    }

    if (!formData.telephoneNumber) {
      errors.telephoneNumber = "El número telefónico es obligatorio";
    } else if (formData.telephoneNumber.length !== 9) {
      errors.telephoneNumber = "Verifique sus datos";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setPopupVisibleState(true);

      setFormData({
        typeDocument: "DNI",
        dni: "",
        telephoneNumber: "",
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const closePopup = () => {
    setPopupVisibleState(false);
  };

  return (
    <section className="section-custom bg-blueDarkColor">
      <div className="flex flex-col items-center container-section">
        <div className="flex flex-col justify-center items-center text-center w-[309px] 2xl:w-[1050px]">
          <h1 className="text-[24px] 2xl:text-[50px] text-white">
            Finniu, tu App para lograr tus metas financieras
          </h1>
          <div className="flex flex-row justify-center">
            <h3 className="text-[14px] 2xl:text-[30px] text-white">
              Tus primeros pasos en el mundo de las inversiones
            </h3>
            <div className="w-[30px] 2xl:w-[50px]">
              <Image src={IconHand} alt="icon-hand" />
            </div>
          </div>
        </div>
        <div
          className={`bg-white 2xl:p-16 flex flex-col justify-center p-12 rounded-3xl shadow-md w-[341px] 2xl:w-[545px] h-auto mt-4 m-auto overflow-y-auto ${
            isPopupVisibleState ? "blur-effect" : ""
          }`}
        >
          <h2 className="text-[18px] 2xl:text-2xl mb-6 text-center">
            Regístrate para recibir mayor información
          </h2>
          <form
            className="leading-[50px] 2xl:leading-[51px] relative"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 relative z-10">
              <select
                id="type-document"
                name="typeDocument"
                className={`w-full px-3 py-2 border-2 border-t-0 border-r-0 border-l-0 ${
                  formErrors.typeDocument
                    ? "border-red-500"
                    : "border-grayColorLine"
                } rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blueColorButton`}
                value={formData.typeDocument}
                onChange={handleInputChange}
              >
                <option value="DNI">DNI</option>
                <option value="Carnet de Extranjería">
                  Carnet de Extranjería
                </option>
              </select>
              {formErrors.typeDocument && (
                <p className="text-red-500 text-sm">
                  {formErrors.typeDocument}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="dni"
                name="dni"
                placeholder="Número de documento"
                className={`w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 ${
                  formErrors.dni ? "border-red-500" : "border-grayColorLine"
                } rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blueColorButton`}
                value={formData.dni}
                onChange={handleInputChange}
              />
              {formErrors.dni && (
                <p className="text-red-500 text-sm">{formErrors.dni}</p>
              )}
            </div>
            <div className="mb-10">
              <div className="relative">
                <input
                  type="tel"
                  id="telephone"
                  name="telephoneNumber"
                  placeholder="Número telefónico"
                  className={`w-full px-3 border-2 border-l-0 border-t-0 border-r-0 ${
                    formErrors.telephoneNumber
                      ? "border-red-500"
                      : "border-grayColorLine"
                  } rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blueColorButton`}
                  value={formData.telephoneNumber}
                  onChange={handleInputChange}
                />
                {formErrors.telephoneNumber && (
                  <p className="text-red-500 text-sm">
                    {formErrors.telephoneNumber}
                  </p>
                )}
              </div>
            </div>
            <ButtonComponent
              text="Enviar"
              className="bg-blueColorButton text-white text-[16px] 2xl:text-[20px] rounded-md w-[250px] 2xl:w-[416px] h-[45px] 2xl:h-[57px]"
            />
          </form>
        </div>
      </div>
      {isPopupVisibleState && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-[280px] 2xl:w-[420px] h-[326px] flex flex-col justify-center items-center rounded-xl shadow-lg text-center relative">
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={closePopup}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <Image
              src={IconCheck}
              alt="check"
              height={60}
              className="mb-4 2xl:h-[60px] h-[44px]"
            />
            <h2 className="text-[16px] 2xl:text-2xl font-bold text-greenColor mb-2">
              ¡Todo listo!
            </h2>
            <p className="text-gray-700">
              Tus datos han sido recibidos con éxito. Estaremos en contacto muy
              pronto.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegisterSection;
