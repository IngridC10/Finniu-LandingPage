import React, { ButtonHTMLAttributes } from "react";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  className = "",
  text,
  children,

  ...props
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`flex items-center justify-center ${className} `}
        {...props}
      >
        <span>{text} </span>
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
