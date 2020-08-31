import React, { useState } from 'react';
import '../styling/Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import icon from '../assets/initials.png';

export default function Header(props) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="header">
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="mr-auto" navbar>
            <a href="#about">
              <NavItem className="nav-item">about </NavItem>
            </a>

            <a href="#projects">
              <NavItem className="nav-item">projects</NavItem>
            </a>
            {/* <a href="#resume"> */}
            <a
              href="https://docdro.id/DiuBV1n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NavItem className="nav-item">resume</NavItem>
            </a>

            <a href="#contact-me">
              <NavItem className="nav-item">contact</NavItem>
            </a>
          </Nav>
        </Collapse>
      </Navbar>

      <NavbarBrand>
        <a href="/">
          <img src={icon} alt="site-icon" className="logo" />
        </a>
      </NavbarBrand>
    </div>
  );
}
