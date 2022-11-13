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
  const language = {
    english: {
      projects: "PROJECTS",
      projectsText: "Take a look at the projects I have made",
      education: "EDUCATION",
      educationText: "My education and background",
      about: "ABOUT",
      aboutText: "Learn a  bit more about who I am",
      contact: "CONTACT",
      contactText: "Places you can contact me",
    },
    japanese: {
      projects: "プロジェクト",
      projectsText: "作ったプロジェクトの一覧",
      education: "教育",
      educationText: "教育履歴等",
      about: "私について",
      aboutText: "私の性格や趣味",
      contact: "コンタクト",
      contactText: "メールアドレス、LinkedIn等",
    },
  };

  //Change between languages
  const [isJapanese, setJapanese] = useState(false);

  const toggleSwitch = () => setJapanese(!isJapanese);

  const [showProjects, setShowProjects] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const allClose = (activate: boolean) => {
    if (
      activate &&
      (showAbout || showContact || showEducation || showProjects)
    ) {
      setShowProjects(false);
      setShowEducation(false);
      setShowAbout(false);
      setShowContact(false);
    }
  };

  return (
    <div className="-z-10 ">
      <div className="lg:hidden block sticky top-0 ">
        <Hamburger isJapanese={isJapanese} />   
        <div
          id="home"
          className="flex flex-col text-center justify-center items-center scroll-smooth m-0 "
        >
          <div />
          <div className="block">
          <Switch isJapanese={isJapanese} toggleSwitch={toggleSwitch} />
          </div>

          <Profile isJapanese={isJapanese} />
          <Projects isJapanese={isJapanese}/>
          <Education isJapanese={isJapanese}/>
          <AboutMe isJapanese={isJapanese}/>
          <Contact isJapanese={isJapanese}/>
          <div />
        </div>
      </div>

      <div className="hidden lg:block  ">
        <AiOutlineCloseCircle
          onClick={() => allClose(true)}
          size={44}
          className={
            showProjects || showAbout || showContact || showEducation
              ? "block sticky top-12 left-[48%] text-slate-800 w-16 h-16 z-10 hover:text-slate-200"
              : "hidden"
          }
        />

        <div onClick={() => allClose(false)}>
          <AnimatePresence>
            {!showProjects ? null : <Projects isJapanese={isJapanese}  />}

            {showEducation ? <Education isJapanese={isJapanese}  /> : null}

            {showAbout ? <AboutMe isJapanese={isJapanese}  /> : null}

            {showContact ? <Contact isJapanese={isJapanese}  /> : null}
          </AnimatePresence>
        </div>
        <div
          className={
            showProjects || showAbout || showContact || showEducation
              ? " blur-sm opacity-[10%] -z-10 sticky  "
              : ""
          }
        >
          <div className="absolute top-10 left-10 ">
            <Switch isJapanese={isJapanese} toggleSwitch={toggleSwitch} />
          </div>
          <Profile isJapanese={isJapanese} />
          <div id="home" className="text-center pt-12 text-4xl ">
            <div className="grid grid-cols-4 gap-12 py-10 px-40">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setShowProjects(!showProjects);
                  setShowAbout(false);
                  setShowContact(false);
                  setShowEducation(false);
                }}
              >
                <div className="bg-slate-300 rounded-full w-full h-full  p-10 ">
                  <span className="text-base sm:text-2xl lg:text-xl 2xl:text-4xl">
                    {isJapanese
                      ? language.japanese.projects
                      : language.english.projects}
                  </span>
                  <br />
                  <span className="text-base">
                    {isJapanese
                      ? language.japanese.projectsText
                      : language.english.projectsText}
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setShowProjects(false);
                  setShowAbout(false);
                  setShowContact(false);
                  setShowEducation(!showEducation);
                }}
              >
                <div className="bg-slate-500 rounded-full w-full h-full  p-10 ">
                  <span className="text-base sm:text-2xl lg:text-xl  2xl:text-4xl">
                    {isJapanese
                      ? language.japanese.education
                      : language.english.education}
                  </span>
                  <br />
                  <span className="text-base">
                    {isJapanese
                      ? language.japanese.educationText
                      : language.english.educationText}
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setShowProjects(false);
                  setShowAbout(!showAbout);
                  setShowContact(false);
                  setShowEducation(false);
                }}
              >
                <div className="bg-slate-300 rounded-full w-full h-full  p-10 ">
                  <span className="text-base sm:text-2xl lg:text-xl  2xl:text-4xl">
                    {isJapanese
                      ? language.japanese.about
                      : language.english.about}
                  </span>
                  <br />
                  <span className="text-base">
                    {isJapanese
                      ? language.japanese.aboutText
                      : language.english.aboutText}
                  </span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setShowProjects(false);
                  setShowAbout(false);
                  setShowContact(!showContact);
                  setShowEducation(false);
                }}
              >
                <div className="bg-slate-500 rounded-full w-full h-full p-10 ">
                  <span className="text-base sm:text-2xl lg:text-xl  2xl:text-4xl ">
                    {isJapanese
                      ? language.japanese.contact
                      : language.english.contact}
                  </span>
                  <br />
                  <span className="text-base ">
                    {isJapanese
                      ? language.japanese.contactText
                      : language.english.contactText}
                  </span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Switch = ({ isJapanese, toggleSwitch }: any) => {
  const spring = {
    type: "spring",
    stiffness: 2000,
    damping: 100,
  };
  return (
    <div
      className={
        isJapanese
          ? "flex rounded-full justify-start cursor-pointer p-2 bg-slate-200 w-20 h-10 scale-70 mb-10"
          : "flex rounded-full justify-end cursor-pointer p-2 bg-slate-500 w-20 h-10 scale-70 mb-10"
      }
      onClick={() => toggleSwitch()}
    >
      {isJapanese ? (
        <span className="text-sm absolute px-2 font-bold">日本語</span>
      ) : (
        <span className="text-sm absolute px-2 font-bold">English</span>
      )}

      <motion.div
        className="bg-white w-5 h-5 border-4 rounded-full p-2"
        layout
        transition={spring}
      />
    </div>
  );
};

export default App;
