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
      className={`flex flex-col rounded-2xl  justify-center items-center  h-[415px]  2xl:h-[591px] ${backgroundColor}`}
    >
      <p
        className={` text-[14px]  2xl:text-[24px] text-center  p-5 ${textColor}`}
      >
        {text}
      </p>
      <div className=" flex flex-row ">
        {image.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={alt}
            // height={500}
            className=" w-[100px] 2xl:w-[200px] "
          />
        ))}
      </div>
    </div>
  );
};
export default SliderComponent;
