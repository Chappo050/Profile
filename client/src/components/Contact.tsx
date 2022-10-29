import { motion } from "framer-motion";

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
          id="about"
          className="flex flex-col text-center pt-32  justify-center items-center scroll-smooth lg:w-full lg:mt-52 lg:px-20 lg:opacity-[85%]  lg:pt-0 lg:border-2 lg:absolute  lg:left-1/2 lg:transform lg:-translate-x-1/2  lg:z-10 lg:scale-[0.8] lg:bg-slate-400 lg:border-slate-900"
          >
          <p className="text-4xl lg:text-6xl font-light  mb-10 underline">
            CONTACT
          </p>

          <div className="rounded-xl  bg-slate-300  lg:w-full h-auto p-5 m-5">
            <h1 className="text-2xl lg:text-4xl font-light mb-5 ">
              Fell free to contact me.
            </h1>

            <p className="lg:text-4xl">
              Email:  matthewchaplin60@gmail.com
              <br />
              <br />
              LinkedIn: <a href="https://www.linkedin.com/in/matthew-chaplin-dev/" className="hover:underline hover:text-blue-600"> https://www.linkedin.com/in/matthew-chaplin-dev/ </a> 
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
