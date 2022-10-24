import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div>
      <Nav />
      <div id="home" className="flex flex-col text-center justify-center items-center pt-12">
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
