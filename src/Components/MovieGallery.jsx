import movies from "../JSON/Movie";

import Movie from "./Movie";
const MovieGallery = () => {
  return (
    <>
      <h1 className="text-white text-center text-4xl mt-10 font-bold ">
        <i class="fa-solid fa-film"></i>Movies
      </h1>
      <div className="border mt-9 h-auto md:w-6xl m-auto mt-5 flex flex-wrap gap-3">
        {movies.map((val) => {
          return <Movie title={val.title} rating={val.rating} img={val.img} />;
        })}
      </div>
    </>
  );
};

export default MovieGallery;