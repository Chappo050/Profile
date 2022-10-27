import myPic from "../Images/me.jpeg";

const Profile = () => {
  return (
    <div  className="flex flex-col text-center justify-center items-center scroll-smooth  ">
      <div className="text-6xl md:text-8xl font-light  mb-10">
        MATTHEW CHAPLIN
      </div>

      <div className="text-1xl md:text-2xl font-extralight mb-10">
        HOBBY FULLSTACK DEVELOPER SEEKING EMPLOYMENT
      </div>

      <div className="">
        <img
          alt="Matthew Chaplin"
          src={myPic}
          className="object-none w-48 h-48 rounded-full mb-10"
        />

      </div>

      <div className="rounded-full   bg-slate-300  w-auto md:w-1/2 h-auto p-12">
      Copy
Programming has always been interesting to me. 
<br/>
Wheather it is for games, robotics or automation.
<br/>
<br/>
Although I have found web development to be the most intreging;
<br/>
 specifically fullstack web development.
<br/>
<br/>
Knowing all the ins and outs of both the front-end and back-end helps me in building a responsive website.
<br/>
        </div>
    </div>
  );
};

export default Profile;
