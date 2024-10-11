"use client";
import Image from "next/image";
import IconCheck from "@/images/Section-7/IconCheck.png";
import ButtonComponent from "./ButtonComponent";
interface PopUpComponentProps {
  isVisible: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCalculatedState: React.Dispatch<React.SetStateAction<boolean>>;
  handleCalculateClick: () => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUpComponent: React.FC<PopUpComponentProps> = ({
  isVisible,
  onClose,
  setIsCalculatedState,
  setModalOpen,
  handleCalculateClick,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[355px] 2xl:w-[420px] h-[366px] flex flex-col justify-center items-center rounded-xl shadow-lg text-center relative">
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => onClose(false)}
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
        <p className="text-gray-700">Tus datos han sido enviados con éxito.</p>

        <ButtonComponent
          text="Ver mi simulación"
          onClick={() => {
            handleCalculateClick();
            // setIsCalculatedState(true);

            onClose(false);
            setModalOpen(false);
          }}
          className="w-[255px] bg-blueColorButton text-white rounded-2xl py-2 mt-4"
        />
      </div>
    </div>
  );
};

export default PopUpComponent;
