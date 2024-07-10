import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Minesweeper Game",
    image: "https://via.placeholder.com/400",
    description: "This is a brief description of Project 1."
  },
  {
    title: "Proof Reading App",
    image: "https://via.placeholder.com/500",
    description: "This is a brief description of Project 2."
  },
  {
    title: "Spotify Guest Playlist Merger",
    image: "https://via.placeholder.com/300",
    description: "This is a brief description of Project 3."
  },
  {
    title: "Mini Greenhouse",
    image: "https://via.placeholder.com/400",
    description: "This is a brief description of Project 4."
  },
  {
    title: "TO BE ADDED",
    image: "https://picsum.photos/400",
    description: "This is a brief description of Project 3."
  },
  {
    title: "TO BE ADDED",
    image: "https://picsum.photos/300",
    description: "This is a brief description of Project 4."
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
            className={`project-card ${expandedCard === index ? 'expanded' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
