import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {Helmet} from "react-helmet";
import {Element} from 'react-scroll';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
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
      <Element name="projects" className="section">
        <Projects />
      </Element>
      <Element name="skills" className="section">
        <Skills />
      </Element>
      <Element name="about" className="section">
        <About />
      </Element>
      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
