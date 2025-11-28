import { NavLink } from "react-router-dom";
import Trending from "./Trending";

const Home = () => {
  return (
    <>
      <div className=" bg-[url('/Assets/himg.jpg')] h-screen bg-cover bg-center bg-blend-multiply bg-black/80 w-auto  border-2 border-black-900">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2  px-30 ">
            <img src="/Assets/Netflix_Logo.png" className="h-20 z-10" alt="" />
          </div>
          <div class="w-full md:w-1/2 ">
            <div className="flex gap-4 p-5 justify-center right-0">
              <NavLink
                to="/"
                className=" px-6 py-2  border border-black bg-red-700 text-white rounded-lg hover:bg-red-800"
              >
                Home
              </NavLink>

              <NavLink
                to="/movie"
                className="px-6 py-2 border border-black bg-red-700 text-white rounded-lg hover:bg-red-800"
              >
                Movie
              </NavLink>

              <NavLink
                to="/series"
                className="px-6 py-2 border border-black bg-red-700 text-white rounded-lg hover:bg-red-800 "
              >
                Series
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex justify-center  items-center  text-center  py-30 flex-col">
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
 

         
    </>
  );
};

export default Home;
