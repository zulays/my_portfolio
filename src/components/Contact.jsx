import React from 'react';
import '../styling/Contact.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/send-email.png';

export default function Contact() {
  return (
    <div>
      <h4>Zulay Scottborgh</h4>
      <img src={linkedin} alt="linkedin-icon" className="contact-icons" />
      <img src={github} alt="github-icon" className="contact-icons" />
      <img src={email} alt="email-icon" className="contact-icons" />
    </div>
  );
}
