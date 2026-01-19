const Movie = (Props) => {
  return (
    <>
      <div className="h-auto max-w-6xl m-auto mt-5">
        <div className="border border-cyan-500 rounded-2xl h-80 w-60 m-auto overflow-hidden shadow-xl shadow-cyan-900/40 hover:scale-105 duration-300 hover:shadow-cyan-500/40">
          <img
            src={Props.img}
            alt={Props.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-3 px-2">
          <h1 className="text-cyan-400 text-xl font-bold tracking-wide drop-shadow-md ">
            {Props.title}
          </h1>

          <h1 className="text-gray-300 text-sm mt-1 font-semibold">
            <span className="text-orange-400 font-bold">IMDb:</span>{" "}
            {Props.rating}
          </h1>
        </div>
      </div>
    </>
  );
};
export default Movie;