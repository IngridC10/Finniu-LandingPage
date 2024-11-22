"use client"
import { useState, useEffect } from "react";
import ListQuestions from "./ListQuestions";

interface Question {
    id: number;
    question: string;
    answer: JSX.Element;
    tag: string[];
}

const questionId1 = (
    <div className="flex flex-col ">
        <p>
            En Finniu ofrecemos tasas competitivas gracias a nuestra diversificación y a la administración directa de capital en sectores estratégicos del holding, evitando intermediarios bancarios.
        </p>
        <div className="h-4"></div>
        <p>
            Se puede revisar el artículo completo aquí.
        </p>
    </div>
);
const questionCapital = (
    <div className="flex flex-col ">
        <p>
            En Finniu aseguramos tu capital a través del contrato de administración de capital y con cheque diferido.
        </p>
        <div className="h-4"></div>
        <p>
            El contrato de administración de capital, el cual es un documento legal que asegura el monto de tu inversión. En caso de incumplimiento, puedes hacer valer tus derechos a través de vías legales, este se genera automáticamente a través de la app.
        </p>
        <div className="h-4"></div>
        <p>
            El contrato con cheque diferido se otorga a inversiones de montos desde S/.50,000 soles, su función es la misma que el de administración de capital, pero adicional a ello se otorga un cheque por el monto del capital invertido añadiendo una capa adicional de seguridad sobre tu capital.
        </p>
        <div className="h-4"></div>
        <p>
            Se puede revisar el artículo completo aquí.
        </p>
    </div>
);

const faqData: Question[] = [
    { id: 1, question: "¿Cómo consiguen una tasa tan competitiva?", answer: questionId1, tag: ["tasa"] },
    { id: 2, question: "¿Cómo aseguran mi capital? ¿Hay alguna garantía?", answer: questionCapital, tag: ["capital", "garantia"] },
    { id: 3, question: "¿Quién es su equipo?", answer: questionId1, tag: ["equipo", "linkedin", "perfil"] },
    { id: 4, question: "¿Cuántos clientes / inversionistas manejan?", answer: questionId1, tag: ["clientes", "inversionistas"] },
    { id: 5, question: "¿Qué riesgo existe al invertir con ustedes?", answer: questionId1, tag: ["inevertir"] },
    { id: 6, question: "¿Qué empresas componen el holding?", answer: questionId1, tag: ["holding"] },
    { id: 7, question: "¿Comparten información financiera de las empresas del holding?", answer: questionId1, tag: ["informacion financiera", "financiera"] },
    { id: 8, question: "¿Cuentan con el respaldo de la SBS?", answer: questionId1, tag: ["respaldo"] },
    { id: 9, question: "¿Dónde se ubican sus oficinas?", answer: questionId1, tag: ["oficinas", "ubicacion"] },
];

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [renderData, setRenderData] = useState<Question[]>(faqData);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredData = faqData.filter((item) =>
                item.question.toLowerCase().includes(searchQuery) ||
                item.tag.some(tag => tag.toLowerCase().includes(searchQuery))
            );
            setRenderData(filteredData);
        }, 300);

        return () => clearTimeout(debounce);
    }, [searchQuery]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    return (
        <div className="max-w-4xl mx-auto px-10 py-8 w-full ">
            <h2 className="text-[32px] font-[600] text-left text-titleTransparency mb-4">Transparencia y Seguridad</h2>
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Buscar mi pregunta o duda"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 8.35 8.35a7.5 7.5 0 0 0 8.3 8.3z" />
                    </svg>
                </button>
            </div>

            <ListQuestions faqData={renderData} />
        </div>
    );
}

