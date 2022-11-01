import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 0.9 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 1.5 }}
      >
        <div
          id="contact"
          className="flex flex-col text-center pt-20 pb-40  justify-center items-center scroll-smooth lg:w-full lg:mt-52 lg:px-20  lg:pt-0 lg:border-2 lg:absolute lg:scale-[0.8] lg:bg-slate-400 lg:border-slate-900"
        >
          <p className="text-4xl lg:text-6xl font-light  mb-10 ">
            CONTACT
          </p>

          <div className="rounded-xl  bg-slate-300  lg:w-full h-auto p-5 m-5 ">
            <h1 className="text-2xl lg:text-4xl font-light mb-5 ">
              Fell free to contact me.
            </h1>

            <p className="lg:text-4xl ">
              Email: <a     className="hover:underline hover:text-slate-700" href={`mailto:matthewchaplin60@gmail.com?subject=Inquiry_Message`}>matthewchaplin60@gmail.com</a>
              <br />
              <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/matthew-chaplin-dev/"
                className="hover:underline hover:text-slate-700"
              >
                {" "}
                https://www.linkedin.com/in/matthew-chaplin-dev/{" "}
              </a>
            </p>
            <div className="flex justify-center gap-10 p-5 ">
              <a href="https://github.com/Chappo050" className="text-4xl md:text-6xl hover:text-slate-700">
                {" "}
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-chaplin-dev/"
                className="text-4xl md:text-6xl hover:text-slate-700"
              >
                {" "}
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
