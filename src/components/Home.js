import React from 'react';
import './Home.css';
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div class="typing-container">
      <h1>
        <ReactTyped strings={["Hello, I'm Jwalant Patel"]} 
        typeSpeed={100} 
        showCursor={false}
        /> 
      </h1>
      <h2>
        <ReactTyped strings={["Computer Science Student", "Aspiring Developer", "Designer"]}
        typeSpeed={50} 
        loop 
        backSpeed={30}
        cursorChar=">"
        showCursor={true}
        /> 
      </h2>
      <h3>
        <ReactTyped strings={["Welcome to my portfolio website. I am passionate about coding and strive to develop simple yet innovative solutions to problems." 
        +" My dedication to creating unique and efficient code drives me to continuously improve in order to make a positive impact through the use of technology."]} 
        typeSpeed={1} 
        showCursor={false}
        />
        </h3>
    </div>
  );
}

export default Home;
