import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DefaultImage from "@/images/dashboard/History/imageunavailable.jpg";

type ModalComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  voucherImages: string[];
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  voucherImages,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalWidth, setModalWidth] = useState(800);
  const [modalHeight, setModalHeight] = useState(600);

  const handleClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
    onClose();
  };

  const handleBack = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.src = selectedImage;
      img.onload = () => {
        const MAX_MODAL_WIDTH = window.innerWidth * 0.8;
        const MAX_MODAL_HEIGHT = 940;
        setModalWidth(MAX_MODAL_WIDTH);
        setModalHeight(MAX_MODAL_HEIGHT);
      };
    } else {
      setModalWidth(800);
      setModalHeight(600);
    }
  }, [selectedImage]);

  return (
    <div>
      {isOpen && (
        <div
          id="modal1"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClose}
        >
          <div
            className="flex justify-center w-auto h-auto p-6 bg-white rounded-lg modalbox max-w-[850px]"
            style={{ width: `${modalWidth}px`, height: `${modalHeight}px` }}
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="#close"
              className="absolute top-0 right-0 m-4 text-xl font-bold text-gray-600 mr-[19px] mt-[7px]"
              onClick={handleClose}
            >
              X
            </a>

            {selectedImage && (
              <div className="flex items-center justify-center w-[950px] h-[980px]">
                <button
                  onClick={handleBack}
                  className="absolute flex items-center justify-center w-20 h-8 bg-white border-2 border-black border-solid rounded-lg top-4 left-4"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Atrás
                </button>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="rounded-lg modal-image zoomed"
                  onClick={handleClose}
                  style={{ maxWidth: "50%", maxHeight: "50%" }}
                />
              </div>
            )}
            {!selectedImage && (
              <div className="flex max-h-[431px] justify-start items-center flex-wrap overflow-y-auto overflow-x-hidden modal-container">
                {voucherImages.map((imageSrc, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 p-2 modal-item w-[278px] h-[214.54px]"
                  >
                    <img
                      src={imageSrc}
                      alt={`voucher-${index}`}
                      className="w-[210px] h-[180px] rounded-lg modal-image zoomable"
                      onClick={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== DefaultImage.src) {
                          handleClick(imageSrc);
                        }
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = DefaultImage.src;
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
