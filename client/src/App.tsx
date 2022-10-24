import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Hamburger from "./components/Hamburger";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div>
      <div className="md:hidden block sticky top-0 ">
      <Hamburger/>
      </div>
      <div className=" hidden md:block sticky top-0">
      <Nav />
      </div>
    
    
      <div id="home" className="flex flex-col text-center justify-center items-center pt-12 scroll-smooth">
        <div />
        <Profile />
        <Projects />
        <Education />
        <AboutMe />
        <div />
      </div>
    </div>
  );
};

export default App;
