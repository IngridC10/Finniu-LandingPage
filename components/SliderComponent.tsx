import { Carousel } from "flowbite-react";
import Image from "next/image";
import LogoFinniu from "/images/LogoFinniu.png";
import Check from "/images/Check.png";

const Slider = () => {
  return (
    <div className="w-full h-64 relative">
      <Carousel slideInterval={3000}>
        <div className="relative w-full h-64">
          <Image
            src={LogoFinniu}
            alt="Logo de Finniu"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src={Check}
            alt="Logo de Finniu"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src={LogoFinniu}
            alt="Logo de Finniu"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
