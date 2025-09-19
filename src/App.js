import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Skills from './components/Skills';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

function App() {
  return (
    <>
      <Navbar /> {/* Render Navbar at the top level */}
      <Hero />
      <About />
      <Education />
      <Internship />
      <Certifications />
      <Projects />
      <Skills />
      <Contact />
      <Copyright />
    </>
  );
}

export default App;