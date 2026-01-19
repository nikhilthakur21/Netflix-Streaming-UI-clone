import "./App.css";
import Default from "./Components/Default";
import Foot from "./Components/Foot";
import Home from "./Components/Home";
import MovieGallery from "./Components/MovieGallery";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Series from "./Components/Series";

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<MovieGallery />} />
          <Route path="/series" element={<Series/>}/>
          
          
          <Route path="*" element={<Default/>}/>
        </Routes>
        <Foot/>
      </Router>

    </>
  );
}

export default App;

