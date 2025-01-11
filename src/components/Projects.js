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
import nodejsIcon from './files/icons/nodejs.svg';
import expressjsIcon from './files/icons/expressjs.svg';
import jQueryIcon from './files/icons/jquery.svg';
import qtIcon from './files/icons/qt.svg';
import reactIcon from './files/icons/react.svg';
import mongodbIcon from './files/icons/mongodb.svg';
import awss3Icon from './files/icons/aws s3.svg';
import pythonIcon from './files/icons/python.svg';
import auth0Icon from './files/icons/auth0.svg';
import csharpIcon from './files/icons/csharp.svg';
import unityIcon from './files/icons/unity.svg';

// Image and Skill Icon Mappings Fixed
const projectImages = {
    "minesweeperImage": minesweeperImage,
    "spellCheckerImage": spellCheckerImage,
    "spotifyImage": spotifyImage,
    "greenhouseImage": greenhouseImage,
    "portfolioWebsiteImage": portfolioWebsiteImage,
    "simonGamePicture": simonGamePicture,
    "toDoListPicture": toDoListPicture,
    "watchVaultPicture": watchVaultPicture,
    "codingMonkeyPicture": codingMonkeyPicture,
    "adventureGamePicture": adventureGamePicture,
    "fpsDartTagPicture": fpsDartTagPicture,
    "localizationToolPicture": localizationToolPicture,
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
    "AWS S3": awss3Icon,
    "Python": pythonIcon,
    "Tailwind CSS": tailwindcssIcon,
    "TypeScript": typescriptIcon,
    "Auth0": auth0Icon,
    "C#": csharpIcon,
    "Unity": unityIcon
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);
    const cardRefs = useRef([]);
    const backendAPI = process.env.REACT_APP_BACKEND_API;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                if (!backendAPI) {
                    console.error("Error: Backend API URL is not defined in .env");
                }
                const response = await axios.get(`${backendAPI}/api/projects`);
                setProjects(response.data);
                console.log('Projects Fetched:', response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, [backendAPI]);

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
                                        src={skillIcons[skill.name] || tempPicture} 
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
