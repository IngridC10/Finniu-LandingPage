import Image from "next/image";
import Suscribe from "@/images/Section-8/Suscribe.png";
import FormSusbcribe from "@/components/FormSusbcribe";


const Susbcribe = () => {
    return (
        <section className="w-full h-auto bg-blueDarkColor flex flex-col justify-start items-center p-b-10 sm:p-b-8 md:p-b-10">
            <Image src={Suscribe} alt="suscribe" className="opacity-80 h-[200px] sm:h-[300px] md:h-[350px]" />
            <div className="flex flex-col bg-blueDarkColor justify-start items-center w-full max-w-screen-lg py-8 sm:py-10 md:py-12">
                <h2 className="w-4/5 sm:w-3/4 md:w-[80%] text-center text-white text-[24px] sm:text-[32px] md:text-[38px] font-bold">
                    Agenda una Video Llamada con Nuestros Asesores Comerciales
                </h2>

                <FormSusbcribe />
            </div>
        </section>
    )
}

export default Susbcribe