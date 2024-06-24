import React from "react";

interface NavComponentProps {
  items: string[];
  color?: string;
}
const NavComponent: React.FC<NavComponentProps> = ({ items, color }) => {
  return (
    <div>
      <nav className={`m-5 text-${color}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </nav>
    </div>
  );
};

export default NavComponent;
