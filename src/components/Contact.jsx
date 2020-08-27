import React from 'react';
import '../styling/Contact.css';
import linkedin from '../assets/linkedin-contact.png';
import github from '../assets/github-contact.png';
import email from '../assets/send-email-contact.png';

export default function Contact() {
  return (
    <div className="contact-area" id="contact-me">
      <h4>Zulay Scottborgh &copy; 2020</h4>
      <div className="icon-bar">
        <a href="https://www.linkedin.com/in/zulays/">
          <img src={linkedin} alt="linkedin-icon" className="contact-icons" />
        </a>
        <a href="https://github.com/zulays">
          <img src={github} alt="github-icon" className="contact-icons" />
        </a>
        <a href="mailto:zulay@lifefromabackpack.com">
          <img src={email} alt="email-icon" className="contact-icons" />
        </a>
      </div>
    </div>
  );
}
