import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  children?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  className = "",
  text,
  children,
  image,

  ...props
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`flex items-center justify-center ${className} `}
        {...props}
      >
        <span>{text} </span>

        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        )}

        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
