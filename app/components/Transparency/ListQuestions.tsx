"use client"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FC } from "react";

interface Question {
    id: number;
    question: string;
    answer: string;
}

interface ListQuestionsProps {
    faqData: Question[];
}

const ListQuestions: FC<ListQuestionsProps> = ({ faqData }) => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleQuestion = (id: number) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="">
            {faqData.map((item) => (
                <div key={item.id} className="border-b">
                    <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full flex justify-between items-center py-3 text-left text-gray-800 focus:outline-none"
                    >
                        <span className="font-medium">{item.question}</span>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-darkBlueColor text-2xl transition-transform duration-300 ${expandedId === item.id ? "rotate-180" : ""}`}
                        />
                    </button>
                    <div
                        className={`text-gray-600 px-4 pb-3 overflow-hidden transition-all duration-300 ease-in-out ${expandedId === item.id ? "max-h-screen" : "h-0"
                            }`}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListQuestions;
