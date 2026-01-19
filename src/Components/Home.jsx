import { NavLink } from "react-router-dom";
import Trending from "./Trending";
import data from "../JSON/data.js";
import reasons from "../JSON/reasons.js";
import question from "../JSON/Question.js";
import More from "./More";
import Question from "./Question";

const Home = () => {
  return (
    <>

    
      <div className=" bg-[url('/Assets/himg.jpg')] h-screen bg-cover bg-center bg-blend-multiply bg-black/80 w-auto  border-2 border-black-900 -mt-22 ">
        
        <div className="flex justify-center  items-center  text-center  py-50 flex-col">
          <h1 className="text-white font-bold z-20 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide ">
            Unlimited movies, <br />
            shows, and more
          </h1>

          <h2 className="text-white p-3 text-2xl font-bold  ">
            Starts at ₹149. Cancel at any time.
          </h2>

          <h4 className="text-white pt-2 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>

          <div className=" h-auto w-100  flex mt-4 gap-2 flex justify-center  items-center  text-center flex flex-col md:flex-row">
            <input
              type="text"
              class="border px-35 py-4 border-gray-500 rounded text-white placeholder-white bg-gray-900/20 pl-3"
              placeholder="Email address"
            />

            <NavLink
              to="/series"
              className="px-5 py-3  border border-black bg-red-700 text-white text-lg rounded-sm hover:bg-red-800  whitespace-nowrap font-bold"
            >
              Get Started <i class="fa-solid fa-angle-right"></i>
            </NavLink>
          </div>
        </div>
      </div>

      {/**********************************************************************************************************/}

      <div className="border-t-4 border-red-500 hero-background ">
        <div className="px-2 md:px-30">
          <h2 className="text-2xl  ms-2 font-semibold mt-6 text-white ">
            Trending Now
          </h2>
          <div className="flex flex-row gap-4 overflow-x-auto  p-4 no-scrollbar ">
            {data.map((val) => (
              <Trending name={val.name} image={val.image} />
            ))}
          </div>
        </div>
      </div>

      <div className="border border-green mt-7">
        <div className="px-2 md:px-30">
          <h2 className="text-2xl  ms-2 font-semibold mt-5 text-white">
            More reasons to join
          </h2>
          <div className="flex flex-row gap-1 overflow-x-auto  p-4 no-scrollbar ">
            {reasons.map((val) => {
              return <More title={val.title} desc={val.desc} img={val.img} />;
            })}
          </div>
        </div>
      </div>

              

      {/**********************************************************************************************************/}

      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl  ms-2 font-semibold mt-6 mb-4 text-white ">
          Frequently Asked Questions
        </h2>

        {
          question.map((val)=>{

            return(

            <Question
            
            question={val.question}
            answer={val.answer}
            
            
            />
              

            )
          })

        }

       
       
      </div>
      {/**********************************************************************************************************/}

      <div className="flex justify-center  items-center  text-center mt-15 flex-col">
        <h4 className="text-white pt-2 ">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>

        <div className=" h-auto w-100  flex mt-4 gap-2 flex justify-center  items-center  text-center flex flex-col md:flex-row">
          <input
            type="text"
            class="border px-35 py-4 border-gray-500 rounded text-white placeholder-white bg-gray-900/20 pl-3"
            placeholder="Email address"
          />

          <NavLink
            to="/series"
            className="px-5 py-3  border border-black bg-red-700 text-white text-lg rounded-sm hover:bg-red-800  whitespace-nowrap font-bold"
          >
            Get Started <i class="fa-solid fa-angle-right"></i>
          </NavLink>
        </div>
      </div>
      {/*********************************************************************************************************/}
    </>
  );
};

export default Home;
