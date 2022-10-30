import myPic from "../Images/me.jpeg";
import { motion, useDragControls } from "framer-motion";

const Profile = () => {
  const dragControls = useDragControls();

  function startDrag(event: any) {
    dragControls.start(event, { snapToCursor: true });
  }
  return (
    <div className="flex flex-col text-center justify-center items-center scroll-smooth pt-10 lg:-z-10  ">
      <div className="text-6xl lg:text-8xl font-light  mb-10">
        MATTHEW CHAPLIN
      </div>
      <div className="text-1xl lg:text-2xl font-extralight mb-10 rounded-full  bg-slate-300 w-auto px-5">
        HOBBY FULLSTACK DEVELOPER SEEKING EMPLOYMENT
      </div>

      <div className="grid grid-cols-1 lg:flex items-center justify-center lg:gap-20  ">
        <motion.div
          drag
          dragTransition={{ bounceStiffness: 600, bounceDamping: 5 }}
          dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
        >
          <div className="">
            <img
              alt="Matthew Chaplin"
              src={myPic}
              className="w-48 h-48 rounded-full mx-auto"
            />

            <span className="text-sm">drag me ► X</span>
          </div>
        </motion.div>
        <div className="rounded-full  bg-slate-300 w-auto m-10 lg:w-1/2 h-auto p-12 text-base md:text-lg lg:text-xl">
          Programming has always been interesting to me.
          <br />
          Wheather it is for games, robotics or automation.
          <br />
          <br />
          Although I have found web development to be the most intriguing;
          <br />
          specifically fullstack web development.
          <br />
          <br />
          Knowing all the ins and outs of both the front-end and back-end helps
          me in building a responsive website.
          <br />
        </div>
      </div>
    </div>
  );
};

export default Profile;
