import { AnimatePresence, motion, usePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Hamburger from "./components/Hamburger";
import Nav from "./components/Nav";
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
      <div className="md:hidden block sticky top-0 ">
        <Hamburger />
      </div>

      <div className="hidden md:block sticky top-0 ">
        <AiOutlineCloseCircle
          onClick={() => allClose()}
          size={40}
          className={
            showProjects || showAbout || showContact || showEducation
              ? "block"
              : "hidden"
          }
        />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          {showProjects ? <Projects active={showProjects} /> : null}
          {showEducation ? <Education active={showEducation} /> : null}
          {showAbout ? <AboutMe active={showAbout} /> : null}
          {showContact ? <AboutMe active={showContact} /> : null}
        </AnimatePresence>

        <div
          className={
            showProjects || showAbout || showContact || showEducation
              ? "blue-md blur-sm"
              : ""
          }
        >
          <Profile />
          <div id="home" className="text-center pt-12 text-4xl">
            <div className="grid grid-cols-4 gap-12 py-16 px-40">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowProjects(!showProjects);
                }}
              >
                <div className="bg-slate-300 rounded-full w-full h-40 p-5 m-4">
                  <span>PROJECTS</span>
                  <br />
                  <span className="text-base">
                    Take a look at the projects I have made.
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowEducation(!showEducation);
                }}
              >
                <div className="bg-slate-500 rounded-full w-full h-40 p-5 m-4">
                  <span>EDUCATION</span>
                  <br />
                  <span className="text-base">
                    My education and background.
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowAbout(!showAbout);
                }}
              >
                <div className="bg-slate-300 rounded-full w-full h-40 p-5 m-4">
                  <span>ABOUT</span>
                  <br />
                  <span className="text-base">
                    Learn a bit more about who I am.
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowProjects(!showProjects);
                }}
              >
                <div className="bg-slate-500 rounded-full w-full h-40 p-5 m-4">
                  <span>CONTACT</span>
                  <br />
                  <span className="text-base">Places you can contact me.</span>
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
