import { motion } from "framer-motion";

const AboutMe = ({ isJapanese }: any) => {
  const language = {
    english: {
      title: "ABOUT",
      whyProg: {
        title: "WHY PROGRAMMING?",
        text: (
          <>
            {" "}
            I am always seeking something new to learn, this is why I studied
            science at university.
            <br />
            Although I love science it is hard to self-study and have something
            to show for it.
            <br />
            <br />
            This is where programming comes in. There is always some new
            technology to learn (or some old one) and it's generally free and
            open source which amazes me.
            <br />
            With programming I can improve me skills whenever I have time,
            automate my job or build something for myself.
          </>
        ),
      },
      hobbies: {
        title: "HOBBIES",
        text: (
          <>
            {" "}
            <ul>Hiking: Love spending a day in nature</ul>
            <ul>Bouldering: Great exercise and fun problem solving</ul>
            <ul>Travel: Always something new to learn from another culture</ul>
            <ul>
              Language Learning: Languages are interesting as it can change your
              outlook on certian thing. (Fluent in Japanese)
            </ul>
          </>
        ),
      },
    },
    japanese: {
      title: "私について",
      whyProg: {
        title: "プログラミングを勉強している理由は",
        text: (
          <>
            {" "}
            私はいつも新しいことを探し勉強したい人としては大学で科学を勉強しましたが、家にいる一人であまり進めないことです。
            <br />
            <br />
            この理由ではプログラミングが好きになりました。いつも新しいテクノロジーや古いテクノロジーを一人で勉強できます。
            <br />
            さらにこのテクノロジーが普通に自由です。すごいと思いませんか。
            <br />
            <br />
            プログラミングのスキルでは時間があれば、上手になることができます。また、プログラミングは仕事に、私にも、友達にも、使えるスキルです。
          </>
        ),
      },
      hobbies: {
        title: "趣味",
        text: (
          <>
            {" "}
            <ul>ハイキング</ul>
            <ul>ボルダリング</ul>
            <ul>旅行</ul>
            <ul>
            言語の勉強 （英語と日本語）
            </ul>
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
          id="about"
          className="flex flex-col text-center pt-20 justify-center items-center scroll-smooth lg:w-full lg:mt-40 lg:px-20 lg:pt-0 lg:border-2 lg:absolute lg:scale-[0.8] lg:bg-slate-400 lg:border-slate-900"
        >
          <p className="text-4xl lg:text-6xl font-light  mb-10 ">
            {isJapanese ? language.japanese.title : language.english.title}
          </p>

          <div className="rounded-xl  bg-slate-300  lg:w-full h-auto p-5 m-5 text-base md:text-lg lg:text-xl">
            <p className="text-2xl lg:text-3xl font-light mb-5 ">
              {isJapanese
                ? language.japanese.whyProg.title
                : language.english.whyProg.title}
            </p>

            <p className="">
              {isJapanese
                ? language.japanese.whyProg.text
                : language.english.whyProg.text}
            </p>
          </div>

          <div className="rounded-xl  bg-slate-500  lg:w-full h-auto p-5 m-5 w-screen text-base md:text-lg lg:text-xl">
            <p className="text-2xl lg:text-3xl font-light mb-5 ">
              {" "}
              {isJapanese
                ? language.japanese.hobbies.title
                : language.english.hobbies.title}
            </p>

            <p className="">
              {isJapanese
                ? language.japanese.hobbies.text
                : language.english.hobbies.text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
