import React, { useState, useEffect } from 'react';
import Pdf from './files/Resume.pdf';
import './Home.css';
import { ReactTyped } from 'react-typed';
import emailjs from '@emailjs/browser';
import profilePicture1 from './files/profile_picture1.png';
import profilePicture2 from './files/profile_picture2.png';
import profilePicture3 from './files/profile_picture3.png';
import profilePicture4 from './files/profile_picture4.png';

export function Home() {
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const emailJsServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [profilePicture1, profilePicture2, profilePicture3, profilePicture4]; // add more later

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // image changes interval

    return () => clearInterval(interval); 
  }, [images.length]);

  const onResumeClick = () => {
    window.open(Pdf);
  };

  const onContactClick = () => {
    setIsContactOpen(true);
  };

  const onCloseContact = () => {
    setIsContactOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");
    emailjs.sendForm(
      emailJsServiceID,
      emailJsTemplateID,
      e.target,
      emailJsPublicKey
    )
    .then((result) => {
      console.log("Email sent successfully:", result.text);
      setIsContactOpen(false); /* closes contact popup */
      alert("Email sent successfully!");
    }, (error) => {
      console.error("Error sending email:", error.text);
      alert("Error sending email.");
    });
  }

  return (
    <div className="home">
      <div className={`home-section ${isContactOpen ? 'blurred' : ''}`}>
        <div className="description">
          <h1>
            <ReactTyped
              strings={["Hey, I'm Jwalant"]}
              typeSpeed={100}
              showCursor={false}
            />
          </h1>
          <h2>
            <ReactTyped
              strings={[
                "Computer Science Student",
                "Software Engineer",
                "Developer",
              ]}
              typeSpeed={50}
              loop
              backSpeed={30}
              cursorChar=">"
              showCursor={true}
            />
          </h2>
          <h3>
            <ReactTyped
              strings={[
                "A passionate coder striving to develop simple yet innovative solutions to problems. Dedicated to creating unique and efficient code through the use of technology.",
              ]}
              typeSpeed={1}
              showCursor={false}
            />
          </h3>
          <div className="button-container">
          <button className="resume" onClick={onResumeClick}>
            <p><i className="far fa-file-alt"></i> Resume</p>
          </button>
          <button className="contact" onClick={onContactClick}>
            <p><i className="far fa-envelope"></i> Contact</p>
          </button>
          <a href="https://linkedin.com/in/jwalant-p" className="linkden" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" ></i></a>
          <a href="https://github.com/Jawlt" className="github" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
        </div>
        <div className="picture-container">
          <div className="picture">
            <img src={images[currentImageIndex]} alt="Profile" />
          </div>
          <div className="picture-background-1"></div>
          <div className="picture-background-2"></div>
        </div>
      </div>
      {isContactOpen && (
        <div className="contact-popup">
          <div className="contact-form">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
              <input type="email" name="email_from" id="emailFrom" placeholder="Email person@example.com" required />
              <textarea name="message" id="message" placeholder="Message" required></textarea>
              <button type="submit">Send <i className="far fa-paper-plane"></i></button>
            </form>
            <button className="close-button" onClick={onCloseContact}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
