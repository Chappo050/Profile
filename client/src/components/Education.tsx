import { motion } from "framer-motion";

const Education = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 0.9 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 1.5 }}
      >
        <div
          id="education"
          className="flex flex-col text-center pt-32  justify-center items-center scroll-smooth md:w-full  md:opacity-[85%]  md:px-20 md:pt-0 md:border-2 md:absolute  md:left-1/2 md:transform md:-translate-x-1/2  md:z-10 md:scale-[0.8] md:bg-slate-400 md:border-slate-900"
        >
          <p className="text-4xl md:text-6xl font-light mb-10 underline ">
            EDUCATION
          </p>

          <div className="flex flex-col-2  gap-10 md:text-xl">
            <div>

            
            <p className="text-2xl md:text-3xl font-light my-5 ">PROGRAMMING</p>
            <div className="rounded-xl  bg-slate-300  md:w-auto h-auto p-5 m-5 ">
              <p className="text-2xl md:text-3xl font-light mb-5 ">
                FULL STACK WEB DEVELOPMENT
              </p>

              <p className="">
                First of all I am a self taught programmer, so I have no formal
                education in this area.
                <br />
                For fullstack web development I completed{" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript?"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 focus:outline-none"
                >
                  The Odin Project
                </a>
                .
                <br />
                <br />
                This didn't teach many many essential skills; so I took it upon
                myself to learn: <br /> TypeScript, Tailwind (also Bootstrap but
                prefer Tailwind) and more complex backend technologies.
                <br />
                <br />
                This got my extreamly interested in web development so I have
                continued to build full stack projects for anything that I may
                find fun.
                <br />
                <br />
                Please check out my projects above for what I have been
                building.
              </p>
            </div>

            <div className="rounded-xl  bg-slate-500  md:w-auto h-auto p-5 m-5">
              <p className="text-2xl md:text-3xl font-light mb-5 ">
                OTHER PROGRAMMING
              </p>

              <p className="">
                Here is a list of things I have learnt along my programming
                journey.
                <br />
                <br />
                <li>
                  Rust (the language interested me bacuase of how it works).{" "}
                </li>
                <li>Data Science/Automation using Python.</li>
                <li>Game Development using Unity (C#). </li>
                <li>Arduino (C++). </li>
                <br />
                <br />I can leverage any of these skills when needed. Data
                Science and Automation have proven to be extreamly useful in my
                science jobs.
              </p>
            </div>
            </div>
            <div>

            
            <p className="text-2xl md:text-3xl font-light my-5 ">UNIVERSITY</p>

            <div className="rounded-xl  bg-slate-300  md:w-auto h-auto p-5 m-5">
              <p className="text-2xl md:text-3xl font-light ">
                Bachelor of Science (Chemistry) (Honours)
              </p>

              <p className="">
                La Trobe University
                <br />
                2016-2016
                <br />
                <br />
                Achieved 1st class honours. Thesis: Simulated and Measured
                Lattice Vibrations for Nitrile Ices Present on Titan
                <br />
                This thesis required the use of supercomputers and programming
                in the Gaussian language for chemical simulations.
              </p>
            </div>

            <div className="rounded-xl  bg-slate-500  md:w-auto h-auto p-5 m-5">
              <p className="text-2xl md:text-3xl font-light  ">
                Bachelor of Biotechnology and Chemistry
              </p>

              <p className="">
                Swinburne University of Technology
                <br />
                2012-2015
                <br />
                <br />
                Final year of university I took an interest in computer
                chemistry. This class taught me how to use Gaussian for chemical
                similations.
              </p>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
