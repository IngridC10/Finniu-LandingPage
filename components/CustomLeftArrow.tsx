import React from "react";
const CustomLeftArrow = () => {
  return (
    <div className="relative  arrow-container flex items-center justify-center transform  bg-blueColorButton w-[70px] h-[67px] p-2 rounded-full shadow-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default CustomLeftArrow;
