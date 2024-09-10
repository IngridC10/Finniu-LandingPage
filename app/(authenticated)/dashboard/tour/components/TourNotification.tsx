import React from "react";
import { GoBell } from "react-icons/go";
import ArrowRightSoles from "@/images/Dashboard/Tour/arrowRightSoles.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TourNotification = ({
  handleCloseTour,
}: {
  handleCloseTour: () => void;
}) => {
  // const navigate = useNavigate();
  const router = useRouter();

  const handleGetOutClick = () => {
    router.push("/dashboard");
    // router.push("/home?forceTour=false");
    handleCloseTour();
  };

  return (
    <div className="flex flex-col w-full h-full pt-16 m-auto overflow-y-hidden">
      <div className="max-w-[1252px] md:w-[669px] xl:w-[1252px] w-full mx-auto">
        <div className="flex items-start justify-end h-screen text-right">
          <div className="body-text-notification md:mt-[18px] lg:mt-[7px] xl:mt-[5px]">
            <div className="flex flex-row justify-end mr-[78px] gap-2">
              <div>
                <Image
                  className="w-[209px]"
                  src={ArrowRightSoles}
                  alt="arrow"
                />
              </div>
              <div className="bg-lighBlue rounded-[60%] w-[74px] h-[79px] flex items-center">
                <GoBell className="w-16 ml-1 icon text-darkBlueColor h-[49px] " />
              </div>
            </div>
            <div className="mt-5 text-right md:mr-[80px] lg:mr-[76px] xl:mr-[78px] ">
              <h1 className="font-normal text-white md:text-xl lg:text-3xl">
                ¡Entérate de todo en tus
              </h1>
              <h1 className="font-normal text-white md:text-xl lg:text-3xl">
                notificaciones
              </h1>
              <h2 className="text-white sm:text-sm lg:text-lg">
                Dale click a este ícono para visualizar tus notificaciones.
              </h2>
              <button
                onClick={handleGetOutClick}
                style={{
                  boxShadow: "0 7px 6px -6px #d3d7de",
                }}
                className="flex flex-col items-center justify-center h-16 mt-5 sm:text-lg md:text-xl lg:text-2xl font-normal text-darkBlueColor no-underline border-none rounded-full shadow-md bg-customLightBlue  w-60 lg:w-[303px] ml-[317px]"
              >
                Listo para comenzar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourNotification;
