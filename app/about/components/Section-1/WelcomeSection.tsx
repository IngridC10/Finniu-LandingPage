"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import HistoryCircle from "./HistoryCircle";
import TeamFinniu from "@/images/About/Section-1/TeamFinniu.png";
import Text from "@/images/About/Section-1/Text.png";

const WelcomeSection = () => {
  const typingEffectRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const words = [
      { text: "Finniu", readTime: 2500, deleteTime: 1000 },
      {
        text: "Crecimiento de tu patrimonio",
        readTime: 4000,
        deleteTime: 1000,
      },
    ];
    let wordIndex = 0;

    function changeWord() {
      const { text, readTime, deleteTime } = words[wordIndex];
      const typingEffect = typingEffectRef.current;

      if (typingEffect) {
        typingEffect.classList.remove("word-finniu", "word-crecimiento");

        if (wordIndex === 0) {
          typingEffect.classList.add("word-finniu");
        } else if (wordIndex === 1) {
          typingEffect.classList.add("word-crecimiento");
        }

        typingEffect.textContent = "";
        typingEffect.style.animation = "none";

        setTimeout(() => {
          typingEffect.textContent = text;

          typingEffect.style.animation = `typing 3s steps(${text.length}, end), blink-caret 0.75s step-end infinite`;
        }, 30);

        setTimeout(() => {
          typingEffect.style.animation = `delete 1s steps(${text.length}, end), blink-caret 0.75s steps(2, end)`;
        }, readTime);

        wordIndex = (wordIndex + 1) % words.length;

        setTimeout(changeWord, readTime + deleteTime - 1000);
      }
    }

    changeWord();

    return () => {
      if (typingEffectRef.current) {
        typingEffectRef.current.style.animation = "none";
      }
    };
  }, []);

  return (
    <section className="   section-custom  relative bottom-0 bg-blueDarkColor flex flex-col">
      <div className=" 2xl:pt-[10vh] pt-[13vh]   container flex  h-[882px]  2xl:h-[82vh] justify-start flex-col items-center">
        <Image
          src={Text}
          alt="text"
          width={814}
          className=" w-[226px] 2xl:w-[814px]"
        />
        <h2 className=" 2xl:text-[50px] text-[20px] text-white mt-14 flex justify-center">
          Somos <span className="typing-effect" ref={typingEffectRef}></span>
        </h2>

        <HistoryCircle />
      </div>

      <Image src={TeamFinniu} alt="team-finniu" width={1915} />
    </section>
  );
};

export default WelcomeSection;
