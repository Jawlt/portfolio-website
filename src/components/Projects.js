import React, { useState, useRef } from 'react';
import './Projects.css';
import minesweeperImage from './files/minesweeper finish.png';
import spellCheckerImage from './files/spellchecker dark.png';
import spotifyImage from './files/spotify playlist merger.png';
import greenhouseImage from './files/mini greenhouse 0.jpg';
import portfolioWebsiteImage from './files/portfolio website.png';
import simonGamePicture from './files/simon game.png';
import toDoListPicture from './files/todolist.png';
import watchVaultPicture from './files/watchvault.png';
import tempPicture from './files/temp picture.png';

import arduinoIcon from './files/icons/arduino.svg';
import cplusplusIcon from './files/icons/c++.svg';
import cssIcon from './files/icons/css.svg';
import htmlIcon from './files/icons/html.svg';
import javaIcon from './files/icons/java.svg';
import javascriptIcon from './files/icons/javascript.svg';
import nodejsIcon from './files/icons/nodejs.svg'
import expressjsIcon from './files/icons/expressjs.svg'
import jQueryIcon from './files/icons/jquery.svg'
import qtIcon from './files/icons/qt.svg';
import reactIcon from './files/icons/react.svg';
import mongodbIcon from './files/icons/mongodb.svg';
import awss3Icon from './files/icons/aws s3.svg';

const projects = [
  {
    title: "Minesweeper Game",
    image: minesweeperImage,
    description: "A modern remake of the classic Minesweeper game. The aim is to deliver a polished, user-friendly experience that retains the charm of the original game.",
    github: "https://github.com/Jawlt/Minesweeper",
    skills: [
      { name: "C++", icon: cplusplusIcon },
      { name: "Qt", icon: qtIcon }
    ]
  },
  {
    title: "SpellChecker App",
    image: spellCheckerImage,
    description: "This project is designed to accurately check and correct spelling in text, featuring an intuitive user interface. The aim is to provide a user-friendly tool for improving written communication.",
    github: "https://github.com/Jawlt/SpellChecker",
    skills: [
      { name: "Java", icon: javaIcon }
    ]
  },
  {
    title: "Spotify Playlist Merger",
    image: spotifyImage,
    description: "This project is a Spotify playlist merger developed for house parties. It allows the users to combine multiple guest playlists into one, ensuring a great music experience for all guests. The application uses an easy-to-use interface, making it simple to create the perfect party playlist from various sources.",
    github: "https://github.com/Jawlt/Spotify-Controller",
    skills: [
      { name: "C++", icon: cplusplusIcon },
      { name: "Qt", icon: qtIcon }
    ]
  },
  {
    title: "Mini Greenhouse",
    image: greenhouseImage,
    description: "This project is designed to help grow all types of plants. It features adjustable parameters, allowing user to control and optimize the growing conditions for various plants. The goal is to replicate various environments.",
    github: "https://github.com/Jawlt/mini-greenhouse",
    skills: [
      { name: "Arudino", icon: arduinoIcon }
    ]
  },
  {
    title: "Portfolio Website",
    image: portfolioWebsiteImage,
    description: "A website that was developed to showcase my skill as a developer.",
    github: "https://github.com/Jawlt/portfolio-website",
    skills: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "React", icon: reactIcon }
    ]
  },
  {
    title: "Simon Game",
    image: simonGamePicture,
    description: "This mini project was created as a fun introduction to the jQuery JavaScript library.",
    github: "https://github.com/Jawlt/simon-game",
    skills: [
      { name: "HTML", icon: htmlIcon},
      { name: "CSS", icon: cssIcon},
      { name: "JavaScript", icon: javascriptIcon},
      { name: "jQuery", icon: jQueryIcon}
    ]
  },
  {
    title: "ToDo List",
    image: toDoListPicture,
    description: "Mini solo project where I developed a functional day-to-day ToDo List, where the user can have tasks for general purposes or university tasks.",
    github: "https://github.com/Jawlt/ToDoList",
    skills: [
      { name: "HTML", icon: htmlIcon},
      { name: "CSS", icon: cssIcon},
      { name: "JavaScript", icon: javascriptIcon},
      { name: "jQuery", icon: jQueryIcon},
      { name: "Node.js", icon: nodejsIcon},
      { name: "Express.js", icon: expressjsIcon}
    ]
  },
  {
    title: "WatchVault",
    image: watchVaultPicture,
    description: "Solo project where I developed WatchVault, a website for users to track and organize movies, TV shows, and anime, with dynamic data retrieval via APIs, poster storage in AWS S3, and record-keeping in MongoDB.",
    github: "https://github.com/Jawlt",
    skills: [
      { name: "HTML", icon: htmlIcon},
      { name: "CSS", icon: cssIcon},
      { name: "JavaScript", icon: javascriptIcon},
      { name: "jQuery", icon: jQueryIcon},
      { name: "Node.js", icon: nodejsIcon},
      { name: "Express.js", icon: expressjsIcon},
      { name: "MongoDB", icon: mongodbIcon},
      { name: "AWS S3", icon: awss3Icon}
    ]
  },
  {
    title: "TO BE ADDED",
    image: tempPicture,
    description: "This is project is still being developed.",
    github: "https://github.com/Jawlt",
    skills: []
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
            className={`project-card ${expandedCard === index ? 'expanded' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <div className="skills-icons">
                {project.skills.map((skill, i) => (
                  <img key={i} src={skill.icon} alt={skill.name} title={skill.name} className="skill-icon" />
                ))}
              </div>
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
