const Nav = () => {
  return (
    <nav className="sticky top-0 w-auto bg-slate-500 text-black md:py-2">
      <div className=" grid grid-cols-3 text-sm md:text-lg text-custom-blue font-semibold text-center">
        <div/>
        <div className=" grid grid-cols-5">
          <ul>Home</ul>
          <ul>My Projects</ul>
          <ul>My Education</ul>
          <ul>About</ul>
          <ul>Links</ul>
        </div>
        <div/>
      </div>
    </nav>
  );
};

export default Nav;
