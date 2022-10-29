import { AnimatePresence, motion, usePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Hamburger from "./components/Hamburger";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

import { AiOutlineCloseCircle } from "react-icons/ai";

const App = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const allClose = () => {
    setShowProjects(false);
    setShowEducation(false);
    setShowAbout(false);
    setShowContact(false);
  };
  return (
    <div>
      <div className="lg:hidden block sticky top-0 ">
        <Hamburger />
        <div
          id="home"
          className="flex flex-col text-center justify-center items-center pt-12 scroll-smooth m-10 "
        >
          <div />
          <Profile />
          <Projects />
          <Education />
          <AboutMe />
          <Contact />
          <div />
        </div>
      </div>

      <div className="hidden lg:block ">
        <AiOutlineCloseCircle
          onClick={() => allClose()}
          size={40}
          className={
            showProjects || showAbout || showContact || showEducation
              ? "block sticky top-10 left-10 text-slate-700 w-12 h-12 z-10 hover:text-slate-200"
              : "hidden"
          }
        />
        <AnimatePresence>
          {!showProjects ? null : <Projects />}

          {showEducation ? <Education  /> : null}

          {showAbout ? <AboutMe /> : null}

          {showContact ? <Contact /> : null}
        </AnimatePresence>

        <div
          className={
            showProjects || showAbout || showContact || showEducation
              ? " blur-sm opacity-[55%] -z-10 absolute "
              : ""
          }
        >
          <Profile />
          <div id="home" className="text-center pt-12 text-4xl">
            <div className="grid grid-cols-4 gap-12 py-16 px-40">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{scale:1.1}}
                onClick={() => {
                  setShowProjects(!showProjects);
                  setShowAbout(false);
                  setShowContact(false);
                  setShowEducation(false);
                }}
              >
                <div className="bg-slate-300 rounded-full w-full h-full  p-10 ">
                  <span className="text-base sm:text-2xl lg:text-xl 2xl:text-4xl">PROJECTS</span>
                  <br />
                  <span className="text-base">
                    Take a look at the projects I have made.
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{scale:1.1}}
                onClick={() => {
                  setShowProjects(false);
                  setShowAbout(false);
                  setShowContact(false);
                  setShowEducation(!showEducation);
                }}
              >
                <div className="bg-slate-500 rounded-full w-full h-full  p-10 ">
                  <span className="text-base sm:text-2xl lg:text-xl  2xl:text-4xl">EDUCATION</span>
                  <br />
                  <span className="text-base">
                    My education and background.
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{scale:1.1}}
                onClick={() => {
                  setShowProjects(false);
                  setShowAbout(!showAbout);
                  setShowContact(false);
                  setShowEducation(false);
                }}
              >
                <div className="bg-slate-300 rounded-full w-full h-full  p-10 ">
                  <span className="text-base sm:text-2xl lg:text-xl  2xl:text-4xl">ABOUT</span>
                  <br />
                  <span className="text-base">
                    Learn a bit more about who I am.
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{scale:1.1}}
                onClick={() => {
                  setShowProjects(false);
                  setShowAbout(false);
                  setShowContact(!showContact);
                  setShowEducation(false);
                }}
              >
                <div className="bg-slate-500 rounded-full w-full h-full p-10 ">
                  <span className="text-base sm:text-2xl lg:text-xl  2xl:text-4xl ">CONTACT</span>
                  <br />
                  <span className="text-base ">Places you can contact me.</span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
