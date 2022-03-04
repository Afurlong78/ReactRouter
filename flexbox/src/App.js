import { Link, Outlet, Router, Routes, Route  } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App () {
  return(
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/About' exact element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;