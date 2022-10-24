import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col text-center justify-center items-center pt-12">
        <div />
        <Profile />
        <Projects />
        <div />
      </div>
    </div>
  );
};

export default App;
