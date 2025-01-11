import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Projects.css';

// Importing Project Images
import minesweeperImage from './files/minesweeper finish.png';
import spellCheckerImage from './files/spellchecker dark.png';
import spotifyImage from './files/spotify playlist merger.png';
import greenhouseImage from './files/mini greenhouse 0.jpg';
import portfolioWebsiteImage from './files/portfolio website.png';
import simonGamePicture from './files/simon game.png';
import toDoListPicture from './files/todolist.png';
import watchVaultPicture from './files/watchvault.png';
import codingMonkeyPicture from './files/codingmonkey.png';
import adventureGamePicture from './files/adventuregame.png';
import fpsDartTagPicture from './files/firstpersondarttag.png';
import localizationToolPicture from './files/localizationtool.png';
import tempPicture from './files/temp picture.png';

// Importing Skills Icons
import arduinoIcon from './files/icons/arduino.svg';
import cplusplusIcon from './files/icons/c++.svg';
import cssIcon from './files/icons/css.svg';
import tailwindcssIcon from './files/icons/tailwindcss.svg';
import htmlIcon from './files/icons/html.svg';
import javaIcon from './files/icons/java.svg';
import javascriptIcon from './files/icons/javascript.svg';
import typescriptIcon from './files/icons/typescript.svg';
import nodejsIcon from './files/icons/nodejs.svg'
import expressjsIcon from './files/icons/expressjs.svg'
import jQueryIcon from './files/icons/jquery.svg'
import qtIcon from './files/icons/qt.svg';
import reactIcon from './files/icons/react.svg';
import mongodbIcon from './files/icons/mongodb.svg';
import awss3Icon from './files/icons/aws s3.svg';
import pythonIcon from './files/icons/python.svg';
import auth0Icon from './files/icons/auth0.svg';
import csharpIcon from './files/icons/csharp.svg';
import unityIcon from './files/icons/unity.svg';

// Image and Skill Icon Mappings
const projectImages = {
    "minesweeperImage": minesweeperImage,
    "spellCheckerImage": spellCheckerImage,
    "spotifyImage": spotifyImage,
    "greenhouseImage": greenhouseImage,
    "portfolioWebsiteImage": portfolioWebsiteImage,
    "simonGamePicture": simonGamePicture,
    "toDoListPicture": toDoListPicture,
    "watchVaultPicture": watchVaultPicture,
    "tempPicture": tempPicture
};

const skillIcons = {
    "Arduino": arduinoIcon,
    "C++": cplusplusIcon,
    "CSS": cssIcon,
    "HTML": htmlIcon,
    "Java": javaIcon,
    "JavaScript": javascriptIcon,
    "Node.js": nodejsIcon,
    "Express.js": expressjsIcon,
    "jQuery": jQueryIcon,
    "Qt": qtIcon,
    "React": reactIcon,
    "MongoDB": mongodbIcon,
    "AWS S3": awss3Icon
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);
    const cardRefs = useRef([]);
    const backendAPI = process.env.REACT_APP_BACKEND_API;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(backendAPI + "/api/projects");
                setProjects(response.data);
                console.log('Projects Fetched:', response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);
