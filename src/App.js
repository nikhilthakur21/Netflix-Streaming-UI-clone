import "./App.css";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import Series from "./Components/Series";
import Trending from "./Components/Trending";
import data from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>

      <div className="border-t-4 border-red-500   hero-background">
        <h2 className="text-2xl  ms-4 mt-5 text-white">Trending Now</h2>
        <div className="flex flex-row gap-4 overflow-x-auto  p-4 no-scrollbar ">
          {data.map((val) => (
            <Trending name={val.name} image={val.image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
