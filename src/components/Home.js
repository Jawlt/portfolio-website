import React, { useState } from 'react';
import Pdf from './files/Resume.pdf';
import './Home.css';
import {ReactTyped} from 'react-typed';
import emailjs from '@emailjs/browser';

function Home() {
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const emailJsServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const [isContactOpen, setIsContactOpen] = useState(false);

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
                "Aspiring Developer",
                "Designer",
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
        </div>
        <div className="picture-container">
          <div className="picture"><img src="https://picsum.photos/400" alt="Random" /></div>
          <div className="picture-background-1"></div>
          <div className="picture-background-2"></div>
        </div>
        <div className="button-container">
          <div className="resume">
            <a onClick={onResumeClick}>
              <p><i className="far fa-file-alt"></i> Resume</p>
            </a>
          </div>
          <div className="contact">
            <a onClick={onContactClick}>
              <p><i className="far fa-envelope"></i> Contact</p>
            </a>
          </div>
        </div>
      </div>
      {isContactOpen && (
        <div className="contact-popup">
          <div className="contact-form">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
              <input type="text" name="from_name" id="fromName" placeholder="Name" required />
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
