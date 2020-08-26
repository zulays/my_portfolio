import React, { useState } from 'react';
import '../styling/Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import icon from '../assets/logo192.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Travel Scout</DropdownItem>
                <DropdownItem>Find Your Center</DropdownItem>
                <DropdownItem>myAlpaca</DropdownItem>
                <DropdownItem>Living La Vida Vegan</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>
                <Link to="#resume">Resume</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="#contact-me">Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <img src={icon} alt="site-icon" className="logo" />
          <NavbarBrand>
            <Link to="/">zulay scottborgh</Link>
          </NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
}
