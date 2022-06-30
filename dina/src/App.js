import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./component/Menu/index";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Project from "./component/Project";
import About from "./component/About";
import Main from "./component/Main";
function App() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isMain, setIsMain] = useState(false);

  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname === "/home") {
      setIsHome(true);
    }
    if (location.pathname === "/") {
      setIsMain(true);
    }
  }, [location.pathname]);


  return (
    <div
      className="App"
      //  background-color:
      // style={ isHome ? { "background-color:red"} : ""}
    >
      <Menu />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
