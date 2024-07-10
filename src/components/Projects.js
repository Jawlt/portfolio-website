import React, { useState } from 'react';
import './Projects.css';
import minesweeperImage from './files/minesweeper finish.png'; // Update the path as per your structure
import spellCheckerImage from './files/spellchecker dark.png'; // Add the other images similarly
import spotifyImage from './files/spotify playlist merger.png';
import greenhouseImage from './files/mini greenhouse 0.jpg';

const projects = [
  {
    title: "Minesweeper Game",
    image: minesweeperImage,
    description: "This is a brief description of Project 1."
  },
  {
    title: "SpellChecker App",
    image: spellCheckerImage,
    description: "This is a brief description of Project 2."
  },
  {
    title: "Spotify Guest Playlist Merger",
    image: spotifyImage,
    description: "This is a brief description of Project 3."
  },
  {
    title: "Mini Greenhouse",
    image: greenhouseImage,
    description: "This is a brief description of Project 4."
  },
  {
    title: "TO BE ADDED",
    image: "https://picsum.photos/400",
    description: "This is a brief description of Project 5."
  },
  {
    title: "TO BE ADDED",
    image: "https://picsum.photos/300",
    description: "This is a brief description of Project 6."
  },
];

function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${expandedCard === index ? 'expanded' : expandedCard !== null ? 'scaled-down' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              {expandedCard === index && (
                <p className="project-description">{project.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
