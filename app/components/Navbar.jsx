"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 backdrop-blur-lg
        transition-colors duration-500 ease-in-out 
        ${isScroll ? "bg-white/70 dark:bg-black/70 shadow-md" : "bg-transparent"}`}
      >
        <a
          href="/"
          className="text-2xl font-semibold text-black dark:text-white transition-colors"
        >
          Apaa<span className="text-red-700">.</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 font-poppins text-base text-black dark:text-white">
          {["Home", "About Me", "Project", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark mode */}
          <button
            onClick={toggleDarkMode}
            className="transition-transform duration-300 hover:scale-110"
          >
            <Sun className="hidden h-6 w-6 text-yellow-400 dark:block" />
            <Moon className="h-6 w-6 text-gray-700 dark:hidden" />
          </button>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden transition-transform duration-300 hover:scale-110"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 text-black dark:text-white ${isOpen ? "rotate-90" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6L18 18" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay menu (mobile) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 flex items-center justify-center bg-white dark:bg-black
        transition-all duration-500 ease-in-out
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMenu}
      >
        <ul
          className={`text-3xl space-y-8 text-center text-black dark:text-white transform transition-all
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <li><a href="#top" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
          <li><a href="#project" onClick={toggleMenu}>Project</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
