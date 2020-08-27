import React from 'react';
import '../styling/Contact.css';
import linkedin from '../assets/linkedin-contact.png';
import github from '../assets/github-contact.png';
import email from '../assets/send-email-contact.png';

export default function Contact() {
  return (
    <div className="contact-area" id="contact-me">
      <h4>Zulay Scottborgh</h4>
      <img src={linkedin} alt="linkedin-icon" className="contact-icons" />
      <img src={github} alt="github-icon" className="contact-icons" />
      <img src={email} alt="email-icon" className="contact-icons" />
    </div>
  );
}
