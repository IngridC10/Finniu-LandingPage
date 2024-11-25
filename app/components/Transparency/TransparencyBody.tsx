"use client";
import { useState, useEffect } from "react";
import ListQuestions from "./ListQuestions";
import { questionCapital, questionIdBack, questionIdClient, questionIdHolding, questionIdInformation, questionIdLocation, questionIdRate, questionIdRisk, questionIdTeam } from "./questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Question {
    id: number;
    question: string;
    answer: JSX.Element;
    tag: string[];
}

const tagsRate = ["tasa", "competitivas", "diversificación", "diversificacion", "administración", "administracion", "intermediarios"];
const tagsCapital = ["contrato", "capital", "seguridad", "cheque", "inversión", "legal", "automático", "montos", "adicional", "app"];
const tagsTeam = ["equipo", "linkedin", "perfil", "fundadores", "nosotros", "historia", "mision", "vision", "respaldo", "opinones", "directorio", "respaldo"];
const tagsClient = ["clientes", "inversionistas", "manejan"];
const tagsRisk = ["riesgo", "seguridad", "devolución", "contratos", "mutuo", "dinerario", "capital", "financiero", "respaldo", "garantía", "garantias", "garantías", "garantia"];
const tagsHolding = ["holding", "empresas", "alimentos", "agroindustria", "energía", "rentabilidad"];
const tagsInformation = ["informacion financiera", "financiera", "informacion", "reportes", "sunat"];
const tagsBack = ["respaldo", "", "fondos de inversión", "fondos", "inscripcion", "regulación", "inscripción", "regulacion"];
const tagsLocation = ["oficinas", "ubicacion", "direccion", "localizacion", "sede", "sede principal", "lima", "san luis", "san borja"];

const faqData: Question[] = [
    { id: 1, question: "¿Cómo consiguen una tasa tan competitiva?", answer: questionIdRate, tag: tagsRate },
    { id: 2, question: "¿Cómo aseguran mi capital? ¿Hay alguna garantía?", answer: questionCapital, tag: tagsCapital },
    { id: 3, question: "¿Quién es su equipo?", answer: questionIdTeam, tag: tagsTeam },
    { id: 4, question: "¿Cuántos clientes / inversionistas manejan?", answer: questionIdClient, tag: tagsClient },
    { id: 5, question: "¿Qué riesgo existe al invertir con ustedes?", answer: questionIdRisk, tag: tagsRisk },
    { id: 6, question: "¿Qué empresas componen el holding?", answer: questionIdHolding, tag: tagsHolding },
    { id: 7, question: "¿Comparten información financiera de las empresas del holding?", answer: questionIdInformation, tag: tagsInformation },
    { id: 8, question: "¿Cuentan con el respaldo de la SBS?", answer: questionIdBack, tag: tagsBack },
    { id: 9, question: "¿Dónde se ubican sus oficinas?", answer: questionIdLocation, tag: tagsLocation },
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
        <div className="max-w-4xl mx-auto px-10 py-8 w-full">
            <h2 className="md:text-[32px] xs:text-[24px] font-[600] text-center text-titleTransparency mb-4">
                Transparencia y Seguridad
            </h2>
            <h3 className="md:text-[24px] xs:text-[18px] font-[500] text-center text-titleTransparency mb-4">
                Preguntas frecuentes
            </h3>
            <div className="h-[30px]"></div>
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Buscar mi pregunta o duda"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full border-2 rounded-full py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-titleTransparency border-border placeholder-black xs:placeholder:text-[14px] placeholder md:placeholder:text-[18px]"
                />
                <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className={`text-darkBlueColor text-2xl transition-transform duration-500 `}
                    />
                </button>
            </div>
            <h3 className="md:text-[24px] xs:text-[20px] font-[400] text-left text-titleTransparency mb-4">
                Aqui puedes encontrar algunas respuestas a tus dudas
            </h3>
            <div
                className={`transition-all duration-500 overflow-hidden ${renderData.length > 0 ? "max-h-full" : "max-h-0"
                    }`}
            >
                <ListQuestions faqData={renderData} />
            </div>
        </div>
    );
}
