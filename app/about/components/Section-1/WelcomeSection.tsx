"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import HistoryCircle from "./HistoryCircle";
import TeamFinniu from "@/images/About/Section-1/TeamFinniu.png";
import Text from "@/images/About/Section-1/Text.png";

const WelcomeSection = () => {
  const typingEffectRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const words = ["Finniu", "Crecimiento de tu patrimonio"];
    let wordIndex = 0;

    function changeWord() {
      const word = words[wordIndex];
      const typingEffect = typingEffectRef.current;

      if (typingEffect) {
        // Remove previous color class
        typingEffect.classList.remove("word-finniu", "word-crecimiento");

        // Add new color class based on the word index
        if (wordIndex === 0) {
          typingEffect.classList.add("word-finniu");
        } else if (wordIndex === 1) {
          typingEffect.classList.add("word-crecimiento");
        }

        // Set text and animation
        typingEffect.textContent = "";
        typingEffect.style.animation = "none";

        setTimeout(() => {
          typingEffect.textContent = word;
          // Adjust typing duration for faster typing
          typingEffect.style.animation = `typing 3s steps(${word.length}, end), blink-caret 0.75s step-end infinite`;
        }, 50);

        // Toggle between writing and erasing
        const readTime = wordIndex === 0 ? 3000 : 6000; // Adjust read time for each word
        setTimeout(() => {
          typingEffect.style.animation = `delete 3s steps(${word.length}, end), blink-caret 0.75s step-end infinite`;
        }, readTime + 3000); // Additional time after read time before starting delete

        // Switch to next word index
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    const intervalId = setInterval(changeWord, 10000); // Changes every 10 seconds
    changeWord(); // Initial call to start immediately

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="section-custom relative bottom-0 bg-blueDarkColor flex flex-col">
      <div className="pt-[10vh] container flex h-[120vh] justify-start flex-col items-center">
        <Image src={Text} alt="text" width={814} height={120} />
        <h2 className="text-[50px] text-white mt-14 flex justify-center">
          Somos <span className="typing-effect" ref={typingEffectRef}></span>
        </h2>

        <HistoryCircle />
      </div>

      <Image src={TeamFinniu} alt="team-finniu" width={1915} />
    </section>
  );
};

export default WelcomeSection;
