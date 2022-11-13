import { motion } from "framer-motion";

const Education = ({ isJapanese }: any) => {
  const language = {
    english: {
      title: "EDUCATION",
      programming: {
        title: "PROGRAMMING",
        fullstack: {
          title: "FULLSTACK WEB DEVELOPMENT",
          text: (
            <>
              First of all I am a self taught programmer, so I have no formal
              education in this area.
              <br />
              For fullstack web development I completed{" "}
              <a
                href="https://www.theodinproject.com/paths/full-stack-javascript?"
                className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm md:text-base lg:text-lg px-5 py-0.5 mr-2 mb-2 focus:outline-none"
              >
                The Odin Project
              </a>
              .
              <br />
              <br />
              This didn't teach many essential skills; so I took it upon myself
              to learn: <br /> TypeScript, Tailwind (also Bootstrap but prefer
              Tailwind), graphQL and more complex backend technologies.
              <br />
              <br />
              This got my extreamly interested in web development so I have
              continued to build full stack projects for anything that I may
              find fun.
              <br />
              <br />
              Please check out my projects above for what I have been building.
            </>
          ),
        },

        other: {
          title: "OTHER",
          text: (
            <>
              Here is a list of things I have learnt along my programming
              journey.
              <br />
              <br />
              <ul>
                Rust (the language interested me bacuase of how it works).{" "}
              </ul>
              <ul>Data Science/Automation using Python.</ul>
              <ul>Game Development using Unity (C#). </ul>
              <ul>Arduino (C++). </ul>
              <br />
              I can leverage any of these skills when needed. Data Science
              and Automation have proven to be extreamly useful in my science
              jobs.
            </>
          ),
        },
      },

      university: {
        title: "UNIVERSITY",
        bachelor: {
          title: "Bachelor of Biotechnology and Chemistry",
          text: (
            <>
              Swinburne University of Technology
              <br />
              2012-2015
              <br />
              <br />
              Final year of university I took an interest in computer chemistry.
              This class taught me how to use Gaussian for chemical similations.
            </>
          ),
        },

        honours: {
          title: "Bachelor of Science (Chemistry) (Honours)",
          text: (
            <>
              La Trobe University
              <br />
              2016-2016
              <br />
              <br />
              Achieved 1st class honours. Thesis: Simulated and Measured Lattice
              Vibrations for Nitrile Ices Present on Titan
              <br />
              This thesis required the use of supercomputers and programming in
              the Gaussian language for chemical simulations.
            </>
          ),
        },
      },
    },
    japanese: {
      title: "教育履歴",
      programming: {
        title: "プログラミング",
        fullstack: {
          title: "フルスタックエンジニア",
          text: (
            <>
              まずは、プログラミングのスキルが全部一人でまなびました。
              <br />
              フルスタックエンジニアの最初のコースは
              <a
                href="https://www.theodinproject.com/paths/full-stack-javascript?"
                className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm md:text-base lg:text-lg px-5 py-0.5 mr-2 mb-2 focus:outline-none"
              >
                The Odin Project
              </a>
              です。
              <br />
              <br />
              このコースではJavascript、HTML、CSS、React、NodeJS、MongoDB、REST
              APIの初心者のスキルを勉強しましたが
              <br />
              Typescript,　GraphQL、Tailwind、Bootstrap等の内容が全くなく、一人で学びました。
              <br />
              <br />
              このコースのおかげで、興味があるプロジェクトを作成、スキルアップしています。
              <br />
              <br />
              このウェッブサイトに乗ってあるプロジェクトをご覧ください。
            </>
          ),
        },

        other: {
          title: "他は",
          text: (
            <>
              今までのプログラミング言語を勉強したこと
              <br />
              <br />
              <ul>Rust:（言語の仕組みが面白く、安全）</ul>
              <ul>Python: データサイエンス・AI・自動的なこと</ul>
              <ul>C#: ゲーム用(Unity)</ul>
              <ul>C++: Arduino</ul>
              <br />
              色んな言語の知識があり、必要なら仕事等には使えます。
            </>
          ),
        },
      },

      university: {
        title: "大学",
        bachelor: {
          title: "Bachelor of Biotechnology and Chemistry",
          text: (
            <>
              Swinburne University of Technology
              <br />
              2012-2015
              <br />
              <br />
              ３年生としてはコンピュータ化学を興味があり、Gaussianを勉強しました。
            </>
          ),
        },

        honours: {
          title: "Bachelor of Science (Chemistry) (Honours)",
          text: (
            <>
              La Trobe University
              <br />
              2016-2016
              <br />
              <br />
              最高の点数を遂げました。 (1st class honours)
            </>
          ),
        },
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
          id="education"
          className="flex flex-col text-center pt-20 justify-center items-center scroll-smooth lg:w-full lg:px-20 lg:pt-0 lg:border-2 lg:absolute lg:scale-[0.8] lg:bg-slate-400 lg:border-slate-900"
        >
          <p className="text-4xl lg:text-6xl font-light mb-10 ">
            {isJapanese ? language.japanese.title : language.english.title}
          </p>

          <div className="lg:flex lg:flex-col-2  lg:gap-10 text-base md:text-lg lg:text-xl">
            <div>
              <p className="text-2xl lg:text-3xl font-light my-5 ">
                {isJapanese
                  ? language.japanese.programming.title
                  : language.english.programming.title}
              </p>
              <div className="rounded-xl  bg-slate-300  lg:w-auto h-auto p-5 m-5  ">
                <p className="text-2xl lg:text-3xl font-light mb-5 ">
                  {isJapanese
                    ? language.japanese.programming.fullstack.title
                    : language.english.programming.fullstack.title}
                </p>

                <p className="">
                  {isJapanese
                    ? language.japanese.programming.fullstack.text
                    : language.english.programming.fullstack.text}
                </p>
              </div>

              <div className="rounded-xl  bg-slate-500  lg:w-auto h-auto p-5 m-5">
                <p className="text-2xl lg:text-3xl font-light mb-5 ">
                  {isJapanese
                    ? language.japanese.programming.other.title
                    : language.english.programming.other.title}
                </p>

                <p className="">
                  {isJapanese
                    ? language.japanese.programming.other.text
                    : language.english.programming.other.text}
                </p>
              </div>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-light my-5 ">
                {isJapanese
                  ? language.japanese.university.title
                  : language.english.university.title}
              </p>

              <div className="rounded-xl  bg-slate-300  lg:w-auto h-auto p-5 m-5">
                <p className="text-2xl lg:text-3xl font-light ">
                  {isJapanese
                    ? language.japanese.university.honours.title
                    : language.english.university.honours.title}
                </p>

                <p className="">
                  {isJapanese
                    ? language.japanese.university.honours.text
                    : language.english.university.honours.text}
                </p>
              </div>

              <div className="rounded-xl  bg-slate-500  lg:w-auto h-auto p-5 m-5">
                <p className="text-2xl lg:text-3xl font-light  ">
                  {isJapanese
                    ? language.japanese.university.bachelor.title
                    : language.english.university.bachelor.title}
                </p>

                <p className="">
                  {isJapanese
                    ? language.japanese.university.bachelor.text
                    : language.english.university.bachelor.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
