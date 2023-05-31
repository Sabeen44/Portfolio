//import logo from "./logo.svg";
import "./App.css";
import { React } from "react";
import { useState, useEffect } from "react";

import About from "./components/About";
import Footer from "./components/Footer";
//import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Resume from "./components/Resume";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
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
        <Header />

        <Routes>
          <Route path="/" element={<About />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
