import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <AboutUs />
      <Skills />
      <Projects />
      
      <Contact />
       <Footer />
    </div>
  );
}

export default App;
