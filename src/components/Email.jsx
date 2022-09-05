import React from 'react';
import '../styling/Email.css';
import { Button } from 'reactstrap';
import items from '../items.json';

export default function Email(props) {
  return (
    <>
      <h4 className="section-title">emails</h4>
      <div className="content scrollmenu">
        <div className="pb-section" id="one">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="pb-section" id="two">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="pb-section" id="three">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="pb-section" id="four">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>

        <div className="ao-section" id="one">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="ao-section" id="two">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="ao-section" id="three">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="ao-section" id="four">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>

        <div className="sw-section" id="one">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="sw-section" id="two">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="sw-section" id="three">
          <a href="https://github.com/zulays/find-your-center">
            <Button color="outline-secondary" className="project-buttons">
              Code
            </Button>
          </a>
          <img alt={items.altText} src={items.src} top width="100%" />
        </div>
        <div className="sw-section" id="four">
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
}
