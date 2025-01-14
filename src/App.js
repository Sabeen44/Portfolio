
import "./Homepage.css";
import"./Pages.css";
import { React } from "react";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
    
        <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
      </div>
    </Router>
  );
}
