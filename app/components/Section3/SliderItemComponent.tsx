import React from "react";
import Image, { StaticImageData } from "next/image";

interface SliderItemComponentProps {
  text: string;
  imgSrc: StaticImageData;
  alt: string;
}

const SliderComponent: React.FC<SliderItemComponentProps> = ({
  text,
  imgSrc,
  alt,
}) => {
  return (
    <div className="bg-backgroundLightColor flex flex-col p-10 rounded-2xl justify-center items-center w-[800px] h-[400px]">
      <p>{text}</p>
      <Image src={imgSrc} alt={alt} width={150} height={100} />
    </div>
  );
};
export default SliderComponent;
