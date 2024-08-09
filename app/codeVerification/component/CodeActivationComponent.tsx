"useClient";
import { validateOtp } from "@/app/actions/validateOtp";
import { messageNotify } from "@/components/MessageNotification";
import React, { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";

interface CodeActivationComponentProps {
  email: string;
  codesState: any;
  setCodesState: any;
}

const CodeActivationComponent = ({
  email,
  codesState,
  setCodesState,
}: CodeActivationComponentProps) => {
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const otpCode = Object.values(codesState).join("");
      if (otpCode.length === 4) {
        try {
          const success = await validateOtp({
            email: email,
            action: "recovery_password",
            otpCode: otpCode,
          });

          if (success) {
            console.log("OTP validado con éxito");
            // Optionally navigate to the next page
            // navigate(`/change-password?email=${email}`);
          } else {
            messageNotify({
              message: "No se pudo validar el código de verificación",
            });
          }
        } catch (error) {
          console.error("Error:", error);
          messageNotify({
            message: "No se pudo validar el código de verificación",
          });
        }
      }
    }
    fetchData();
  }, [email, codesState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCodesState((prevCode: any) => ({
      ...prevCode,
      [name]: value,
    }));
    const nextFieldName = `code${parseInt(name.charAt(name.length - 1)) + 1}`;
    if (value && name !== "code4") {
      const nextInput = document.getElementsByName(nextFieldName)[0];
      nextInput.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    const codeInputs = Object.keys(codesState);
    for (let i = 0; i < codeInputs.length; i++) {
      if (pastedData[i]) {
        setCodesState((prevCodes: any) => ({
          ...prevCodes,
          [codeInputs[i]]: pastedData[i],
        }));
      }
    }
  };

  return (
    <form
      style={{
        padding: "20px",
        width: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="inputs"
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(4, 1fr)",
          marginBottom: "10px",
        }}
      >
        {Object.keys(codesState).map((key, index) => (
          <input
            key={index}
            name={key}
            ref={index === 0 ? firstInputRef : null}
            style={{
              border: "2px solid #0D3A5C",
              width: "80px",
              height: "64px",
              padding: "20px",
              textAlign: "center",
              fontSize: "20px",
              lineHeight: "1",
              borderRadius: "10px",
              backgroundColor: "transparent",
            }}
            type="text"
            value={codesState[key]}
            maxLength={1}
            onChange={handleChange}
            onPaste={handlePaste}
          />
        ))}
      </div>
      <Toaster />
    </form>
  );
};

export default CodeActivationComponent;
