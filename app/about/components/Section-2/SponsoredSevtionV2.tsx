import React from "react";
import Image from "next/image";
import Innovaul from "@/images/About/Section-2/Innovaul_v2.png";
import Incubagraria from "@/images/About/Section-2/Incubagraria_v2.png";
import Emprelatam from "@/images/About/Section-2/Emprelatam_v2.png";
import InversionSimple from "@/images/About/Section-2/Inversion_simple_v2.png";

const SponsoredV2 = () => {
    return (
        <section
            className="w-full  justify-center items-center  h-[260px]  xl:h-[260px] flex flex-col border-b border-gray-200"
        >
            <div className=" flex  container flex-col justify-center pt-3 xl:pt-[66px] items-center w-full min-h-full ">
                <h2 className="text-black text-xl xl:text-[37px]">
                    Con el respaldo de
                </h2>
                <div className="flex-col flex xl:flex-row w-full gap-4 xl:gap-[45px] items-center justify-center p-6 xl:p-16 ">
                    <Image
                        src={Innovaul}
                        alt="innovaul"
                        className="  w-[120px]  sm:w-[180px]   md:w-[200px]  xl:w-[300px]"
                    />
                    <Image
                        src={Incubagraria}
                        alt="incubagraria"
                        className="  w-[120px]  sm:w-[180px]   md:w-[200px]    xl:w-[300px]"
                    />
                    <Image
                        src={Emprelatam}
                        alt="emprelatam"
                        className="  w-[120px]  sm:w-[180px]   md:w-[200px]    xl:w-[300px]"
                    />

                    <Image
                        src={InversionSimple}
                        alt="inversion-simple"
                        className="  w-[120px]  sm:w-[180px]   md:w-[200px]    xl:w-[300px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default SponsoredV2;