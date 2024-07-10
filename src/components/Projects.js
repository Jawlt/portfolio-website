import React, { useState, useRef } from 'react';
import './Projects.css';
import minesweeperImage from './files/minesweeper finish.png';
import spellCheckerImage from './files/spellchecker dark.png';
import spotifyImage from './files/spotify playlist merger.png';
import greenhouseImage from './files/mini greenhouse 0.jpg';
import tempPicture from './files/temp picture.png';

const projects = [
  {
    title: "Minesweeper Game",
    image: minesweeperImage,
    description: "A modern remake of the classic Minesweeper game. The aim is to deliver a polished, user-friendly experience that retains the charm of the original game.",
    github: "https://github.com/Jawlt/Minesweeper"
  },
  {
    title: "SpellChecker App",
    image: spellCheckerImage,
    description: "This project is designed to accurately check and correct spelling in text, featuring an intuitive user interface. The aim is to provide a user-friendly tool for improving written communication.",
    github: "https://github.com/Jawlt/SpellChecker"
  },
  {
    title: "Spotify Playlist Merger",
    image: spotifyImage,
    description: "This project is a Spotify playlist merger developed for house parties. It allows the users to combine multiple guest playlists into one, ensuring a great music experience for all guests. The application uses an easy-to-use interface, making it simple to create the perfect party playlist from various sources.",
    github: "https://github.com/Jawlt/Spotify-Controller"
  },
  {
    title: "Mini Greenhouse",
    image: greenhouseImage,
    description: "This project is designed to help grow all types of plants. It features adjustable parameters, allowing user to control and optimize the growing conditions for various plants. The goal is to replicate various environments.",
    github: "https://github.com/Jawlt/mini-greenhouse"
  },
  {
    title: "TO BE ADDED",
    image: tempPicture,
    description: "This is project is still being developed.",
    github: "https://github.com/Jawlt"
  },
  {
    title: "TO BE ADDED",
    image: tempPicture,
    description: "This is project is still being developed.",
    github: "https://github.com/Jawlt"
  },
];

function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardRefs = useRef([]);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className={`project-card ${expandedCard === index ? 'expanded' : expandedCard !== null ? 'scaled-down' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              {expandedCard === index && (
                <React.Fragment>
                  <h3 className="project-description">{project.description}</h3>
                  <a href={project.github} className="github" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                </React.Fragment>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
