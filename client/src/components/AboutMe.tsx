import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 0.9 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 1.5 }}
      >
        <div
          id="about"
          className="flex flex-col text-center pt-32  justify-center items-center scroll-smooth lg:w-full lg:mt-40 lg:opacity-[85%]  lg:px-20 lg:pt-0 lg:border-2 lg:absolute  lg:left-1/2 lg:transform lg:-translate-x-1/2  lg:z-10 lg:scale-[0.8] lg:bg-slate-400 lg:border-slate-900"
          >
          <p className="text-4xl lg:text-6xl font-light  mb-10 underline">
            ABOUT
          </p>

          <div className="rounded-xl  bg-slate-300  lg:w-full h-auto p-5 m-5">
            <p className="text-2xl lg:text-3xl font-light mb-5 ">
              WHY PROGRAMMING?
            </p>

            <p className="">
              I am always seeking something new to learn, this is why I studied
              science at university.
              <br />
              Although I love science it is hard to self-study and have
              something to show for it.
              <br />
              <br />
              This is where programming comes in. There is always some new
              technology to learn (or some old one) and it's generally free and
              open source which amazes me.
              <br />
              With programming I can improve me skills whenever I have time,
              automate my job or build something for my friends.
            </p>
          </div>

          <div className="rounded-xl  bg-slate-500  lg:w-full h-auto p-5 m-5">
            <p className="text-2xl lg:text-3xl font-light mb-5 ">HOBBIES</p>

            <p className="">
              <li>Hiking: Love spending a day in nature</li>
              <li>Bouldering: Great exercise and fun problem solving</li>
              <li>
                Travel: Always something new to learn from another culture
              </li>
              <li>
                Language Learning: Languages are interesting as it can change
                your outlook on certian thing. (Fluent in Japanese)
              </li>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
