import { Transition } from '@headlessui/react';

const Projects = ({active} :any) => {


  return (
<Transition
as='div'
show={active}
enter="transition-all transform duration-1000 ease-out"
enterFrom="transform scale-95 opacity-0"
enterTo="transform scale-100 opacity-100"
leave="transition-all transform duration-1000 duration-75 ease-out"
leaveFrom="transform scale-100 opacity-100"
leaveTo="transform scale-95 opacity-0"
>

    <div id="projects" className="flex flex-col text-center pt-32 justify-center items-center scroll-smooth md:border-2 md:m-10 md:absolute md:z-10 md:scale-75  md:bg-slate-400 md:border-slate-900">
      <p className="text-4xl md:text-6xl font-light  mb-10 underline">
        PROJECTS
      </p>

      <p className="text-1xl md:text-2xl font-extralight mb-10">
        Here are some of the projects I have been working on. For every project
        I try my best to use a technology I have never used before.
      </p>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-5">
        <div className="rounded-full  bg-slate-300  md:w-full h-auto p-16 my-5">
          <p className="font-bold underline underline-offset-2 text-2xl">
            ThesauRACE
          </p>
          <br />

          <p className="">
            <a
              href="https://thesaurace.herokuapp.com/"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Website
            </a>
            <a
              href="https://github.com/Chappo050/Thesarace"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Github
            </a>
          </p>

          <p className="pt-10">
            ThesauRACE is a little game I made to practice using sockets.
            Muliplayer utilizes socket.io to host rooms of 2 people for a versus
            match.
            <br />
            <br />
            This project also made me learn about CORS and Helmet.
          </p>

          <div className=" grid grid-cols-3 text-sm lg:text-base gap-3  pt-4">
            <p className=" rounded-2xl bg-slate-500 w-full">React</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">TypeScript</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">Socket.io</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">MongoDB</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">Mongoose</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">Node.js</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">Heroku</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">Tailwind</p>
          </div>
        </div>

        <div className="rounded-full  bg-slate-500  md:w-full h-auto p-16 my-5">
          <p className="font-bold underline underline-offset-2 text-2xl">
            Blog
          </p>
          <br />

          <p className="">
            <a
              href="https://mern-blog-chappo050.herokuapp.com/"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Website
            </a>
            <a
              href="https://github.com/Chappo050/Blog-Heroku"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Github
            </a>
          </p>

          <p className="pt-10">
            Just a standard blog site. This uses passportJS user authentication
            for posting/editing.
            <br />
            <br />
            Building this project has made me adept at routing and using
            MongoDB.
          </p>

          <div className=" grid grid-cols-3 text-sm lg:text-base gap-3 pt-4">
            <p className=" rounded-2xl bg-slate-300 w-full ">React</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">TypeScript</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">MongoDB</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">Mongoose</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">Node.js</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">Heroku</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">Tailwind</p>
          </div>
        </div>

        <div className="rounded-full  bg-slate-300  md:w-full h-auto p-16 my-5">
          <p className="font-bold underline underline-offset-2 text-2xl">
            Finder
          </p>
          <br />

          <p className="">
            <a
              href="https://chappo050.github.io/Finder-firebase/"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Website
            </a>
            <a
              href="https://github.com/Chappo050/Finder-firebase"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Github
            </a>
          </p>

          <p className="pt-10">
            Finder is just Where's Wally. I used the BaaS website Firebase to
            handle the backend.
            <br />
            <br />
            Although I prefer making fullstack websites it's a great skill to
            have incase I ever need it.
          </p>


          <div className=" grid grid-cols-3 text-sm lg:text-base gap-3 pt-4">
            <p className=" rounded-2xl bg-slate-500 w-full ">React</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">JavaScript</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">Firebase</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">BaaS</p>
            <p className=" rounded-2xl bg-slate-500 w-full ">Tailwind</p>
          </div>
        </div>

        <div className="rounded-full  bg-slate-500  md:w-full h-auto p-16 my-5">
          <p className="font-bold underline underline-offset-2 text-2xl">
            Profile Website (This)
          </p>
          <br />

          <p className="">
            <a
              href="/"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Website
            </a>
            <a
              href="https://github.com/Chappo050/Profile"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Github
            </a>
          </p>

          <p className="pt-10">
            A place to display my projects and introduce myself
            <br />
            <br />
            This also doubles as a website to focus on design.
          </p>


          <div className=" grid grid-cols-3 text-sm lg:text-base gap-3 pt-4">
            <p className=" rounded-2xl bg-slate-300 w-full ">React</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">TypeScript</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">Heroku</p>
            <p className=" rounded-2xl bg-slate-300 w-full ">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
    </Transition>
  );
};

export default Projects;
