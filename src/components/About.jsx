import React from 'react';
import '../styling/About.css';
import css3 from '../assets/css3.png';
import html5 from '../assets/html5.png';
import database from '../assets/database.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import heroku from '../assets/heroku.png';
import javascript from '../assets/javascript.png';
import json from '../assets/json.png';
import postgresql from '../assets/postgresql.png';
import restApi from '../assets/rest-api.png';
import ruby from '../assets/ruby.png';
import wireframe from '../assets/wireframe.png';
import react from '../assets/react.png';
import photoshop from '../assets/photoshop.png';
import adobeXd from '../assets/adobeXd.png';
import nodeJs from '../assets/nodejs.png';
import rails from '../assets/rails.png';

export default function About() {
  return (
    <div id="about" className="about-me">
      <div>
        <p className="brand-statement">
          I am a versatile Web Developer and Digital Marketing professional who
          leverages my three years of experience in storytelling, Web
          Development, and Marketing Analytics to develop searchable,
          interactive, and user-centric experiences that align the interests of
          the customer with the organization. I seek the opportunity to join an
          agile organization that will help grow as both a developer and a
          well-rounded, collaborative professional.
        </p>

        <div className="skills-container">
          <img src={html5} alt="html-icon" className="skills-icon" />
          <img src={git} alt="git-icon" className="skills-icon" />
          <img src={database} alt="database-icon" className="skills-icon" />
          <img src={heroku} alt="heroku-icon" className="skills-icon" />
          <img src={css3} alt="css-icon" className="skills-icon" />
          <img src={github} alt="github-icon" className="skills-icon" />
          <img src={javascript} alt="javascript-icon" className="skills-icon" />
          <img src={postgresql} alt="postgresql-icon" className="skills-icon" />
          <img src={react} alt="react-icon" className="skills-icon" />
          <img src={restApi} alt="restApi-icon" className="skills-icon" />
          <img src={rails} alt="rails-icon" className="skills-icon" />
          <img src={ruby} alt="ruby-icon" className="skills-icon" />
          <img src={wireframe} alt="wireframe-icon" className="skills-icon" />
          <img src={json} alt="json-icon" className="skills-icon" />
          <img src={photoshop} alt="photoshop-icon" className="skills-icon" />
          <img src={adobeXd} alt="adobeXd-icon" className="skills-icon" />
          <img src={nodeJs} alt="nodejs-icon" className="skills-icon" />
        </div>
      </div>
    </div>
  );
}
