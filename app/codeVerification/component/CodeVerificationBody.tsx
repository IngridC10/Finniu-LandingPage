"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import padlockVerification from "@/images/Dashboard/Login/padlockVerification.png";
import CountDownTimerComponent from "./CountDownTimerComponent";
import CodeActivationComponent from "./CodeActivationComponent";

const CodeVerificationBody = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [codesState, setCodesState] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });
  const [showResendButton, setShowResendButton] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  // const [recoveryPassword] = useMutation(RECOVERY_PASSWORD, { client });

  // const emailParams = new URLSearchParams(location.search);
  // const email = emailParams.get("email");

  // useEffect(() => {
  //   if (!email) {
  //     navigate("/wrong-password");
  //   }
  // }, [email, navigate]);

  const handleTimerFinish = () => {
    setShowTimer(false);
    setShowResendButton(true);
    setCodesState({
      code1: "",
      code2: "",
      code3: "",
      code4: "",
    });
  };

  // const handleResendCode = async () => {
  //   try {
  //     await recoveryPassword({ variables: { email } });
  //     setShowTimer(true);
  //     setShowResendButton(false);
  //   } catch (error) {
  //     console.error("Error al reenviar el código:", error);
  //   }
  // };

  const handleResendButtonClick = async () => {
    setCodesState({
      code1: "",
      code2: "",
      code3: "",
      code4: "",
    });
    // await handleResendCode();
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div className="flex flex-col items-center justify-start h-full pt-10 bg-blueCustom w-screen">
        <div className="h-2 text-center rounded-md w-36 bg-custom-blue"></div>
        <Image className="w-32 h-32" src={padlockVerification} alt="Padlock" />
        <div className="text-center">
          <p className="text-[25px] font-bold text-custom-blue">
            Ingresar el código de verificación
          </p>
          <div className="max-w-96">
            <p className="text-lg text-center text-custom-blue">
              Te hemos enviado un código a tu correo para confirmar la operación
            </p>
          </div>
        </div>
        <CodeActivationComponent
          email={"email"}
          setCodesState={setCodesState}
          codesState={codesState}
        />

        {showResendButton && (
          <button
            className="w-[184px] h-[48px] text-[white] rounded-[20px] bg-[rgba(13,_58,_92,_1)] font-bold text-[18px] self-center mt-3"
            style={{ cursor: "pointer" }}
            onClick={handleResendButtonClick}
          >
            Reenviar código
          </button>
        )}
        {showTimer && (
          <>
            <h2 className="mt-3 text-lg text-custom-blue">
              Reenviar el código en
            </h2>
            <CountDownTimerComponent onFinish={handleTimerFinish} />
          </>
        )}

        <Link href="/changePassWord">
          <button
            className="w-[184px] h-[48px] text-[white] rounded-[20px] bg-gray-500 font-bold text-[18px] self-center"
            style={{ cursor: "pointer" }}
            // onClick={handleLogin}
          >
            {" "}
            Next{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CodeVerificationBody;
