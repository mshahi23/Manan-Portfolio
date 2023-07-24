import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
  <div className="App">
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
  </div>
  );
}
export default App;
