import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Helmet } from "react-helmet";
import { Element } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const light = document.querySelector(".light");

    const handleMouseMove = (e) => {
      if (light) {
        light.style.left = `${e.clientX + window.scrollX}px`;
        light.style.top = `${e.clientY + window.scrollY}px`;
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1080);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <div className="small-screen-message">
          This website is not available on smaller devices. Please use a larger screen to view the content.
        </div>
      ) : (
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
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
