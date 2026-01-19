import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};
export default Nav;