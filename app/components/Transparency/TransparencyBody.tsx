// components/FAQ.tsx
import ListQuestions from "./ListQuestions";

interface Question {
    id: number;
    question: string;
    answer: string;
}

const faqData: Question[] = [
    { id: 1, question: "¿Cómo consiguen una tasa tan competitiva?", answer: "Respuesta detallada aquí." },
    { id: 2, question: "¿Cómo aseguran mi capital? ¿Hay alguna garantía?", answer: "Respuesta detallada aquí." },
    { id: 3, question: "¿Quién es su equipo?", answer: "Respuesta detallada aquí." },
    { id: 4, question: "¿Cuántos clientes / inversionistas manejan?", answer: "Respuesta detallada aquí." },
    { id: 5, question: "¿Qué riesgo existe al invertir con ustedes?", answer: "Respuesta detallada aquí." },
    { id: 6, question: "¿Qué empresas componen el holding?", answer: "Respuesta detallada aquí." },
    { id: 7, question: "¿Comparten información financiera de las empresas del holding?", answer: "Respuesta detallada aquí." },
    { id: 8, question: "¿Cuentan con el respaldo de la SBS?", answer: "Respuesta detallada aquí." },
    { id: 9, question: "¿Dónde se ubican sus oficinas?", answer: "Respuesta detallada aquí." },
];

export default function FAQ() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-4">Transparencia y Seguridad</h1>
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Buscar mi pregunta o duda"
                    className="w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 8.35 8.35a7.5 7.5 0 0 0 8.3 8.3z" />
                    </svg>
                </button>
            </div>
            <p className="text-center text-gray-600 mb-4">Aquí puedes encontrar algunas respuestas a tus dudas</p>
            <ListQuestions faqData={faqData} />
        </div>
    );
}
