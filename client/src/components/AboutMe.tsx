const AboutMe = ({active} :any) => {
    return (
      <div id="about" className="flex flex-col text-center justify-center items-center pt-32 scroll-smooth md:border-2 md:m-10 md:absolute md:z-10 md:scale-75  md:bg-slate-400 md:border-slate-900  ">
        <p className="text-4xl md:text-6xl font-light  mb-10 underline">
          ABOUT
        </p>
  
    
        <div className="rounded-xl  bg-slate-300  md:w-full h-auto p-5 m-5">
          <p className="text-2xl md:text-3xl font-light mb-5 ">
           WHY PROGRAMMING?
          </p>
  
          <p className="">
           I am always seeking something new to learn, this is why I studied science at university.
           <br/> 
           Although I love science it is hard to self-study and have something to show for it.
           <br/>
           <br/>
           This is where programming comes in. There is always some new technology to learn (or some old one) and it's generally free and open source which amazes me.
           <br/>
           With programming I can improve me skills whenever I have time, automate my job or build something for my friends.
          </p>
        </div>

        <div className="rounded-xl  bg-slate-500  md:w-full h-auto p-5 m-5">
          <p className="text-2xl md:text-3xl font-light mb-5 ">
           HOBBIES
          </p>
  
          <p className="">
          <li>Hiking: Love spending a day in nature</li>
          <li>Bouldering: Great exercise and fun problem solving</li>
          <li>Travel: Always something new to learn from another culture</li>
          <li>Language Learning: Languages are interesting as it can change your outlook on certian thing. (Fluent in Japanese)</li>
          </p>
        </div>

    
  
      </div>
    );
  };
  
  export default AboutMe;
  