import React from "react";
import Image, { StaticImageData } from "next/image";

interface SliderItemComponentProps {
  text: string;
  image: StaticImageData[];
  alt: string;
}

const SliderComponent: React.FC<SliderItemComponentProps> = ({
  text,
  image,
  alt,
}) => {
  return (
    <div className="bg-backgroundLightColor flex flex-col  rounded-2xl justify-center items-center h-[492px]">
      <p>{text}</p>
      <div className=" flex flex-row">
        {image.map((src, index) => (
          <Image key={index} src={src} alt={alt} width={180} height={180} />
        ))}
      </div>
    </div>
  );
};
export default SliderComponent;
