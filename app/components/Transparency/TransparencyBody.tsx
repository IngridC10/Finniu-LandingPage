"use client"
import { useState, useEffect } from "react";
import ListQuestions from "./ListQuestions";
import { questionCapital, questionIdBack, questionIdClient, questionIdHolding, questionIdInformation, questionIdLocation, questionIdRate, questionIdRisk, questionIdTeam } from "./questions";

interface Question {
    id: number;
    question: string;
    answer: JSX.Element;
    tag: string[];
}



const faqData: Question[] = [
    { id: 1, question: "¿Cómo consiguen una tasa tan competitiva?", answer: questionIdRate, tag: ["tasa"] },
    { id: 2, question: "¿Cómo aseguran mi capital? ¿Hay alguna garantía?", answer: questionCapital, tag: ["capital", "garantia"] },
    { id: 3, question: "¿Quién es su equipo?", answer: questionIdTeam, tag: ["equipo", "linkedin", "perfil"] },
    { id: 4, question: "¿Cuántos clientes / inversionistas manejan?", answer: questionIdClient, tag: ["clientes", "inversionistas"] },
    { id: 5, question: "¿Qué riesgo existe al invertir con ustedes?", answer: questionIdRisk, tag: ["inevertir"] },
    { id: 6, question: "¿Qué empresas componen el holding?", answer: questionIdHolding, tag: ["holding"] },
    { id: 7, question: "¿Comparten información financiera de las empresas del holding?", answer: questionIdInformation, tag: ["informacion financiera", "financiera", "informacion"] },
    { id: 8, question: "¿Cuentan con el respaldo de la SBS?", answer: questionIdBack, tag: ["respaldo"] },
    { id: 9, question: "¿Dónde se ubican sus oficinas?", answer: questionIdLocation, tag: ["oficinas", "ubicacion"] },
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

