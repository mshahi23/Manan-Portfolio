import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css"

AOS.init();

function App() {
  return (
  <div className="App">
    <Navbar/>
    <Home/>
  </div>
  );
}
export default App;
