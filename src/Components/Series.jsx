const Series = (Props) => {
  return (
    <>
      <div className="bg-gray-950 min-h-screen px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-2">Top Series</h1>
        <p className="text-gray-300 text-lg">
          Check out these amazing series to binge-watch this weekend!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <div className="h-64 overflow-hidden">
            <img
              src="https://m.media-amazon.com/images/I/917M88Cw97L._AC_UF1000,1000_QL80_.jpg"
              alt="Stranger Things"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white text-xl font-bold">Stranger Things</h2>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-red-500 font-semibold">Episodes:</span> 34
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Thrilling sci-fi mystery</li>
              <li>Set in the 1980s</li>
              <li>Critical acclaim worldwide</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <div className="h-64 overflow-hidden">
            <img
              src="https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
              alt="Money Heist"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white text-xl font-bold">Money Heist</h2>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-red-500 font-semibold">Episodes:</span> 41
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>High-stakes heist drama</li>
              <li>Twists and suspense</li>
              <li>Global fan favorite</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <div className="h-64 overflow-hidden">
            <img
              src="https://m.media-amazon.com/images/M/MV5BOTQzMzNmMzUtODgwNS00YTdhLTg5N2MtOWU1YTc4YWY3NjRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
              alt="The Witcher"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white text-xl font-bold">The Witcher</h2>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-red-500 font-semibold">Episodes:</span> 16
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Fantasy epic adventure</li>
              <li>Action-packed battles</li>
              <li>Stunning visual effects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Series;
