import React, { ButtonHTMLAttributes } from "react";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  className = "",
  text,
  ...props
}) => {
  return (
    <div>
      <button
        className={`flex items-center justify-center rounded-lg  ${className} `}
        {...props}
      >
        <span>{text}</span>
      </button>
    </div>
  );
};

export default ButtonComponent;
