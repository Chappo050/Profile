const Nav = () => {
  return (
    <nav className="sticky top-0 w-auto bg-slate-500 text-black md:py-2">
      <div className=" grid grid-cols-3 text-sm md:text-lg text-custom-blue font-semibold text-center">
        <div/>
        <div className=" grid grid-cols-4">
          <ul onClick={(e) => { e.preventDefault(); window.location.replace("/#home")}} >Home</ul>
          <ul onClick={(e) => { e.preventDefault(); window.location.replace("/#projects")}}>Projects</ul>
          <ul onClick={(e) => { e.preventDefault(); window.location.replace("/#education")}}>Education</ul>
          <ul onClick={(e) => { e.preventDefault(); window.location.replace("/#about")}}>About</ul>
        </div>
        <div/>
      </div>
    </nav>
  );
};

export default Nav;
