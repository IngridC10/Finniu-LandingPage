import React from "react";
import Link from "next/link";

const NavComponent = () => {
  return (
    <div>
      <nav className="text-[28px] text-white ">
        <ul className="flex ">
          <li>
            <Link href="/como-funciona" legacyBehavior>
              <a>¿Cómo funciona?</a>
            </Link>
          </li>
          <li>
            <Link href="/aprende" legacyBehavior>
              <a>Aprende</a>
            </Link>
          </li>
          <li>
            <Link href="/finantips" legacyBehavior>
              <a>Finantips</a>
            </Link>
          </li>
          <li>
            <Link href="/nosotros" legacyBehavior>
              <a>Nosotros</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavComponent;
