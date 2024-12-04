"use client";

import Image from "next/image";
import Suscribe from "@/images/Section-8/Suscribe.png";

const Susbcribe = () => {
    return (
        <section className="relative w-full h-auto bg-blueDarkColor flex flex-col justify-start items-center p-b-10 sm:p-b-8 md:p-b-10">
            {/* Imagen con Overlay */}
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px]">
                <Image
                    src={Suscribe}
                    alt="suscribe"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <h2 className="text-center text-white text-[24px] sm:text-[32px] md:text-[38px] font-bold">
                        Agenda una Video Llamada con Nuestros Asesores Comerciales
                    </h2>
                    <button
                        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                        onClick={() =>
                            window.open("https://calendly.com/finniumeet/30min", "_blank")
                        }
                    >
                        Agenda Ahora
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Susbcribe;