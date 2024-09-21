import React from "react";
import Image from "next/image";
import Link from "next/link";
import Worker1 from "@/images/About/Section-5/Worker1.png";
import Linkedin from "@/images/About/Section-5/Linkedin.png";
import Worker2 from "@/images/About/Section-5/Worker2.png";
import Worker3 from "@/images/About/Section-5/Worker3.png";

const OurDirectoryDesktop = () => {
  return (
    <div className="container w-full container-section justify-center items-center ">
      <h1>
        <span className="text-blueColorButton  text-[50px] semi-bold">
          Conoce a nuestro
        </span>
        <span className="text-black text-[50px] font-bold"> directorio</span>
      </h1>

      <div className=" flex flex-row  justify-between h-[480px] items-end ">
        <div className=" w-[404px] h-[372px] rounded-2xl p-4 flex relative bg-blueDarkColor">
          <Image
            src={Worker1}
            alt="hand"
            height={479}
            className="absolute bottom-1  left-0"
          />
          <div className="flex flex-col w-[404px] items-end justify-start ">
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
        <div className=" w-[404px] h-[372px] rounded-2xl p-4 flex relative bg-blueDarkColor">
          <Image
            src={Worker2}
            alt="worker2"
            height={479}
            className="absolute bottom-1 left-0 "
          />
          <div className="flex flex-col w-[404px] items-end justify-start ">
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

        <div className=" w-[404px] h-[372px] rounded-2xl  bg-blueDarkColor">
          <div className=" w-[404px] h-[372px] rounded-2xl p-4 flex relative  bg-blueDarkColor">
            <Image
              src={Worker3}
              alt="worker-3"
              height={479}
              className="absolute bottom-1 left-0"
            />
            <div className="flex flex-col w-[404px] items-end justify-start ">
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

export default OurDirectoryDesktop;
