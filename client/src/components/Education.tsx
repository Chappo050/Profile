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
          className="flex flex-col text-center pt-20 justify-center items-center scroll-smooth lg:w-full  lg:px-20 lg:pt-0 lg:border-2 lg:absolute  lg:left-1/2 lg:transform lg:-translate-x-1/2  lg:z-10 lg:scale-[0.8] lg:bg-slate-400 lg:border-slate-900"
        >
          <p className="text-4xl lg:text-6xl font-light mb-10 underline ">
            EDUCATION
          </p>

          <div className="lg:flex lg:flex-col-2  lg:gap-10 text-base md:text-lg lg:text-xl">
            <div>

            
            <p className="text-2xl lg:text-3xl font-light my-5 ">PROGRAMMING</p>
            <div className="rounded-xl  bg-slate-300  lg:w-auto h-auto p-5 m-5  ">
              <p className="text-2xl lg:text-3xl font-light mb-5 ">
                FULL STACK WEB DEVELOPMENT
              </p>

              <p className="">
                First of all I am a self taught programmer, so I have no formal
                education in this area.
                <br />
                For fullstack web development I completed{" "}
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript?"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm md:text-base lg:text-lg px-5 py-0.5 mr-2 mb-2 focus:outline-none"
                >
                  The Odin Project
                </a>
                .
                <br />
                <br />
                This didn't teach many essential skills; so I took it upon
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

            <div className="rounded-xl  bg-slate-500  lg:w-auto h-auto p-5 m-5">
              <p className="text-2xl lg:text-3xl font-light mb-5 ">
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

            
            <p className="text-2xl lg:text-3xl font-light my-5 ">UNIVERSITY</p>

            <div className="rounded-xl  bg-slate-300  lg:w-auto h-auto p-5 m-5">
              <p className="text-2xl lg:text-3xl font-light ">
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

            <div className="rounded-xl  bg-slate-500  lg:w-auto h-auto p-5 m-5">
              <p className="text-2xl lg:text-3xl font-light  ">
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
