"use client"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, FC } from "react";


interface Question {
    id: number;
    question: string;
    answer: JSX.Element;
    tag: string[];
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
        <div className="w-full duration-500">
            {faqData.map((item) => (
                <div key={item.id} className="md:border-b-4 xs:border-b-2 border-gray-200">
                    <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full flex justify-between items-center px-8 py-3 text-left text-darkBlueColor md:text-[24px] xs:text-[16px] font-medium focus:outline-none"
                    >
                        <span className="font-medium">{item.question}</span>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-darkBlueColor text-2xl transition-transform duration-500 ${expandedId === item.id ? "rotate-180" : ""}`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ${expandedId === item.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="text-gray-600 px-4 pb-3">{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListQuestions;
