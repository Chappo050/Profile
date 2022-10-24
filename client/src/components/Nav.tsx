import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="sticky top-0 w-auto bg-gray-700 text-black md:py-2">
      <div className=" grid grid-cols-3 text-sm md:text-lg text-custom-blue font-semibold text-center">
        
        <div className="flex flex-between gap-10 mx-5">
        <a
          href="https://www.linkedin.com/in/matthew-chaplin-dev/"
          className="text-4xl text-white hover:text-slate-200  "
        >
          {" "}
          <BsLinkedin />
        </a>

        <a href="https://github.com/Chappo050" className=" text-white text-4xl hover:text-slate-200  ">
          {" "}
          <BsGithub />
        </a>
        </div>
       

        <div className=" grid grid-cols-4 sm:gap-1 sm:text-xs lg:text-lg">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin + "/#home";
            }}
            className="bg-white rounded-full md:py-1 hover:bg-slate-200  "
          >
            Home
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin + "/#projects";
            }}
            className="bg-white rounded-full md:py-1 hover:bg-slate-200 "
          >
            Projects
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin + "/#education";
            }}
            className="bg-white rounded-full md:py-1 hover:bg-slate-200  "
          >
            Education
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin + "/#about";
            }}
            className="bg-white rounded-full md:py-1 hover:bg-slate-200 " 
          >
            About
          </button>
        </div>

      

      </div>
    
    </nav>
  );
};

export default Nav;
