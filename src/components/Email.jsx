import React from 'react';
import '../styling/Email.css';
import { Button } from 'reactstrap';
import items from '../items.json';

export default function Email(props) {
  const slides = (items.map => {
    return (
      <>
        <div className="content scrollmenu">
          <div className="section" id="one">
            <a href="https://github.com/zulays/find-your-center">
              <Button color="outline-secondary" className="project-buttons">
                Code
              </Button>
            </a>
            <img alt={items.altText} src={items.src} top width="100%" />
          </div>
          <div className="section" id="two">
            <a href="https://github.com/zulays/find-your-center">
              <Button color="outline-secondary" className="project-buttons">
                Code
              </Button>
            </a>
            <img alt={items.altText} src={items.src} top width="100%" />
          </div>
          <div className="section" id="three">
            <a href="https://github.com/zulays/find-your-center">
              <Button color="outline-secondary" className="project-buttons">
                Code
              </Button>
            </a>
            <img alt={items.altText} src={items.src} top width="100%" />
          </div>
          <div className="section" id="four">
            <a href="https://github.com/zulays/find-your-center">
              <Button color="outline-secondary" className="project-buttons">
                Code
              </Button>
            </a>
            <img alt={items.altText} src={items.src} top width="100%" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {' '}
      <h4 className="section-title">emails</h4>
      {slides}
    </>
  );
}
