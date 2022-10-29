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
          className="flex flex-col text-center pt-32  justify-center items-center scroll-smooth md:w-full md:mt-52 md:px-20 md:opacity-[85%]  md:pt-0 md:border-2 md:absolute  md:left-1/2 md:transform md:-translate-x-1/2  md:z-10 md:scale-[0.8] md:bg-slate-400 md:border-slate-900"
          >
          <p className="text-4xl md:text-6xl font-light  mb-10 underline">
            CONTACT
          </p>

          <div className="rounded-xl  bg-slate-300  md:w-full h-auto p-5 m-5">
            <h1 className="text-2xl md:text-4xl font-light mb-5 ">
              Fell free to contact me.
            </h1>

            <p className="md:text-4xl">
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
