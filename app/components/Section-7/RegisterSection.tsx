"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import "react-phone-input-2/lib/style.css";
import IconHand from "@/images/Section-7/IconHand.png";
import IconCheck from "@/images/Section-7/IconCheck.png";
import PhoneInput from "react-phone-input-2";
import { savePreRegistration } from "@/app/actions/register";
enum DocumentType {
  DNI = "DNI",
  CARNET_EXTRAJERIA = "CARNET_EXTRAJERIA",
}

interface FormData {
  fullName: string;
  typeDocument: string;
  documentNumber: string;
  email: string;
  phoneNumber: string;
  phonePrefix: string;
}

interface FormErrors {
  fullName?: string;
  typeDocument?: string;
  documentNumber?: string;
  phoneNumber?: string;
  email?: string;
  phonePrefix?: string;
}

const RegisterSection = () => {
  const [isPopupVisibleState, setPopupVisibleState] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    typeDocument: "DNI",
    fullName: "",
    documentNumber: "",
    phoneNumber: "",
    email: "",
    phonePrefix: "+51",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const typeDocumentRef = useRef<HTMLSelectElement>(null);
  const documentNumberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<any>(null);

  useEffect(() => {
    if (isPopupVisibleState && fullNameRef.current) {
      fullNameRef.current.focus();
    }
  }, [isPopupVisibleState]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };

  const handlePhoneChange = (value: string | undefined, country: any) => {
    setFormData({
      ...formData,
      phoneNumber: value || "",
      phonePrefix: country?.dialCode || formData.phonePrefix,
    });

    if (formErrors.phoneNumber) {
      setFormErrors({
        ...formErrors,
        phoneNumber: undefined,
      });
    }
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.fullName) {
      errors.fullName = "Este dato es requerido";
    }

    if (!formData.typeDocument) {
      errors.typeDocument = "El tipo de documento es obligatorio";
    }
    if (!formData.documentNumber) {
      errors.documentNumber = "Este dato es requerido";
    } else if (
      (formData.typeDocument === DocumentType.DNI &&
        formData.documentNumber.length !== 8) ||
      (formData.typeDocument === DocumentType.CARNET_EXTRAJERIA &&
        formData.documentNumber.length > 20)
    ) {
      errors.documentNumber = "Verifique sus datos";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Este dato es requerido";
    } else if (formData.phoneNumber.length !== 11) {
      errors.phoneNumber = "Verifique sus datos";
    }

    if (!formData.email) {
      errors.email = "Este dato es requerido";
    }

    if (!formData.phonePrefix) {
      errors.phonePrefix = "Este dato es requerido";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setPopupVisibleState(true);

      const response = await savePreRegistration({
        documentNumber: formData.documentNumber,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        phonePrefix: formData.phonePrefix,
      });

      if (response) {
        setPopupVisibleState(true);
        setFormData({
          typeDocument: "DNI",
          fullName: "",
          documentNumber: "",
          phoneNumber: "",
          email: "",
          phonePrefix: "+51",
        });
        setFormErrors({});
      } else {
        setGeneralError("Error al guardar la preinscripción");
      }
    } else {
      setFormErrors(errors);
    }
  };

  const closePopup = () => {
    setPopupVisibleState(false);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>,
    ref: React.RefObject<any>,
    nextRef: React.RefObject<any>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef.current) {
        nextRef.current.focus();
      } else {
        handleSubmit(e as any);
      }
    }
  };

  return (
    <section
      id="register"
      className="w-full flex justify-center min-h-[550px] 2xl:min-h-screen items-center bg-blueDarkColor"
    >
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
              <Image src={IconHand} alt="icon-hand" width={50} height={50} />
            </div>
          </div>
        </div>
        <div
          className={`bg-white 2xl:p-16 flex flex-col justify-center p-12 rounded-3xl shadow-md w-[341px] 2xl:w-[545px] h-auto mt-4 m-auto ${
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
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Nombres y apellidos"
                className={`w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 ${
                  formErrors.fullName
                    ? "border-red-500"
                    : "border-grayColorLine"
                } rounded-sm bg-white text-black  `}
                value={formData.fullName}
                onChange={handleInputChange}
                onKeyDown={(e) =>
                  handleKeyDown(e, fullNameRef, typeDocumentRef)
                }
                ref={fullNameRef}
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-sm">{formErrors.fullName}</p>
              )}
            </div>

            <div className="mb-4 relative z-10">
              <select
                id="type-document"
                name="typeDocument"
                className={`w-full px-3 py-2 border-2 border-t-0 border-r-0 border-l-0 ${
                  formErrors.typeDocument
                    ? "border-red-500"
                    : "border-grayColorLine"
                } rounded-sm bg-white text-black `}
                value={formData.typeDocument}
                onChange={handleInputChange}
                onKeyDown={(e) =>
                  handleKeyDown(e, typeDocumentRef, documentNumberRef)
                }
                ref={typeDocumentRef}
              >
                <option value={DocumentType.DNI}>DNI</option>
                <option value={DocumentType.CARNET_EXTRAJERIA}>
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
                id="documentNumber"
                name="documentNumber"
                placeholder="Número de documento"
                className={`w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 ${
                  formErrors.documentNumber
                    ? "border-red-500"
                    : "border-grayColorLine"
                } rounded-sm bg-white text-black `}
                value={formData.documentNumber}
                onChange={handleInputChange}
                onKeyDown={(e) => handleKeyDown(e, documentNumberRef, emailRef)}
                ref={documentNumberRef}
              />
              {formErrors.documentNumber && (
                <p className="text-red-500 text-sm">
                  {formErrors.documentNumber}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                className={`w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 ${
                  formErrors.email ? "border-red-500" : "border-grayColorLine"
                } rounded-sm bg-white text-black `}
                value={formData.email}
                onChange={handleInputChange}
                onKeyDown={(e) => handleKeyDown(e, emailRef, phoneInputRef)}
                ref={emailRef}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-10">
              <div className="relative phone-input-container">
                <PhoneInput
                  country="pe"
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  enableSearch={true}
                  inputProps={{
                    name: "telephoneNumber",
                    placeholder: " Número telefónico",
                    required: true,
                    // autoFocus: true,
                    className: `w-full px-3 border-2 border-l-0 border-t-0 border-r-0 ${
                      formErrors.phoneNumber
                        ? "border-red-500"
                        : "border-grayColorLine"
                    } rounded-sm bg-white text-black`,
                  }}
                  containerStyle={{
                    width: "100%",
                    position: "relative",
                    // zIndex: 1000,
                  }}
                  inputStyle={{
                    width: "100%",
                    paddingLeft: "58px",
                  }}
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {formErrors.phoneNumber}
                  </p>
                )}
              </div>
            </div>
            {generalError && (
              <p className="text-red-500 text-sm">{generalError}</p>
            )}
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
              width={60}
              height={60}
              className="mb-4"
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
