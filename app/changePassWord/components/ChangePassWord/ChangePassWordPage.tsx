"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import padlock from "@/images/Dashboard/Login/padlock.png";

const ChangePassWordPage = () => {
  // const location = useLocation();
  const [showPasswordState, setShowPasswordState] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  // let navigate = useNavigate();

  // const togglePasswordVisibility = () => {
  //   setShowPasswordState(!showPasswordState);
  // };
  // const emailParams = new URLSearchParams(location.search);
  // const email = emailParams.get("email");

  // useEffect(() => {
  //   const emailParams = new URLSearchParams(location.search);
  //   const email = emailParams.get("email");

  //   if (!email) {
  //     navigate("/wrong-password");
  //   }
  // }, [location.search, navigate]);

  // const [changePasswordMinimal, { loading }] = useMutation(CHANGE_PASSWORD, {
  //   onError: (error) => {
  //     console.error("Error:", error);
  //   },
  //   onCompleted: (data) => {
  //     messageNotify({
  //       type: "success",
  //       message: "Contraseña cambiada con éxito",
  //     });

  //     setRedirect(true);
  //   },
  // });

  // const handleChange = (e) => {
  //   setNewPassword(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await changePasswordMinimal({
  //       variables: {
  //         email: email,
  //         newPassword: newPassword,
  //       },
  //     });
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   let timer;

  //   if (redirect) {
  //     timer = setTimeout(() => {
  //       navigate("/login");
  //     }, 5000);
  //   }

  //   return () => clearTimeout(timer);
  // }, [redirect, navigate]);

  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <div className="flex flex-col items-center justify-start w-full h-screen gap-5 pt-10 m-auto">
        <Image className="w-[120px] h-[90px]" src={padlock} alt="Padlock" />
        <h1 className="text-black text-[37px]">Cambiar tu contraseña</h1>
        <h2 className="text-[23px]">Ingresa tu nueva contraseña</h2>
        <form

        //   onSubmit={handleSubmit}
        >
          <div className="flex flex-row items-center justify-center">
            <input
              className="mx-[15px] self-center pl-[22px] w-[295px] h-[60px] rounded-[26px] border-[1.9px] border-solid border-[#3DD0FB] mt-[21px] text-[20px] shadow-lg"
              placeholder="Escribe tu contraseña"
              type={showPasswordState ? "text" : "password"}
              value={newPassword}
              // onChange=

              // {handleChange}
              autoComplete="new-password"
            />
            <div>
              <FontAwesomeIcon
                className="mb-[-4px] w-[45px] h-[18px] absolute mt-[2px] ml-[-72px] cursor-pointer"
                icon={showPasswordState ? faEye : faEyeSlash}
                //   onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="w-[295px] h-[60px] text-white rounded-[30px] bg-[rgba(13,58,92,1)] font-bold text-lg self-center mt-14"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              {/* {loading ? "Cargando..." : "Cambiar contraseña"} */}
              Cambiar contraseña
            </button>
          </div>
          {/* <Toaster /> */}
        </form>
      </div>
    </div>
  );
};

export default ChangePassWordPage;
