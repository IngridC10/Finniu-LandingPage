import Image from "next/image";
import Suscribe from "@/images/Section-8/Suscribe.png";
import FormSusbcribe from "@/components/FormSusbcribe";


const Susbcribe = () => {
    return (
        <section className="w-full h-[1000px] bg-red-50 flex flex-col justify-start items-center">
            <Image src={Suscribe} alt="suscribe" className="opacity-80 h-[350px]" />
            <div className="flex flex-col bg-blueDarkColor justify-start items-center w-full h-[650px]">
                <div className="h-10"></div>
                <h2 className="w-[840px] text-center text-white text-[40px] font-bold">Suscríbete para recibir noticias, promociones y lo último en Finniu 💸 ️✈️</h2>
                <div className="h-10"></div>
                <FormSusbcribe />
            </div>
        </section>
    )
}

export default Susbcribe