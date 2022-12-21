import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";

const Projects = ({ isJapanese }: any) => {
  const language = {
    english: {
      title: "PROJECTS",
      thesaurace: {
        title: "ThesauRACE",
        text: (
          <>
            {" "}
            ThesauRACE is a multiplayer synonym guessing game I created. The
            main goal of this project was to learn how to better use sockets.
            <br />
            <br />
            This project also helped me learn more about CORS and Helmet.
          </>
        ),
      },
      blog: {
        title: "Blog",
        text: (
          <>
            Just a standard CRUD blog site. This uses passportJS user
            authentication for posting/editing.
            <br />
            <br />
            Building this project has made me adept at routing and using
            MongoDB.
          </>
        ),
      },
      finder: {
        title: "Finder",
        text: (
          <>
            Finder is a Where's Wally type of game. I used the BaaS website
            Firebase to handle the backend.
            <br />
            <br />
            Although I prefer making fullstack websites it's a great skill to
            have incase I ever need it.
          </>
        ),
      },
      profile: {
        title: "Profile Website (This)",
        text: (
          <>
            A place to display my projects and introduce myself.
            <br />
            <br />
            This website is also a good place to play around with Tailwind and
            front end design.
          </>
        ),
      },
      world: {
        title: "World Data (In Progress)",
        text: (
          <>
            The goal of this project is to become adept at using Apollo GraphQL
            by creating a CRUD app with authentication.
            <br />
            <br />
            This project is a fullstack TypeScript MERN application deployed on Heroku.
          </>
        ),
      },
    },
    japanese: {
      title: "PROJECTS",
      thesaurace: {
        title: "ThesauRACE",
        text: (
          <>
            {" "}
            ThesauRACEというプロジェクトはマルチプレイヤ同意語のレースゲームです。このプロジェクトのゴールはウェッブソケットを練習することです。
            <br />
            <br />
            CORSとHelmetについても勉強しました。
          </>
        ),
      },
      blog: {
        title: "ブロッグ",
        text: (
          <>
            CRUDを使っている普通のブロッグです。編集とポストのアクセスがpassportJSを使用されています。
            <br />
            <br />
            このプロジェクトではルーティングとMongoDBが上手になりました。
          </>
        ),
      },
      finder: {
        title: "人探し",
        text: (
          <>
            人探しというのはWhere's
            Wallyみたいなゲームです。FirebaseというBaaSと使用され、バックエンドを作成しました。
            <br />
            <br />
            フルスタックが好きだが、BaaSのスキルは大事だと思います。
          </>
        ),
      },
      profile: {
        title: "プロファイル（これ）",
        text: (
          <>
            私が作ったプロジェクトをショーケースするウェッブサイトです。
            <br />
            <br />
            このウェッブサイトはTailwindでデザインを遊ぶことできます。
          </>
        ),
      },
      world: {
        title: "世界データ (作成中)",
        text: (
          <>
            このプロジェクトのゴールはApollo GraphQLを上手になり、読みやすいフロントエンドを作成することです。
            <br />
            このプロジェクトの全体がTypescriptでかいてあるMERNアプリです。
          </>
        ),
      },
    },
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 0.9 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ type: "spring", stiffness: 80, duration: 1.5 }}
      >
        <div
          id="projects"
          className="flex flex-col text-center pt-20 justify-center items-center scroll-smooth lg:w-full lg:px-10 lg:pt-0 lg:border-2 lg:absolute lg:scale-[0.85] lg:bg-slate-400 lg:border-slate-900"
        >
          <p className="text-4xl lg:text-6xl font-light mb-10 ">
            {" "}
            {isJapanese ? language.japanese.title : language.english.title}
          </p>

          <div className="lg:grid lg:grid-cols-2 lg:gap-5 text-base md:text-xl">
            <div className="rounded-full  bg-slate-300  lg:w-full h-auto p-12 md:p-16 my-5">
              <p className="font-bold underline underline-offset-2 text-2xl">
                {isJapanese
                  ? language.japanese.world.title
                  : language.english.world.title}
              </p>
              <br />

              <p className="">
                <a
                  href="https://glacial-tor-64648.herokuapp.com/"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Chappo050/World_Data"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Github
                </a>
              </p>

              <p className="pt-10">
                {isJapanese
                  ? language.japanese.world.text
                  : language.english.world.text}
              </p>

              <div className=" grid grid-cols-3 text-xs sm:text-sm md:text-base lg:text-lg gap-3 pt-4 m-5">
                <p className="skill-dark">GraphQL</p>
                <p className="skill-dark">Apollo</p>
                <p className="skill-dark">React</p>
                <p className="skill-dark">TypeScript</p>
                <p className="skill-dark">Framer</p>
                <p className="skill-dark">Tailwind</p>
                <p className="skill-dark">Responsive Design</p>
              </div>
            </div>

            <div className="rounded-full  bg-slate-500  lg:w-full h-auto p-12 md:p-16 my-5">
              <p className="font-bold underline underline-offset-2 text-2xl">
                {isJapanese
                  ? language.japanese.profile.title
                  : language.english.profile.title}
              </p>
              <br />

              <p className="">
                <a
                  href="/"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Chappo050/Profile"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Github
                </a>
              </p>

              <p className="pt-10">
                {isJapanese
                  ? language.japanese.profile.text
                  : language.english.profile.text}
              </p>

              <div className=" grid grid-cols-3 text-xs sm:text-sm md:text-base lg:text-lg gap-3 pt-4 m-5">
                <p className="skill-light">React</p>
                <p className="skill-light">TypeScript</p>
                <p className="skill-light">Framer</p>
                <p className="skill-light">Tailwind</p>
                <p className="skill-light">Responsive Design</p>
              </div>
            </div>

            <div className="rounded-full  bg-slate-300  lg:w-full h-auto p-12 md:p-16 my-5">
              <p className="font-bold underline underline-offset-2 text-2xl">
                {isJapanese
                  ? language.japanese.thesaurace.title
                  : language.english.thesaurace.title}
              </p>
              <br />

              <p className="">
                <a
                  href="https://thesaurace.herokuapp.com/"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                >
                  Website
                </a>
                <a
                  href="https://github.com/Chappo050/Thesarace"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Github
                </a>
              </p>

              <p className="pt-10">
                {isJapanese
                  ? language.japanese.thesaurace.text
                  : language.english.thesaurace.text}
              </p>

              <div className=" grid grid-cols-3 text-xs sm:text-sm md:text-base lg:text-lg gap-3 pt-4 m-5">
                <p className="skill-dark">REST API</p>
                <p className="skill-dark">React</p>
                <p className="skill-dark">TypeScript</p>
                <p className="skill-dark">Socket.io</p>
                <p className="skill-dark">MongoDB</p>
                <p className="skill-dark">Mongoose</p>
                <p className="skill-dark">Node.js</p>
                <p className="skill-dark">Heroku</p>
                <p className="skill-dark">Tailwind</p>
              </div>
            </div>

            <div className="rounded-full  bg-slate-500  lg:w-full h-auto p-12 md:p-16 my-5">
              <p className="font-bold underline underline-offset-2 text-2xl">
                {isJapanese
                  ? language.japanese.blog.title
                  : language.english.blog.title}
              </p>
              <br />

              <p className="">
                <a
                  href="https://mern-blog-chappo050.herokuapp.com/"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Chappo050/Blog-Heroku"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Github
                </a>
              </p>

              <p className="pt-10">
                {isJapanese
                  ? language.japanese.blog.text
                  : language.english.blog.text}
              </p>

              <div className=" grid grid-cols-3 text-xs sm:text-sm md:text-base lg:text-lg gap-3 pt-4 m-5">
                <p className="skill-light">REST API</p>
                <p className="skill-light">React</p>
                <p className="skill-light">TypeScript</p>
                <p className="skill-light">MongoDB</p>
                <p className="skill-light">Mongoose</p>
                <p className="skill-light">Node.js</p>
                <p className="skill-light">Heroku</p>
                <p className="skill-light">Tailwind</p>
              </div>
            </div>

            <div className="rounded-full  bg-slate-300  lg:w-full h-auto p-12  md:p-16 my-5">
              <p className="font-bold underline underline-offset-2 text-2xl">
                {isJapanese
                  ? language.japanese.finder.title
                  : language.english.finder.title}
              </p>
              <br />

              <p className="">
                <a
                  href="https://chappo050.github.io/Finder-firebase/"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Chappo050/Finder-firebase"
                  className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Github
                </a>
              </p>

              <p className="pt-10">
                {isJapanese
                  ? language.japanese.finder.text
                  : language.english.finder.text}
              </p>

              <div className=" grid grid-cols-3 text-xs sm:text-sm md:text-base lg:text-lg gap-3 pt-4 m-5">
                <p className="skill-dark">React</p>
                <p className="skill-dark">JavaScript</p>
                <p className="skill-dark">Firebase</p>
                <p className="skill-dark">BaaS</p>
                <p className="skill-dark">Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
