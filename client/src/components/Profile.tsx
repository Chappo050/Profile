import myPic from "../Images/me.jpeg";

const Profile = ({isJapanese}: any) => {
  const language = {
    english: {
      name: "MATTHEW CHAPLIN",
      header: "HOBBY FULLSTACK DEVELOPER SEEKING EMPLOYMENT",
      description: (
        <>
          I am a self taugh full stack web developer.
          <br />
          Learning full stack development has allowed to me understand all the
          ins and outs of making a responsive website..
          <br />
          <br />
          Currently I am the most confident in using the MERN stack to develop
          my website.
          <br />I plan to continue to study and delve deeper into the MERN stack
          as well as develop my skills using other tech stacks.
        </>
      ),
    },
    japanese: {
      name: "チャプリン マシュー",
      header: "就活フルスタックエンジニア",
      description: (
        <>
          私は一人でフルスタックエンジニアを勉強しています。
          <br />
          フロントエンドとバックエンドの知識ではレスポンシブウェッブサイトを速く作れると思います。
          <br />
          <br />
          今MERNというスタックではウェッブサイトを作成しています。
          <br />
          これからは他のスタックを学んで、スキルアップを目指しています。
        </>
      ),
    },
  };


  
  return (
    <div className="flex flex-col text-center justify-center items-center scroll-smooth pt-10 lg:-z-10  ">
      

      <div className="text-6xl lg:text-8xl font-light  mb-10">
        {isJapanese ? language.japanese.name : language.english.name}
      </div>
      <div className="text-1xl lg:text-2xl font-extralight mb-10 rounded-full  bg-slate-300 w-auto px-5">
        {isJapanese ? language.japanese.header : language.english.header}
      </div>

      <div className="grid grid-cols-1 lg:flex items-center justify-center lg:gap-20  ">
       
          <div className="">
            <img
              alt="Matthew Chaplin"
              src={myPic}
              className="w-48 h-48 rounded-full mx-auto"
            />
          </div>
        <div className="rounded-full  bg-slate-300 w-auto lg:m-16 m-5 lg:w-1/2 h-auto p-14 text-base md:text-lg lg:text-xl">
        {isJapanese ? language.japanese.description : language.english.description}
        </div>
      </div>
    </div>
  );
};


export default Profile;
