import React from "react";
import Link from "next/link";
import Image from "next/image";
import Worker1 from "@/images/About/Section-5/Worker1.png";
import Linkedin from "@/images/About/Section-5/Linkedin.png";
import Worker2 from "@/images/About/Section-5/Worker2.png";
import Worker3 from "@/images/About/Section-5/Worker3.png";

const OurDirectoryMobile = () => {
  return (
    <div className="section-custom w-full">
      <div className="container-section flex flex-col justify-center items-center container w-full ">
        <h1>
          <span className="text-blueColorButton  text-[24px] semi-bold">
            Conoce a nuestro
          </span>
        </h1>
        <h1>
          <span className="text-black text-[24px] font-bold">directorio</span>
        </h1>

        <div className=" flex flex-col  gap-[88px]">
          <div className="  w-[320px] h-[210px]  rounded-2xl p-4  mt-[46px] flex relative bg-blueDarkColor">
            <Image
              src={Worker1}
              alt="hand"
              height={249}
              className="absolute bottom-1  left-0"
            />
            <div className="flex flex-col w-[250px] items-end  ">
              <div className=" flex items-center justify-center gap-2 ">
                <h1 className=" font-bold text-[20px] text-right text-white">
                  Diego Mallqui
                </h1>
                <Link href="https://www.linkedin.com/in/diegomallqui1/?originalSubdomain=pe">
                  <Image src={Linkedin} alt="linkedin" height={30} />
                </Link>
              </div>

              <div className=" flex items-center justify-center gap-2">
                <p className="text-[16px]flex justify-start text-white w-[158px]">
                  CEO
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[320px] h-[210px] rounded-2xl p-4 flex relative bg-blueDarkColor">
            <Image
              src={Worker2}
              alt="worker2"
              height={249}
              className="absolute bottom-1 left-0 "
            />
            <div className="flex flex-col w-[404px] items-end  ">
              <div className=" flex items-center justify-center gap-2 ">
                <h1 className=" font-bold text-[20px] text-right text-white">
                  Renzo Cateriano
                </h1>
                <Link href="https://www.linkedin.com/in/renzo-cateriano-toledo-564a92156/">
                  <Image src={Linkedin} alt="linkedin" height={30} />
                </Link>
              </div>

              <div className=" flex items-center justify-center gap-2">
                <p className="text-[16px]flex justify-start   text-white w-[189px]">
                  Co-funder
                </p>
              </div>
            </div>
          </div>

          <div className=" w-[320px] h-[210px] rounded-2xl p-4 flex relative  bg-blueDarkColor">
            <Image
              src={Worker3}
              alt="worker-3"
              height={239}
              className="absolute bottom-1 left-0"
            />
            <div className="flex flex-col w-[404px] items-end  ">
              <div className=" flex items-center justify-center gap-2 ">
                <h1 className=" font-bold text-[20px] text-right text-white">
                  Diego De la Vega
                </h1>
                <Link href="https://www.linkedin.com/in/diego-de-la-vega-loayza-92a419a2/">
                  <Image src={Linkedin} alt="linkedin" height={30} />
                </Link>
              </div>

              <div className=" flex items-center justify-center gap-2">
                <p className="text-[16px]flex justify-start  text-white w-[190px]">
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDirectoryMobile;
