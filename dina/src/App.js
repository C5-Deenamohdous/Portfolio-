import './App.css';
import { Route, Routes} from "react-router-dom"
import Menu from './component/Menu/index';
import Home from './component/Home';
import Contact from './component/Contact';
import Project from './component/Project';
import About from './component/About';
import Main from './component/main';
function App() {
  return (

    <div className="App">
      <Menu/>
      <Main/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>

      </Routes>

    </div>
  
  );
}

export default App;