const projects = [
  {
    title: "WatchVault",
    image: watchVaultPicture,
    description: "Solo project where I developed WatchVault, a website for users to track and organize movies, TV shows, and anime, with dynamic data retrieval via APIs, poster storage in AWS S3, and record-keeping in MongoDB.",
    github: "https://github.com/Jawlt/WatchVault",
    skills: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "jQuery", icon: jQueryIcon },
      { name: "Node.js", icon: nodejsIcon },
      { name: "Express.js", icon: expressjsIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "AWS S3", icon: awss3Icon }
    ]
  },
  {
    title: "CodingMonkey",
    image: codingMonkeyPicture,
    description: "CodingMonkey gamifies practice with timed challenges, helping users build muscle memory, master syntax, and improve skills while competing on leaderboards.",
    github: "https://github.com/Jawlt/WesternHackGroup",
    skills: [
      { name: "HTML", icon: htmlIcon },
      { name: "Tailwind CSS", icon: tailwindcssIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "React", icon: reactIcon },
      { name: "Node.js", icon: nodejsIcon },
      { name: "Express.js", icon: expressjsIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "Auth0", icon: auth0Icon }
    ]
  },
  {
    title: "2D Adventure Game",
    image: adventureGamePicture,
    description: "A challenging 2D adventure game where players collect and solve puzzles to progress through stages, culminating in a skill-testing boss fight with limited health, dash-based invincibility, and Souls-like mechanics.",
    github: "https://github.com/Jawlt/2DAdventureGame",
    skills: [
      { name: "Unity", icon: unityIcon },
      { name: "C#", icon: csharpIcon }
    ]
  },
  {
    title: "FPS Dart Tag",
    image: fpsDartTagPicture,
    description: "A first-person dart tag game that involves players tagging each other using darts in a dynamic and interactive environment.",
    github: "https://github.com/Jawlt/first-person-dart-tag",
    skills: [
      { name: "Unity", icon: unityIcon },
      { name: "C#", icon: csharpIcon }
    ]
  },
  {
    title: "Localization Tool",
    image: localizationToolPicture,
    description: "A simple localization tool, which helps support multiple languages within a game.",
    github: "https://github.com/Jawlt/LocalizationTool",
    skills: [
      { name: "Unity", icon: unityIcon },
      { name: "C#", icon: csharpIcon }
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
    title: "TCP/UDP Chatroom",
    image: tempPicture,
    description: "Locally hosted TCP/UDP server for clients to chat.",
    github: "https://github.com/Jawlt/TCP-UDP-Chatroom",
    skills: [
      { name: "Python", icon: pythonIcon}
    ]
  },
  {
    title: "ToDo List",
    image: toDoListPicture,
    description: "Mini solo project where I developed a functional day-to-day ToDo List, where the user can have tasks for general purposes or university tasks.",
    github: "https://github.com/Jawlt/ToDoList",
    skills: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "jQuery", icon: jQueryIcon },
      { name: "Node.js", icon: nodejsIcon },
      { name: "Express.js", icon: expressjsIcon }
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
    title: "Mini Greenhouse",
    image: greenhouseImage,
    description: "This project is designed to help grow all types of plants. It features adjustable parameters, allowing user to control and optimize the growing conditions for various plants. The goal is to replicate various environments.",
    github: "https://github.com/Jawlt/mini-greenhouse",
    skills: [
      { name: "Arudino", icon: arduinoIcon }
    ]
  },
  {
    title: "Simon Game",
    image: simonGamePicture,
    description: "This mini project was created as a fun introduction to the jQuery JavaScript library.",
    github: "https://github.com/Jawlt/simon-game",
    skills: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "jQuery", icon: jQueryIcon }
    ]
  },
  {
    title: "TO BE ADDED",
    image: tempPicture,
    description: "This is project is still being developed.",
    github: "https://github.com/Jawlt",
    skills: []
  },
  {
    title: "TO BE ADDED",
    image: tempPicture,
    description: "This is project is still being developed.",
    github: "https://github.com/Jawlt",
    skills: []
  }
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
                        <img 
                            src={projectImages[project.image] || tempPicture} 
                            alt={project.title} 
                            className="project-image" 
                        />
                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <div className="skills-icons">
                                {project.skills.map((skill, i) => (
                                    <img 
                                        key={i} 
                                        src={skillIcons[skill.name]} 
                                        alt={skill.name} 
                                        title={skill.name} 
                                        className="skill-icon" 
                                    />
                                ))}
                            </div>
                            {expandedCard === index && (
                                <React.Fragment>
                                    <h3 className="project-description">{project.description}</h3>
                                    <a href={project.github} className="github" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
