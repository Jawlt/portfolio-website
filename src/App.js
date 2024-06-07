import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jwalant's Portfolio</title>
          <link rel="canonical" href="http://jawlt.ca/"/>
          <meta name="description" content="Portfolio Website"/>
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
