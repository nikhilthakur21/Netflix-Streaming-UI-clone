import { NavLink } from "react-router-dom";

const Default =()=>{
    return(

        <>
        
        <div className="text-white border border-white-lg w-auto h-screen bg-[url('/Assets/LostInSpace.jpg')] bg-cover bg-center text-center">


            <h1 className="text-white font-semibold z-20 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide mt-27">
            Lost your way?
          </h1>


          <h1 className="text-white  z-20 text-center text-2xl text-bold  mt-6 mb-5">
            sorry, we can't find that page. You'll find lots to explore on <br />
            the home page.
          </h1>

          <NavLink
                to="/"
                className=" px-6 py-2  border border-black bg-gray-900 text-white rounded-lg hover:bg-red-800 mt-10"
              >
                Home
              </NavLink>
           <h1 className="text-white  z-20 text-center text-2xl text-bold  mt-5">
            <span className="text-red-900">|</span> E R R O R  C O D E  NESE-404
          </h1>
        </div>
        
        </>
    )
}

export default Default