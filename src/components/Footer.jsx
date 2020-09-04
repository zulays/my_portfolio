import React from 'react';
import '../styling/Footer.css';
import linkedin from '../assets/linkedin-contact.png';
import github from '../assets/github-contact.png';
import email from '../assets/send-email-contact.png';

export default function Footer() {
  return (
    <div className="footer">
      <h6 className="copyright-name">Zulay Scottborgh &copy; 2020</h6>
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
