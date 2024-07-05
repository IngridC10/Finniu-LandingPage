import React from "react";
import Image, { StaticImageData } from "next/image";

interface SliderItemComponentProps {
  text: string;
  image: StaticImageData[];
  alt: string;
  backgroundColor?: string;
  textColor?: string;
}

const SliderComponent: React.FC<SliderItemComponentProps> = ({
  text,
  image,
  alt,
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      className={`flex flex-col rounded-2xl justify-center items-center h-[591px] ${backgroundColor}`}
    >
      <p className={` text-[24px] p-5 ${textColor}`}>{text} </p>
      <div className=" flex flex-row ">
        {image.map((src, index) => (
          <Image key={index} src={src} alt={alt} height={500} />
        ))}
      </div>
    </div>
  );
};
export default SliderComponent;
