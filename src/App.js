import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Helmet } from "react-helmet";
import { Element } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    const light = document.querySelector(".light");

    const handleMouseMove = (e) => {
      if (light) {
        light.style.left = `${e.clientX + window.scrollX}px`;
        light.style.top = `${e.clientY + window.scrollY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>  
      <div className="container">
        <header id="hex-grid">
          <div className="light"></div>
          <div className="grid"></div>
        </header>
      </div>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jwalant Patel</title>
          <link rel="canonical" href="http://jawlt.ca/" />
          <meta name="description" content="Portfolio Website" />
        </Helmet>
        <Navbar />
        <Element name="home" className="section">
          <Home />
        </Element>
        <Element name="projects" className="section" id="projects">
          <Projects />
        </Element>
      </div>
    </div>
  );
}

export default App;
