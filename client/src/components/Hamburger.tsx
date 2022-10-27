import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 w-full  text-black md:py-2 scroll-smooth ">
      <button className="  text-3xl m-2" onClick={() => setIsOpen(true)}>
        <FaHamburger />
      </button>
      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 px-8 py-4 bg-gray-100 border-r overflow-auto lg:static  lg:inset-auto lg:translate-x-0 transform ${
          isOpen
            ? "translate-x-0 ease-out transition-medium"
            : "-translate-x-full ease-in transition-medium"
        }`}
      >
        <div className="-mx-3 pl-3 pr-1 flex items-center justify-between">
          <span />
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 lg:hidden"
          >
            <svg fill="none" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                d="M6 18L18 6M6 6L18 18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-10 flex flex-col gap-10 items-center justify-between text-2xl">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin +  window.location.pathname + "#home";
              setIsOpen(false);
            }}
            className="rounded-full md:py-1 md:mx-5"
          >
            Home
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin + window.location.pathname + "#projects";
              setIsOpen(false);
            }}
            className=" rounded-full md:py-1 md:mx-5"
          >
            Projects
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin + window.location.pathname + "#education";
              setIsOpen(false);
            }}
            className=" rounded-full md:py-1 md:mx-5"
          >
            Education
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin + window.location.pathname + "#about";
              setIsOpen(false);
            }}
            className=" rounded-full md:py-1 md:mx-5"
          >
            About
          </button>

          <a href="https://github.com/Chappo050" className="text-4xl">
            {" "}
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-chaplin-dev/"
            className="text-4xl"
          >
            {" "}
            <BsLinkedin />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Hamburger;
