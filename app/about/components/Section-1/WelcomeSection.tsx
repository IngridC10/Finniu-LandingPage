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
      { text: "Crecimiento de tu patrimonio", readTime: 4000, deleteTime: 1000 },
    ];
    let wordIndex = 0;

    function changeWord() {
      const { text, readTime, deleteTime } = words[wordIndex];
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
          typingEffect.textContent = text;
          // Adjust typing duration for faster typing
          typingEffect.style.animation = `typing 3s steps(${text.length}, end), blink-caret 0.75s step-end infinite`;
        }, 30);

        // Toggle between writing and erasing
        setTimeout(() => {
          typingEffect.style.animation = `delete 1s steps(${text.length}, end), blink-caret 0.75s steps(2, end)`;
        }, readTime);

        // Switch to next word index after the delete animation completes
        wordIndex = (wordIndex + 1) % words.length;

        setTimeout(changeWord, readTime + deleteTime - 1000); // Total time for each word cycle
      }
    }

    changeWord(); // Initial call to start immediately

    return () => {
      if (typingEffectRef.current) {
        typingEffectRef.current.style.animation = "none"; // Clear any running animations
      }
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
