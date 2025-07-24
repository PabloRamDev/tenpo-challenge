import React from "react";
import Logo from "../logo";
import { navLinks } from "@/_lib/header-data";
import NavLink from "../_header/nav-link";

export default function Footer() {
  return (
    <footer className="flex items-start justify-between bg-neutral-900 p-lg md:px-2xl ">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
        <div className="flex flex-col items-center md:items-start">
          <Logo width={80} height={20} />
          <p className="flex gap-2 text-text-0 font-open-sans font-bold">
            {" "}
            <span className="text-primary-400">by</span>pabloram.dev
          </p>
        </div>
        <nav className="flex">
          <ul className="flex flex-row gap-2 md:gap-8 items-start justify-center w-full">
            {navLinks.map((item) => (
              <li key={item.text}>
                <NavLink href={item.href} isCta={item.isCta} text={item.text} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
