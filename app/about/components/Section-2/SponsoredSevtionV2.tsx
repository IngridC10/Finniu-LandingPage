
import Image from "next/image";
import Innovaul from "@/images/About/Section-2/Innovaul_v2.png";
import Incubagraria from "@/images/About/Section-2/Incubagraria_v2.png";
import Emprelatam from "@/images/About/Section-2/Emprelatam_v2.png";
import InversionSimple from "@/images/About/Section-2/Inversion_simple_v2.png";


const SponsoredV2 = () => {
    return (
        <section className="w-full justify-center items-center h-[160px] xl:h-[240px] flex flex-col border-b border-gray-200 ">
            <div className="flex flex-col justify-center pt-3 xl:pt-[66px] items-center w-full min-h-full bg-support-gradient	">
                <h2 className="text-textSupport text-xl xl:text-[37px]">Nos respaldan</h2>
                <ContainerSponsorLg />
                <ContainerSponsorSm />
            </div>
        </section>
    );
};

const ContainerSponsorLg = () => {
    return (
        <div className="hidden md:flex flex-row w-full gap-4 xl:gap-[45px] items-center justify-center p-6 xl:p-16">
            <Image
                src={Innovaul}
                alt="innovaul"
                className="w-[120px] sm:w-[180px] md:w-[200px] xl:w-[250px]"
            />
            <Image
                src={Incubagraria}
                alt="incubagraria"
                className="w-[120px] sm:w-[180px] md:w-[200px] xl:w-[250px]"
            />
            <Image
                src={Emprelatam}
                alt="emprelatam"
                className="w-[120px] sm:w-[180px] md:w-[200px] xl:w-[250px]"
            />
            <Image
                src={InversionSimple}
                alt="inversion-simple"
                className="w-[120px] sm:w-[180px] md:w-[200px] xl:w-[250px]"
            />
        </div>
    );
};
const ContainerSponsorSm = () => {
    return (
        <div className="relative w-full md:hidden overflow-x-scroll">
            <div className="marquee flex flex-row gap-4 xl:gap-[45px] items-center justify-start p-6 xl:p-16">
                <Image
                    src={Innovaul}
                    alt="innovaul"
                    width={120}

                />
                <Image
                    src={Incubagraria}
                    alt="incubagraria"
                    width={120}

                />
                <Image
                    src={Emprelatam}
                    alt="emprelatam"
                    width={120}

                />
                <Image
                    src={InversionSimple}
                    alt="inversion-simple"
                    width={120}
                    height={60}
                />
                <Image
                    src={Innovaul}
                    alt="innovaul"
                    width={120}

                />
                <Image
                    src={Incubagraria}
                    alt="incubagraria"
                    width={120}

                />
                <Image
                    src={Emprelatam}
                    alt="emprelatam"
                    width={120}

                />
                <Image
                    src={InversionSimple}
                    alt="inversion-simple"
                    width={120}
                    height={60}
                />
            </div>
        </div>
    );
};




export default SponsoredV2;